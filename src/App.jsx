import programming_guy from './programming_guy.svg'
import Resume from './Resume Web Developer.pdf'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaFileDownload,
  FaLinkedin,
} from 'react-icons/fa'

function App() {
  return (
    <main className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory overflow-x-hidden scrollbar'>
      <section className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-evenly md:items-center snap-y snap-mandatory snap-center h-screen'>
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}
          className='h-64 w-64 md:h-96 md:w-96 mt-16'
          src={programming_guy}
          alt=''
        />
        <motion.div
          initial={{ scale: 1.25 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}
          className='flex flex-col h-screen justify-center items-center gap-[10px] text-center text-2xl md:text-5xl tracking-widest text-green-600'
        >
          <h1 className='animate-pulse text-base sm:text-lg md:text-2xl lg:text-4xl'>{`<h1>Shafinul Islam</h1>`}</h1>
          <h6 className='text-xs md:text-base text-white tracking-widest'>
            {`MERN Stack Developer | Automation Testing | Manual Testing`}
          </h6>
          <a
            href={Resume}
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex border-[1px] border-emerald-500 my-10 p-2 justify-center items-center gap-2'>
              <h6 className='text-sm md:text-lg lg:text-2xl text-green-600 tracking-widest'>
                Download my resume
              </h6>
              <FaFileDownload size={20} />
            </div>
          </a>
        </motion.div>
      </section>
      <section className='flex flex-col justify-evenly items-center snap-y snap-mandatory snap-center h-screen'>
        <div className='mt-20'>
          <Player
            autoplay
            loop
            src='https://assets10.lottiefiles.com/packages/lf20_tno6cg2w.json'
            className='md:w-9/12 md:h-9/12 w-8/12 h-8/12'
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 100,
          }}
          className='flex flex-col h-screen justify-center items-center text-center text-base md:text-2xl tracking-widest text-green-600 p-4 md:p-8'
        >
          <p className='text-sm md:text-base lg:text-2xl'>
            {`<p>
            I am a developer mostly focused on front-end but I like to indulge into
            full-stack projects especially using the MERN Stack. After 4 years
            of university, I have achieved a Bachelor's Degree in Computer
            Science and Engineering. I am a problem solver by nature and love to
            tackle problems that I know I have some idea on but do take on the
            occasional challenge. Besides that, I also have experience as an automation tester using JavaScript which I picked up during an internship. 
            Finally, I learned certain testing tools such as Jira, Postman, SQL, Selenium WebDriver, WebDriverIO, Cypress.io, Mocha.js and Chai.js
            </p>`}
          </p>
        </motion.div>
      </section>
      <section className='flex flex-col justify-evenly items-center snap-y snap-mandatory snap-center h-screen mb-10'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 160,
          }}
          className='flex flex-col h-screen justify-center items-center gap-[10px] text-center text-2xl md:text-5xl tracking-widest text-green-600'
        >
          <h1 className='animate-pulse'>{`<h1>My Projects</h1>`}</h1>

          <div className='flex flex-row justify-center items-center my-10'>
            <a
              href='https://github.com/shafoo98/auto-junction'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg bg-slate-400 md:max-w-lg xl:max-w-xl max-w-sm mx-5'>
                <img
                  className='rounded-t-lg'
                  src='https://res.cloudinary.com/pet-bazaar-bd/image/upload/v1692038393/Auto_Junction_Cover_Photo_1_kjzyir.jpg'
                  alt=''
                />
                <div className='p-6'>
                  <h5 className='text-gray-900 text-sm md:text-4xl font-medium mb-2'>
                    Auto Junction
                  </h5>
                  <p className='text-gray-700 text-xs md:text-2xl mb-4'>
                    It is a vehicle spare parts store made with the MERN Stack.
                  </p>
                </div>
              </div>
            </a>

            <a
              href='https://rigid-auto-brick.netlify.app/'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg bg-slate-400 md:max-w-lg xl:max-w-xl max-w-sm mx-5'>
                <img
                  className='rounded-t-lg'
                  src='https://res.cloudinary.com/pet-bazaar-bd/image/upload/v1692039020/Rigid_Auto_Brick_Home_Page_SS_hvab5x.jpg'
                  alt=''
                />
                <div className='p-6'>
                  <h5 className='text-gray-900 text-sm md:text-4xl font-medium mb-2'>
                    Rigid Auto Brick
                  </h5>
                  <p className='text-gray-700 text-xs md:text-2xl mb-4'>
                    A landing page for a concrete brick manufacturer based in
                    Chittagong.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-center items-center snap-y snap-mandatory snap-center h-screen'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 100,
          }}
          className='relative flex flex-col items-center justify-center min-h-screen sm:items-center sm:pt-0'
        >
          <h1 className='text-xl md:text-3xl tracking-widest text-green-600 mb-10 text-center animate-pulse'>{`<h1>Contact Me </h1>`}</h1>
          <p className='text-base md:text-2xl tracking-widest text-green-600 text-center md:px-24 px-12'>
            Below you can find my basic details like where I live, my phone
            number, my work email, and my social footprint 😎. My GitHub and
            LinkedIn are also provided in case you need to contact me for any
            web development needs.
          </p>
          <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <div className='p-6 mr-2 justify-around items-center'>
                <div className='flex items-center mt-8 text-gray-600 dark:text-gray-400'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    className='w-8 h-8 text-gray-500'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  <div className='ml-4 text-base md:text-lg tracking-wide font-semibold w-40'>
                    House 425, Senpara Parbata, Mirpur, Dhaka, 1216
                  </div>
                </div>

                <div className='flex items-center mt-4 text-gray-600 dark:text-gray-400'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    className='w-8 h-8 text-gray-500'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <div className='ml-4 text-base md:text-lg tracking-wide font-semibold w-40'>
                    <a href='tel:+880 1794520843'>+880 1794520843</a>
                  </div>
                </div>

                <div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    className='w-8 h-8 text-gray-500'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.5'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <div className='ml-4 text-base md:text-lg tracking-wide font-semibold w-40'>
                    <a
                      href='mailto: shafinul98@gmail.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      shafinul98@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex justify-between mt-8 items-center'>
                  <div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
                    <a
                      href='https://www.facebook.com/shafinul98'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaFacebook className='w-8 h-8 text-gray-500' />
                    </a>
                  </div>

                  <div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
                    <a
                      href='https://www.instagram.com/shafinul98'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaInstagram className='w-8 h-8 text-gray-500' />
                    </a>
                  </div>

                  <div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
                    <a
                      href='https://www.github.com/shafoo98'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaGithub className='w-8 h-8 text-gray-500' />
                    </a>
                  </div>

                  <div className='flex items-center mt-2 text-gray-600 dark:text-gray-400'>
                    <a
                      href='https://www.linkedin.com/in/shafinul-islam-23744a112/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaLinkedin className='w-8 h-8 text-gray-500' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default App
