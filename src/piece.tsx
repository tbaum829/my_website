import React from 'react'

interface PieceProps {
    pieceImg: string;
    pieceName: string;
}

interface PieceState {
    pieceImg: string;
    pieceName: string;
}

export class Piece extends React.Component<PieceProps, PieceState> {
    constructor(props: PieceProps) {
        super(props);
        
        this.state = {
            pieceImg: props.pieceImg,
            pieceName: props.pieceName,
        };
    }

    render() {
        return (
            <img src={this.state.pieceImg} alt={this.state.pieceName} />
        );
    }
}
