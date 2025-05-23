import trash from "/src/assets/trash.png";
import edit from "/src/assets/edit.png";

const Tasks = ({ listOfTasks }) => {
    return (
        <section className="flex justify-center">
            <ul className="grid grid-cols-3 mt-9 gap-5">
                {listOfTasks.map(task => (
                    <li
                        key={task.id}
                        className="w-72 p-4 bg-white shadow h-60 flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-2">
                            <h5 className="text-2xl mb-4 font-bold text-(--primary-text)">{task.title}</h5>
                            <p className="ml-2 text-(--secondary-text)">{task.description}</p>
                        </div>
                        <div className="flex justify-between cursor-pointer items-baseline">
                            <img
                                src={edit}
                                alt="Imagem de um lapis com um papel para editar"
                                className="w-6"
                            />
                            <img
                                src={trash}
                                alt="Imagem de um lixo para excluir"
                                className="w-6"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Tasks;