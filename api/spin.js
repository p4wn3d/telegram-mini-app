export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // TODO: логика рулетки
  res.json({ success: true, gift: '🎁 Пример подарка' });
}
