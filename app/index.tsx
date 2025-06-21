import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoForm from "../component/ToDoForm";
import ToDoList from "../component/ToDoList";

const App = () => {
  {
    /* Part A: Initialize the state with a list of tasks */
  }
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <SafeAreaView>
      {/* Part B1: Pass Task using Props */}
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
};

export default App;
