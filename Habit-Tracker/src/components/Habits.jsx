import React from "react";
import { useState, useEffect } from "react";

function Habits() {
  const storedHabits = JSON.parse(localStorage.getItem("Habits"));
  const initialHabits = storedHabits || [""];
  const [Habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState("");
  const myList = Habits.map((item, index) => <p key={index}>{item}</p>);

  const createHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...Habits, newHabit]);
      setNewHabit("");
    }
  };

  const removeHabit = () => {
    if (Habits.length > 0) {
      const updateHabits = Habits.slice(0, -1);
      setHabits(updateHabits);
    }
  };

  useEffect(() => {
    localStorage.setItem("Habits", JSON.stringify(Habits));
  }, [Habits]);

  return (
    <>
      <h1>Habits being tracked</h1>
      <div>{myList}</div>

      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={createHabit}
        >
          Add Habit
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-dark" onClick={removeHabit}>
        Remove
      </button>
    </>
  );
}

export default Habits;
