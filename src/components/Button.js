const Button = ({ disabled, color, text, onClick }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
            {text}
        </button>
    )
}

export default Button