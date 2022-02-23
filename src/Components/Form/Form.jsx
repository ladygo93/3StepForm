import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import StepOne from '../FormSteps/StepOne'
import StepTwo from '../FormSteps/StepTwo'
import StepThree from '../FormSteps/StepThree'

import FormCSS from './styles/Form.module.css'
import { useForm } from 'react-hook-form'
import ModalBox from '../ModalBox/ModalBox'

const formInitData = {
  name: '',
  lName: '',
  email: '',
  phoneNum: '',
  gender: '',
  dob: { day: '', month: '', year: '' },
  comments: '',
}

const Form = () => {
  // used to managed ModalBox
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const [openStep, setOpenStep] = useState('step-1')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: formInitData,
  })

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setOpen(true)
    }
  }, [errors])

  const onSubmit = async (data) => {
    const formatedData = {
      // Here I can manipulate data from react-hook-form and change in a way it needs to be to the server
      ...data,
      gender: data.gender.value,
      dob: `${data.dob.day}-${data.dob.month}-${data.dob.year}`,
    }

    // Loging data for you to see, typically would be removed
    console.log(formatedData)

    // Reset would be triggered in try catch block. Here it's done just to show it is working.
    reset(formInitData)

    {
      /* 
      // HTTP Request
    
    //I would make HTTP post method to server using axios, example below.
    
    try {
     const postResp =  await axios.post(`http://www.my-unique-post-api-here.com`, formatedData)

      // if post request would be a success form values would clear to initial state
      if (postResp.status===200) {
        reset(formInitData)
      }
    } catch (err) {
      // errorhandler. In case server in not working or for whatever reason we can't do http request I would notify user by triggering modal box with message 'Please try again later' or something similar, depending on custumer needs.
    }

    // End of HTTP Request
  */
    }
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
      <StepTwo
        id='step-2'
        open={openStep}
        setOpen={setOpenStep}
        errors={errors}
        register={register}
        control={control}
      />
      <StepThree
        id='step-3'
        open={openStep}
        setOpen={setOpenStep}
        register={register}
        errors={errors}
        modalTrigger={setOpen}
      />
      <ModalBox
        open={open}
        handleClose={handleClose}
        content='Please check all inputs !!!'
        boxWidth='60%'
      />
    </form>
  )
}

export default Form
