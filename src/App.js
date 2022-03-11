import './App.css';
import Header from "./components/Header/Header";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import ChoiceHoliday from "./components/ChoiceHoliday/ChoiceHoliday";
import Inclusive from "./components/Inclusive/Inclusive";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <FirstBlock />
      <ChoiceHoliday />
      <Inclusive />
        <Footer />
    </div>
  );
}

export default App;
