export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // TODO: логика покупки осколков
  res.json({ success: true });
}
