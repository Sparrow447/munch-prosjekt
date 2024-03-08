import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import InformationScreen from "./pages/InformationScreen";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<InformationScreen />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
