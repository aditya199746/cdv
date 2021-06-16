import Home from './containers/Home'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom'
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
    <Header />
    <Hero />
    <Route path="/contact"  component={ContactUs} />
    <Route exact path="/"  component={Home} />
    <Route path="/post/:postId" component={Post} />    

    
      
    </div>
    </BrowserRouter>
  );
}

export default App;
