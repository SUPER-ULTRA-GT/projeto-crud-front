const Button = ({ text, openModal }) => {
    return (
        <button
            type="button"
            className="bg-(--emphasis-color) text-white font-semibold text-xl py-2 px-4 rounded-3xl cursor-pointer"
            onClick={() => openModal()}
        >
            {text}
        </button>
    );
}

export default Button;