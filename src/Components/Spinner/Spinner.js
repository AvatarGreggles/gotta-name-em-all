import React from "react";
import PropTypes from "prop-types";

import "./Spinner.scss";

export const Spinner = (props) => {
  const { radius, stroke, progressPercentage, colorScheme, limit } = props;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  let strokeDashoffset =
    circumference - (progressPercentage / limit) * circumference;

  if (strokeDashoffset < 0) {
    strokeDashoffset = 0;
  }

  {
    /* The spinner component has a background and a foreground circle. The foreground uses the strokeDashArray variable which is updated each time the progress increases  */
  }
  return (
    <div className="Spinner">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="Spinner_Background"
          stroke="rgb(232, 235, 237)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="Spinner_Foreground"
          stroke={colorScheme}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {/* The text within the spinner wheel is responsive depending on the size of the spinner itself, using a mixture of font-size and margin css styles */}
      <div
        className="Spinner__ProgressPercentage"
        style={{ fontSize: radius / 3, marginTop: radius / 1.25 }}
      >
        {progressPercentage}/{limit}
      </div>
    </div>
  );
};

Spinner.propTypes = {
  radius: PropTypes.number,
  stroke: PropTypes.number,
  progressPercentage: PropTypes.number,
};

Spinner.defaultProps = {
  radius: 100,
  stroke: 4,
  progressPercentage: 0,
  colorScheme: "#409fff",
};
