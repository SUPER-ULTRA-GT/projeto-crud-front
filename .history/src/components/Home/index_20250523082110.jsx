import Main from "../Main";
import Modal from "../Modal";
import Button from "../Button";
import Tasks from "../Tasks";
import { useEffect, useState } from "react";
import { API } from "../../services/api";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        API.get("/tarefas")
            .then(res => setTasks((res.data)))
    }, [])

    return (
        <Main>
            <div className="flex justify-between">
                <h1 className="text-4xl font-semibold">TAREFAS</h1>
                <Button
                    text="Nova Tarefa"
                />
                <Modal />
            </div>
            <Tasks listOfTasks={t}/>
        </Main>
    );
}

export default Home;
