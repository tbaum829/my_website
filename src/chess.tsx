import React from 'react'
import { Link } from "react-router-dom";

export default function Chess() {
    return (
        <div>
            <h2>Welcome to Chess!</h2>
            <Link to='/'>Home</Link>
        </div>
    );
}