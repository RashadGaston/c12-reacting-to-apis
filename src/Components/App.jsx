import React from 'react';
import "isomorphic-fetch";
import "es6-promises";
import { v4 as uuidv4 } from 'uuid';
import FilmCard from "./FilmCard";
import PersonCard from "./PersonCard"
import GhibliLogo from "../assets/logo.png";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            loadFilms: false,
            people: [],
            loadPeople: false
        }

        this.handleFetchAndRenderFilms = this.handleFetchAndRenderFilms.bind(this);
        this.handleFetchAndRenderPeople = this.handleFetchAndRenderPeople.bind(this);
    }

    handleFetchAndRenderFilms() {
        fetch("https://ghibliapi.herokuapp.com/films/")
            .then(res => res.json())
            .then(res => this.setState({ films: res, loadFilms: true }))
            .catch(err => console.log(err));
    }

    handleFetchAndRenderPeople() {
        fetch("https://ghibliapi.herokuapp.com/people/")
            .then(res => res.json())
            .then(res => this.setState({ people: res, loadPeople: true }))
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.loadFilms) {
            return (
                <>
                    <img src={GhibliLogo} alt="Studio Ghibli Logo" />
                    <h1 className="m-2">Ghibli Fun Facts</h1>
                    <div className="container">
                        {this.state.films.map(film => <FilmCard film={film} key={uuidv4()} />)}
                    </div>
                </>
            )
        } else if (this.state.loadPeople) {
            return (
                <>
                    <img src={GhibliLogo} alt="Studio Ghibli Logo" />
                    <h1 className="m-2">Ghibli Fun Facts</h1>
                    <div className="container">
                        {this.state.people.map(person => <PersonCard person={person} key={uuidv4()} />)}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <img src={GhibliLogo} alt="Studio Ghibli Logo" />
                    <h1 className="m-2">Ghibli Fun Facts</h1>
                    <div className="container">
                        <button className="btn btn-info mx-1" onClick={this.handleFetchAndRenderFilms}>Load Films</button>
                        <button className="btn btn-info mx-1" onClick={this.handleFetchAndRenderPeople}>Load People</button>
                    </div>
                </>
            )
        }
    }
}

export default App