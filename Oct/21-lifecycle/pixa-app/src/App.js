import React, { Component } from 'react';
import InputField from './Components/InputField';
import Videos from './Components/videos'
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      root: 'https://pixabay.com/api/videos/', 
      key: '12628039-01d460cdb39c78d946b57a78f',
      query: '',
      url: '',
      letSearch: false,
      loadedVideos: null
    }
  }

  saveQuery = (e) => {
    this.setState({query:e.target.value, letSearch:false});
  }
  searchVideos = () => {
    let words = this.state.query.split(' ');
    //console.log(words);
    let newUrl = this.state.root + '?key=' + this.state.key + '&q=';
    words.forEach(word => {
      newUrl += word + '+'
    });
    newUrl = newUrl.substr(0, newUrl.length - 1);
    this.setState({url:newUrl, loadedVideos: null, letSearch:true})
    //console.log(newUrl);

  }
  loadVideo = () => {
    let newVideos = <Videos url={this.state.url} />
    this.setState({
      loadedVideos:newVideos, letSearch:false
    })
  }

  render() {
    if(this.state.letSearch){
      this.loadVideo();
 
    }
    return (
      <div>
        <InputField change={this.saveQuery} click={this.searchVideos}/>
      </div>
    )
  }
 }