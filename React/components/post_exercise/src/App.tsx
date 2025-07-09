import { useEffect, useState } from "react";

type Todo = {
  id: string;
  description: string;
};

const newTodo = async (newDescription: Todo["description"]): Promise<Todo> => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description: newDescription, done: false }),
  });

  if (!response.ok) {
    throw new Error("Failed to add new todo");
  }

  return await response.json();
};

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("http://localhost:3000/todos");
  return await response.json();
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const handleAddTodo = async () => {
    if (!inputValue.trim()) return; 

    try {
      const newTask = await newTodo(inputValue.trim());
      setTodos((prev) => [...prev, newTask]); 
      setInputValue(""); 
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <>
      <h1>Todos:</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
