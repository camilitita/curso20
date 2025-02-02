import Title from "../general/Title";
import Subtitle from "../general/Subtitle";
import propTypes from "prop-types";
import React from "react";

/**
 * @component Hero
 * @description Componente Hero, muestra el titulo y el autor
 * @param {String} title Titulo del articulo
 * @param {String} author Autor del articulo.
 * @param {String} background Imagen de fondo.
 */

function Hero({ title = "", author = "", background = "" }) {
  return (
    <section className={`flex flex-col gap-8 items-center justify-center bg-opacity-10 bg-[url('${background}')] min-h-[80vh] bg-cover bg-center`}>
      <Title text={title} />
      <Subtitle text={author} />
    </section>
  );
}

Hero.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
};

export default Hero;