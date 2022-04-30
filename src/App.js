import AOS from 'aos'
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Portfolio from './pages/Portfolio';
import SideBar from './components/Sidebar/Sidebar';
import Rightbar from './components/Rightbar';

export const App = () => {
  AOS.init()
  return (
    <BrowserRouter>
      <div className='project'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/faqs' component={Faqs} />
          <Redirect to='/' />
        </Switch>
        <SideBar />
        <Rightbar />
      </div>
    </BrowserRouter>
  );
}

