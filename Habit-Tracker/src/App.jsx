import react from "react";
import "./App.css";
import Habits from "./components/Habits";

function App() {
  return (
    <>
      <h1 className="title">Habit Tracker</h1>
      <div className="container">
        <Habits />
      </div>
    </>
  );
}

export default App;
