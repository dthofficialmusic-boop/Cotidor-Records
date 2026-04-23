import fs from 'fs';
import https from 'https';
import http from 'http';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;

    client.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        resolve(downloadFile(response.headers.location, dest));
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

downloadFile('https://drive.google.com/uc?export=download&id=1_OrGVSULz0It-0F873ToWG0-8Nl20dFo', 'src/header-image.png')
  .then(() => console.log('Downloaded successfully'))
  .catch(err => console.error(err));
