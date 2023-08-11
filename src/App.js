
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/cart';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import Products from './components/Products';
import Logout from './components/Logout';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    {/* <Navbar /> */}
                    <Routes>
                        
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/login" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>

                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;