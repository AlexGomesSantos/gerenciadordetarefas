import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar matemática",
      description: "Estudar os assuntos de funções e limites",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar física",
      description: "Estudar os assuntos de cinemática e dinâmica",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar química",
      description: "Estudar os assuntos de átomos e moléculas",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
