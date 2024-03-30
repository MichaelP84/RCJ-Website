import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/contact" element= {<ContactPage/>} />
        </Routes>
    </div>
  );
}

export default App;
