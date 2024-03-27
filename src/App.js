import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { orginals,action,horror, documentaries, comedy } from './urls';
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as router,route } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <div className='app'>



      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action Movies' isSmall />
      <Rowpost url={horror} title='Horror Movies' isSmall />
      <Rowpost url={comedy} title='Comedy Movies' isSmall />
      <Rowpost url={documentaries} title='Documentaries' isSmall />
      <Footer/>
    </div>
  )
}

export default App
