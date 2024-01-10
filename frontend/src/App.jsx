
import './App.css'
import { Routes, Route, Outlet} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'

function Layout(){
  return(
    <div className='flex flex-col h-screen justify-between'>
      <NavBar />
      <main className='mb-auto w-10/12 max-w-4xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LandingPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Route>
      </Routes>
    </div>
    
  )
}

export default App
