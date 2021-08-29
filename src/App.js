import './App.css';
// import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';

function App() {
  return (
   <div>
     <Navbar title="TextUtils" />
     <TextForm heading="Enter your text here!" />
     {/* <About /> */}
   </div>
  );
}

export default App;
