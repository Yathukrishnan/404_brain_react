import { motion } from 'framer-motion';
import './App.css';
import SvgComponent from './components/SvgComponent';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GlareCardDemo } from './components/glare card/glarecardcm';

// Define prop types for CardComponent
type CardComponentProps = {
  title: string;
  bgColor: string;
  description: string;
};

const CardComponent: React.FC<CardComponentProps> = ({ title, bgColor, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className={`p-6 ${bgColor} rounded-lg shadow-md`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#FAD5A5]">
      {/* Navbar with EduHelp */}
      <div className="bg-[#FAD5A5] flex items-center justify-between px-8 py-4 shadow-md">
        <h1 className="text-4xl font-bold text-black">EduHelp</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#Home" className="text-xl text-black">Home</a></li>
            <li><a href="#About" className="text-xl text-black">About</a></li>
            <li><a href="#Services" className="text-xl text-black">Services</a></li>
            <li><a href="#Contact" className="text-xl text-black">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="Home">
      <div className="container py-8 mx-auto px-7">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-center md:text-left md:w-1/2">
            <motion.div
              className="mt-44"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-2xl text-gray-700">Your Learning Hub</p>
              <h2 className="mt-6 font-extrabold text-7xl">
                <span className="block">Inclusive</span>
                <span className="block">Education</span>
              </h2>
              <p className="mt-6 text-2xl text-gray-600">
              Empowering differently-abled students through tailored educational resources and inclusive tools. 
              </p>
              <div className="mt-8">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="bg-[#B35454] text-white px-8 py-3 rounded-full text-xl">Start Learning</button>
              </div>
            </motion.div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <SvgComponent />
          </div>
        </div>
      </div></section>

   <section id='About'>  {/* Empowering Students Section */}
<div className="container py-16 mx-auto mb-28 mt-36 px-7">
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="mb-10 text-5xl font-extrabold">Empowering Students</h2>
    <p className="mb-12 text-xl text-gray-700">
      Utilize our advanced features like question generators and flashcards to maximize your study time.
    </p>
  </motion.div>

  <div className="grid grid-cols-1 gap-8 mt-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    <motion.div
      className="p-6 bg-blue-100 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CardComponent
        title="Question Generator"
        bgColor="bg-blue-100"
        description="Generate personalized quiz questions to test your knowledge efficiently and boost your learning."
      />
    </motion.div>

    <motion.div
      className="p-6 bg-green-100 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CardComponent
        title="Summarizer"
        bgColor="bg-green-100"
        description="Quickly summarize lengthy articles or textbooks into key points for easy review and understanding."
      />
    </motion.div>

    <motion.div
      className="p-6 bg-yellow-100 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CardComponent
        title="Flash Card Generator"
        bgColor="bg-yellow-100"
        description="Create digital flashcards that help you memorize concepts and definitions in an engaging way."
      />
    </motion.div>

    <motion.div
      className="p-6 bg-red-100 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CardComponent
        title="IELTS"
        bgColor="bg-red-100"
        description="Prepare for the IELTS exam with customized practice tests and simulated exam environments."
      />
    </motion.div>

    <motion.div
      className="p-6 bg-pink-100 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CardComponent
        title="Math Calculator"
        bgColor="bg-pink-100"
        description="Solve complex math problems step-by-step with an interactive calculator designed for all levels."
      />
    </motion.div>
  </div>
</div></section>


      {/* Updated Three-Card Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-7">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="mt-24 mb-10 text-5xl font-extrabold text-white">Empower Your Studies</h2>
            <p className="mb-12 text-xl text-gray-400">
              Maximize your learning with our innovative tools and resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 mt-36">
            {/* Card 1 */}
            <motion.div
              className="p-6 text-black bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex bg-[#FAD5A5] p-4 rounded-t-lg">
                <h3 className="w-1/4 text-4xl font-extrabold text-center text-black">1</h3>
                <div className="w-3/4 pl-4">
                  <h3 className="text-2xl font-bold text-black">Personalized Learning</h3>
                  <p className="text-black">Tailor your learning journey with resources that adapt to your pace and needs.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="p-6 text-black bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex bg-[#FAD5A5] p-4 rounded-t-lg">
                <h3 className="w-1/4 text-4xl font-extrabold text-center text-black">2</h3>
                <div className="w-3/4 pl-4">
                  <h3 className="text-2xl font-bold text-black">Innovative Tools</h3>
                  <p className="text-black">Utilize advanced features like flashcards and quizzes to stay ahead.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="p-6 text-black bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex bg-[#FAD5A5] p-4 rounded-t-lg">
                <h3 className="w-1/4 text-4xl font-extrabold text-center text-black">3</h3>
                <div className="w-3/4 pl-4">
                  <h3 className="text-2xl font-bold text-black">Goal Tracking</h3>
                  <p className="text-black">Track your progress and achieve milestones with our goal-setting features.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>



        {/* Hero Section */}<section id='Services'>
      <div className="container py-8 mx-auto px-7">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-center md:text-left md:w-1/2">
            <motion.div
              className="mt-44"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-2xl text-gray-700">Study Smarter </p>
              <h2 className="mt-6 font-extrabold text-white text-7xl">
                <span className="block">Comprehensive </span>
                <span className="block">Student Tools </span>
              </h2>
              <p className="mt-6 text-2xl text-gray-600">
              Discover a variety of tools designed to enhance your learning experience. 
              </p>
              
            </motion.div>
          </div>
        </div>
      </div>



<GlareCardDemo /></section>
        
<section id='Contact'>
<footer className="py-8 -mb-24 overflow-hidden text-white bg-gray-800 mt-28"> 
  <div className="container flex items-center justify-between px-4 mx-auto">
    {/* EduHelp Name on the Left */}
    <div className="text-5xl font-bold">
      <a href="#Home" className="text-white hover:text-gray-400">
        EduHelp
      </a>
    </div>

    {/* Navbar Items in the Center */}
    <div className="flex flex-col items-center space-y-4">
      <a href="#home" className="text-lg text-white hover:text-gray-400">
        Home
      </a>
      <a href="#About" className="text-lg text-white hover:text-gray-400">
        Projects
      </a>
      <a href="#services" className="text-lg text-white hover:text-gray-400">
        Services
      </a>
      <a href="#contact" className="text-lg text-white hover:text-gray-400">
        Contact
      </a>
    </div>
  </div>
</footer></section>



      </div>
    </div>
  );
}

export default App;
