import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-kp-dark border-t border-kp-gray">
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-kp-yellow rounded-full flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="font-montserrat font-bold text-lg text-white">kP Electric, LLC</span>
            </div>
            <p className="text-gray-400 mb-2">Fully Licensed & Insured</p>
            <p className="text-gray-400">Reliable Professional Service</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-kp-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-kp-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-kp-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-kp-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-kp-yellow">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:978-302-2521"
                className="block text-gray-400 hover:text-kp-yellow transition-colors"
              >
                📞 978-302-2521
              </a>
              <a
                href="mailto:keeganspenney@gmail.com"
                className="block text-gray-400 hover:text-kp-yellow transition-colors"
              >
                ✉️ keeganspenney@gmail.com
              </a>
              <p className="text-gray-400">
                📍 Serving North Shore, MA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-kp-gray text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} kP Electric, LLC. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Licensed & Insured | Free Estimates
          </p>
        </div>
      </div>
    </footer>
  )
}