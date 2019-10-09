import React from 'react';

function NaviItem(vari){
    return (
        <li className="naviItem">
           <a href={vari.link}>{vari.name}</a>
        </li>
    )
}

export default NaviItem;