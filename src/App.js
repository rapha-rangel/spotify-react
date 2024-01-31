import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [showTitle, setShowTitle] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [showFooter, setShowFooter] = useState(
    {footer:"disclaimer-premium",
      main:"offer__scroll-container"}
    );
  
  return (
    <div>
      <Sidebar/>
      <Header 
        setInputValue={setInputValue}
        setShowTitle={setShowTitle}/>
      <Main
        showFooter={showFooter}
        inputValue={inputValue}
        setShowTitle={setShowTitle}
        showTitle={showTitle}/>
      <Footer
        showFooter={showFooter}
        setShowFooter={setShowFooter}/>
    </div>
  );
}

export default App;
