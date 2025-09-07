import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  // Auto-redirect if already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        navigate('/dashboard') // redirect to dashboard if already logged in
      }
    }
    checkUser()
  }, [navigate])

  const handleLogin = async () => {
    setMessage('')
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      if (error.message.includes('Email not confirmed')) {
        setMessage(
          'Your email is not confirmed. Please check your inbox or click here to resend the confirmation email.'
        )
      } else {
        setMessage(error.message)
      }
    } else {
      navigate('/dashboard') // redirect to dashboard on successful login
    }
  }

  const resendConfirmationEmail = async () => {
    if (!email) {
      setMessage('Please enter your email to resend confirmation.')
      return
    }

    const { error } = await supabase.auth.resend({ email })

    if (error) {
      setMessage(`Error sending confirmation email: ${error.message}`)
    } else {
      setMessage('Confirmation email sent! Please check your inbox.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        {message && (
          <p className="mt-4 text-center text-red-600">
            {message.includes('click here') ? (
              <>
                {message.split('click here')[0]}
                <button
                  onClick={resendConfirmationEmail}
                  className="text-blue-600 underline ml-1"
                >
                  click here
                </button>
                {message.split('click here')[1]}
              </>
            ) : (
              message
            )}
          </p>
        )}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
