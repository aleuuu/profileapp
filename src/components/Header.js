import React from "react";
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <div className="header">
            <h2>-TOPO</h2>
            <ul>
                <Link to='/1'><li>Lorem</li></Link>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
            </ul>
        </div>
    )
}

export default Header