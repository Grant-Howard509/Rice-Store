import './index.css'
import  { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import { Shop } from './Components/Shop'
import { Route, Routes} from 'react-router-dom'


export default function App() {
  
  return (
    <div className=''>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}
