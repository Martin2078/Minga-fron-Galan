import logo from '../public/images/logo.png';
import menu from '../public/images/Menu.png';
import flecha from '../public/images/arrow-right.svg'
import imagen1 from '../public/images/imagen1.png'
import imagen2 from '../public/images/imagen2.png'
import imagenFooter from '../public/images/footer.png'
import logoFooter from '../public/images/logo-footer.png'
import logoFooter2 from '../public/images/logo-footer2.png'
export default function App() {

  return (
    <div className='w-full h-full bg-[#EBEBEB] flex flex-col'>

      <nav className='flex w-full h-1/6 align-start justify-between px-10 absolute top-0 left-0'>
        <button ><img className='h-2/6' src={menu} alt="menu" /></button>
        <button><img className='h-2/6' src={logo} alt="logo" /></button>
      </nav>
  

      <main className='flex flex-col lg:h-screen min-[320px]:h-full'>

        <div className="w-full bg-cover align-middle flex justify-center items-center lg:bg-[url('../public/images/background.png')] lg:h-4/6 lg:bg-center min-[320px]:bg-[url('../public/images/imagen-mobile.png')] min-[320px]:h-screen">
          <div className='w-fit h-4/6 text-center lg:gap-y-3 min-[320px]:gap-y-8 flex flex-col justify-center items-center' >
            <h1 className='lg:text-5xl	text-white font-["Roboto"] lg:block min-[320px]:hidden font-bold'>Your favorite comic book store ✨</h1>
            <h1 className='lg:hidden md:block	text-white font-["Roboto"] sm:text-5xl md:text-6xl min-[320px]:text-4xl min-[320px]:w-5/6 font-bold'>Your favorite comic book store</h1>
            <p className='lg:text-2xl text-white w-4/6 font-["Roboto"] lg:block min-[320px]:hidden'>Explore our catalog to live the adventure of <br /> your life</p>
            <p className='text-xl lg:hidden min-[320px]:block text-white w-4/6 font-["Roboto"]'>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. <br /> Explore our catalog and live the adventure of your life.</p>
            <button className='lg:bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded text-[#FFFFFF] w-fit font-["Roboto"] lg:py-1 lg:px-12 lg:text-2xl min-[320px]:text-3xl min-[320px]:py-4 min-[320px]:w-4/6 min-[320px]:rounded-full min-[320px]:bg-[#4338CA] '>Let's go!</button>
          </div>
        </div>

        <div className='w-full h-2/6 lg:flex items-center justify-center min-[320px]:hidden'>
          <div className='flex bg-[#4338CA] w-11/12 h-4/6 rounded justify-between items-center px-10'>
            <button className='border-solid bg-[#999] rounded-full p-2'><img className='rotate-180 text-[#333333] w-6' src={flecha} alt="" /></button>
            <div className='flex gap-x-24 items-center h-full'>
              <img className='h-56 -translate-y-5' src={imagen1} alt="imagen-deku" />
              <img className='h-52 -translate-y-8' src={imagen2} alt="imagen-myHeroAcademy" />

            <div className='w-2/6 text-justify'>
              <h2 className='text-2xl text-[#FFFFFF] font-sans["Roboto"]  '>Shonen:</h2>
              <p className='text-min-[320px] text-[#FFFFFF] font-["Roboto"] font leading-3'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>

            </div>
              <button className='border-solid bg-[#999] rounded-full p-2'><img className='text-[#333333] w-6' src={flecha} alt="" /></button>
            </div>
        </div>

      </main>
    
      <footer className='h-auto min-[320px]:top-full '>
          <img className='w-full h-72 object-center lg:block min-[320px]:hidden' src={imagenFooter} alt="" />

          <div className='flex lg:h-24  justify-center lg:bg-white min-[320px]:bg-gray-600 min-[320px]:h-fit'>
            <div className='lg:w-10/12 h-fit flex lg:justify-between lg:items-end lg:flex-row min-[320px]:py-5 min-[320px]:px-12 min-[320px]:flex-col min-[320px]:w-full min-[320px]:justify-center min-[320px]:items-center min-[320px]:gap-6'>
            <div className='flex font-bold lg:gap-32 lg:flex-row lg:text-min-[320px] lg:text-black min-[320px]:flex-col min-[320px]:gap-2 min-[320px]:text-xl min-[320px]:text-center min-[320px]:text-white'>
              <a href="">Home</a>
              <a href="">Mangas</a>
            </div>

            <div className='flex'>
              <img className='lg:h-9 lg:bg-transparent min-[320px]:h-12 min-[320px]:bg-white' src={logoFooter} alt="" />
              <img className='lg:h-9 lg:bg-transparent min-[320px]:h-12 min-[320px]:bg-white' src={logoFooter2} alt="" />
            </div>

            <div className='flex flex-col items-center gap-5'>
              <div className='flex justify-between items-center w-5/6'>
                <a href=""><img src="../public/images/facebook-black.svg" alt="" /></a>
                <a href=""><img src="../public/images/twitter-black.svg" alt="" /></a>
                <a href=""><img src="../public/images/vimeo-black.svg" alt="" /></a>
                <a href=""><img src="../public/images/youtube-black.svg" alt="" /></a>
              </div>
              <button className=' flex w-5/6 gap-1 justify-center items-center px-20 py-1 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-3xl text-white'>Donate<img className='h-3' src="../public/images/Union.png" alt="" /></button>
            </div>
            </div>
          </div>
      </footer>

    </div>
  )
}
