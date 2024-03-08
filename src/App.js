import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import InformationScreen from "./pages/InformationScreen";
import TermsPage from "./pages/TermsPage";
import CapturePage from "./pages/CapturePage";
import ProcessingPage from "./pages/ProcessingPage";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<InformationScreen />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/capture" element={<CapturePage />} />
            <Route path="/processing" element={<ProcessingPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
