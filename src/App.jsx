import programming_guy from './programming_guy.svg'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

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
          className='h-96 mt-16'
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
          className='flex flex-col h-screen justify-center items-center gap-[10px] text-center text-3xl md:text-5xl tracking-widest text-green-600'
        >
          <h1 className='animate-pulse '>{`<h1>Shafinul Islam</h1>`}</h1>
          <h6 className='text-lg text-white tracking-widest'>
            {`MERN Stack Developer | Car Enthusiast | Amateur Photographer`}
          </h6>
        </motion.div>
      </section>
      <section className='flex flex-col justify-evenly items-center snap-y snap-mandatory snap-center h-screen'>
        <div className='mt-20'>
          <Player
            autoplay
            loop
            src='https://assets10.lottiefiles.com/packages/lf20_tno6cg2w.json'
            className='md:w-9/12 md:h-9/12 w-9/12 h-9/12'
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
          className='flex flex-col h-screen justify-center items-center text-center text-lg md:text-3xl tracking-widest text-green-600 p-4 md:p-8'
        >
          <p>
            {`<p>
            I am a developer mostly front-end but I like to indulge into
            full-stack projects especially using the MERN Stack. After 4 years
            of university, I have achieved a Bachelor's Degree in Computer
            Science and Engineering. I am a problem solver by nature and love to
            tackle problems that I know I have some idea on but do take on the
            occasional challenge on. Besides that, I am an avid car enthusiast and will talk a lot about 
            cars with anyone. Finally, I take amateur pictures, in my opinion of the sky but that's just my take.
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
          <h1 className='animate-pulse'>{`<h1>My Works</h1>`}</h1>

          <div className='flex justify-center my-10'>
            <a
              href='https://www.auto-junction-store.com/'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg bg-slate-400 md:max-w-xl xl:max-w-4xl max-w-sm'>
                <img
                  className='rounded-t-lg'
                  src='https://www.auto-junction-store.com/uploads/Auto%20Junction%20Cover%20Photo.jpg'
                  alt=''
                />
                <div className='p-6'>
                  <h5 className='text-gray-900 text-xl md:text-4xl font-medium mb-2'>
                    Auto Junction
                  </h5>
                  <p className='text-gray-700 text-base md:text-2xl mb-4'>
                    It is a vehicle spare parts store made with the MERN Stack.
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
          className='relative flex flex-col items-top justify-center min-h-screen sm:items-center sm:pt-0'
        >
          <h1 className='text-2xl md:text-3xl tracking-widest text-green-600 mb-20 text-center animate-pulse'>{`<h1>Contact Me </h1>`}</h1>
          <p className='text-xl md:text-2xl tracking-widest text-green-600 mb-10 text-center md:px-48 px-24'>
            Below you can find my basic details like where I live, my phone
            number , my work email, and my social footprint. P.S. If you like
            pictures of the sky, have a look at my instagram 😎
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
                  <div className='ml-4 text-md tracking-wide font-semibold w-40'>
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
                  <div className='ml-4 text-md tracking-wide font-semibold w-40'>
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
                  <div className='ml-4 text-md tracking-wide font-semibold w-40'>
                    <a
                      href='mailto: shafinul98@proton.me'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      shafinul98@proton.me
                    </a>
                  </div>
                </div>

                <div className='flex justify-between my-10 items-center'>
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
