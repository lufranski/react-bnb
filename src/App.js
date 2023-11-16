import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const experiences = data.map(
    exp => 
    <Card 
      key={exp.id}
      {...exp}
    />
  );
  return (
    <div>

      <Navbar />
      <Hero />
      <div className='cardContainer'>

        {experiences}
      </div>
    </div>
  );
}

export default App;
