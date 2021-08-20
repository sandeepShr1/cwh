import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';

function App() {
  return (
   <div>
     <Navbar title="TextUtils" />
     <TextForm heading="Enter your text here!" />
   </div>
  );
}

export default App;
