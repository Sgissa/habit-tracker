import React from "react";
import { useState } from "react";

function Habits() {
  const initialHabits = ["gym", "meditate", "dance"];
  const [Habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState("");
  const myList = Habits.map((item) => <p>{item}</p>);

  const createHabit = () => {
    if (newHabit !== "") {
      setHabits([...Habits, newHabit]);
      setNewHabit("");
    }
  };

  console.log(Habits);

  return (
    <>
      <h1>Habits being tracked</h1>
      <div>{myList}</div>

      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={createHabit}
        >
          Add Habit
        </button>
        <input
          type="text"
          class="form-control"
          placeholder="habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
      </div>
    </>
  );
}

export default Habits;
