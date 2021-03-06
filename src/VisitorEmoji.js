// import react from 'react';

export default function VisitorEmoji({ visitor }) {
  return (
    <div>
      {visitor === 'woman' && 'πΆββοΈ'}
      {visitor === 'man' && 'πΆπΌββοΈ'}
      {visitor === 'standing' && 'π§ββοΈ'}
      {visitor === 'couple' && 'π§πΎβπ€βπ§πΎ'}
    </div>
  );
}
