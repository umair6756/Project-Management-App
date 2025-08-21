// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

















// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {usestate, useEffect} from "react"
// Import components (each in its own file)
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/common/Sidebar.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
// import ProjectDetailPage from './components/projects/ProjectDetailPage.jsx'
// import TeamMembersTable from "./components/dashboard/TeamMembersTable";
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'

import {sampleProjects} from './components/projects/sampleProjects'
import ProjectExample from './pages/ProjectExample.jsx'

export default function App() {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   setProjects(sampleProjects);
  // }, []);

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/project" element={<ProjectPage/>} />
        <Route path="/project/:id" element={<ProjectDetailPage projects={sampleProjects}/>} />
        <Route path="/example" element={<ProjectExample />} />



        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
