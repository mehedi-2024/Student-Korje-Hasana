
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navbar/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='h-[30px] md:h-[35px] bg-green-700 text-white text-xs sm:text-sm font-bold flex justify-center items-center'>
        <h4>নিঃস্বার্থ দান করি, সুদ মুক্ত জীবন গড়ি</h4>
      </div>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
