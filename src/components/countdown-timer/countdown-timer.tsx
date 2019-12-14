import React from 'react';
import './countdown-timer.css';
import CountDownTimerCeil from './countdown-timer-ceil';

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

    private renderChild(value: number, description: string): React.ReactNode {
        return (
            <CountDownTimerCeil
                value={value}
                description={description}/>
        );
    }
    
    render() {
        return (
            <section className="timer">
                <div className="timer__wrapper">
                    { 
                        if (this.props.hasYears) {
                          this.renderChild(1, 'years');
                        }
                        
                        if (this.props.hasMonths) {
                          this.renderChild(1, 'months');
                        }
                        
                        if (this.props.hasDays) {
                          this.renderChild(1, 'days');
                        }
                        
                        if (this.props.hasHours) {
                          this.renderChild(1, 'hours');
                        }
                        
                        if (this.props.hasMinutes) {
                          this.renderChild(1, 'minutes');
                        }
                        
                        if (this.props.hasSeconds) {
                          this.renderChild(1, 'seconds');
                        }
                    }
                </div>
            </section>
        );
    }
}
