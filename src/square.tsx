import React from 'react'

interface SquareProps {
    color: string;
    piece?: JSX.Element;
    onClick: () => void;
}

interface SquareState {
    color: string;
    piece?: JSX.Element;
    onClick: () => void;
}

export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
        
        this.state = {
            color: props.color,
            piece: props.piece,
            onClick: props.onClick,
        };
    }

    render() {
        return (
            <button className={this.state.color} onClick={this.state.onClick}>
                {this.state.piece}
            </button>
        );
    }
}
