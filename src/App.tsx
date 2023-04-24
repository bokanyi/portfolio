// import './App.css'
import { Education } from './components/Education'
import { Experiance } from './components/Experiance'
import { Introduction } from './components/Introduction'
import { Languages } from './components/Languages'
import { Navbar } from './components/Navbar'
import { Referencies } from './components/Referencies'
import { Skills } from './components/Skills'

function App() {

  return (
    <>
    <Navbar/>

      <Introduction/>
      <Skills/>
      <Referencies/>
      <Languages/>
      <Education/>
      <Experiance/>

    </>
  )
}

export default App
