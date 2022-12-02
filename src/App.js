import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Videos from './containers/Videos'
import Cart from "./components/Cart";
import CartContextProvider from './components/CartContext'
import ItemDetail from './components/ItemDetail'

 
const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Videos/>} />
        <Route path='/category/:idCategory' element={<Videos/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/ItemDetail' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App; 