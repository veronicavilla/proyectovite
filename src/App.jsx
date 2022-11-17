import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aside from './components/helpers/Aside'
import Article from './components/helpers/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Aside />
    <section>  
      <section>
        <Article />
        <Article />
      </section>
        <Article />
        <Article />
    </section>
    
    
    </main>
  );
}

export default App
