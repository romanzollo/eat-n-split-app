function Button({ children, onClick }) {
    return (
        // добавляем в компонент кнопки onClick чтобы можно было нажать на кнопку (ОБЯЗАТЕЛЬНО!!!)
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
