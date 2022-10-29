
// import './App.css';
import ThisWeekCard from "./components/cards/ThisWeekCard";
import TopSeller from "./components/TopSeller";
import ThisWeek from "./components/ThisWeek";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <ThisWeek/>
      <TopSeller/>
    </div>
  );
}

export default App;
