import Header from "./Components/Header/Header";
// import './App.css'
import GoodsPage from "./Components/Pages/GoodsPage/GoodsPage";
import ContactsPage from "./Components/Pages/ContactsPage/ContactsPage";
import Footer from "./Components/Footer/Footer";
// import NotfoundPage from "./Components/Pages/NotfoundPage/NotfoundPage";
import HomePage from "./Components/Pages/HomePage/HomePage";
import {getGoods} from './Components/Pages/GoodsPage/GoodsPage'
import GoodInfoPage from "./Components/Pages/GoodInfoPage/GoodInfoPage";
import styles from './App.module.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import {HashRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="app">
        <Router>
          <Header />
          <Routes>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/goods" element ={<GoodsPage/>}/>
          <Route path="/goods/:id" element ={<GoodInfoPage/>}/>
          <Route path="/contacts" element ={<ContactsPage/>}/>

          {/* <Route path="*" element ={<NotfoundPage/>}/> */}

        </Routes>
      </Router>

      <Footer /> 
    </div>
  )
}

export default App;

