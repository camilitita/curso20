import React from 'react';
import propTypes from 'prop-types';


function ButtonP ({ children, onClick, type = 'button' }) {
    return (
        <button onClick={onClick} type={type} className="w-full bg-rickgreen hover:bg-black text-black hover:text-white font-handjet p-2 text-xl rounded
        font-medium transition-all">
            {children}
        </button>
    );
}

ButtonP.propTypes = {
    children: propTypes.node.isRequired,
    onClick: propTypes.func,
    type: propTypes.oneOf(['button', 'submit', 'reset']),
};

export default ButtonP;