import { useParams } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const id = useParams();
  console.log('id', id);
  return (
    <main className='body'>
      Hello World
    </main>
  );
}
