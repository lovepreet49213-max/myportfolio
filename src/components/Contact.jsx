import React, { useState } from 'react'


import { Mail ,Phone,Github,Linkedin} from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
   const [showModal, setShowModal] = useState(false);
   const API = import.meta.env.VITE_API_URL;

  return (
    <div role="region" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-zinc-400">Send me a message — I typically reply within 2 business days.</p>

      <form
        className="mt-6 grid gap-3 max-w-xl"
        onSubmit={(e) => {
          e.preventDefault()
          setStatus('sending')
          const data = new FormData(e.target)
          const payload = Object.fromEntries(data.entries())
          
        ~  // Example: send to Formspree endpoint or replace with preferred backend
          fetch(`${API}/send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
             to:payload.email,
             subject: "Welcome "+payload.name,
             
             name: payload.name,
            
             message: payload.message,
           }),
          })
            .then((res) => {
      if (!res.ok) throw new Error("Failed to send");
      setStatus('sent');
      e.target.reset(); // <-- Clear the form
      setShowModal(true);

     
    })
            .catch(() => setStatus('error'))
        }}
      >



        <label htmlFor="name" className="flex flex-col">
          <span className="text-sm text-zinc-300">Name</span>
          <input id="name" name="name" required aria-required="true" className="mt-1 p-2 animated-bg rounded-md" />
        </label>

        <label htmlFor="email" className="flex flex-col">
          <span className="text-sm text-zinc-300">Email</span>
          <input id="email" name="email" type="email" required aria-required="true" className="mt-1 p-2 animated-bg rounded-md" />
        </label>

        <label htmlFor="message" className="flex flex-col">
          <span className="text-sm text-zinc-300">Message</span>
          <textarea id="message" name="message" rows={6} required aria-required="true" className="mt-1 p-2 animated-bg rounded-md" />
        </label>

        <div>
          <button aria-busy={status === 'sending'} className="px-4 py-2 bg-[var(--primary)] text-white rounded-md" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          <div role="status" aria-live="polite" className="inline-block ml-3">
            {status === 'sent' && <span className="text-green-400">Thanks — message sent!</span>}
            {status === 'error' && <span className="text-red-400">Error sending — try again later.</span>}
          </div>
        </div>
      </form>


        {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl p-8 max-w-md w-11/12 shadow-2xl border border-zinc-700 animate-slideIn">
      
      {/* Celebration Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
          <span className="text-3xl">🎉</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-center">Thank You!</h3>

      {/* Message */}
      <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300 leading-relaxed">
        I received your message and will get back to you as soon as possible.
      </p>

      {/* OK Button */}
      <div className="mt-6 flex justify-center">
        <button
          className="px-8 py-2 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
          onClick={() => setShowModal(false)}
        >
          OK
        </button>
      </div>
    </div>

    {/* Animations */}
    <style>
      {`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(-50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}
    </style>
  </div>
)}





    </div>
  )
} 
