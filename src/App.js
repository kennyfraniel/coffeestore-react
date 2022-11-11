import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Videos from './containers/Videos'

 
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Videos/>} />
        <Route path='/category/:idCategory' element={<Videos/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App; 