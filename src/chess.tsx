import React from 'react'
import { Link } from "react-router-dom";

function Square(props: { number: number; }) {
    return (
        <>
            {props.number % 2 && Math.floor(props.number / 8) % 2
            ? <button className="square-white" />
            : props.number % 2
            ? <button className="square-black" />
            : Math.floor(props.number / 8) % 2
            ? <button className="square-black" />
            : <button className="square-white" />}
        </>
    );
  }

export default class Chess extends React.Component {
    renderSquare(n: number) {
        return <Square number={n}/>;
    }

    render() {
        const rows = Array.from(Array(8).keys());
        const cols = Array.from(Array(8).keys());

        return (
            <div className='home'>
                <div className='home-spacing'>
                    <header className='home-header'>
                        Chess
                    </header>
                </div>
                <div className='home-spacing'>
                    {rows.map((row) =>
                        <div className="board-row">
                            {cols.map((col) => 
                                this.renderSquare(row*8+col)
                            )}
                        </div>
                    )}
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