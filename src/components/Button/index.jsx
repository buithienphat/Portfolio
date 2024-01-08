import React from "react";

const Button = ({ children }) => {
    return (
        <button className="bg-[#14C25C] h-[50px] px-[30px] rounded-xl uppercase tracking-tight">
            {children}
        </button>
    );
};

export default Button;
