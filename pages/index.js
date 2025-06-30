import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>🎰 Рулетка</h1>
      <button onClick={() => fetch('/api/spin', { method: 'POST' })}>
        Крутить за осколки
      </button>
      <br />
      <Link href="/profile">Профиль</Link>
    </div>
  );
}
