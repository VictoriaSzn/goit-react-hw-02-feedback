import React from "react";
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions =({options, onLeaveFeedback})=>(
    <ul className={style.btn_list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={style.btn}
            type="button"
            name={option}
            onClick={onLeaveFeedback}>{option}</button>
        </li>
      ))}
    </ul>
);
  FeedbackOptions.propTypes = {
      options: PropTypes.array.isRequired,
      onLeaveFeedback: PropTypes.func.isRequired,
  }

export default FeedbackOptions;