import propTypes from "prop-types";
import Subtitle from "./../general/Subtitle";
import React from "react";

/**
 * @component Article
 * @description Componente que renderiza un artículo
 * @param {String} title Título del artículo
 * @param {Node} children Contenido del artículo
 */
function Article({ children, title = "Title" }) {
  return (
    <article className="px-8 flex flex-col gap-4 py-8">
      <Subtitle text={title}  classes="text-center "/>
      {children}
    </article>
  );
}

Article.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string,
};

export default Article;