import VisitorEmoji from '../VisitorEmoji';

export default function VisitorList({ visitors }) {
  return (
    <div className='parade'>
      {
        visitors.map((visitor, i) => <VisitorEmoji visitor={visitor} key={visitor + i} />)
      }

    </div>
  );
}