import React, { useEffect, useState } from 'react'
import StepOne from '../FormSteps/StepOne'
import StepTwo from '../FormSteps/StepTwo'
import StepThree from '../FormSteps/StepThree'

import FormCSS from './styles/Form.module.css'
import { useForm } from 'react-hook-form'

const Form = () => {
  const [openStep, setOpenStep] = useState('step-1')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      console.log('you have errors')
    }
  }, [errors])

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={FormCSS.container}>
      <StepOne
        id='step-1'
        open={openStep}
        setOpen={setOpenStep}
        register={register}
        errors={errors}
      />
      <StepTwo id='step-2' open={openStep} setOpen={setOpenStep} />
      <StepThree
        id='step-3'
        open={openStep}
        setOpen={setOpenStep}
        errors={errors}
      />
    </form>
  )
}

export default Form
