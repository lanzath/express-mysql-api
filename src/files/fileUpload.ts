// Fs ~> file system
import fs from 'fs';

// Exemplo Síncrono de escrita de dados (Utilização de buffer).
fs.readFile('./src/assets/shippo.jpg', (err, buffer) => {
  console.log(err);
  console.log(buffer);

  fs.writeFile('./src/assets/shippo2.jpg', buffer, (err) => console.log('imagem escrita'));
});

// Exemplo de leitura e escrita de dados por stream.
fs
  .createReadStream('./src/assets/shippo.jpg')
  .pipe(fs.createWriteStream('./src/assets/shippo-stream.jpg'))
  .on('finish', () => console.log('imagem escrita'));
