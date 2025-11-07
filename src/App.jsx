
import "./css/App.css"
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar'
import { MovieProvider } from "./contexts/MovieContext"

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
      </div>
      <main className='main-content'>
        {/* Now inside of these routes we can define each individual path or route and then we can have like you know
        slash favorites or slash home of whatever mapping to a component that we want to display on screen*/}
        <Routes>
          {/* So we're just saying hey we want to go to the slash path the element we want to display when we go to slash is home */}
          {/* hayda lpath bas nzidu bl url lbl search fu2 by5dna 3alla l page */}
          <Route path="/" element={<Home />}/>
          <Route path="/Favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
