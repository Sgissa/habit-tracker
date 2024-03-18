import react from "react";
import "./App.css";
import Habits from "./components/habits";
import Sidebar from "./components/sidebar";
import "semantic-ui-css/semantic.min.css";
import { Grid, Header } from "semantic-ui-react";

function App() {
  return (
    <>
      <Grid>
        <Grid.Column width={3}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={8} style={{ marginLeft: "-40px" }}>
          <Header as="h1" icon="book" content="Habit Tracker" style={{}} />
          <div className="container">
            <Habits />
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
