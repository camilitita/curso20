import React from 'react';
import propTypes from 'prop-types';

function Button({texto = "Boton", className}){
    return(
        <button className={`p-2 rounded-md bg-blue-200 cursor-pointer ${className}`}>
            {texto}
        </button>
    )
}

Button.propTypes = {
    className: propTypes.string,
    texto: propTypes.string
}

export default Button;