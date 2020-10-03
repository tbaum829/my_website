import React from 'react'
import { Square } from './square'
import { Piece } from './piece'

interface BoardProps {
}

interface BoardState {
    squares: JSX.Element[][],
    clickedPiece: boolean,
}

export class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);

        const pieces = {
            br: Array(2).fill(<Piece pieceImg={require('./img/br.png')} pieceName={'rook'} />),
            bn: Array(2).fill(<Piece pieceImg={require('./img/bn.png')} pieceName={'knight'} />),
            bb: Array(2).fill(<Piece pieceImg={require('./img/bb.png')} pieceName={'bishop'} />),
            bq: <Piece pieceImg={require('./img/bq.png')} pieceName={'queen'} />,
            bk: <Piece pieceImg={require('./img/bk.png')} pieceName={'king'} />,
            bp: Array(8).fill(<Piece pieceImg={require('./img/bp.png')} pieceName={'pawn'} />),
            wr: Array(2).fill(<Piece pieceImg={require('./img/wr.png')} pieceName={'rook'} />),
            wn: Array(2).fill(<Piece pieceImg={require('./img/wn.png')} pieceName={'knight'} />),
            wb: Array(2).fill(<Piece pieceImg={require('./img/wb.png')} pieceName={'bishop'} />),
            wq: <Piece pieceImg={require('./img/wq.png')} pieceName={'queen'} />,
            wk: <Piece pieceImg={require('./img/wk.png')} pieceName={'king'} />,
            wp: Array(8).fill(<Piece pieceImg={require('./img/wp.png')} pieceName={'pawn'} />),
        }
        let squares: JSX.Element[][] = [];
        Array.from(Array(8).keys()).map((row) => {
            let cols: JSX.Element[] = [];
            Array.from(Array(8).keys()).map((col) => {
                const color = row % 2 === col % 2 ? "square-white" : "square-green";
                switch (row) {
                    case 0:
                        switch (col) {
                            case 0:
                                return cols.push(<Square color={color} piece={pieces.br[0]} onClick={() => {}}/>);
                            case 1:
                                return cols.push(<Square color={color} piece={pieces.bn[0]} onClick={() => {}}/>);
                            case 2:
                                return cols.push(<Square color={color} piece={pieces.bb[0]} onClick={() => {}}/>);
                            case 3:
                                return cols.push(<Square color={color} piece={pieces.bq} onClick={() => {}}/>);
                            case 4:
                                return cols.push(<Square color={color} piece={pieces.bk} onClick={() => {}}/>);
                            case 5:
                                return cols.push(<Square color={color} piece={pieces.bb[1]} onClick={() => {}}/>);
                            case 6:
                                return cols.push(<Square color={color} piece={pieces.bn[1]} onClick={() => {}}/>);
                            case 7:
                                return cols.push(<Square color={color} piece={pieces.br[1]} onClick={() => {}}/>);
                            default:
                                return cols.push(<Square color={color} onClick={() => {}}/>);
                        }
                    case 1:
                        return cols.push(<Square color={color} piece={pieces.bp[col]} onClick={() => {}}/>);
                    case 6:
                        return cols.push(<Square color={color} piece={pieces.wp[col]} onClick={() => {}}/>);
                    case 7:
                        switch (col) {
                            case 0:
                                return cols.push(<Square color={color} piece={pieces.wr[0]} onClick={() => {}}/>);
                            case 1:
                                return cols.push(<Square color={color} piece={pieces.wn[0]} onClick={() => {}}/>);
                            case 2:
                                return cols.push(<Square color={color} piece={pieces.wb[0]} onClick={() => {}}/>);
                            case 3:
                                return cols.push(<Square color={color} piece={pieces.wq} onClick={() => {}}/>);
                            case 4:
                                return cols.push(<Square color={color} piece={pieces.wk} onClick={() => {}}/>);
                            case 5:
                                return cols.push(<Square color={color} piece={pieces.wb[1]} onClick={() => {}}/>);
                            case 6:
                                return cols.push(<Square color={color} piece={pieces.wn[1]} onClick={() => {}}/>);
                            case 7:
                                return cols.push(<Square color={color} piece={pieces.wr[1]} onClick={() => {}}/>);
                            default:
                                return cols.push(<Square color={color} onClick={() => {}}/>);
                        }
                    default:
                        return cols.push(<Square color={color} onClick={() => {}}/>);
                    
                }
            })
            return squares.push(cols);
        })
        
        this.state = {
            squares: squares,
            clickedPiece: false,
        }
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
