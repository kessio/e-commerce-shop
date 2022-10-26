import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import  { commerce } from '../lib/commerce'
import PaymentForm from './PaymentForm';

const CheckoutForm = ({ checkoutToken, shippingFormData, setPageNo}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setshippingSubdivisions] = useState([])
    const [shippingSubdivision, setshippingSubdivision] = useState('')
    const [shippingOptions, setshippingOpttions] = useState([])
    const [shippingOption, setshippingOpttion] = useState('')

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}))
    const options = shippingOptions.map((shipOpt) => ({ id:shipOpt.id, label:`${shipOpt.description} - (${shipOpt.price.formatted_with_symbol})`}))

    const fetchShipingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubDivisions = async (countryCode) => {
      const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
      setshippingSubdivisions(subdivisions)
      setshippingSubdivision(Object.keys(subdivisions)[0])

    }
    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

      setshippingOpttions(options)
      setshippingOpttion(options[0].id)

    }

    useEffect(() => {
      fetchShipingCountries(checkoutToken.id)

    },[])

    useEffect(() => {
      if(shippingCountry) fetchSubDivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(() => {
      if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    },[shippingSubdivision])

    const { register, handleSubmit,formState: { errors } } = useForm();
 
  const onSubmit = (data) => {
    shippingFormData(data);
    setPageNo(1)
  }
    
    const handleError = (errors) => {};

  return (

<form onSubmit={handleSubmit(onSubmit, handleError)} className="w-full border-t max-w-lg mt-20 md:ml-20 ">
  <div className="flex flex-wrap -mx-3 mb-6 pt-10">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input 
       id="grid-first-name" 
       type="text" 
       name="firstname"
       placeholder="Jane" 
      {...register("firstname", { required: true})} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border border-gray-200 rounded"
      />
       {errors.firstname && errors.firstname.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please Fill This Field</p> 
              
       }
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input 
       id="grid-last-name" 
       type="text" 
       name="lastname"
       placeholder="Doe"
      {...register("lastname", { required: true})} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       />
       {errors.lastname && errors.lastname.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please Fill This Field</p> 
              
       }
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
        Address
      </label>
      <input 
       id="grid-address" 
       type="text" 
       name="address"
       placeholder="Address 1" 
      {...register("address", {required:true})} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      />
      {errors.address && errors.address.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please Fill This Field</p> 
              
       }
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
        Email
      </label>
      <input 
       id="grid-email" 
       type="text" 
       name="email"
       placeholder="Email"
      {...register("email", {required:true, pattern: /^\S+@\S+$/i})} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      />
      {errors.email && errors.email.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please Fill This Field</p>       
       }
        {errors.email && errors.email.type === "pattern" &&  
       <p className="text-red-500 text-xs italic">Email is invalid</p>       
       }
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-country">
        Country
      </label>
      <div className="relative">
        <select
         id="grid-country"
         name="country" 
        {...register("country",{required:true})} 
        value={shippingCountry} onChange={(e)=> setShippingCountry(e.target.value)} 
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
         >
         {countries.map((country) => (
            <option key={country.id} value={country.id} >
              {country.label} 
            </option>
          ))}
        </select>
        {errors.country && errors.country.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please select country</p>       
       }
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        City
      </label>
      <div className="relative">
        <select name="city" {...register("city", {required:true})} value={shippingSubdivision} onChange={(e)=> setshippingSubdivision(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
          {subdivisions.map((subdivision) => (
            <option  key={subdivision.id} value={subdivision.id} >
              {subdivision.label}
            </option>
          ))}
        </select>
        {errors.city && errors.city.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please select country</p>       
       }
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        Shipping Options
      </label>
      <div className="relative">
        <select name="options"  {...register("options",{required:true})} value={shippingOption} onChange={(e)=> setshippingOpttion(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" >
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.options && errors.options.type === "required" &&  
       <p className="text-red-500 text-xs italic">Please select country</p>       
       }
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-1/2 mt-10">
    <button type='submit' className="bg-red-500 hover:bg-red-600 px-10 py-3 ml-2 text-sm text-white uppercase">Apply</button>
    </div>
    </div>
    </form>
  )
}

export default CheckoutForm