import React from "react"
import propTypes from "prop-types";

/**
 * @component Paragraph
 * @description Componente que renderiza un párrafo
 * @param {string} children Texto del párrafo
 * @param {string} classes Clases adicionales para el párrafo
 */
function Paragraph({ children, classes }) {
  return <p className={`text-xl font-light ${classes}`}>{children}</p>;
}

Paragraph.propTypes = {
  children: propTypes.string.isRequired,
  classes: propTypes.string,
};

export default Paragraph;