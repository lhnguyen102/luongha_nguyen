import { styles } from '../styles';
import { myphoto } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-[500px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[60px] sm:top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}>
        <img src={myphoto} alt="Personal" className="mx-auto block w-[140px] h-[140px] md:w-[140px] md:h-[140px] lg:w-[200px] mt-2 lg:h-[200px] rounded-full" />
        <div className='flex flex-col justify-center items-center mt-1'>
          <div className='lg:w-5 lg:h-5 sm:w-10 sm:h-10 rounded-full bg-blue-500' />
          <div className='w-1 sm:h-40 lg:h-80 blue-gradient'/>
        </div>
        
        <div className={`${styles.heroHeadText} text-white`}>
          <h1 className='text-[6.5vw] md:text-[3.5vw] lg:text-[4vw] g:h-[110px] lg:text-[50px]'>Hi there, I'm <span className='blue-text-gradient'> Luong-Ha</span></h1>
          <p className={`${styles.heroSubText} text-[4.5vw] mt-2 text-white-100 lg:leading-[45px]`}> 
            I develop AI/ML applications and actively researching uncertainty modeling methods for deep neural networks
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Hero;