import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignup = async () => {
    if (!email || !password) {
      setMessage("Email and password are required.")
      return
    }
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    setLoading(false)

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Signup successful! Please check your email.')
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
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
          onClick={handleSignup}
          disabled={loading}
          className={`w-full p-3 rounded text-white transition ${
            loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
