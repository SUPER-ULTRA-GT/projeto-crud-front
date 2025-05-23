import { useEffect, useState } from "react";
import closeModal from "/src/assets/x.png";

const Modal = () => {
    const [form, setForm] = useState(initialData || {
        title: "",
        description: ""
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                title: initialData.title || "",
                description: initialData.description || ""
            });
        } else {
            setForm({ title: "", description: "" });
        }
    }, [initialData]);

    return (
        <>
            <section className={`flex items-center justify-center w-full h-full fixed top-0 left-0 z-10 bg-(--overlay-color) 
            ${isOpen ? ' opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                <div className="w-100 bg-white p-4 rounded-xl fixed z-20">
                    <form className="flex flex-col">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-2xl text-(--secondary-text) mb-6">Criar Tarefa</h3>
                            <img
                                src={closeModal}
                                alt="icone de um 'x' para fechar"
                                className="w-6 h-fit cursor-pointer hover:scale-110"

                            />
                        </div>
                        <label htmlFor="title">Titulo</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full h-8 border-solid border-2 border-(--primary-color)"
                            required
                            value={form.title}
                            onChange={e => setForm({ ...form, title: e.target.value })}
                        />
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            id="description"
                            className="w-full h-32 border-solid border-2 border-(--primary-color)"
                            required
                            value={form.description}
                            onChange={e => setForm({ ...form, description: e.target.value })}
                        />
                        <button
                            type="button"
                            className="mt-3 bg-(--emphasis-color) font-semibold text-xl py-1 px-4 rounded-3xl text-white"
                            onClick={() => newTask(form)}
                        >
                            {initialData ? "Atualizar" : "Criar"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Modal;