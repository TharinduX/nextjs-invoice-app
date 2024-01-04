import React from 'react'
import UserAuthForm from '@/components/auth/user-auth-form'
const LoginPage = async () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen p-10'>
      <div className='rounded-lg border p-10 bg-card w-full md:w-[500px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-3xl font-semibold tracking-tight'>Next.js Invoice App</h1>
          <p className="text-sm text-muted-foreground">
            Sign into your account to continue
          </p>
        </div>
        <div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage