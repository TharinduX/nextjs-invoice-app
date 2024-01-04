'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { Icons } from "@/components/icons"
import { Lock } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const LoginFormSchema = z.object({
  email: z.string().email(
    "Please enter a valid email address"
  ),
  password: z.string(),
})

type LoginFormValues = z.infer<typeof LoginFormSchema>

const UserAuthForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit = async (formData: LoginFormValues) => {
    setIsError(false)
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        toast.success('Logged in successfully')
        router.push('/dashboard')
      } else {
        setIsError(true)
        toast.error('Invalid credentials')
      }
    } catch (error) {
      setIsError(true)
      toast.error('Something went wrong!')
    }
    setIsLoading(false)
  }


  return (
    <div className='mt-8'>
      <Form {...form}>
        <form className='grid gap-2' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Email</FormLabel>
                <FormControl>
                  <Input
                    className={`${isError ? 'border-red-800 focus-visible:ring-0' : ''}`}
                    id="email"
                    placeholder="name@example.com"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs font-normal text-red-600 ' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Password</FormLabel>
                <FormControl>
                  <Input
                    className={`${isError ? 'border-red-800 focus-visible:ring-0' : ''}`}
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs font-normal text-red-600 ' />
              </FormItem>
            )}
          />
          <div className='flex my-2'>
            <div className='flex items-center'>
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-3 w-3 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-muted-foreground">
                Remember me
              </label>
            </div>
          </div>
          <div className='w-full mt-5'>
            <Button className='w-full' disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Lock className="mr-2 h-4 w-4" />
              )}
              Sign In
            </Button>
          </div>
          <div className='flex items-center justify-center'>
            <a href="#" className="text-sm text-primary hover:text-primary">
              Forgot your password?
            </a>
          </div>
        </form>
      </Form>
    </div>

  )
}

export default UserAuthForm