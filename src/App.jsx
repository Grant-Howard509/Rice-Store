import './index.css'
import React, { useEffect, useRef, useState } from 'react';
import  { NavBar } from './Components/NavBar'
import Home  from './Components/Home'
import { Shop } from './Components/Shop'
import { Route, Routes} from 'react-router-dom'


export default function App() {
  const [color, setColor] = useState('text-white');
  const homeRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      threshold: [0.03],
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          setColor('text-black');
        }else {
          setColor('text-white')
;        }
      });
    }, options);

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    }
  }, []);

  return (
    <div className='relative bg-black' id='wrapper'>
      <NavBar color={color}/>

      <Routes>
        <Route path='/' element={<Home ref={homeRef}/>} />
        <Route path='/shop' element={<Shop />} />
      </Routes>

      <section className='bg-white h-screen w-full p-50' id='test-section'></section>
    </div>
  )
}

