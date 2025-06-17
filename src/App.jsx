import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Layout.css';
import { useState } from 'react';

function App() {
  const [kullanicilar, setKullanicilar] = useState([]);

  const addUser = (yeniKullanici) => {
    setKullanicilar([...kullanicilar, yeniKullanici]);
  };

  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar kullanicilar={kullanicilar} />
        <Main addUser={addUser} />
      </div>
      <Footer />
    </>
  );
}

export default App;
