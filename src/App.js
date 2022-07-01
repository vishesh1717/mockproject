
import './App.css';
import Homepage from './component/Homepage';

import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

function App() {
  // let users = [{
  //   email: "vishesh",
  //   role: "admin"
  // }]

  return (
    <div className="App">
      <Navbar />
      <hr style={{ "fontSize": "20px", "margin": "15px 0px 0px 0px " }} />
      <div className="aside">
        <Sidebar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
