import "./App.css";
import { AddToDo } from "./components/AddToDo.jsx";
import { TodoList } from "./components/TodoList.jsx";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    //jeito recomendo de carregar do localStorage, usando função de inicialização do useState para evitar leitura desnecessária em cada renderização

    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    console.log("Lista de tarefas atualizada:", todos);
  }, [todos]);

  //Jeito antigo de carregar do localStorage

  //Carregar do localStorage quando o app abrir
  // useEffect(() => {
  //   const tarefasSalvas = localStorage.getItem("tarefas");
  //   if (tarefasSalvas) {
  //     setTodos(JSON.parse(tarefasSalvas));
  //   }
  // }, []);

  //Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <div className='container'>
      <h1 className='app-title'>Lista de Tarefas</h1>
      {/* componente - Input botão */}
      <AddToDo onAddTodo={addTodo} />

      {/* componente - Lista de componentes */}
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
