import React from 'react'
import './App.css'
import Form from './Components/Form/Form'
import { FormDataProvider } from './context/FormContext'

function App() {
  return (
    <div className='container'>
      <FormDataProvider>
        <Form />
      </FormDataProvider>
    </div>
  )
}

export default App
