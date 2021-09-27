import fs from 'fs';

const fileUpload = (path: string, fileName: string, imageUploadedCallback: CallableFunction) => {
  const newPath = `./src/assets/images/${fileName}`;

  fs
    .createReadStream(path)
    .pipe(fs.createWriteStream(newPath))
    .on('finish', () => imageUploadedCallback(newPath));
}

export default fileUpload;
