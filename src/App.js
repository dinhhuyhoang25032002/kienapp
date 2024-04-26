
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header'
import HomeAbout from './homeabout/HomeAbout';
function App() {
  return (
    <div className="container-app">

      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='navigator-container'>

        </div>
        <div className='content-container'>
          <Outlet />
        </div>
        <div className='footer-app'>
          <HomeAbout />
        </div>
      </div>


    </div>

  );
}

export default App;
