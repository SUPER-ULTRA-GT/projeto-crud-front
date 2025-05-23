import { useEffect, useState } from "react";
import Main from "../Main";
import Modal from "../Modal";
import Button from "../Button";
import Tasks from "../Tasks";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        API.get("/tarefas").then(res => setTasks(res.data));
    }, []);

    const createTask = async (form) => {
        const { data } = await API.post("/tarefas", form);
        setTasks(prev => [...prev, data]);
        closeModal();
    }

    const deleteTask = async (id) => {
        await API.delete(`/tarefas/${id}`);
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    const handleEditTask = (task) => {
        setEditingTask(task);
        setIsOpen(true);
    }

    const updateTask = async (id, form) => {
        const { data } = await API.put(`/tarefas/${id}`, form);
        setTasks(prev => prev.map(task => task.id === id ? data : task));
        closeModal();
    }

    const closeModal = () => {
        setIsOpen(false);
        setEditingTask(null);
    }

    return (
        <Main>
            <div className="flex justify-between">
                <h1 className="text-4xl font-semibold">TAREFAS</h1>
                <Button
                    text="Nova Tarefa"
                    openModal={() => setIsOpen(true)}
                />
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    newTask={editingTask ? (form) => updateTask(editingTask.id, form) : createTask}
                    initialData={editingTask}
                />
            </div>
            <Tasks
                listOfTasks={tasks}
                onDelete={deleteTask}
                onEdit={handleEditTask}
            />
        </Main>
    );
}

export default Home;
