import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import InformationScreen from "./pages/InformationScreen";
import TermsPage from "./pages/TermsPage";
import CapturePage from "./pages/CapturePage";
import ProcessingPage from "./pages/ProcessingPage";
import FaceNotDetectedPage from "./pages/FaceNotDetectedPage";
import FeedbackPage from "./pages/FeedbackPage";
import PageContainer from "./components/PageContainer";

function App() {
  return (
      <Router>
        <PageContainer>
          <Routes>
            <Route path="/" element={<InformationScreen />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/capture" element={<CapturePage />} />
            <Route path="/processing" element={<ProcessingPage />} />
            <Route path="/noface" element={<FaceNotDetectedPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </PageContainer>
      </Router>
  );
}

export default App;
