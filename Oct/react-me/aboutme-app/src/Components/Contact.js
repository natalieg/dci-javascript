import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="Content">
                <h2>Write me</h2>
                <form>
                    <label>Your Name</label>
                    <input />
                    <label>Your Email</label>
                    <input />
                    <label>Your Message</label>
                    <textarea />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
