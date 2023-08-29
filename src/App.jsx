import Layout from "./layouts/Layout"
import Home from './pages/Index'
export default function App() {

  return (
   
      <Layout children={<Home/>}/>
    
  )
}
