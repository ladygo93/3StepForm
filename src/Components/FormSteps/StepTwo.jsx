import React from 'react'
import FormStepHeader from '../FormStepHeader/FormStepHeader'
import Button from '../Button/Button'

import StepCSS from './styles/FormStep.module.css'

const StepTwo = ({ open, id, setOpen, content }) => {
  return (
    <div id={id} className={StepCSS.container}>
      <FormStepHeader
        id={id}
        label='Step 2: More comments'
        onClick={(e) => setOpen(e.target.parentElement.id)}
      />
      <div
        className={`${
          open === id ? StepCSS.showContent : StepCSS.hideContent
        } `}
      >
        {content}
        <Button
          label='next'
          type='button'
          onClick={() => setOpen('step-3')}
          extraStyles={StepCSS.btn}
        />
      </div>
    </div>
  )
}

export default StepTwo
