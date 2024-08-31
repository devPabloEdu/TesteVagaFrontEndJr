import React from 'react';
import './styles/main.scss';
import ReactDOM from 'react-dom';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import MainTopNavegacao from "./Components/MainTopNavegacao";
import ProductList from './Components/ProductList';
import Aside from './Components/Aside';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
      <Header />
      <Banner />
      </header>
      <main>
      <MainTopNavegacao />
      <ProductList />
      </main>
      <aside>
      <Aside />
      </aside>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
};

export default App;