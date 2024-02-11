import './App.css';
import Api from './Components/Api';
import Foot from './Components/Foot';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Api/>
      <Foot/>
    </div>
  );
}

export default App;
