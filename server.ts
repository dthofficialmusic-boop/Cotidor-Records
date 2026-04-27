import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";

// AI Studio automatically injects this at runtime from user secrets.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : new Resend("re_Q3HWkAz1_B32bHJ8bwy9dWz6xDaYiJapv");

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parsing middleware
  app.use(express.json());

  // API Route for sending confirmation email
  app.post("/api/send-confirmation", async (req, res) => {
    console.log("--- Confirmation Email Request ---");
    console.log("Body:", JSON.stringify(req.body, null, 2));
    const { email, name, type } = req.body;

    try {
      if (!email) {
        console.error("Error: Email is missing in request body");
        return res.status(400).json({ error: "Email is required" });
      }
      
      let subject = "";
      let html = "";
      
      const commonStyles = `
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #000000;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
        padding: 60px 40px;
        background-color: #ffffff;
      `;

      const headerStyles = `
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        border-bottom: 2px solid #000000;
        padding-bottom: 20px;
        margin-bottom: 40px;
      `;

      const footerStyles = `
        margin-top: 60px;
        padding-top: 30px;
        border-top: 1px solid #f0f0f0;
        font-size: 13px;
        color: #666666;
      `;

      if (type === "contact") {
        subject = "Message Received - Cotidor Records";
        html = `
          <div style="${commonStyles}">
            <div style="${headerStyles}">Cotidor Records</div>
            <p style="margin-bottom: 25px;">Hello ${name || 'there'},</p>
            <p style="margin-bottom: 25px;">Thank you for reaching out. Your message has been received by our team and is currently being processed.</p>
            <p style="margin-bottom: 25px;">We aim to respond to all inquiries within 1-2 business days.</p>
            
            <p style="margin-bottom: 15px; font-style: italic; color: #666;">Please do not reply to this email. For any further communication, please use the following addresses:</p>
            <p style="margin: 0;"><strong>info@cotidor.com</strong></p>
            <p style="margin: 0;"><strong>submissions@cotidor.com</strong></p>
            <p style="margin: 0;"><strong>artists@cotidor.com</strong></p>
            
            <p style="margin-top: 40px; margin-bottom: 0;">Kind regards,</p>
            <p style="margin: 0;"><strong>Cotidor Records Support Team</strong></p>
            
            <div style="${footerStyles}">
              <p style="margin: 0;">Cotidor Records</p>
            </div>
          </div>
        `;
      } else if (type === "portal") {
        subject = "Application Received - Cotidor Portal";
        html = `
          <div style="${commonStyles}">
            <div style="${headerStyles}">Cotidor Records</div>
            <p style="margin-bottom: 25px;">Hello ${name || 'there'},</p>
            <p style="margin-bottom: 25px;">Your application has been received by our team through the official Cotidor Portal.</p>
            <p style="margin-bottom: 25px;">Our A&R department reviews every submission carefully. Our team will get in touch with you within 2 weeks of your application.</p>
            
            <p style="margin-bottom: 15px; font-style: italic; color: #666;">Please do not reply to this email. ANY INQUIRIES REGARDING YOUR APPLICATION SHOULD BE SENT TO:</p>
            <p style="margin: 0;"><strong>submissions@cotidor.com</strong></p>
            <p style="margin: 0;"><strong>info@cotidor.com</strong></p>
            <p style="margin: 0;"><strong>artists@cotidor.com</strong></p>
            <p style="margin-top: 15px; font-size: 13px;">Or by submitting a request form at our contact section.</p>
 
            <p style="margin-top: 40px; margin-bottom: 0;">Kind regards,</p>
            <p style="margin: 0;"><strong>Cotidor Records Talent Management</strong></p>
            
            <div style="${footerStyles}">
              <p style="margin: 0;">Cotidor Records</p>
              <p style="margin: 5px 0 0 0;">A&R Division</p>
            </div>
          </div>
        `;
      } else {
        console.error("Error: Invalid type", type);
        return res.status(400).json({ error: "Invalid type" });
      }

      console.log("Sending email to Resend...");
      
      const emailPayload: any = {
        from: "Cotidor Records <noreply@cotidor.com>",
        to: [email],
        replyTo: "info@cotidor.com",
        subject: subject,
        html: html,
      };

      // Add CC if logic matches
      const ccAddresses = type === "portal" ? ["submissions@cotidor.com"] : type === "contact" ? ["info@cotidor.com"] : [];
      
      // Filter out CC addresses that are the same as the TO address to avoid Resend errors
      const filteredCC = ccAddresses.filter(addr => addr.toLowerCase() !== email.toLowerCase());
      
      if (filteredCC.length > 0) {
        emailPayload.cc = filteredCC;
      }

      const result = await resend.emails.send(emailPayload);

      if (result.error) {
        console.error("Resend API Error:", JSON.stringify(result.error, null, 2));
        return res.status(400).json({ error: result.error });
      }

      console.log("Resend Success Response:", JSON.stringify(result.data, null, 2));
      res.status(200).json({ success: true, data: result.data });
    } catch (err: any) {
      console.error("Unexpected Server Error in send-confirmation:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Support client-side routing in Express v4
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
