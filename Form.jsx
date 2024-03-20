import React, { useRef } from 'react'
import img1 from './Assets/img.jpg'
import { useForm } from 'react-hook-form' 
export default function Form() {

    const {register, handleSubmit} = useRef()
    const onSubmit = data=> console.log(data);

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and the enjoy services</span>
                <form id="form" className="flex flex-col" onSubmit={handleSubmit(onsubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")}placeholder='password' />
                    <input type="text" {...register("confirempwd")}placeholder='Confimed password'/>
                    <input type="text" {...register("mobile")}placeholder='mobile number' />

                    <button className="btn">Sign In</button>
                </form>
            </div>
            <div className="col-2">
                <img src={img1} alt="" />
            </div>
        </div>
    </section>
  )
}
