import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
  onTermsClick?: () => void;
}

export default function PrivacyPolicyPage({ onBack, onTermsClick }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 flex flex-col">
      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-6 h-16 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Cotidor
        </button>
        <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor Logo" className="h-6 w-auto grayscale opacity-50" />
      </nav>

      <main className="flex-grow pt-24 pb-20 px-6">
        <article className="max-w-3xl mx-auto space-y-12">
          <header className="border-b border-slate-200 pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">Privacy Policy</h1>
            <p className="text-sm text-slate-500 font-medium">Last Updated: June 4, 2025</p>
          </header>

          <div className="space-y-8 text-[15px] leading-relaxed text-slate-700">
            <p className="italic bg-slate-50 p-4 border-l-4 border-slate-300">
              Cotidor Records (together with its parent company, Ryzer Music Group LLC, "we," "us," "our," or "the Company") operates the website [www.cotidor.com] (the "Site"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our Site, submit music, contact us, or interact with our services.
            </p>

            <p>
              We are committed to transparency and protecting your data. By using our Site, you agree to the terms of this Privacy Policy.
            </p>

            {/* SECTION 1 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">1. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Site, including:</p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">A. Information You Provide Directly</h3>
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 text-left">Category</th>
                      <th className="border border-slate-200 p-3 text-left">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Contact Information</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Name, email address, phone number (if provided)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Artist Submission Data</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Artist/project name, music links (SoundCloud, Spotify, YouTube, etc.), biography, social media handles, genre, and any additional information included in your submission</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Communication Records</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Emails sent to info@cotidor.com, messages through our contact forms, and any correspondence with our team</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Inquiry Information</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Questions, feedback, or requests submitted to us</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">B. Information Collected Automatically</h3>
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 text-left">Data Type</th>
                      <th className="border border-slate-200 p-3 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Usage Data</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Pages visited, time spent, links clicked, search queries</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Device Data</td>
                      <td className="border border-slate-200 p-3 text-slate-600">IP address, browser type, operating system, device type</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Location Data</td>
                      <td className="border border-slate-200 p-3 text-slate-600">General geographic location derived from IP address (city/region level)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Referral Data</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Website you came from or links you clicked to reach us</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">C. Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remember your preferences</li>
                  <li>Analyze Site traffic and usage patterns</li>
                  <li>Improve user experience</li>
                </ul>
                <p className="text-slate-600">You can control cookies through your browser settings. Disabling cookies may affect some Site functionality.</p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">2. How We Use Your Information</h2>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left">Purpose</th>
                    <th className="border border-slate-200 p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Review Submissions</td>
                    <td className="border border-slate-200 p-3 text-slate-600">To evaluate music submissions for potential signing or collaboration</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Respond to Inquiries</td>
                    <td className="border border-slate-200 p-3 text-slate-600">To answer emails sent to info@cotidor.com and contact form submissions</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Operate the Site</td>
                    <td className="border border-slate-200 p-3 text-slate-600">To maintain, secure, and improve our website</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Communication</td>
                    <td className="border border-slate-200 p-3 text-slate-600">To notify you about updates, opportunities, or respond to your requests</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Legal Compliance</td>
                    <td className="border border-slate-200 p-3 text-slate-600">To comply with applicable laws, regulations, and legal processes</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 3 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">3. Legal Basis for Processing</h2>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left">Basis</th>
                    <th className="border border-slate-200 p-3 text-left">When Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Consent</td>
                    <td className="border border-slate-200 p-3 text-slate-600">When you voluntarily submit information through our forms or portal</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Legitimate Interests</td>
                    <td className="border border-slate-200 p-3 text-slate-600">To operate our business, review submissions, and communicate with potential artists</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Legal Obligation</td>
                    <td className="border border-slate-200 p-3 text-slate-600">When required by law or regulation</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Contractual Necessity</td>
                    <td className="border border-slate-200 p-3 text-slate-600">If you become a signed artist and we enter into an agreement</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 4 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">4. How We Share Your Information</h2>
              <p>We do not sell your personal information. We may share your information only in the following limited circumstances:</p>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">A. Service Providers</h3>
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 text-left">Provider Type</th>
                      <th className="border border-slate-200 p-3 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Website Hosting</td>
                      <td className="border border-slate-200 p-3 text-slate-600">To host and serve our Site</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Analytics Providers</td>
                      <td className="border border-slate-200 p-3 text-slate-600">To understand Site traffic and user behavior</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Email Services</td>
                      <td className="border border-slate-200 p-3 text-slate-600">To manage communications</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Submission Portal</td>
                      <td className="border border-slate-200 p-3 text-slate-600">To process and store artist submissions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">B. Legal Requirements</h3>
                <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
              </div>
            </section>

            {/* SECTION 5 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">5. Data Retention</h2>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left">Data Type</th>
                    <th className="border border-slate-200 p-3 text-left">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Artist Submissions</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Up to 12 months unless you become a signed artist</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Inquiry Emails</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Up to 12 months after last contact</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Usage Data</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Up to 12 months for analytics purposes</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 6 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">6. Data Security</h2>
              <p>We take data security seriously. We implement reasonable administrative, technical, and physical safeguards to protect your information, including encrypted connections (SSL/TLS) for data transmission and restricted access to platforms.</p>
            </section>

            {/* SECTION 7 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">7. Your Rights and Choices</h2>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left">Right</th>
                    <th className="border border-slate-200 p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Access</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Request a copy of the personal information we hold about you</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Deletion</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Request deletion of your personal information (subject to legal exceptions)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Opt-Out</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Unsubscribe from promotional emails via "unsubscribe" link</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold">How to Exercise Your Rights: Contact us at: info@cotidor.com</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">8. Children's Privacy</h2>
              <p>Our Site and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">9. International Data Transfers</h2>
              <p>We are based in the United States. If you access our Site from outside the United States, your information may be transferred to, stored, and processed in the United States.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">10. Third-Party Links</h2>
              <p>Our Site may contain links to third-party websites (Spotify, SoundCloud, etc.). We are not responsible for the privacy practices or content of these third-party sites.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">11. Do Not Track Signals</h2>
              <p>Our Site does not currently respond to "Do Not Track" (DNT) signals from web browsers.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">12. Changes to This Privacy Policy</h2>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left">Type of Change</th>
                    <th className="border border-slate-200 p-3 text-left">Notification Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Minor Updates</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Updated "Last Updated" date at the top of this page</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Material Changes</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Prominent notice on our Site and/or email notification</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">13. Contact Information</h2>
              <div className="bg-slate-50 p-6 space-y-4 border border-slate-200">
                <div>
                  <p className="font-bold">Email:</p>
                  <a href="mailto:info@cotidor.com" className="text-slate-600 hover:text-black transition-colors underline">info@cotidor.com</a>
                </div>
                <div>
                  <p className="font-bold">Mail:</p>
                  <p className="text-slate-600">
                    Cotidor Records c/o Ryzer Music Group LLC<br />
                    5031 SW 199th Ave<br />
                    Southwest Ranches, Florida 33332<br />
                    United States
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 pt-8 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-950">14. Entire Agreement</h2>
              <p>This Privacy Policy constitutes the entire agreement between you and Cotidor Records / Ryzer Music Group LLC regarding the collection and use of your personal information.</p>
            </section>
          </div>
        </article>
      </main>

      <footer className="py-8 bg-slate-50 border-t border-slate-200 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          <div className="flex gap-6">
            <span>© 2026 COTIDOR RECORDS</span>
            <button 
              onClick={onTermsClick}
              className="hover:text-slate-900 transition-colors underline underline-offset-4"
            >
              Terms of Use
            </button>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-4 w-auto grayscale opacity-20" />
          <span>RYZER MUSIC GROUP LLC</span>
        </div>
      </footer>
    </div>
  );
}

