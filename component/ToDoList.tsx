import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type ToDoListProps = {
  tasks: string[];
};

{
  /* Part B2: Display the task list */
}
function ToDoList({ tasks }: ToDoListProps) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
  },
});
export default ToDoList;
