import Layout from "./layouts/Layout"
import Home from './pages/Index'
export default function App() {

  return (
    <div className='w-full h-full bg-[#EBEBEB] flex flex-col'>
      <Layout children={<Home/>}/>
    </div>
  )
}
