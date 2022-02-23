import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

import CustomSelectCSS from './styles/CustomSelect.module.css'

const CustomSelect = ({ control, errors }) => (
  <div className={CustomSelectCSS.selectContainer}>
    <label htmlFor='gender'>gender</label>
    <Controller
      id='gender'
      name='gender'
      control={control}
      rules={{ required: 'Please select an option!' }}
      render={({ field }) => {
        return (
          <Select
            className={CustomSelectCSS.customSelect}
            {...field}
            options={[
              { label: 'male', value: 'male' },
              { label: 'female', value: 'female' },
            ]}
            placeholder='Select gender'
          />
        )
      }}
    />
    <ErrorMessage
      errors={errors}
      name='gender'
      render={({ message }) => (
        <p className={CustomSelectCSS.error}>{message}</p>
      )}
    />
  </div>
)

export default CustomSelect
