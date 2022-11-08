import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

 
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    <ItemListContainer/>
    </>
  )
}

export default App; 