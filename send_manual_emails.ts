import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_Q3HWkAz1_B32bHJ8bwy9dWz6xDaYiJapv";
const resend = new Resend(resendApiKey);

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

const template = (name: string) => `
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

async function sendManual() {
  const emails = ["haydenkellylov@gmail.com"];
  const name = "Applicant";

  console.log("Sending manual confirmation emails...");

  for (const email of emails) {
    try {
      console.log(`Sending to ${email} (CC: submissions@cotidor.com)...`);
      const result = await resend.emails.send({
        from: "Cotidor Records <noreply@cotidor.com>",
        to: [email],
        cc: ["submissions@cotidor.com"],
        subject: "Application Received - Cotidor Portal",
        html: template(name),
        replyTo: "info@cotidor.com",
      });

      if (result.error) {
        console.error(`Error sending to ${email}:`, result.error);
        
        // If it failed because of unverified domain, try with onboarding@resend.dev
        if (result.error.message.includes("domain") || result.error.name === "validation_error") {
            console.log("Attempting fallback with onboarding@resend.dev...");
            const fallbackResult = await resend.emails.send({
                from: "onboarding@resend.dev",
                to: [email],
                cc: ["submissions@cotidor.com"],
                subject: "Application Received - Cotidor Portal (Fallback)",
                html: template(name),
                replyTo: "info@cotidor.com",
            });
            if (fallbackResult.error) {
                console.error(`Fallback also failed for ${email}:`, fallbackResult.error);
            } else {
                console.log(`Fallback success for ${email}:`, fallbackResult.data);
            }
        }
      } else {
        console.log(`Success for ${email}:`, result.data);
      }
    } catch (err) {
      console.error(`Unexpected error for ${email}:`, err);
    }
  }
}

sendManual();
