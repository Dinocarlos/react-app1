import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome name="Carlos" />
      <Navbar />
    </div>
  );
}

export default App;
