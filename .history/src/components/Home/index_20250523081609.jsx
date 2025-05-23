import Main from "../Main";
import Modal from "../Modal";
import Button from "../Button";
import Tasks from "../Tasks";
import { useEffect } from "react";
import { API } from "../../services/api";

const Home = () => {
    useEffect(() => {
        API.get
    })

    return (
        <Main>
            <div className="flex justify-between">
                <h1 className="text-4xl font-semibold">TAREFAS</h1>
                <Button
                    text="Nova Tarefa"
                />
                <Modal />
            </div>
            <Tasks/>
        </Main>
    );
}

export default Home;
