import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, CalendarDays, Stethoscope, CheckCircle2, Send } from 'lucide-react'
import Button from './Button'
import services from '../data/services'

const FIELD =
  'h-12 w-full rounded-xl border border-line bg-white px-11 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand-400 focus:ring-4 focus:ring-brand-100'

/**
 * Appointment request form. No backend wired — on submit it shows a success
 * state. Connect `handleSubmit` to your booking API / email service.
 */
export default function AppointmentForm({ className }) {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', treatment: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST `form` to your booking endpoint.
    setDone(true)
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center shadow-card ${className}`}
      >
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}! Our team will
          call you shortly to confirm your appointment.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold text-brand-700 hover:underline"
        >
          Book another appointment
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8 ${className}`}
    >
      <div className="space-y-4">
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update('name')}
            className={FIELD}
            aria-label="Your name"
          />
        </div>

        <div className="relative">
          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="tel"
            required
            placeholder="Phone number"
            value={form.phone}
            onChange={update('phone')}
            className={FIELD}
            aria-label="Phone number"
          />
        </div>

        <div className="relative">
          <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="date"
            required
            value={form.date}
            onChange={update('date')}
            className={FIELD}
            aria-label="Preferred date"
          />
        </div>

        <div className="relative">
          <Stethoscope className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <select
            required
            value={form.treatment}
            onChange={update('treatment')}
            className={`${FIELD} appearance-none pr-9 ${form.treatment ? 'text-ink' : 'text-muted/70'}`}
            aria-label="Treatment required"
          >
            <option value="" disabled>
              Treatment required
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General Consultation">General Consultation</option>
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <Button type="submit" variant="accent" size="lg" icon={Send} className="mt-6 w-full">
        Book Appointment
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        We respect your privacy. Your details are never shared.
      </p>
    </form>
  )
}
