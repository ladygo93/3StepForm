import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import FormStepHeader from '../FormStepHeader/FormStepHeader'
import Button from '../Button/Button'

import StepCSS from './styles/FormStep.module.css'

const StepOne = ({ id, open, setOpen, register, errors }) => {
  return (
    <div id={id} className={StepCSS.container}>
      <FormStepHeader
        id={id}
        label='Step 1: Your details'
        onClick={(e) => setOpen(e.target.parentElement.id)}
      />
      <div
        className={`${
          open === id ? StepCSS.showContent : StepCSS.hideContent
        } `}
      >
        <div className={StepCSS.contentContainer}>
          {/* firstName */}
          <div className={StepCSS.inputContainer}>
            <label htmlFor='name'>first name</label>
            <input
              {...register('name', { required: 'Required field!' })}
              type='text'
              id='name'
            />
            <ErrorMessage
              errors={errors}
              name='name'
              render={({ message }) => (
                <p className={StepCSS.error}>{message}</p>
              )}
            />
          </div>

          {/* End of firstName */}

          {/* lastName */}
          <div className={StepCSS.inputContainer}>
            <label htmlFor='lName'>surname</label>
            <input
              {...register('lName', { required: 'Required field!' })}
              type='text'
              id='lName'
            />
            <ErrorMessage
              errors={errors}
              name='lName'
              render={({ message }) => (
                <p className={StepCSS.error}>{message}</p>
              )}
            />
          </div>
          {/* End of lastName */}

          {/* email */}
          <div className={StepCSS.inputContainer}>
            <label htmlFor='email'>email address:</label>
            <input
              {...register('email', { required: 'Required field!' })}
              className={StepCSS.email}
              type='text'
              id='email'
            />
            <ErrorMessage
              errors={errors}
              name='email'
              render={({ message }) => (
                <p className={StepCSS.error}>{message}</p>
              )}
            />
          </div>
          {/* End of email */}
        </div>
        <Button
          label='next'
          type='button'
          onClick={() => {
            setOpen('step-2')
          }}
          extraStyles={StepCSS.btn}
        />
      </div>
    </div>
  )
}

export default StepOne
