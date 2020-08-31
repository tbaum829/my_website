import React from 'react'

interface PieceProps {
}

interface PieceState {
    squares: JSX.Element[][],
}

export class Piece extends React.Component<PieceProps, PieceState> {
    constructor(props: PieceProps) {
        super(props);
    }

    render() {
        return (
            <>
                {this.state.squares.map((row) =>
                    <div className="board-row">
                        {row.map((col) => 
                            col
                        )}
                    </div>
                )}
            </>
        );
    }
}
