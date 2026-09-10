import React, { useState } from 'react'
import { ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-blue-500/30 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-white font-semibold text-sm"> {title}
        </div> <div className="text-blue-200/70 text-xs"> {description} </div>
      </div>
    </div>
  );
}
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <div className="min-h-svh w-full flex flex-col">
      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-600/20 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 text-sm text-gray-600 font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Login</span>
            <span className="sm:hidden">Back</span>
          </button>
          {/* <ThemeToggle /> */}
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-5xl">
          <div className='flex flex-col gap-6'>
            <div className='rounded-xl bg-white text-text-primary overflow-hidden p-0 shadow-2xl border-0'>
              <div className='grid p-0 md:grid-cols-2'>
                {/* Left side - Awesome Visual */}
                <div className='relative hidden md:flex overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 order-1'>
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
                  <div className='absolute rounded-2xl opacity-60 blur-[1px] animate-bounce w-20 h-20 bg-blue-400/30 top-[10%] right-[10%]' />
                  <div className='absolute opacity-60 blur-[1px] w-14 h-14 bg-indigo-400/40 top-[60%] right-[15%] rounded-full animate-pulse' />
                  <div className='absolute opacity-60 blur-[1px] animate-bounce w-24 h-24 bg-sky-400/30 top-[20%] left-[15%] rounded-full' />
                  <div className='absolute rounded-2xl opacity-60 blur-[1px] w-16 h-16 bg-cyan-400/40 bottom-[20%] left-[20%] animate-pulse' />
                  <div className='absolute rounded-2xl opacity-60 blur-[1px] w-16 h-16 bg-cyan-400/40 bottom-[20%] left-[20%] animate-pulse' />
                  <div className='absolute rounded-2xl opacity-60 blur-[1px] animate-bounce w-12 h-12 bg-white/20 top-[40%] right-[40%] rotate-45' />
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rounded-full animate-spin' style={{ animationDuration: '20s' }} />
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-spin' style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  {/* Content overlay */}
                  <div className='relative z-10 flex flex-col items-center justify-center w-full p-10'>
                    <div className='bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-sm'>
                      <div className='w-16 h-16 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white'>
                        <Users />
                      </div>
                      {/* Text content */}
                      <h2 className="text-2xl font-bold text-white text-center mb-3">
                        Join Our Community
                      </h2>
                      <p className="text-blue-100/80 text-center text-sm leading-relaxed mb-6">
                        Create your account and get access to all features.
                        Start your journey with us today.
                      </p>
                      {/* Features */}
                      <div className="space-y-4">
                        <FeatureCard
                          icon={
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          }
                          title="Free Forever"
                          description="No credit card required"
                        />
                        <FeatureCard
                          icon={
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          }
                          title="Instant Access"
                          description="Get started in seconds"
                        />
                        <FeatureCard
                          icon={
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          }
                          title="Secure & Private"
                          description="Your data is protected"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* form section */}
                <form className='p-8 md:p-10 flex flex-col justify-center order-2'>
                  <div className="flex flex-col items-center gap-2 text-center mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
                    <p className="text-muted-foreground text-balance text-sm">
                      Sign up to get started with your account
                    </p>
                  </div>
                  {/* input filed section */}
                  <div className='p-6 space-y-6'>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type='text'
                        name='userName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type='email'
                        name='userEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        required
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
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                      <input
                        type='password'
                        name='userConfirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter confirm your password"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                    <div className='pt-2'>
                      <button
                        className="w-full h-12 rounded-xl font-semibold shadow-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                      >
                        Create Account
                      </button>
                    </div>
                    <div className="relative flex items-center gap-4 py-4 *:data-[slot=field-separator-content]:bg-card text-xs">
                      <div className='flex-1 border-t border-border'></div>
                      <span className='text-xs text-muted-foreground'>Or continue with</span>
                      <div className='flex-1 border-t border-border'></div>
                    </div>
                    <p className='text-muted-foreground text-center text-sm pt-2'>
                      Already have an account? <a href="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors"> Sign in</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Signup