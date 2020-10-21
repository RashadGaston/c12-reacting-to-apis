import React from 'react';

const PersonCard = props => {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
                <h2 className="card-title">{props.person.name}</h2>
                <p className="card-text">{props.person.age}</p>
                <a href={props.person.url}>
                    <button className="btn btn-sm btn-dark">See Raw Data</button>
                </a>
            </div>
        </div>
    )
}

export default PersonCard