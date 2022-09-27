import { useParams } from 'react-router-dom';
import './Home.css';

export default function Home({ red, green, blue }) {
  const id = useParams();
  return (
    <main style={{ backgroundColor: `rgb(${id.red}, ${id.green}, ${id.blue})` }} >
      <div>
        rgb({id.red}, {id.green}, {id.blue})
      </div>
    </main>
  );
}
