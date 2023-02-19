import React from "react";
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions =({onGood, onNeutral, onBad})=>(
<div>
    <button type="button" className={style.btn} onClick={onGood}>
        Good
    </button>
    <button type="button" className={style.btn_center} onClick={onNeutral}>
        Neutral
    </button>
    <button type="button" className={style.btn} onClick={onBad}>
        Bad
    </button>
</div>
);
 FeedbackOptions.propTypes = {
     onGood: PropTypes.func.isRequired,
     onNeutral: PropTypes.func.isRequired,
     onBad: PropTypes.func.isRequired,
 }

export default FeedbackOptions;