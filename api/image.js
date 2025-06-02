export default function handler(req, res) {
  const width = req.query.width || 300;
  const height = req.query.height || 300;
  const imageUrl = `https://picsum.photos/${width}/${height}`;

  res.status(200).json({
    message: 'Random image generated successfully!',
    imageUrl,
  });
}
