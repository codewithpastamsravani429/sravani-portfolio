import React, { useEffect, useState } from 'react'; import { motion } from 'framer-motion';

function App() { const [theme, setTheme] = useState('dark');

useEffect(() => { const saved = localStorage.getItem('theme'); if (saved) setTheme(saved); }, []);

useEffect(() => { document.documentElement.classList.remove('dark', 'light'); document.documentElement.classList.add(theme); localStorage.setItem('theme', theme); }, [theme]);

const toggleTheme = () => { setTheme(theme === 'dark' ? 'light' : 'dark'); };

return ( <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white" > {/* Theme Toggle Button */} <div className="absolute top-4 right-4"> <button
onClick={toggleTheme}
className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded shadow"
> {theme === 'dark' ? '☀ Light' : '🌙 Dark'} </button> </div>

{/* Hero Section */}
  <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900 dark:to-purple-900">
    <img
      src="/profile.jpg"
      alt="Pastam Sravani"
      className="w-60 h-60 rounded-full object-cover border-4 border-indigo-300 shadow-lg mb-4"
    />
    <h1 className="text-4xl md:text-5xl font-bold mb-2">
      Hi, I'm <span className="text-green-500 dark:text-green-400">Pastam Sravani</span>
    </h1>
    <p className="text-lg md:text-xl font-medium">
      Full Stack Developer | Skilled in Frontend & Backend Development
    </p>
    <p className="mt-2 text-sm">📧 pastamsravani14@gmail.com</p>
  </section>

  {/* About Me Section */}
  <section className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-300 mb-8">
      About Me
    </h2>
    <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-center text-lg leading-relaxed">
      I'm a passionate Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, React, and Node.js. I love building responsive, intuitive, and user-friendly web applications that solve real-world problems.
    </p>
  </section>

  {/* Skills Section */}
  <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-300 mb-10">
      Skills
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
      <div>
        <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">Frontend</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Backend</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>REST APIs</li>
          <li>Authentication</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Tools</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li>Git & GitHub</li>
          <li>Postman</li>
          <li>Vite</li>
          <li>VS Code</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">Others</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li>Responsive Design</li>
          <li>Figma to Code</li>
          <li>Debugging</li>
          <li>Deployment (Vercel, Netlify)</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Projects Section */}
  <section className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-300 mb-10">
      Projects
    </h2>
    <div className="space-y-10 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">Healthcare Dashboard</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A responsive healthcare dashboard clone built using React and Tailwind CSS, visualizing key metrics with clean UI cards and charts.
        </p>
        <a
          href="https://v0-healthcare-dashboard-clone-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline mr-4"
        >
          🔗 Live Demo
        </a>
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">React Job Listing Website</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A responsive job board built with React and Tailwind CSS featuring search, tag filtering, and modular components.
        </p>
        <a
          href="https://react-job-listing-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline mr-4"
        >
          🔗 Live Demo
        </a>
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-2">Full Stack Job Portal</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A MERN stack job portal with authentication, CRUD operations, admin panel, and MongoDB backend. Built for recruiters and job seekers.
        </p>
        <a
          href="https://github.com/exclusiveabhi/react-job-portal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline mr-4"
        >
          💻 View Code
        </a>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-300 mb-10">
      Contact Me
    </h2>
    <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <form className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Say hello..."
            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
        Or email me directly at{' '}
        <a
          href="mailto:pastamsravani14@gmail.com"
          className="text-indigo-600 dark:text-indigo-300 underline"
        >
          pastamsravani14@gmail.com
        </a>
      </p>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-200 dark:bg-gray-950 text-gray-700 dark:text-gray-400 py-6 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Pastam Sravani. Built with 💙 using React & Tailwind CSS.
    </p>
  </footer>
</motion.div>

); }

export default App;
 