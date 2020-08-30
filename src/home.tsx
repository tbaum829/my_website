import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='home'>
            <div className='home-spacing'>
                <header className='home-header'>
                    Tyler Baumgartner
                </header>
            </div>
            <div>
                <Link to='/chess'>
                    <button className='button1'>
                        Chess
                    </button>
                </Link>
            </div>
        </div>
    );
}