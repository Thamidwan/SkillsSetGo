import React from "react";
import './Skills.css';

function Skills() {
    return (
        <div className="container">
            <div className="header">
                <h1>Master In-Demand Skills Today</h1>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione"
                </p>
            </div>

            <div className="table-container">
                <div className="content">
                    <div className="item">Fundamental of Software Skills</div>
                    <div className="item">Introduction to Trending Technologies</div>
                    <div className="item">Tutorials in Web Development</div>
                </div>
                <div className="buttons">
                    <button className="blue-button">Explore More</button>
                    <button className="blue-button">Beginner's Level</button>
                    <button className="blue-button">Beginner's Level</button>
                </div>
            </div>
        </div>
    );
}

export default Skills;
