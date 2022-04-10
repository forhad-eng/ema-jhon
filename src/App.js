import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Order from './components/Order/Order'
import Register from './components/Register/Register'
import RequireAuth from './components/RequireAuth/RequireAuth'
import Shipping from './components/Shipping/Shipping'
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
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/shipping"
                    element={
                        <RequireAuth>
                            <Shipping />
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default App
