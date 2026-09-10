import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-svh w-full flex flex-col">
      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/signup')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-600/20 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 text-sm text-gray-600 font-medium cursor-pointer"
          >
            <ArrowLeft />
            <span className="hidden sm:inline">Back to Register</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>
      </header>
      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-5xl">
          <div className="flex flex-col gap-6">
            <div className="rounded-xl bg-white text-text-primary overflow-hidden p-0 shadow-2xl border-0">
              <div className="grid p-0 md:grid-cols-2">
                {/* form section */}
                <form className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-col items-center gap-2 text-center mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-muted-foreground text-balance text-sm">
                      Enter your credentials to access your account
                    </p>
                  </div>
                  {/* input filed section */}
                  <div className='p-6 space-y-6'>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type='email'
                        name='userEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <input
                        type='password'
                        name='userPassword'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                    {/* Remember me checkbox */}
                    <div>
                      <label className='flex items-center gap-3 cursor-pointer group'>
                        <div className="relative">
                          <input type="checkbox" className="peer sr-only" />
                          <div className="w-5 h-5 border-2 border-muted-foreground/30 rounded-md peer-checked:border-primary peer-checked:bg-primary transition-all duration-200 group-hover:border-primary/50">
                            <svg className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Remember me for 30 days
                        </span>
                      </label>
                    </div>
                    <div className='pt-2'>
                      <button
                        onClick={() => { alert("Login successfully"); navigate("/dashboard") }}
                        className="w-full h-12 rounded-xl text-sm font-semibold shadow-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="relative flex items-center gap-4 py-4 *:data-[slot=field-separator-content]:bg-card text-xs">
                      <div className='flex-1 border-t border-border'></div>
                      <span className='text-xs text-muted-foreground'>Or continue with</span>
                      <div className='flex-1 border-t border-border'></div>
                    </div>
                    <p className='text-muted-foreground text-center text-sm pt-2'>
                      Don't have an account? <a href="/signup" className="text-primary font-semibold hover:text-primary/80 transition-colors">Create account</a>
                    </p>
                  </div>
                </form>

                {/* Right side - Awesome Visual */}
                <div className="relative hidden md:flex overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
                  {/* Overlay pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Pulsing blob background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `w-[400px] h-[400px]` bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

                  {/* Floating shapes with Tailwind animations */}
                  <div className='absolute rounded-2xl opacity-60 blur-[1px] animate-bounce w-20 h-20 bg-blue-400/30 top-[10%] left-[10%]' />
                  <div className="absolute opacity-60 blur-[1px] w-14 h-14 bg-indigo-400/40 top-[60%] left-[15%] rounded-full animate-pulse" />
                  <div className="absolute opacity-60 blur-[1px] animate-bounce w-24 h-24 bg-sky-400/30 top-[20%] right-[15%] rounded-full" />
                  <div className="absolute rounded-2xl opacity-60 blur-[1px] w-16 h-16 bg-cyan-400/40 bottom-[20%] right-[20%] animate-pulse" />
                  <div className="absolute rounded-2xl opacity-60 blur-[1px] animate-bounce w-12 h-12 bg-white/20 top-[40%] left-[40%] rotate-45" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  {/* Content overlay */}
                  <div className="relative z-10 flex flex-col items-center justify-center w-full p-10">
                    {/* Glass card with content */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-sm">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-8 h-8 text-white"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>

                      {/* Text content */}
                      <h2 className="text-2xl font-bold text-white text-center mb-3">
                        Secure Platform
                      </h2>
                      <p className="text-blue-100/80 text-center text-sm leading-relaxed mb-6">
                        Your data is protected with enterprise-grade security.
                        We use end-to-end encryption to keep your information safe.
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20'>
                          <div className='text-2xl font-bold text-white'>99.9%</div>
                          <div className='text-white/70 text-sm'>Uptime</div>
                        </div>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20'>
                          <div className='text-2xl font-bold text-white'>256-bit</div>
                          <div className='text-white/70 text-sm'>Encryption</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
