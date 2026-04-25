import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";

// The user provided this key directly
const resend = new Resend("re_Q3HWkAz1_B32bHJ8bwy9dWz6xDaYiJapv");

let lastEmailStatus: any = { status: "no attempts yet" };

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parsing middleware
  app.use(express.json());

  // Debug Route
  app.get("/api/debug-email", (req, res) => {
    res.json(lastEmailStatus);
  });

  // API Route for sending confirmation email
  app.post("/api/send-confirmation", async (req, res) => {
    try {
      const { email, name, type } = req.body;
      
      let subject = "";
      let html = "";
      
      if (type === "contact") {
        subject = "We've received your message - Cotidor Records";
        html = `
          <div style="font-family: sans-serif; color: #000; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            <h2 style="text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #eee; padding-bottom: 10px;">Submission Received</h2>
            <p>Hello ${name},</p>
            <p>Thank you for reaching out to us. Your message has been safely delivered to our inbox. You should receive a response in 1-2 business days.</p>
            <p>If you need to reach us directly, you can contact us through info@cotidor.com, submissions@cotidor.com, or artists@cotidor.com.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Cotidor Records</strong></p>
          </div>
        `;
      } else if (type === "portal") {
        subject = "Application Received - Cotidor Records Portal";
        html = `
          <div style="font-family: sans-serif; color: #000; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            <h2 style="text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #eee; padding-bottom: 10px;">Application Received</h2>
            <p>Hello ${name},</p>
            <p>Thank you for submitting your application through the Cotidor Portal. Our A&R team will review your submission.</p>
            <p>Due to the volume of submissions, we may not be able to reply to everyone, but we review every project.</p>
            <p>If you need to reach us directly, you can contact us through info@cotidor.com, submissions@cotidor.com, or artists@cotidor.com.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Cotidor Records</strong></p>
          </div>
        `;
      } else {
        return res.status(400).json({ error: "Invalid type" });
      }

      console.log(`Attempting to send ${type} confirmation email to ${email}`);

      // Domain verified: Sending from the official email
      const result = await resend.emails.send({
        from: "Cotidor Records <noreply@cotidor.com>",
        to: [email],
        subject: subject,
        html: html,
      });

      lastEmailStatus = {
        timestamp: new Date().toISOString(),
        to: email,
        type: type,
        resendResult: result
      };

      console.log("Resend response:", JSON.stringify(result));

      if (result.error) {
        console.error("Resend error:", result.error);
        return res.status(400).json({ error: result.error });
      }

      res.status(200).json({ success: true, data: result.data });
    } catch (err: any) {
      console.error("Server error:", err);
      lastEmailStatus = {
        timestamp: new Date().toISOString(),
        error: err.message
      };
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
