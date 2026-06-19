import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInput("");
  };
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id != id));

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Todo</h1>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter your todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={handleSubmit}
            style={input.trim() === "" ? styles.buttonDisabled : styles.button}
            disabled={input.trim() === ""}
          >
            Submit
          </button>
        </div>
        <ul style={styles.ul}>
          {todos.map(({ text, id }) => {
            return (
              <li key={id} style={styles.li}>
                <span style={styles.span}>{text}</span>
                <button
                  onClick={() => removeTodo(id)}
                  style={styles.deleteButton}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    paddingTop: "20px",
  },
  content: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    color: "#333",
    marginBottom: "24px",
    fontSize: "28px",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "16px",
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    fontFamily: "inherit",
  },
  button: {
    padding: "10px 24px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "20px 0 0 0",
    width: "100%",
  },
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    marginBottom: "8px",
    transition: "all 0.2s",
  },
  span: {
    flex: 1,
    color: "#333",
    fontSize: "14px",
    wordBreak: "break-word",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "12px",
    transition: "background-color 0.2s",
  },
  buttonDisabled: {
    padding: "10px 24px",
    backgroundColor: "#cccccc",
    color: "#666666",
    border: "none",
    borderRadius: "4px",
    cursor: "not-allowed",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
};

export default Todo;
