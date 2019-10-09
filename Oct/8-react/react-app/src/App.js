import React, { Component } from 'react';
import './App.css';
import Persons from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Mari", job: "3D Artist", age: "34" },
      { name: "Tobi", job: "Author", age: "24" },
      { name: "Daven", job: "Musician", age: "26", class:"vip" },
      { name: "Garu", job: "Musician", age: "28" }
    ]
  }

  changeContent = () => {
    console.log("Change Content");
    document.querySelector("body").style.background= "#ccc";
    this.setState({
      persons: [
        { name: "Mia", job: "Yoga Teacher", age: "24"},
        { name: "Ramona", job: "Photographer", age: "26" },
        { name: "Saine", job: "Student", age: "18" },
        { name: "Noah", job: "Youtuber", age: "18" }
      ]
    })
  }

  addContent = () => {
   document.getElementById("more").innerHTML +=
   <Persons name="Mansour" job="Destroyer" age="28"/>;
  }

  render() {
    const style = {
      border: "1px solid black",
      padding: "10px",
      margin: "5px",
      cursor: "pointer",
      fontWeight: "bold"

    }
    return (
      <div className="App" id="app">
        <div class="action">
          <button style={style} onClick={this.changeContent}>Change Content</button>
          <button style={style} onClick={this.addContent}>More</button>
        </div>

        <Persons name="Mansour" job="Destroyer" age="28" class="vip"/>
        <Persons name="Linda" job="HR" age="22"/>
        <Persons name="Bernd" job="Knowitall" age="44" />
        <Persons name="Farhan" job="Developer" age="12" />
        <Persons name="Peter" job="Expert of Many Things" age="28" class="vip"/>

        <Persons name={this.state.persons[0].name} job={this.state.persons[0].job} age={this.state.persons[0].age}/>
        <Persons name={this.state.persons[1].name} job={this.state.persons[1].job} age={this.state.persons[1].age}/>
        <Persons name={this.state.persons[2].name} job={this.state.persons[2].job} age={this.state.persons[2].age} class={this.state.persons[2].class}/>
        <Persons name={this.state.persons[3].name} job={this.state.persons[3].job} age={this.state.persons[3].age}/>

      <div id="more"></div>
      </div>
    );
    // return React.createElement('div', {className: "App"},
    //   React.createElement('h1', null, 'This is React'),
    //   "More Text");
  }
}

export default App;
