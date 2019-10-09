import React from 'react';

function Header(vari){
    return (
        <div className="header" style={{height: vari.height + "px"}}>
          <div className="headerContent">
            <h1>{vari.name}</h1>
            <p>{vari.desc}</p>
            </div>
        </div>
    )
}

export default Header;