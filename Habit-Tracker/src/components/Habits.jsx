import React from "react";

function Habits() {
  const Habits = ["gym", "meditate", "dance"];
  const myList = Habits.map((item) => <p>{item}</p>);

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
        >
          Add Habit
        </button>
        <input type="text" class="form-control" placeholder="habit..." />
      </div>
    </>
  );
}

export default Habits;
