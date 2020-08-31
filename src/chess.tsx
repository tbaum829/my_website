import React from 'react'
import { Link } from "react-router-dom";
import { Board } from './board';

export default class Chess extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='home-spacing'>
                    <header className='home-header'>
                        Chess
                    </header>
                </div>
                <div className='home-spacing'>
                    <Board />
                </div>
                <div>
                    <Link to='/'>
                        <button className='button1'>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}