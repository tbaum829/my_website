import React from 'react'

interface SquareProps {
    row: number;
    col: number;
    pieceImg: string;
    pieceName: string;
    onClick: () => void;
}

interface SquareState {
    row: number,
    col: number,
    color: string;
    pieceImg: string;
    pieceName: string;
    onClick: () => void;
}

export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
        const color = props.row % 2 && props.col % 2
            ? "square-white"
            : props.row % 2
            ? "square-green"
            : props.col % 2
            ? "square-green"
            : "square-white";
        
        this.state = {
            row: props.row,
            col: props.col,
            color: color,
            pieceImg: props.pieceImg,
            pieceName: props.pieceName,
            onClick: props.onClick,
        };
    }

    render() {
        return (
            <button className={this.state.color} onClick={this.state.onClick}>
                <img src={this.state.pieceImg} alt={this.state.pieceName} />
            </button>
        );
    }
}
