import logo from '../public/images/logo.png';
export default function App() {

  return (
    <div className='w-full h-screen bg-[#EBEBEB] flex flex-col'>
      <header className='flex w-full justify-between'>
        <button className='border border-black p-2'>boton que abre navbar</button>
        <img className="w-28 pointer-events-none" src={logo} alt="logo" />
      </header>
      
      <div className='p-2 rounded-full border flex justify-center items-center w-fit'>
        <img className="w-4 pointer-events-none" src="./images/arrow-right.svg" alt="logo" />
      </div>
      <div className='p-2 rounded-full border flex justify-center items-center w-fit'>
        <img className="w-4 pointer-events-none rotate-180" src="./images/arrow-right.svg" alt="logo" />
      </div>
      <div className="w-1/2 h-96 borde" style={{backgroundImage:"url('./images/background-home.png')"}}>

      </div>
    </div>
  )
}
