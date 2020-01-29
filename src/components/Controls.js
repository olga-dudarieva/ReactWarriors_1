import React from 'react';

const Controls = props => {
  const { length, activeStep, nextStep, previosStep, resetForm } = props;

  return activeStep + 1 < length ? (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-light mr-4"
        disabled={activeStep === 0 ? true : false}
        onClick={previosStep}>
        Previous
      </button>
      <button type="button" className="btn btn-secondary" onClick={nextStep}>
        Next
      </button>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-primary" onClick={resetForm}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
