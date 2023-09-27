import './assets/global.css'
import TitleBox from './components/title-box'
import TextBox from './components/text-box'
import Navbar from './components/navbar'
import Home from './components/home'
import Travel from './components/Travel/travel'
import Business from './components/Business/business'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <section className='sitebody'>
      <header>
        <TitleBox />
        <TextBox />
      </header>
      <main className='window'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/business' element={<Business />}/>
          <Route path='/travel' element={<Travel />}/>
        </Routes>
      </main>
      <footer>
        <Navbar />
      </footer>
    </section>
  )
}
