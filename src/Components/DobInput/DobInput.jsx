import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { Controller } from 'react-hook-form'

import DobInputCSS from './styles/DobInput.module.css'

const DobInput = ({ control, errors }) => {
  return (
    <div className={DobInputCSS.container}>
      <label htmlFor='dob'>dob</label>
      <Controller
        id='dob'
        name='dob'
        control={control}
        render={({ field }) => {
          return (
            <div className={DobInputCSS.inputsContainer}>
              <input
                id='day'
                value={field.value.day}
                onChange={(event) =>
                  field.onChange({ ...field.value, day: event.target.value })
                }
              />
              <input
                id='month'
                value={field.value.month}
                onChange={(event) =>
                  field.onChange({ ...field.value, month: event.target.value })
                }
              />
              <input
                id='year'
                value={field.value.year}
                onChange={(event) =>
                  field.onChange({ ...field.value, year: event.target.value })
                }
              />
            </div>
          )
        }}
        rules={{
          validate: (value) =>
            (+value.year >= 1960 &&
              value.year.length === 4 &&
              +value.day <= 31 &&
              +value.day !== 0 &&
              value.day.length === 2 &&
              +value.month <= 12 &&
              +value.month !== 0 &&
              value.month.length === 2) ||
            'Fill in format dd-mm-yyyy, use numbers!',
        }}
      />
      <ErrorMessage
        errors={errors}
        name='dob'
        render={({ message }) => <p className={DobInputCSS.error}>{message}</p>}
      />
    </div>
  )
}

export default DobInput
