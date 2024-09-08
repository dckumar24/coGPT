import './App.css'
import Home from './components/organisms/Home/Home';
import { AIProvider } from './context/AIContext/AIContext';

function App() {

  return (
    <AIProvider>
      <Home></Home>
    </AIProvider>
      
  )
}

export default App
