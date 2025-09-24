'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, this would send to your email service
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding py-20 bg-gradient-to-br from-kp-darker to-kp-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="font-montserrat font-black text-5xl md:text-7xl mb-6">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Get your free estimate today. We&apos;ll respond promptly to discuss your electrical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding py-20 bg-kp-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-1 w-12 bg-kp-yellow"></div>
                  <span className="text-kp-yellow uppercase tracking-wider font-semibold">Get in Touch</span>
                </div>
                <h2 className="font-montserrat font-bold text-3xl text-white">
                  Request Your Free Estimate
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-kp-gray border border-kp-gray rounded-lg focus:border-kp-yellow focus:outline-none focus:ring-1 focus:ring-kp-yellow text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-kp-gray border border-kp-gray rounded-lg focus:border-kp-yellow focus:outline-none focus:ring-1 focus:ring-kp-yellow text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-kp-gray border border-kp-gray rounded-lg focus:border-kp-yellow focus:outline-none focus:ring-1 focus:ring-kp-yellow text-white"
                    placeholder="(978) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message / Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-kp-gray border border-kp-gray rounded-lg focus:border-kp-yellow focus:outline-none focus:ring-1 focus:ring-kp-yellow text-white resize-none"
                    placeholder="Tell us about your electrical needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
                    Thank you! We&apos;ll contact you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-1 w-12 bg-kp-yellow"></div>
                  <span className="text-kp-yellow uppercase tracking-wider font-semibold">Direct Contact</span>
                </div>
                <h2 className="font-montserrat font-bold text-3xl text-white mb-8">
                  We&apos;re Here to Help
                </h2>

                <div className="space-y-6">
                  <a href="tel:978-302-2521" className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-kp-yellow/10 rounded-lg flex items-center justify-center group-hover:bg-kp-yellow/20 transition-colors">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-kp-yellow text-lg">978-302-2521</p>
                      <p className="text-gray-400 text-sm">Available 24/7 for emergencies</p>
                    </div>
                  </a>

                  <a href="mailto:keeganspenney@gmail.com" className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-kp-yellow/10 rounded-lg flex items-center justify-center group-hover:bg-kp-yellow/20 transition-colors">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-kp-yellow text-lg">keeganspenney@gmail.com</p>
                      <p className="text-gray-400 text-sm">We&apos;ll respond within 24 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-kp-yellow/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Service Area</h3>
                      <p className="text-gray-300">North Shore, Massachusetts</p>
                      <p className="text-gray-400 text-sm">Salem, Beverly, Peabody, Danvers, and more</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="bg-kp-gray rounded-lg p-6 border border-kp-yellow/20">
                <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                  KP Electric, LLC
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="text-kp-yellow">✓</span>
                    <span>Fully Licensed & Insured</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-kp-yellow">✓</span>
                    <span>Free Estimates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-kp-yellow">✓</span>
                    <span>24/7 Emergency Service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-kp-yellow">✓</span>
                    <span>Residential & Commercial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-kp-yellow">✓</span>
                    <span>No Job Too Big or Small</span>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-kp-yellow to-yellow-600 rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-xl text-kp-dark mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-kp-dark">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                  <hr className="border-kp-dark/20 my-3" />
                  <p className="text-sm font-semibold">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}