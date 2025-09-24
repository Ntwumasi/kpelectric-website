import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center section-padding">
        <div className="absolute inset-0 bg-gradient-to-br from-kp-darker to-kp-dark"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-kp-yellow"></div>
                <span className="text-kp-yellow uppercase tracking-wider font-semibold">Licensed & Insured</span>
              </div>

              <h1 className="font-montserrat font-black text-5xl md:text-7xl leading-tight">
                <span className="gradient-text">Reliable</span><br />
                <span className="text-white">Electrical</span><br />
                <span className="text-white">Solutions</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl">
                Professional master electrician services for residential and commercial needs.
                No job too big or small. Free estimates on all work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="btn-primary text-center">
                  Get Free Estimate
                </Link>
                <a href="tel:978-302-2521" className="btn-secondary text-center">
                  Call 978-302-2521
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-kp-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">24/7 Emergency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-kp-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-kp-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Free Estimates</span>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-kp-yellow to-yellow-600 opacity-20 blur-3xl"></div>
              <div className="relative bg-kp-gray rounded-lg p-8 border border-kp-yellow/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/kp-logo.svg"
                      alt="KP Electric Logo"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-montserrat font-bold text-2xl text-white">KP Electric</h3>
                    <p className="text-gray-400">Your Trusted Local Master Electrician</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding py-20 bg-kp-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From small repairs to large installations, we handle all your electrical needs with professionalism and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-kp-gray rounded-lg p-8 border border-kp-gray hover:border-kp-yellow/50 transition-all duration-300">
              <div className="w-16 h-16 bg-kp-yellow/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">Residential</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Outlet & Switch Installation</li>
                <li>• Lighting Fixtures</li>
                <li>• Panel Upgrades</li>
                <li>• Home Rewiring</li>
                <li>• Safety Inspections</li>
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-kp-gray rounded-lg p-8 border border-kp-gray hover:border-kp-yellow/50 transition-all duration-300">
              <div className="w-16 h-16 bg-kp-yellow/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">Commercial</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Office Electrical Systems</li>
                <li>• Retail Store Lighting</li>
                <li>• Equipment Installation</li>
                <li>• Emergency Repairs</li>
                <li>• Maintenance Contracts</li>
              </ul>
            </div>

            {/* Emergency */}
            <div className="bg-kp-gray rounded-lg p-8 border border-kp-gray hover:border-kp-yellow/50 transition-all duration-300">
              <div className="w-16 h-16 bg-kp-yellow/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🚨</span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">Emergency Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 24/7 Availability</li>
                <li>• Power Outages</li>
                <li>• Electrical Hazards</li>
                <li>• Circuit Breaker Issues</li>
                <li>• Storm Damage Repair</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding py-20 bg-kp-darker">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
              Why Choose kP Electric?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-kp-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Licensed & Insured</h3>
              <p className="text-gray-400">Fully licensed master electrician with comprehensive insurance coverage</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-kp-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Free Estimates</h3>
              <p className="text-gray-400">No-obligation quotes for all electrical work</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-kp-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-2">Professional Service</h3>
              <p className="text-gray-400">Reliable, on-time, and courteous service guaranteed</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-kp-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-2">All Jobs Welcome</h3>
              <p className="text-gray-400">From small repairs to large installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20 bg-gradient-to-r from-kp-yellow to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-kp-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-kp-dark/80 text-xl mb-8">
            Contact us today for a free estimate on your electrical project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-kp-dark text-kp-yellow font-bold px-8 py-4 rounded-lg hover:bg-black transition-all duration-300 uppercase tracking-wider">
              Request Estimate
            </Link>
            <a href="tel:978-302-2521" className="bg-white text-kp-dark font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider">
              Call Now: 978-302-2521
            </a>
          </div>
        </div>
      </section>
    </>
  )
}