import { Routes, Route } from 'react-router-dom';
import RegistrationPage from "./component/RegistrationPage";
import SubmittedPage from "./component/SubmittedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/submitted" element={<SubmittedPage />} />
    </Routes>
  );
}

export default App;
