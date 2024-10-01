import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Buttons from './components/Buttons';


import '../assets/style/socialLinks.css'

function App() {

  return (
    <>
      <Header />

      <Outlet />

      <Footer/>

      <Buttons  className="top1" href="https://wa.me/+919677131619"  src="./assets/images/Buttons/whatsapp.svg" alt="" />
      <Buttons  className="top2" href="tel:9677131619"  src="./assets/images/Buttons/call.svg" alt="" />
    </>
  )
}

export default App
