import React from 'react';

const FilmCard = props => {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
                <h2 className="card-title">{props.film.title}</h2>
                <p className="card-text">{props.film.description}</p>
                <a href={props.film.url}>
                    <button className="btn btn-sm btn-dark">See Raw Data</button>
                </a>
            </div>
        </div>
    )
}

export default FilmCard