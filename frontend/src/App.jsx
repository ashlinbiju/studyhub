import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import BranchSelection from './pages/BranchSelection.jsx';

// CS Imports
import SemesterSelectionCS from './pages/subjects/cs/SemesterSelection.jsx';
import LinearAlgebraAndCalculus from './pages/subjects/cs/sub1/alg.jsx';
import Graphics from './pages/subjects/cs/sub1/graphics.jsx';
import Chemistry from './pages/subjects/cs/sub1/chem.jsx';

import Bce from './pages/subjects/cs/sub1/bce.jsx';
import A1 from './pages/subjects/cs/sub1/a1.jsx';
import A2 from './pages/subjects/cs/sub1/a2.jsx';
import A3 from './pages/subjects/cs/sub1/a3.jsx';
import A4 from './pages/subjects/cs/sub1/a4.jsx';
import A5 from './pages/subjects/cs/sub1/a5.jsx';
import SubjectCS_S1 from './pages/subjects/cs/s1.jsx';
import SubjectCS_S2 from './pages/subjects/cs/s2.jsx';
import SubjectCS_S3 from './pages/subjects/cs/s3.jsx';
import SubjectCS_S4 from './pages/subjects/cs/s4.jsx';
import SubjectCS_S5 from './pages/subjects/cs/s5.jsx';
import SubjectCS_S6 from './pages/subjects/cs/s6.jsx';
import SubjectCS_S7 from './pages/subjects/cs/s7.jsx';
import SubjectCS_S8 from './pages/subjects/cs/s8.jsx';

// ECE Imports
import SemesterSelectionECE from './pages/subjects/ece/SemesterSelection.jsx';
import SubjectECE_S1 from './pages/subjects/ece/s1.jsx';
import SubjectECE_S2 from './pages/subjects/ece/s2.jsx';
import SubjectECE_S3 from './pages/subjects/ece/s3.jsx';
import SubjectECE_S4 from './pages/subjects/ece/s4.jsx';
import SubjectECE_S5 from './pages/subjects/ece/s5.jsx';
import SubjectECE_S6 from './pages/subjects/ece/s6.jsx';
import SubjectECE_S7 from './pages/subjects/ece/s7.jsx';
import SubjectECE_S8 from './pages/subjects/ece/s8.jsx';

// MECH Imports
import SemesterSelectionMECH from './pages/subjects/mech/SemesterSelection.jsx';
import SubjectMECH_S1 from './pages/subjects/mech/s1.jsx';
import SubjectMECH_S2 from './pages/subjects/mech/s2.jsx';
import SubjectMECH_S3 from './pages/subjects/mech/s3.jsx';
import SubjectMECH_S4 from './pages/subjects/mech/s4.jsx';
import SubjectMECH_S5 from './pages/subjects/mech/s5.jsx';
import SubjectMECH_S6 from './pages/subjects/mech/s6.jsx';
import SubjectMECH_S7 from './pages/subjects/mech/s7.jsx';
import SubjectMECH_S8 from './pages/subjects/mech/s8.jsx';

// CIVIL Imports
import SemesterSelectionCIVIL from './pages/subjects/civil/SemesterSelection';
import SubjectCIVIL_S1 from './pages/subjects/civil/s1.jsx';
import SubjectCIVIL_S2 from './pages/subjects/civil/s2.jsx';
import SubjectCIVIL_S3 from './pages/subjects/civil/s3.jsx';
import SubjectCIVIL_S4 from './pages/subjects/civil/s4.jsx';
import SubjectCIVIL_S5 from './pages/subjects/civil/s5.jsx';
import SubjectCIVIL_S6 from './pages/subjects/civil/s6.jsx';
import SubjectCIVIL_S7 from './pages/subjects/civil/s7.jsx';
import SubjectCIVIL_S8 from './pages/subjects/civil/s8.jsx';

