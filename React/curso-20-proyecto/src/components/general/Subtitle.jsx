import propTypes from 'prop-types'
import React from "react";

/**
 * @component Subtitle
 * @description Componente que renderiza un subtítulo
 * @param {String} text Texto del subtítulo
 * @param {String} classes Clases adicionales para el subtítulo
 */
function Subtitle({ text = "", classes = "" }) {
  return <h2 className={`text-2xl font-semibold ${classes}`}>{text}</h2>;
}

Subtitle.propTypes = {
  text: propTypes.string.isRequired,
  classes: propTypes.string,
};

export default Subtitle;