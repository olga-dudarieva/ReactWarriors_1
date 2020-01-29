import React from 'react'

const Step = props => {
  const { i, step, activeStep } = props

  return (
    <div
      key={i}
      className={`step${i === activeStep ? ' is-active' : ''}${
        i <= activeStep ? ' is-completed' : ''
      }`}>
      <div className="step__marker">{i + 1}</div>
      <div className="step__title mt-1">{step}</div>
    </div>
  )
}

export default Step
