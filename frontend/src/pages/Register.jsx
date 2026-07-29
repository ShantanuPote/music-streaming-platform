import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '')

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    role: 'listener',
  })
  const [status, setStatus] = useState(null)
  const [submitError, setSubmitError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    setStatus('loading')

    if (form.password !== form.confirm) {
      setStatus('error')
      setSubmitError('Passwords do not match.')
      return
    }

    try {
      const res = await axios.post(
        `${API_URL}/api/auth/register`,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          fullName: {
            firstName: form.firstName,
            lastName: form.lastName,
          },
          email: form.email,
          password: form.password,
          role: form.role,
        },
        { withCredentials: true },
      )

      if (res.status === 200 || res.status === 201) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', password: '', confirm: '', role: 'listener' })
      } else {
        setStatus('error')
        setSubmitError(res.data?.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setSubmitError(err.response?.data?.message || 'Unable to reach the server. Check the backend URL and try again.')
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-28 pb-10 sm:px-8 lg:px-10">
      <div className="grid w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative hidden overflow-hidden border-r border-white/10 p-10 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,188,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--on-surface-variant)]">Streamify</p>
              <h2 className="mt-6 max-w-sm text-4xl font-extrabold tracking-tight text-white">Create your account.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--on-surface-variant)]">
                Register once and start your premium listening experience.
              </p>
            </div>

            <div className="space-y-3 text-sm text-[var(--on-surface-variant)]">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">Same theme as home</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">Role-based signup</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">Google sign-in option</div>
            </div>
          </div>
        </aside>

        <section className="p-8 sm:p-10 lg:p-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--on-surface-variant)]">Register</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white">Join the Rhythm</h1>
          </div>

          <form  className="mt-8 grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">First name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/50 focus:bg-white/8 focus:ring-4 focus:ring-emerald-400/10"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">Last name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/50 focus:bg-white/8 focus:ring-4 focus:ring-emerald-400/10"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/50 focus:bg-white/8 focus:ring-4 focus:ring-emerald-400/10"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">Create password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/50 focus:bg-white/8 focus:ring-4 focus:ring-emerald-400/10"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">Confirm password</label>
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                placeholder="••••••••"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/50 focus:bg-white/8 focus:ring-4 focus:ring-emerald-400/10"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">Role</label>
              <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition hover:border-emerald-400/40 hover:bg-white/10">
                  <input
                    type="radio"
                    name="role"
                    value="listener"
                    checked={form.role === 'listener'}
                    onChange={handleChange}
                    className="h-4 w-4 border-white/20 bg-transparent text-emerald-400"
                  />
                  <span className="text-sm text-white">Listener</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition hover:border-emerald-400/40 hover:bg-white/10">
                  <input
                    type="radio"
                    name="role"
                    value="artist"
                    checked={form.role === 'artist'}
                    onChange={handleChange}
                    className="h-4 w-4 border-white/20 bg-transparent text-emerald-400"
                  />
                  <span className="text-sm text-white">Artist</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Creating account...' : 'Create Account'}
            </button>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--on-surface-variant)]">
              <div className="h-px flex-1 bg-white/10" />
              <span>or</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <button
              onClick={() => {
                window.location.href = `${API_URL}/api/auth/google`
              }}
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="#4285F4" d="M21.805 12.233c0-.724-.065-1.417-.184-2.084H12v3.94h5.39a4.61 4.61 0 0 1-2.001 3.027v2.51h3.24c1.896-1.746 2.976-4.319 2.976-7.393Z" />
                <path fill="#34A853" d="M12 22c2.7 0 4.964-.894 6.618-2.423l-3.24-2.51c-.894.6-2.041.96-3.378.96-2.593 0-4.79-1.752-5.574-4.102H3.11v2.58A10 10 0 0 0 12 22Z" />
                <path fill="#FBBC05" d="M6.426 13.925A6.006 6.006 0 0 1 6.426 10.07V7.49H3.11a10 10 0 0 0 0 12.87l3.316-2.435Z" />
                <path fill="#EA4335" d="M12 6.08c1.466 0 2.785.504 3.823 1.494l2.868-2.868A9.96 9.96 0 0 0 12 2a10 10 0 0 0-8.89 5.49l3.316 2.435C7.21 7.832 9.407 6.08 12 6.08Z" />
              </svg>
              Continue with Google
            </button>

            {submitError ? (
              <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">{submitError}</div>
            ) : null}

            {status === 'success' ? (
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                Account created successfully.
              </div>
            ) : null}

            <p className="text-center text-sm text-[var(--on-surface-variant)]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-white underline decoration-white/30 underline-offset-4">
                Log in
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}
