// import react from 'react';

export default function VisitorEmoji({ visitor }) {
  return (
    <div>
      {visitor === 'woman' && '🚶‍♀️'}
      {visitor === 'man' && '🚶🏼‍♂️'}
      {visitor === 'standing' && '🧍‍♀️'}
      {visitor === 'couple' && '🧑🏾‍🤝‍🧑🏾'}
    </div>
  );
}
