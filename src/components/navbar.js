import React from "react";

function Navbar(){
    return(
        <div className="nav-container">
            <img className="nav-logo-img" src="./media/bucket.png" alt="img-logo" />
            <p className="nav-logo">CornerStore</p>
            <ul className="nav-list">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Products</a></li>
                <li className="nav-item"><a href="#">Services</a></li>
                <li className="nav-item"><a href="#">Contact Us</a></li>
            </ul>
            <img className="nav-user" src="./media/download.png" alt="user-logo" />
        </div>
    );
}

export default Navbar;