import React from 'react';

const TitleHead = ({ name, tagLIne, button }) => {
    return (
        <div className="text-center">
            <p> {name}</p>
            <h1 className="font-rancho">{tagLIne}</h1>
            {
                button &&
                <button className="btn btn-warning">Add Coffee</button>
            }
        </div>
    );
};

export default TitleHead;