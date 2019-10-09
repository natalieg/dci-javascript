import React from 'react';

function Content(vari){
    return (
        <div id={vari.id} className="section">
          <h3>{vari.title}</h3>
          {/* <img className="contentImage" alt="Article" src={vari.src}/> */}
          <p className="subtitle">{vari.subtitle}</p>
          <p className="content">{vari.content}</p>
        </div>
    )
}

export default Content;