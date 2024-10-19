const Tesseract = require('tesseract.js');

Tesseract.recognize(
  'path-to-uploaded-image.jpg',
  'eng',
  { logger: (m) => console.log(m) }
).then(({ data: { text, blocks } }) => {
  console.log(text);  // Extracted text
  console.log(blocks); // Bounding boxes with coordinates of each block of text
});


