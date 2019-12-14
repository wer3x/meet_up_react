import React from 'react';
import './countdown-timer.css';

import moment from 'moment';

export interface IProps {
    contDownEnd: Date;
    hasYears?: boolean;
    hasMonths?: boolean;
    hasDays?: boolean;
    hasHours?: boolean;
    hasMinutes?: boolean;
    hasSeconds?: boolean;
}

export default class CountDownTimer extends React.Component<IProps> {

    constructor(props: any) {
        super(props);
        this.aimTime = new Date(2020, 0, 1);
        this.state = { time: this.setTimer()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.setTimer()
        });
    }
    setTimer(){
        let now: Date = new Date()
        let timerTime: any = this.aimTime.getTime() - now.getTime();
        return new Date(timerTime);
    }
    
    parseDate() {
          
    }
    
    render() {
        return (
            <section className="timer">
                <div className="timer__wrapper">
                    <span className="timer__days">{moment(this.state.time).format('DD')}</span>&nbsp;:&nbsp;
                    <span className="timer__hours">{moment(this.state.time).format('HH')}</span>&nbsp;:&nbsp;
                    <span className="timer__minutes">{moment(this.state.time).format('mm')}</span>&nbsp;:&nbsp;
                    <span className="timer__seconds">{moment(this.state.time).format('ss')}</span>
                </div>
                <div className="timer__descript-wrapper flex-container">
                    <span className="timer__days-span">days</span>
                    <span className="timer__hours-span">hours</span>
                    <span className="timer__minutes-span">minutes</span>
                    <span className="timer__seconds-span">seconds</span>
                </div>
            </section>
        );
    }
}
