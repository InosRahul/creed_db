import './App.css';
import React from 'react';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';
function App() {
 
    return (
        <div className="App">
          <Thoughts />
          <div>
              <Footer />
          </div>
        </div>
      );
}

export default App;
