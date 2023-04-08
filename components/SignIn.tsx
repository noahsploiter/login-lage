import React from 'react'

type Props = {}

function SignIn({}: Props) {
  return (
    <div className='flex flex-col items-center'>
        <div className='text-white font-semibold text-3xl flex justify-center pt-10'>
            <h1>Sign in</h1>
        </div>
        <div className='text-white flex justify-center space-x-3 pt-10'>
            <div className='flex justify-center text-[#F03B7A] w-[200px] h-[40px] bg-[#262952] rounded-md items-center'>Personal</div>
            <div className='flex justify-center w-[200px] h-[40px] bg-[#262952] rounded-md items-center'>Team</div>
        </div>
        <div className='text-white ml-10 mt-10  w-[450px]'>
            <div className='flex justify-start'>Email Address</div>
            <input className='w-[400px] h-[50px] pl-5 rounded-md mt-2 outline-none border border-[#191f69] bg-[#1c1f4b]'  type="text" placeholder='Enter your email'/>
            <div className='flex justify-between  pr-[60px]'>
            <div className='flex mt-10 justify-start'>Password</div>
            <div className='flex mt-10 justify-start text-[#F03B7A] cursor-pointer'>Forgot Password ?</div>
            </div>
            <input className='w-[400px] h-[50px] pl-5 rounded-md mt-2 outline-none border border-[#191f69] bg-[#1c1f4b]'  type="password" placeholder='Enter your password'/>

            <button className=' w-[400px] h-[50px] pl-5 rounded-md mt-10 outline-none border border-[#F03B7A] bg-[#F03B7A]'>Sign in</button>
          <div className='inset-x-0 bottom-0 absolute bg-[#2a2e63] h-[70px] flex justify-center items-center'>
            <h2 className='font-xl'>Dont you have an account yet ?</h2>
            <button className='ml-5 w-[100px] h-[35px] rounded-md  outline-none border border-[#F03B7A] bg-[#F03B7A]'>Sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default SignIn