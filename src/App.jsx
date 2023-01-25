import programming_guy from './programming_guy.svg'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <section className="flex flex-col justify-evenly items-center md:flex md:flex-row md:justify-evenly md:items-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          className="h-96"
          src={programming_guy}
          alt=""
        />
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          className="flex flex-col gap-[10px] text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold hover:text-slate-700">{`<Shafinul Islam />`}</h1>
          <h6>MERN Stack Developer | Car Enthusiast | Amateur Photographer</h6>
        </motion.div>
      </section>
      <section>
        <h1></h1>
      </section>
      <section>
        <h1></h1>
      </section>
    </>
  );
}

export default App;