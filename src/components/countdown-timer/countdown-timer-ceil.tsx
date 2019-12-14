import React from 'react';

export interface IProps {
    value: number;
    description: string;
}

const CountDownTimerCeil: React.FC<IProps> =
    (props: IProps) => {
        return (
            <div className="timer__ceil">
                <span className="timer__ceil-value">
                {props.value}
                </span>
                <span className="timer__ceil-value">
                {props.description}
                </span>
            </div>
        );
    };

export default NotesControl;
