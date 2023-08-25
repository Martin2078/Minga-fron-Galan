import logo from '../public/images/logo.png';
import menu from '../public/images/Menu.png';
import flecha from '../public/images/arrow-right.svg'
import imagen1 from '../public/images/imagen1.png'
import imagen2 from '../public/images/imagen2.png'
export default function App() {

  return (
    <div className='w-full h-screen bg-[#EBEBEB] flex flex-col'>
      <header className='flex w-full h-4/6 flex-col items-center bg-cover gap-20' style={{backgroundImage:"url('../public/images/background.png')"}}>
        <div className='flex w-full h-1/6 align-middle justify-between pt-5 px-10'>
          <button ><img src={menu} alt="menu" /></button>
          <button><img src={logo} alt="logo" /></button>
        </div>
  
        <div className='w-fit h-fit text-center gap-y-3 flex flex-col justify-center items-center'>
          <h1 className='text-5xl	text-white font-["Roboto"]'>Your favorite comic book store ✨</h1>
          <p className='text-2xl text-white w-4/6 font-["Roboto"] ' >Explore our catalog to live the adventure of your life</p>
          <button className='bg-gradient-to-r from-[#4338CA] to-[#5E52F3] py-1 px-12 rounded text-2xl text-[#FFFFFF] w-fit font-["Roboto"] '>Let's go!</button>
        </div>
      
      </header>

      <main className='flex justify-center items-center h-2/6'>

        <div className='flex bg-[#4338CA] w-11/12 h-4/6 rounded justify-between items-center px-10'>
          <button className='border-solid bg-[#999] rounded-full p-2'><img className='rotate-180 text-[#333333] w-6' src={flecha} alt="" /></button>
          <div className='flex gap-x-24 items-center h-full'>
          <img className='h-56 -translate-y-5' src={imagen1} alt="imagen-deku" />
          <img className='h-52 -translate-y-8' src={imagen2} alt="imagen-myHeroAcademy" />

          <div className='w-2/6 text-justify'>
            <h2 className='text-2xl text-[#FFFFFF] font-sans["Roboto"]  '>Shonen:</h2>
            <p className='text-sm text-[#FFFFFF] font-["Roboto"] font leading-3'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>

          </div>
            <button className='border-solid bg-[#999] rounded-full p-2'><img className='text-[#333333] w-6' src={flecha} alt="" /></button>
          
          
        </div>

      </main>

    </div>
  )
}
