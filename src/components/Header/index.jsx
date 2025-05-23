import logo from "/src/assets/logo.png"

const Header = () => {
    return (
        <header className="bg-(--secondary-color) px-16 pt-10 pb-8 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <img
                    src={logo}
                    alt="Logo do site"
                    className="w-16 rounded-full"
                />
                <h2 className="text-3xl font-bold text-(--primary-color)">TO DO LIST</h2>
            </div>
            <input
                type="text"
                placeholder="Digite a tarefa que você busca"
                className="px-6 bg-white w-100 rounded-3xl h-12 focus:placeholder:text-transparent outline-0"
            />

        </header>
    );
}

export default Header;