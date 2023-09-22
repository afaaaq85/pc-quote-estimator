import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { AuthProvider, useAuth } from '../src/AuthContext'; // Import AuthProvider and useAuth

function App() {

  return (
    <AuthProvider>
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<HomeProtected />} />
          <Route path="/home" element={<HomeProtected />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  </AuthProvider> 

  );
}

export default App;

function HomeProtected() {
  const { isAuthenticated } = useAuth(); 
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <Home />;
}

