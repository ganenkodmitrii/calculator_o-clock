import React, { Component } from 'react';
import s from './Countdown.module.css';

class Countdown extends Component {
    render() {
        return (
            <>
                <div className={s.countdown}>
                    <div>Countdown</div>
                </div>
            </>
        );
    }
}
export default Countdown;
