import NavBar from './components/NavBar';
import Index from './pages/Index'
import Footer from './components/Footer'
export default function App() {

  return (
    <div className='w-full h-full bg-[#EBEBEB] flex flex-col'>
      <NavBar/>
      <Index/>
      <Footer/> 
    </div>
  )
}
