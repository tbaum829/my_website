import React from 'react'

interface SquareProps {
    row: number;
    col: number;
    pieceImg: string;
    pieceName: string;
}

interface SquareState {
    color: string;
    pieceImg: string;
    pieceName: string;
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
            color: color,
            pieceImg: props.pieceImg,
            pieceName: props.pieceName,
        };
    }

    render() {
        return (
            <button className={this.state.color}>
                <img src={this.state.pieceImg} alt={this.state.pieceName} />
            </button>
        );
    }
}
