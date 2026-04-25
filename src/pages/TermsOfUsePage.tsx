import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfUsePageProps {
  onBack: () => void;
  onPrivacyClick?: () => void;
}

export default function TermsOfUsePage({ onBack, onPrivacyClick }: TermsOfUsePageProps) {
  return (
    <div className="min-h-[100dvh] bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 flex flex-col">
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
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">Terms of Use</h1>
            <p className="text-sm text-slate-500 font-medium">Last Updated: June 4, 2025</p>
          </header>

          <div className="space-y-8 text-[15px] leading-relaxed text-slate-700">
            <p className="italic bg-slate-50 p-4 border-l-4 border-slate-300">
              Welcome to Cotidor Records ("we," "us," "our," or "the Company"), a division of Ryzer Music Group LLC. By accessing or using our website at www.cotidor.com (the "Site"), you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Site.
            </p>

            {/* SECTION 1 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">1. Acceptance of Terms</h2>
              <p>
                By using this Site, you represent that you are at least 13 years of age (or the age of digital consent in your jurisdiction). If you are under 18, you represent that you have permission from a parent or legal guardian to use this Site.
              </p>
              <p>
                These Terms apply to all users of the Site, including visitors, artists, and anyone who submits music or contacts us through the Site.
              </p>
            </section>

            {/* SECTION 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">2. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. The "Last Updated" date at the top of this page indicates when changes were made.
              </p>
              <p>
                Your continued use of the Site after any changes constitutes your acceptance of the new Terms. If you do not agree to the changes, you must stop using the Site.
              </p>
            </section>

            {/* SECTION 3 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">3. Use of the Site</h2>
              <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left w-1/3">Prohibited Activity</th>
                    <th className="border border-slate-200 p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Violate Laws</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Use the Site in violation of any local, state, federal, or international law</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Infringe Rights</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Upload, post, or transmit any content that infringes any copyright, trademark, or other intellectual property right</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Submit Unauthorized Material</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Submit music or content that you do not own or have permission to share</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Harass or Abuse</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Use the Site to harass, threaten, or abuse others</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Interfere with Operations</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Attempt to hack, disrupt, or damage the Site or its servers</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Scrape or Crawl</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Use bots, scrapers, or other automated methods to access the Site without our permission</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Impersonate</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Pretend to be someone else or provide false information</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-slate-600">Violation of these rules may result in immediate termination of your access to the Site and, where applicable, rejection of your submission.</p>
            </section>

            {/* SECTION 4 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">4. Artist Submissions</h2>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 italic">4.1 Submission Portal</h3>
                <p>Our Site includes a submission portal for artists to submit music for consideration. By submitting music through our portal, you agree to the following:</p>
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 p-3 text-left w-1/3">Condition</th>
                      <th className="border border-slate-200 p-3 text-left">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">You Own Your Work</td>
                      <td className="border border-slate-200 p-3 text-slate-600">You represent and warrant that you own 100% of the rights to any music, lyrics, recordings, and other content you submit</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">No Third-Party Claims</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Your submission does not infringe on the copyright, trademark, publicity, privacy, or other rights of any third party</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">No Samples Without Clearance</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Your submission contains no unauthorized samples unless you have obtained written permission</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3 font-medium">Evaluation Only</td>
                      <td className="border border-slate-200 p-3 text-slate-600">Submitting music does not create any obligation for us to sign you or respond to you</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 italic">4.2 No Payment for Submissions</h3>
                <p>We do not charge any fees to submit music. If anyone asks you to pay for a submission to Cotidor Records, it is a scam. Please report it to info@cotidor.com.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 italic">4.3 No Guarantee of Response</h3>
                <p>While we strive to respond to all submissions within a reasonable time, we do not guarantee a response to every submission.</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 italic">4.4 Unsolicited Ideas</h3>
                <p>We do not accept unsolicited ideas, demos, or materials outside of our official submission portal. Any unsolicited materials sent to us via email or mail will become our property and may be used without compensation to you.</p>
              </div>
            </section>

            {/* SECTION 5 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">5. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 italic">5.1 Our Content</h3>
                <p>All content on this Site that is created by us is the property of Cotidor Records or Ryzer Music Group LLC and is protected by United States and international copyright, trademark, and other intellectual property laws.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Copy, reproduce, distribute, or modify any of our content without our prior written consent</li>
                  <li>Use our logos, name, or trademarks without permission</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 italic">5.2 Your Content</h3>
                <p>You retain ownership of any music or content you submit to us. You grant us a limited, non-exclusive, royalty-free license to store, host, and access your submission for evaluation purposes.</p>
              </div>
            </section>

            {/* SECTION 6 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">6. Third-Party Links</h2>
              <p>Our Site may contain links to third-party websites (Spotify, SoundCloud, etc.). We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites.</p>
            </section>

            {/* SECTION 7 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">7. Disclaimer of Warranties</h2>
              <p>Your use of this Site is at your sole risk. The Site is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left w-1/3">Warranty</th>
                    <th className="border border-slate-200 p-3 text-left">Disclaimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Merchantability</td>
                    <td className="border border-slate-200 p-3 text-slate-600">The Site will not meet your expectations or needs</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Non-Infringement</td>
                    <td className="border border-slate-200 p-3 text-slate-600">The Site will not violate any third-party rights</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Availability</td>
                    <td className="border border-slate-200 p-3 text-slate-600">The Site will be uninterrupted, secure, or error-free</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 8 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">8. Limitation of Liability</h2>
              <p>Neither Cotidor Records, Ryzer Music Group LLC, nor their affiliates shall be liable for any damages arising out of your use of the Site.</p>
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left w-1/3">Type of Damages</th>
                    <th className="border border-slate-200 p-3 text-left">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Direct Damages</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Lost profits, lost revenue, lost data</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 font-medium">Indirect Damages</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Loss of goodwill, business interruption</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold italic">Our total liability to you shall not exceed $100 USD.</p>
            </section>

            {/* SECTION 9 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">9. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Cotidor Records and Ryzer Music Group LLC from and against any claims arising out of your use of the Site or violation of these Terms.</p>
            </section>

            {/* SECTION 10 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">10. No Artist-Label Relationship</h2>
              <p>Use of this Site or submission of music does not create an artist-label relationship. This can only be created by a separate, written agreement signed by both parties.</p>
            </section>

            {/* SECTION 11 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">11. Termination</h2>
              <p>We reserve the right, without notice and in our sole discretion, to terminate your access to the Site for any reason, including violation of these Terms.</p>
            </section>

            {/* SECTION 12 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">12. Governing Law and Dispute Resolution</h2>
              <p>These Terms shall be governed by the laws of the State of Florida. Any legal action shall be brought exclusively in the courts located in Broward County, Florida.</p>
              <p className="font-semibold italic">You waive the right to bring or participate in any class action against us.</p>
            </section>

            {/* SECTION 13 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">13. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable, that provision shall be limited or eliminated to the minimum extent necessary.</p>
            </section>

            {/* SECTION 14 */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-950 border-b border-slate-100 pb-2">16. Contact Information</h2>
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
              <h2 className="text-lg font-bold text-slate-950 uppercase italic tracking-tighter">End of Terms of Use</h2>
            </section>
          </div>
        </article>
      </main>

      <footer className="py-8 bg-slate-50 border-t border-slate-200 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
          <div className="flex gap-6">
            <span>© 2026 COTIDOR RECORDS</span>
            <button 
              onClick={onPrivacyClick}
              className="hover:text-slate-900 transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </button>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-4 w-auto grayscale opacity-20" />
          <span>RYZER MUSIC GROUP LLC</span>
        </div>
      </footer>
    </div>
  );
}
