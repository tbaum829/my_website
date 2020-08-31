import React from 'react'
import { Square } from './square'

interface BoardProps {
}

interface BoardState {
    squares: JSX.Element[][],
    clickedPiece: boolean,
}

export class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);

        const r = Array.from(Array(8).keys());
        const c = Array.from(Array(8).keys());
        let rows: JSX.Element[][] = [];
        r.map((row) => {
            let cols: JSX.Element[] = [];
            c.map((col) => {
                let pieceImg = '';
                let pieceName = '';
                if (row === 0 && (col === 0 || col === 7)) { pieceImg=require('./img/br.png'); pieceName='br'; }
                if (row === 0 && (col === 1 || col === 6)) { pieceImg=require('./img/bn.png'); pieceName='bn'; }
                if (row === 0 && (col === 2 || col === 5)) { pieceImg=require('./img/bb.png'); pieceName='bb'; }
                if (row === 0 && col === 3) { pieceImg=require('./img/bq.png'); pieceName='bq'; }
                if (row === 0 && col === 4) { pieceImg=require('./img/bk.png'); pieceName='bk'; }
                if (row === 1) { pieceImg=require('./img/bp.png'); pieceName='bp'; }
                if (row === 7 && (col === 0 || col === 7)) { pieceImg=require('./img/wr.png'); pieceName='wr'; }
                if (row === 7 && (col === 1 || col === 6)) { pieceImg=require('./img/wn.png'); pieceName='wn'; }
                if (row === 7 && (col === 2 || col === 5)) { pieceImg=require('./img/wb.png'); pieceName='wb'; }
                if (row === 7 && col === 3) { pieceImg=require('./img/wq.png'); pieceName='wq'; }
                if (row === 7 && col === 4) { pieceImg=require('./img/wk.png'); pieceName='wk'; }
                if (row === 6) { pieceImg=require('./img/wp.png'); pieceName='wp'; }
                return cols.push(this.renderSquare(row, col, pieceImg, pieceName))
            })
            return rows.push(cols)
        })
        
        this.state = {
            squares: rows,
            clickedPiece: false,
        }
    }

    renderBoard() {
        // TODO
    }

    renderSquare(row: number, col: number, pieceImg: string, pieceName: string) {
        return <Square 
                row={row}
                col={col}
                pieceImg={pieceImg}
                pieceName={pieceName}
                onClick={() => this.onClick(row, col)}
                />;
    }

    onClick(row: number, col: number) {
        console.log({row, col})
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
