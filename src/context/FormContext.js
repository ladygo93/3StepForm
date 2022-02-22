import React, { createContext, useState, useMemo } from 'react'

const FormDataContext = createContext()

const initData = {
  name: '',
  lName: '',
  email: '',
  phoneNumber: 0,
  gender: '',
  DOB: '',
  comments: '',
}

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(initData)

  const providerFormData = useMemo(
    () => ({
      formData,
      setFormData,
    }),
    [formData, setFormData]
  )

  return (
    <FormDataContext.Provider value={providerFormData}>
      {children}
    </FormDataContext.Provider>
  )
}

export { FormDataContext, FormDataProvider }
