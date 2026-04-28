import React from 'react';

const PDF_URL = "https://storage.googleapis.com/forcotidorrecords/(NEW)Cotidor_Records_Artist_Services_Understanding.pdf";
const GOOGLE_VIEWER_URL = `https://docs.google.com/gview?url=${encodeURIComponent(PDF_URL)}&embedded=true`;

export default function PdfViewerPage() {
  return (
    <div className="w-full h-screen bg-[#ececec] overflow-hidden m-0 p-0" style={{ WebkitOverflowScrolling: 'touch' }}>
      <iframe
        src={GOOGLE_VIEWER_URL}
        className="w-full h-full border-none m-0 p-0"
        title="PDF Document"
      />
    </div>
  );
}
