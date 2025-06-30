import { useEffect, useState } from 'react';

export default function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setData);
  }, []);

  return (
    <div>
      <h1>👤 Профиль</h1>
      {data ? (
        <div>
          <p>Осколков: {data.shards}</p>
          <button onClick={() => fetch('/api/buy', { method: 'POST' })}>
            Купить осколки
          </button>
        </div>
      ) : <p>Загрузка...</p>}
    </div>
  );
}
