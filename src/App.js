import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';

const specialsData = [
  {
    img: 'greek salad.jpg',
    name: 'Greek Salad',
    price: '12.99',
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
  },
  {
    img: 'restauranfood.jpg', // Replace with your image path
    name: 'Bruchetta',
    price: '5.99',
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
  },
  {
    img: 'lemon dessert.jpg', // Replace with your image path (corrected the filename)
    name: 'Lemon Dessert', // Corrected the name for consistency
    price: '5.00',
    desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

function App() {
  return (
    <>
    <header>
      <Header />
      </header>

    <main>
      <Main />
      <Specials specials={specialsData} /> {/* Pass specials data to Specials component */}
      <Testimonials />
    </main>
    <footer style={{backgroundColor: "black"}}>
       <About />
       <div style={{backgroundColor: "black", height: "2em",marginTop: "0"}}>
      <p style={{textAlign: "center",color: "white",fontWeight: "Bold",fontSize: "14pt"}}>©Little Lemon 2024</p>
      </div>
    </footer>
    </>
  );
}

export default App;
