import https from 'https';

const urls = [
  'https://storage.googleapis.com/forcotidorrecords/black%20logo.png',
  'https://storage.googleapis.com/forcotidorrecords/Black%20logo.png',
  'https://storage.googleapis.com/forcotidorrecords/black%20logo.PNG',
  'https://storage.googleapis.com/forcotidorrecords/Black%20Logo.png',
  'https://storage.googleapis.com/forcotidorrecords/black_logo.png',
  'https://storage.googleapis.com/forcotidorrecords/chromatic%20logo.png',
  'https://storage.googleapis.com/forcotidorrecords/Chromatic%20logo.png',
  'https://storage.googleapis.com/forcotidorrecords/Chromatic%20Logo.png',
  'https://storage.googleapis.com/forcotidorrecords/chromatic_logo.png',
  'https://storage.googleapis.com/forcotidorrecords/black.png',
  'https://storage.googleapis.com/forcotidorrecords/chromatic.png'
];

async function check() {
  for (const url of urls) {
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          console.log('FOUND:', url);
        }
        resolve();
      });
    });
  }
}
check();
