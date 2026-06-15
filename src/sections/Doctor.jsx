import { motion } from 'framer-motion'
import {
  BadgeCheck,
  GraduationCap,
  Award,
  Quote,
  CheckCircle2,
  CalendarDays,
} from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import SmartImage from '../components/SmartImage'
import { fadeRight, fadeLeft, staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import doctor from '../data/doctor'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700">
      {children}
    </span>
  )
}

function CredentialGroup({ icon: Icon, title, items }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <h4 className="text-sm font-bold uppercase tracking-wide text-ink">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Doctor() {
  return (
    <Section id="doctor" tone="section">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* LEFT — image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-float">
              <SmartImage
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.role} at AVM Smiles`}
                className="aspect-[4/5] w-full"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-4 rounded-3xl border border-line bg-white p-5 shadow-card sm:-right-6">
              <p className="text-3xl font-extrabold text-brand-700">{doctor.experience}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Clinical Experience
              </p>
            </div>

            {/* Quote chip */}
            <div className="absolute -left-4 top-8 hidden max-w-[15rem] rounded-2xl border border-line bg-white/90 p-4 shadow-card backdrop-blur sm:block">
              <Quote className="h-5 w-5 text-accent-400" />
              <p className="mt-2 text-xs leading-relaxed text-ink/80">{doctor.quote}</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — credentials */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <Eyebrow>Meet Our Expert Dentist</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Experienced Dental Care You Can Trust
          </h2>

          {/* Name + role */}
          <div className="mt-6">
            <p className="text-2xl font-bold text-ink">{doctor.name}</p>
            <p className="mt-1 text-base font-medium text-accent-600">{doctor.role}</p>
          </div>

          {/* Qualifications + Experience */}
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ink">Qualifications</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {doctor.qualifications.map((q) => (
                  <Pill key={q}>{q}</Pill>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ink">Experience</p>
              <p className="mt-3 text-lg font-semibold text-brand-700">
                {doctor.experience} of Clinical Experience
              </p>
            </div>
          </div>

          {/* Expertise tags */}
          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-wide text-ink">Areas of Expertise</p>
            <motion.div
              variants={staggerParent(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-3 flex flex-wrap gap-2.5"
            >
              {doctor.expertise.map((e) => (
                <motion.span
                  key={e}
                  variants={staggerItem}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-soft"
                >
                  <BadgeCheck className="h-4 w-4 text-brand-500" />
                  {e}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Credential cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <CredentialGroup icon={GraduationCap} title="Professional Memberships" items={doctor.memberships} />
            <CredentialGroup icon={Award} title="Certifications & Awards" items={doctor.certifications} />
          </div>

          <div className="mt-8">
            <Button to="/contact-us" variant="primary" size="lg" icon={CalendarDays} iconRight={false}>
              Book a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
