"use client"

const Button = () => {
    return (
        <button
            className="bg-green-500 rounded-sm px-4 py-1 text-white cursor-pointer"
            onClick={() => console.log("I have click here")}
        >
            Click here
        </button>
    );
};

export default Button;