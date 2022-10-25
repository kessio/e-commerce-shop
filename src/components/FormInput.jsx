import React from 'react'
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext()

  return (
    <div>
       <Controller
       as= {<input/>}
  
        control={control}
        name={name}
        label={label}
        required={required}
      />
    </div>
  )
}

export default FormInput