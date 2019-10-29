import React, { Component } from 'react'
import Drawing1 from './img/hobbies/draw1.png'
import Drawing2 from './img/hobbies/draw2.png'
import Drawing3 from './img/hobbies/draw3.png'
import Drawing4 from './img/hobbies/draw4.png'

import Game1 from './img/hobbies/game1.png'
import Game2 from './img/hobbies/game2.png'

export default class Hobbies extends Component {
    render() {
        return (
            <div className="Content Hobbies">
                <h2>My Hobbies</h2>
                <h3>Drawing</h3>
                <div className="HobbieLine">
                    <img src={Drawing1}></img>
                    <img src={Drawing2}></img>
                    <img src={Drawing3}></img>
                    <img src={Drawing4}></img>
                </div>
                <h3>Gaming</h3>
                <div className="HobbieLine">
                    <img src={Game1}></img>
                    <img src={Game2}></img>
                </div>
                <h3>Exercise</h3>
                <div className="HobbieLine"></div>
            </div>
        )
    }
}
