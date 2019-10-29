import React from 'react'
import MyImage from './img/me.jpg'

export default function Me() {
    return (
        <div className="Content">
            <h2>This is Me</h2>
            <img className="UserImage" src={MyImage}></img>
            <p>My name is Natalie and I am 33 years old</p>
            <p>I was born in Damme 1986. Where I lived until I was 20 I guess.</p>
            <p>I moved to Hamburg 2006 where I visited the HTK (Hamburger Technische Kunstschule).</p>
            <p>I studied at the University of Hamburg and look what it got me. Nothing. That's what.</p>
            <p>Now I'm at the DCI where I'm living my best live with my best friend forever Peter!!
            He is so nice. He almost never says something mean. And also he likes white corn.</p>
            <p>And here is another line oh yes.</p>
            <h3>Some Websites I use a lot:</h3>
            <p><a href="">Deviantart</a></p>
            <p><a href="">Google</a></p>
            <p><a href="">tumblr.com</a></p>
        </div >
    )
}
