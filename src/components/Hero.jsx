import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sum_logo" className="w-28 object-contain" />
            <button type="button" onClick={()=> window.open ('https://github.com/saadchow/Summ-ary')} className='black_btn'>
                GitHub
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize any article using the capabilities of <br className='max:md:hidden' />
            <span className="blue_gradient">OpenAI's GPT-4</span>
        </h1>
        <h2 className='desc'>
            Experience a streamlined reading process with Summ.ary, an open-source tool that condenses lengthy articles into clean summaries.
        </h2>
    </header>
  )
}

export default Hero