import React from 'react';

// You can replace this URL with the actual link to your PDF file (e.g., a Google Drive link, AWS S3 link, or a file uploaded to your public folder)
const PDF_URL = "https://storage.googleapis.com/forcotidorrecords/Cotidor_Records_Artist_Services_Understanding.pdf";

export default function PdfViewerPage() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden m-0 p-0">
      <iframe
        src={`${PDF_URL}#toolbar=0`}
        className="w-full h-full border-none m-0 p-0"
        title="PDF Document"
      />
    </div>
  );
}
