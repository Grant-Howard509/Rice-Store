import './index.css'
import React, { useEffect, useRef, useState } from 'react';
import  { NavBar } from './Components/NavBar'
import Home  from './Components/Home'
import Shop from './Components/Shop'
import { Route, Routes, useLocation} from 'react-router-dom'


export default function App() {
  const [color, setColor] = useState('text-white');
  const homeRef = useRef();
  const shopRef = useRef();
  const location = useLocation();
  let refList = [homeRef, shopRef];
  
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
          setColor('text-white');
;        }
      });
    }, options);

    const initObserver = () => {
      for (let ref of refList) {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
    };

    const timer = setTimeout(initObserver, 10);

    return () => {
      clearTimeout(timer);
      
      for (let ref of refList) {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }
  }, [location.pathname]);

  return (
    <div className='relative bg-black' id='wrapper'>
      <NavBar color={color}/>

      <Routes>
        <Route path='/' element={<Home ref={homeRef} key='home'/>} />
        <Route path='/shop' element={<Shop ref={shopRef} key='shop'/>} />
      </Routes>

      <section className='bg-white h-screen w-full p-50' id='test-section'></section>
    </div>
  )
}

