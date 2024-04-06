import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Project from './components/Project';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // State to store data and loading state
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        // Set the fetched data to state
        setData(response.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading state to false after fetching data
        setLoading(false);
      }
    };
    // Call the fetchData function
    fetchData();
  }, []); 

  // Render loading message while data is being fetched
  if (loading) return <Loading/>;

  // Render the app once data is fetched
  return (
    <>
      {/* Render header component */}
      <Header />
      <main>
        {/* Render sections with corresponding components */}
        <section id="hero"><Hero data={data} /></section>
        <section id="about"><About data={data} /></section>
        <section id="services"><Services data={data} /></section>
        <section id="skills"><Skills data={data} /></section>
        <section id="projects"><Project data={data} /></section>
        <section id="timeline"><Timeline data={data} /></section>
        <section id="testimonials"><Testimonials data={data} /></section>
        <section id="contact"><Contact data={data} /></section>
      </main>
      {/* Render footer component */}
      <Footer data={data}/>
    </>
  );
};

export default App;
