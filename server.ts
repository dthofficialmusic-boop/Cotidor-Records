import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";

// The user provided this key directly
const resend = new Resend("re_Q3HWkAz1_B32bHJ8bwy9dWz6xDaYiJapv");

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parsing middleware
  app.use(express.json());

  // API Route for sending confirmation email
  app.post("/api/send-confirmation", async (req, res) => {
    try {
      const { email, name, type } = req.body;
      
      let subject = "";
      let html = "";
      
      if (type === "contact") {
        subject = "We've received your message - Cotidor Records";
        html = `
          <div style="font-family: monospace; color: #000; max-width: 600px; margin: 0 auto;">
            <h2>submission received.</h2>
            <p>hello ${name},</p>
            <p>thank you for reaching out to us. your message has been safely delivered to our inbox. you should receive a response in 1-2 business days.</p>
            <br/>
            <p>best regards,</p>
            <p><strong>cotidor records</strong></p>
          </div>
        `;
      } else if (type === "portal") {
        subject = "Application Received - Cotidor Records Portal";
        html = `
          <div style="font-family: monospace; color: #000; max-width: 600px; margin: 0 auto;">
            <h2>application received.</h2>
            <p>hello ${name},</p>
            <p>thank you for submitting your application through the cotidor portal. our A&R team will review your submission.</p>
            <p>due to the volume of submissions, we may not be able to reply to everyone, but we review every project.</p>
            <br/>
            <p>best regards,</p>
            <p><strong>cotidor records</strong></p>
          </div>
        `;
      } else {
        return res.status(400).json({ error: "Invalid type" });
      }

      // Using a generic sender email. In production with Resend, you'd need a verified domain like noreply@cotidor.com.
      // Resend allows sending FROM onboarding@resend.dev to the verified email address on the free tier without a domain.
      const { data, error } = await resend.emails.send({
        from: "Cotidor Records <onboarding@resend.dev>",
        to: [email],
        subject: subject,
        html: html,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(400).json({ error });
      }

      res.status(200).json({ success: true, data });
    } catch (err: any) {
      console.error("Server error:", err);
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
