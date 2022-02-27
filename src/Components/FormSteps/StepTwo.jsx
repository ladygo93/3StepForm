import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import FormStepHeader from '../FormStepHeader/FormStepHeader'
import Button from '../Button/Button'

import StepCSS from './styles/FormStep.module.css'
import CustomSelect from '../CustomSelect/CustomSelect'
import DobInput from '../DobInput/DobInput'

const StepTwo = ({ open, id, setOpen, register, errors, control }) => {
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
        <div className={StepCSS.contentContainer}>
          {/* Phone Num */}
          <div className={StepCSS.inputContainer}>
            <label htmlFor='phoneNum'>telephone number</label>
            <input
              id='phoneNum'
              type='text'
              {...register('phoneNum', {
                required: 'Required field!',
                pattern: {
                  value:
                    /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/,
                  message: 'Please use valid number!',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name='phoneNum'
              render={({ message }) => (
                <p className={StepCSS.error}>{message}</p>
              )}
            />
          </div>
          {/* End of Phone Num */}

          {/* Gender select */}
          <CustomSelect errors={errors} control={control} />
          {/* End of Gender select */}

          {/* DOB */}
          <DobInput control={control} errors={errors} />
          {/* End of DOB */}
        </div>
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
