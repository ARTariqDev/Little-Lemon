import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';
import BookingForm from './BookingForm.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'; // Import HashLink


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
      <Router>
        <div className="App">
          <Header />  {/* Include Header component */}
          <Routes>
            <Route
              path="/"
              element={<Main />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            {/* Add routes for Menu, Reservations, Order, Login if needed */}
          </Routes>
        </div>
      </Router>

      <main>
        <Main id="main"> {/* Assign an ID to the Main component */}
          {/* Your main content goes here */}
        </Main>
        <Specials specials={specialsData} /> {/* Pass specials data to Specials component */}
        <Testimonials id="testimonials"> {/* Assign an ID to the Testimonials component */}
          {/* Your testimonials content goes here */}
        </Testimonials>
      </main>
      <footer style={{backgroundColor: "black"}}>
        <About id="about"> {/* Assign an ID to the About component */}
          {/* Your about content goes here */}
        </About>
        <div style={{backgroundColor: "black", height: "2em",marginTop: "0"}}>
          <p style={{textAlign: "center",color: "white",fontWeight: "Bold",fontSize: "14pt"}}>©Little Lemon 2024</p>
        </div>
      </footer>
    </>
  );
}

export default App;
