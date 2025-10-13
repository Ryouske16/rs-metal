'use client'
import { useState } from 'react'

export default function ContactCTA(){
  const [state, setState] = useState<'idle'|'sent'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    try{
      const res = await fetch('/api/contact', { method:'POST', body: form })
      if(!res.ok) throw new Error('Request failed')
      setState('sent')
      e.currentTarget.reset()
    }catch{ setState('error') }
  }

  return (
    <section id="contact" className="section">
      <div className="container card p-8">
        <h2 className="text-3xl font-oswald">Your project, our precision.</h2>
        <p className="mt-2 text-gray-300">
          Share your drawings or requirements we’ll get back within 24 hours with a tailored quote.
        </p>
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3" />
          <input required type="email" name="email" placeholder="Email" className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3" />
          <input name="phone" placeholder="Phone (optional)" className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2" />
          <textarea required name="message" placeholder="Project details" rows={5} className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2"></textarea>
          <button className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:from-orange-500 hover:to-orange-600">
            Send Request
          </button>
          {state==='sent' && <p className="text-green-400 md:col-span-2">Thanks we’ll be in touch shortly.</p>}
          {state==='error' && <p className="text-red-400 md:col-span-2">Something went wrong. Please email us directly.</p>}
        </form>
      </div>
    </section>
  )
}
