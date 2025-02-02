import React from "react"
import propTypes from "prop-types";
import { NavBar, Hero, Article, Paragraph } from "./../components/components";

function Test() {
    return (
        <>
            <NavBar />
            <Hero
            title="DOOM CORRE EN UN PDF"
            author="Juan Rodriguez"
            background="https://www.elespectador.com/resizer/v2/VKZMRRB6YNHJDFHEOD23G2XVIY.jpeg?auth=25c2995753613f8bfe1b9dcbee7d15b9557ce3231241ffe80f8d6abe9a1d16d0&width=920&height=613&smart=true&quality=60"
        />
        <Article title="DOOM CORRE EN UN PDF">
            <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quae iusto laboriosam itaque vel voluptatum amet eveniet eaque
            repellat aperiam iste perferendis eius, nostrum, quasi in error nulla,
            sint quisquam.
            </Paragraph>
            <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quae iusto laboriosam itaque vel voluptatum amet eveniet eaque
            repellat aperiam iste perferendis eius, nostrum, quasi in error nulla,
            sint quisquam.
            </Paragraph>
            <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quae iusto laboriosam itaque vel voluptatum amet eveniet eaque
            repellat aperiam iste perferendis eius, nostrum, quasi in error nulla,
            sint quisquam.
            </Paragraph>
        </Article>
        </>
    );
    }

    export default Test;