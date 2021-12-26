import './App.css';
import AOS from 'aos'
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import Navbar from './components/Navbar';
import { LeftbarIcon } from './components/Leftbar-icon';
import { RightbarEmail } from './components/Rightbar-email';
import { About } from './pages/About';
import { Faqs } from './pages/Faqs';
import { Portfolio } from './pages/Portfolio';

export const animateUp = {
  'data-aos': "fade-up",
  'data-aos-easing': "ease-in-sine",
  'data-aos-offset': "0"
}
export const animateDown = {
  'data-aos': "fade-down",
  'data-aos-easing': "ease-in-sine",
  'data-aos-offset': "0"
}
export const animateLeft = {
  'data-aos': "fade-left",
  'data-aos-easing': "ease-in-sine",
}
export const animateRight = {
  'data-aos': "fade-right",
  'data-aos-easing': "ease-in-sine",
}

function App() {
  AOS.init()
  return (
    <BrowserRouter>
      <div className='project'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/faqs' component={Faqs} />
          <Redirect to='/' />
        </Switch>
        <LeftbarIcon />
        <RightbarEmail />
      </div>
    </BrowserRouter>
  );
}

export default App;
