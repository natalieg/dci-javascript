import React, { Component } from 'react'

export default class Videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            isLoading: false,
            fetchedData: []
        }
    }
    static getDeriverStateFromProps(state, props) {
        if (state.url !== props.url) {
            return (state.url = props.url)
        } else {
            return null
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        let url = this.state.url;
        console.log('URL before Fetch', url);
        fetch(url)
            .then((res) => {
                console.log('Fetch Response: ', res);
                return res.json();
            })
            .then((data) => {
                console.log(data.hits);
                this.setState({ fetchedData: data.hits, isLoading: false })
            })
    }
    render() {
        let video_array = null;
        if (this.state.fetchedData.length > 0) {
            console.log(this.state.fetchedData)
            video_array = this.state.fetchedData.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.id}</p>
                    </div>
                )
            }
            )
        }
        return (
            { video_array }
        )
    }
}

