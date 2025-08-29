import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

  }
  return (
    <form onSubmit={handleLogin} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-lg text-sm '>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign up' ? 'sign up' : 'log in'} to book appointment</p>
        {
          state === 'Sign up'
          && <div className='w-full'>
            <p>Name</p>
            <input className='border border-zinc-300 p-2 rounded w-full mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 p-2 rounded w-full mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 p-2 rounded w-full mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button className='bg-blue-500 text-white w-full p-2 rounded mt-2'>{state === 'Sign up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign up'
            ? <p>Already have an account? <span className='text-blue-500 underline cursor-pointer' onClick={() => setState('Login')}>Log in</span></p>
            : <p>Don't have an account? <span className='text-blue-500 underline cursor-pointer' onClick={() => setState('Sign up')}>Sign up</span></p>
        }
      </div>
    </form>
  )
}

export default Login
