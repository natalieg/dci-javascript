import React, { Component } from 'react'
import User from './User'

export default class SearchResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                { id: 1, name: "Ali", email: "ali@dci.com" },
                { id: 2, name: "Peter", email: "peter@dci.com" },
                { id: 3, name: "Farhan", email: "farhan@dci.com" },
                { id: 4, name: "John", email: "egbert@dci.com" },
                { id: 5, name: "Rose", email: "lalonde@dci.com" },
            ]
        }
    }

    render() {
        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                 {
                     this.state.users.map((user) => {
                        return (
                            <User id={user.id} name={user.name} email={user.email} />
                        )
                     })
                }      
                </tbody>
                </table>
            </div>
        )
    }
}
