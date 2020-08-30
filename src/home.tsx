import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>Welcome Home!</h2>
            <Link to='/chess'>Chess</Link>
        </div>
    );
}