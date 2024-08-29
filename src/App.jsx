import './index.css'
import React, { useEffect, useRef, useState } from 'react';
import  { NavBar } from './Components/NavBar'
import { Home }  from './Components/Home'
import { Shop } from './Components/Shop'
import { Route, Routes, useLocation} from 'react-router-dom'
import { useInView} from 'react-intersection-observer';


export default function App() {
  const [color, setColor] = useState('text-white');
  const homeRef = useRef();
  const location = useLocation();

  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevYPosition, setPrevYPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('landingPage');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevYPosition) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setPrevYPosition(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevYPosition]);



  const {ref: releaseObserverRef, inView: isReleaseView} = useInView({
    threshold: scrollDirection === 'down' && activeSection !== 'release'? 0.98 : 0,
    onChange: (inView) => {
      if (inView) setActiveSection('release');
    }
  });

  const {ref: landingObserverPageRef, inView: isLandingPageInView} = useInView({
    threshold: scrollDirection === 'down' && activeSection !== 'landingPage' ? 0.98 : 0,
    onChange: (inView) => {
      if (inView) setActiveSection('landingPage');
    }
  });

  const {ref: shopObserverRef, inView: isShopInView} = useInView({
    threshold: scrollDirection === 'down' && activeSection !== 'shop' ? 0.98 : 0,
    onChange: (inView) => {
      if (inView) setActiveSection('shop');
    }
  });

  useEffect(() => {
    if (activeSection === 'release') {
      setColor('text-black');
    } else if (activeSection === 'landingPage') {
      setColor('text-white');
    } else if (activeSection === 'shop') {
      setColor('text-green-500');
    }
  }, [activeSection, location.pathname, scrollDirection]);

  return (
    <div className='relative scroll-smooth' id='wrapper'>
      <NavBar color={color}/>

      <Routes>
        <Route path='/' element={<Home ref={homeRef} releaseRef={releaseObserverRef} landingPageRef={landingObserverPageRef} key='home'/>} />
        <Route path='/shop' element={<Shop ref={shopObserverRef} key='shop'/>} />
      </Routes>

      <section className='w-full h-screen'>he</section>
    </div>
  )
}

