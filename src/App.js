import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Inventory from './components/Inventory/Inventory'
import Order from './components/Order/Order'
import Shop from './components/Shop/Shop'

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/order" element={<Order />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default App
