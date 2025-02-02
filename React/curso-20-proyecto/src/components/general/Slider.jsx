import React from "react";

function Slider(){
    return (
        <section>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )

}

function Card(){
    return (
        <div>
            <h2>Title</h2>
            <p>Paragraph</p>
        </div>
    )
}

export default Slider;