// EEE Imports
import SemesterSelectionEEE from './pages/subjects/eee/SemesterSelection.jsx';
import SubjectEEE_S1 from './pages/subjects/eee/s1.jsx';
import SubjectEEE_S2 from './pages/subjects/eee/s2.jsx';
import SubjectEEE_S3 from './pages/subjects/eee/s3.jsx';
import SubjectEEE_S4 from './pages/subjects/eee/s4.jsx';
import SubjectEEE_S5 from './pages/subjects/eee/s5.jsx';
import SubjectEEE_S6 from './pages/subjects/eee/s6.jsx';
import SubjectEEE_S7 from './pages/subjects/eee/s7.jsx';
import SubjectEEE_S8 from './pages/subjects/eee/s8.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/branch-selection" element={<BranchSelection />} />

            {/* CS Routes */}
           <Route path="/subjects/cs" element={<SemesterSelectionCS />} />
           <Route path="/subjects/cs/sub1/alg" element={<LinearAlgebraAndCalculus />} />
           <Route path="/subjects/cs/sub1/chem" element={<Chemistry />} />
           <Route path="/subjects/cs/sub1/graphics" element={<Graphics />} />
           <Route path="/subjects/cs/sub1/bce" element={<Bce />} />
           <Route path="/subjects/cs/sub1/a1" element={<A1 />} />
           <Route path="/subjects/cs/sub1/a2" element={<A2 />} />
           <Route path="/subjects/cs/sub1/a3" element={<A3 />} />
           <Route path="/subjects/cs/sub1/a4" element={<A4 />} />
           <Route path="/subjects/cs/sub1/a5" element={<A5 />} />
           
        
            <Route path="/subjects/cs/s1" element={<SubjectCS_S1 />} />
            <Route path="/subjects/cs/s2" element={<SubjectCS_S2 />} />
            <Route path="/subjects/cs/s3" element={<SubjectCS_S3 />} />
            <Route path="/subjects/cs/s4" element={<SubjectCS_S4 />} />
            <Route path="/subjects/cs/s5" element={<SubjectCS_S5 />} />
            <Route path="/subjects/cs/s6" element={<SubjectCS_S6 />} />
            <Route path="/subjects/cs/s7" element={<SubjectCS_S7 />} />
            <Route path="/subjects/cs/s8" element={<SubjectCS_S8 />} />

            {/* ECE Routes */}
            <Route path="/subjects/ece" element={<SemesterSelectionECE />} />
            <Route path="/subjects/ece/s1" element={<SubjectECE_S1 />} />
            <Route path="/subjects/ece/s2" element={<SubjectECE_S2 />} />
            <Route path="/subjects/ece/s3" element={<SubjectECE_S3 />} />
            <Route path="/subjects/ece/s4" element={<SubjectECE_S4 />} />
            <Route path="/subjects/ece/s5" element={<SubjectECE_S5 />} />
            <Route path="/subjects/ece/s6" element={<SubjectECE_S6 />} />
            <Route path="/subjects/ece/s7" element={<SubjectECE_S7 />} />
            <Route path="/subjects/ece/s8" element={<SubjectECE_S8 />} />

            {/* MECH Routes */}
            <Route path="/subjects/mech" element={<SemesterSelectionMECH />} />
            <Route path="/subjects/mech/s1" element={<SubjectMECH_S1 />} />
            <Route path="/subjects/mech/s2" element={<SubjectMECH_S2 />} />
            <Route path="/subjects/mech/s3" element={<SubjectMECH_S3 />} />
            <Route path="/subjects/mech/s4" element={<SubjectMECH_S4 />} />
            <Route path="/subjects/mech/s5" element={<SubjectMECH_S5 />} />
            <Route path="/subjects/mech/s6" element={<SubjectMECH_S6 />} />
            <Route path="/subjects/mech/s7" element={<SubjectMECH_S7 />} />
            <Route path="/subjects/mech/s8" element={<SubjectMECH_S8 />} />

            {/* CIVIL Routes */}
            <Route path="/subjects/civil" element={<SemesterSelectionCIVIL />} />
            <Route path="/subjects/civil/s1" element={<SubjectCIVIL_S1 />} />
            <Route path="/subjects/civil/s2" element={<SubjectCIVIL_S2 />} />
            <Route path="/subjects/civil/s3" element={<SubjectCIVIL_S3 />} />
            <Route path="/subjects/civil/s4" element={<SubjectCIVIL_S4 />} />
            <Route path="/subjects/civil/s5" element={<SubjectCIVIL_S5 />} />
            <Route path="/subjects/civil/s6" element={<SubjectCIVIL_S6 />} />
            <Route path="/subjects/civil/s7" element={<SubjectCIVIL_S7 />} />
            <Route path="/subjects/civil/s8" element={<SubjectCIVIL_S8 />} />

            {/* EEE Routes */}
            <Route path="/subjects/eee" element={<SemesterSelectionEEE />} />
            <Route path="/subjects/eee/s1" element={<SubjectEEE_S1 />} />
            <Route path="/subjects/eee/s2" element={<SubjectEEE_S2 />} />
            <Route path="/subjects/eee/s3" element={<SubjectEEE_S3 />} />
            <Route path="/subjects/eee/s4" element={<SubjectEEE_S4 />} />
            <Route path="/subjects/eee/s5" element={<SubjectEEE_S5 />} />
            <Route path="/subjects/eee/s6" element={<SubjectEEE_S6 />} />
            <Route path="/subjects/eee/s7" element={<SubjectEEE_S7 />} />
            <Route path="/subjects/eee/s8" element={<SubjectEEE_S8 />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
