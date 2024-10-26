import React from "react";
import './Skills.css'

function Skills() {
    return (
        <div class="container">
            <div class="header">
                <h1>Master In-Demand Skills Today</h1>
            </div>
            <div class="paragraph">
                <p>The information that is needed according to this screenshot. Unfortunately I don't understand the language and therefore I cannot put anything here.</p>
            </div>
            {/* <div class="table-container">
                <div class="outer">
                    <div>
                        <p>Fundmental of Software skills</p>
                        <p>Introduction to trending technologies</p>
                        <p>Tutorials in web development</p>
                    </div>
                    <div>
                        <button>Explore more</button>
                        <button>Beginner's Level</button>
                        <button>Beginner's Level</button>
                    </div>
                </div>
            </div> */}

            <div class="containing">
                <div class="contentz">
                    <div class="item">Fundamental of Software skills</div>
                    <div class="item">Introduction to trending technologies</div>
                    <div class="item">Tutorials in web development</div>
                </div>
                <div class="buttons">
                    <button class="blue-button">Explore more</button>
                    <button class="blue-button">Beginner's Level</button>
                    <button class="blue-button">Beginner's Level</button>
                </div>
            </div>
        </div>
    )
}

export default Skills