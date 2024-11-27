car-rental-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── CarCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Cars.js
│   │   └── Booking.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── tailwind.config.js


---

2. Setting Up the Project

1. Initialize a React App:

npx create-react-app car-rental-app
cd car-rental-app
npm install react-router-dom@6 tailwindcss postcss autoprefixer
npx tailwindcss init -p


2. Configure Tailwind in tailwind.config.js:

module.exports = {
  content: ["./src/*/.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


3. Import Tailwind in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;




---

3. Code for Components and Pages


---

App.js

Handles routing and layout.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


---

Navbar.js

Responsive navigation bar.

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">CarRental</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/cars" className="text-white">Cars</Link>
          </li>
          <li>
            <Link to="/booking" className="text-white">Booking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


---

Footer.js

Simple footer component.

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      &copy; 2024 CarRental. All rights reserved.
    </footer>
  );
}

export default Footer;


---

CarCard.js

Reusable car card component.

import React from 'react';

function CarCard({ car }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-2">{car.name}</h2>
      <p className="text-gray-600">{car.description}</p>
      <p className="text-blue-500 font-bold mt-2">${car.price}/day</p>
    </div>
  );
}

export default CarCard;


---

Home.js

Home page component.

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to CarRental</h1>
      <p className="mt-4 text-gray-600">
        Find the perfect car for your next adventure!
      </p>
      <Link to="/cars" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded">
        View Cars
      </Link>
    </div>
  );
}

export default Home;


---

Cars.js

Car listing page.

import React from 'react';
import CarCard from '../components/CarCard';

const carList = [
  {
    name: 'Sedan',
    description: 'A comfortable sedan for city drives.',
    price: 50,
    image: 'https://via.placeholder.com/400x200',
  },
  {
    name: 'SUV',
    description: 'A spacious SUV for family trips.',
    price: 80,
    image: 'https://via.placeholder.com/400x200',
  },
];

function Cars() {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {carList.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}

export default Cars;


---

Booking.js

Booking form page.

import React from 'react';

function Booking() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold">Book Your Car</h1>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-gray-700">Car</label>
          <select className="border p-2 w-full">
            <option>Sedan</option>
            <option>SUV</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

