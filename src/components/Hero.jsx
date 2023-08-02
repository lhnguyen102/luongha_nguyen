import { styles } from '../styles';
import { myphoto } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-[500px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[60px] sm:top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}>
        <img src={myphoto} alt="Personal" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] ml-auto rounded-full" />
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='lg:w-5 lg:h-5 sm:w-10 sm:h-10 rounded-full bg-blue-500' />
          <div className='w-1 sm:h-40 lg:h-80 blue-gradient'/>
        </div>
        
        <div className={`${styles.heroHeadText} text-white`}>
          <h1 className='lg:h-[150px] lg:text-[80px]'>Hi, I'm <span className='text-[#008bff]'> Luong-Ha</span></h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100 lg:leading-[45px]`}> 
            I develop AI/ML applications and actively researching<br className='sm:block hidden' /> uncertainty modeling methods for deep neural networks
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Hero