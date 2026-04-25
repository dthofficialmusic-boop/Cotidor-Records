import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";
import fs from "fs";

// The user provided this key directly
const resend = new Resend("re_Q3HWkAz1_B32bHJ8bwy9dWz6xDaYiJapv");

function logToFile(data: any) {
  const logEntry = `[${new Date().toISOString()}] ${JSON.stringify(data)}\n`;
  try {
    // Logging to src directory as it is definitely writable in this environment
    fs.appendFileSync(path.join(process.cwd(), "src", "email_debug.log"), logEntry);
  } catch (e) {
    console.error("Log error", e);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Ensure the log file exists immediately
  logToFile({ status: "Server starting" });

  // Use JSON parsing middleware
  app.use(express.json());

  // Test Route to manually trigger an email to the user (for debugging)
  app.get("/api/test-email", async (req, res) => {
    const to = req.query.to as string || "signsnoodles@gmail.com";
    try {
      console.log(`Manual test email trigger to: ${to}`);
      const result = await resend.emails.send({
        from: "noreply@cotidor.com",
        to: [to],
        subject: "Manual Test - Cotidor Records",
        html: "<p>This is a manual test email to verify Resend connectivity.</p>"
      });
      logToFile({ action: "manual-test-result", to, result });
      res.json({ success: true, result });
    } catch (err: any) {
      logToFile({ action: "manual-test-error", to, error: err.message });
      res.status(500).json({ error: err.message });
    }
  });

  // API Route for sending confirmation email
  app.post("/api/send-confirmation", async (req, res) => {
    const { email, name, type } = req.body;
    console.log(`[API] Processing confirmation for: ${email} (type: ${type})`);
    logToFile({ action: "request-received", email, name, type });

    try {
      if (!email) {
        logToFile({ error: "Missing email", body: req.body });
        return res.status(400).json({ error: "Email is required" });
      }
      
      let subject = "";
      let html = "";
      
      if (type === "contact") {
        subject = "Message Received - Cotidor Records";
        html = `
          <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6; border: 1px solid #eee; padding: 40px; border-radius: 8px;">
            <h2 style="text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; color: #000;">Contact Confirmation</h2>
            <p>Hello ${name || 'there'},</p>
            <p>Thank you for reaching out to Cotidor Records. Your message has been safely delivered to our inbox. You should receive a response in 1-2 business days.</p>
            <p>If you need to reach us directly, you can contact us through:</p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>info@cotidor.com</strong></li>
              <li><strong>submissions@cotidor.com</strong></li>
              <li><strong>artists@cotidor.com</strong></li>
            </ul>
            <br/>
            <div style="border-top: 1px solid #eee; pt: 20px; margin-top: 30px;">
              <p style="margin-bottom: 5px;">Best regards,</p>
              <p><strong>Cotidor Records</strong></p>
            </div>
          </div>
        `;
      } else if (type === "portal") {
        subject = "Application Received - Cotidor Portal";
        html = `
          <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6; border: 1px solid #eee; padding: 40px; border-radius: 8px;">
            <h2 style="text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; color: #000;">Portal Application</h2>
            <p>Hello ${name || 'there'},</p>
            <p>Thank you for submitting your application through the Cotidor Portal. Our A&R team will review your submission.</p>
            <p>Due to the volume of submissions, we may not be able to reply to everyone, but we review every project.</p>
            <p>If you need to reach us directly, you can contact us through:</p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>info@cotidor.com</strong></li>
              <li><strong>submissions@cotidor.com</strong></li>
              <li><strong>artists@cotidor.com</strong></li>
            </ul>
            <br/>
            <div style="border-top: 1px solid #eee; pt: 20px; margin-top: 30px;">
              <p style="margin-bottom: 5px;">Best regards,</p>
              <p><strong>Cotidor Records</strong></p>
            </div>
          </div>
        `;
      } else {
        logToFile({ error: "Invalid type", type });
        return res.status(400).json({ error: "Invalid type" });
      }

      console.log(`[RESEND] Attempting to send to ${email}...`);

      const result = await resend.emails.send({
        from: "Cotidor Records <noreply@cotidor.com>",
        to: [email],
        subject: subject,
        html: html,
      });

      console.log("[RESEND] API Result:", JSON.stringify(result));
      logToFile({ action: "resend-result", to: email, result });

      if (result.error) {
        return res.status(400).json({ error: result.error });
      }

      res.status(200).json({ success: true, data: result.data });
    } catch (err: any) {
      console.error("[SERVER ERROR]", err);
      logToFile({ action: "critical-error", error: err.message });
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
