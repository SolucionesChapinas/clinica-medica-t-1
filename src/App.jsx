import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Doctors from "./components/Doctors"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

