import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import FormStepHeader from '../FormStepHeader/FormStepHeader'
import Button from '../Button/Button'

import StepCSS from './styles/FormStep.module.css'

const StepThree = ({ open, id, setOpen, register, errors, modalTrigger }) => (
  <div id={id} className={StepCSS.container}>
    <FormStepHeader
      id={id}
      label='Step 3: Final comments'
      onClick={(e) => setOpen(e.target.parentElement.id)}
    />
    <div
      className={`${StepCSS.stepThreeLayout} ${
        open === id ? StepCSS.showContent : StepCSS.hideContent
      } `}
    >
      <div className={StepCSS.contentContainer}>
        <div className={StepCSS.inputContainer}>
          <label htmlFor='comments'>comments</label>
          <textarea
            id='comments'
            {...register('comments', { required: 'Required field!' })}
          />
          <ErrorMessage
            errors={errors}
            name='comments'
            render={({ message }) => <p className={StepCSS.error}>{message}</p>}
          />
        </div>
      </div>
      <Button
        label='submit'
        type='submit'
        onClick={() => {
          if (Object.keys(errors).length !== 0) {
            modalTrigger(true)
          }
        }}
        extraStyles={StepCSS.btn}
      />
    </div>
  </div>
)

export default StepThree
