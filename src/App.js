import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Videos from './containers/Videos'

 
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    <Videos />
   
    </>
  )
}

export default App; 