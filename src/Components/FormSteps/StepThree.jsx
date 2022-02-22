import React from 'react'
import FormStepHeader from '../FormStepHeader/FormStepHeader'
import Button from '../Button/Button'
import StepCSS from './styles/FormStep.module.css'

const StepThree = ({ open, id, setOpen, register, errors }) => {
  return (
    <div id={id} className={StepCSS.container}>
      <FormStepHeader
        id={id}
        label='Step 3: Final comments'
        onClick={(e) => setOpen(e.target.parentElement.id)}
      />
      <div
        className={`${
          open === id ? StepCSS.showContent : StepCSS.hideContent
        } `}
      >
        <Button
          label='next'
          type='submit'
          onClick={() => {
            if (Object.keys(errors).length !== 0) {
              alert('please check your fields')
            }
          }}
          extraStyles={StepCSS.btn}
        />
      </div>
    </div>
  )
}

export default StepThree
