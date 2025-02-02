import propTypes from "prop-types"
import React from "react";

/**
 * @component Title
 * @description Componente que renderiza un título
 * @param {String} text Texto del título
 * @param {String} classes Clases adicionales para el título
 */

function Title({ text, classes }) {
  return <h1 className={`font-bold text-4xl ${classes}`}>{text}</h1>;
}

Title.propTypes = {
  text: propTypes.string.isRequired,
  classes: propTypes.string,
};

export default Title;