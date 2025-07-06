import './App.css'
import { Footer } from './components/Footer/footer'
import { Navbar } from './components/Navbar/navbar'
import { Hero } from './components/Hero/hero'
import { SemesterSubjects } from './components/SemesterSubjects/semesterSubjects'
import { Contact } from './components/Contact/contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <SemesterSubjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
