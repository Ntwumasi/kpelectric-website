import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | kP Electric - Licensed Master Electrician',
  description: 'Professional electrical services for residential and commercial properties. From small repairs to large installations. Free estimates available.',
}

export default function Services() {
  const services = {
    residential: [
      {
        title: "Electrical Panel Upgrades",
        description: "Upgrade your home's electrical panel for increased capacity and safety",
        features: ["100-400 amp upgrades", "Code compliance", "Safety inspections"]
      },
      {
        title: "Lighting Installation",
        description: "Professional installation of all types of lighting fixtures",
        features: ["Recessed lighting", "Chandeliers", "LED conversions", "Outdoor lighting"]
      },
      {
        title: "Outlet & Switch Services",
        description: "Installation, repair, and upgrade of outlets and switches",
        features: ["GFCI outlets", "USB outlets", "Smart switches", "Dimmer installation"]
      },
      {
        title: "Home Rewiring",
        description: "Complete or partial home rewiring for safety and efficiency",
        features: ["Knob & tube replacement", "Aluminum wiring remediation", "Circuit additions"]
      },
      {
        title: "Ceiling Fan Installation",
        description: "Expert installation and repair of ceiling fans",
        features: ["New installations", "Fan replacements", "Remote control setup"]
      },
      {
        title: "EV Charger Installation",
        description: "Install electric vehicle charging stations at your home",
        features: ["Level 2 chargers", "Tesla compatible", "240V outlets"]
      }
    ],
    commercial: [
      {
        title: "Office Electrical Systems",
        description: "Complete electrical solutions for office buildings",
        features: ["Workstation wiring", "Data center power", "Emergency lighting"]
      },
      {
        title: "Retail Store Services",
        description: "Specialized electrical services for retail environments",
        features: ["Display lighting", "Sign installation", "Point-of-sale wiring"]
      },
      {
        title: "Restaurant & Kitchen",
        description: "Heavy-duty electrical work for commercial kitchens",
        features: ["Equipment hookups", "Exhaust systems", "Walk-in coolers"]
      },
      {
        title: "Warehouse & Industrial",
        description: "Industrial-grade electrical installations and repairs",
        features: ["High-voltage systems", "Motor controls", "3-phase power"]
      },
      {
        title: "Property Management",
        description: "Ongoing electrical maintenance for multiple properties",
        features: ["Preventive maintenance", "Emergency response", "Tenant improvements"]
      },
      {
        title: "Code Compliance",
        description: "Ensure your business meets all electrical codes",
        features: ["Inspections", "Corrections", "Documentation"]
      }
    ],
    emergency: [
      {
        title: "Power Outages",
        description: "Rapid response to restore power to your property",
        features: ["Troubleshooting", "Breaker repairs", "Main line issues"]
      },
      {
        title: "Electrical Hazards",
        description: "Immediate response to dangerous electrical situations",
        features: ["Sparking outlets", "Burning smells", "Exposed wiring"]
      },
      {
        title: "Storm Damage",
        description: "Emergency repairs after severe weather events",
        features: ["Downed lines", "Surge damage", "Water damage"]
      },
      {
        title: "24/7 Availability",
        description: "Round-the-clock emergency electrical services",
        features: ["Rapid response", "After-hours service", "Weekend availability"]
      }
    ]
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding py-20 bg-gradient-to-br from-kp-darker to-kp-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="font-montserrat font-black text-5xl md:text-7xl mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Professional electrical services for every need. No job is too big or too small.
              Free estimates on all work.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="section-padding py-20 bg-kp-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-kp-yellow"></div>
              <span className="text-kp-yellow uppercase tracking-wider font-semibold">For Your Home</span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white">
              Residential Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.residential.map((service, index) => (
              <div key={index} className="bg-kp-gray rounded-lg p-6 border border-kp-gray hover:border-kp-yellow/50 transition-all duration-300">
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-start">
                      <span className="text-kp-yellow mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="section-padding py-20 bg-kp-darker">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-kp-yellow"></div>
              <span className="text-kp-yellow uppercase tracking-wider font-semibold">For Your Business</span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white">
              Commercial Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.commercial.map((service, index) => (
              <div key={index} className="bg-kp-gray rounded-lg p-6 border border-kp-gray hover:border-kp-yellow/50 transition-all duration-300">
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-start">
                      <span className="text-kp-yellow mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding py-20 bg-kp-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-kp-yellow"></div>
              <span className="text-kp-yellow uppercase tracking-wider font-semibold">24/7 Response</span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white">
              Emergency Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.emergency.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-kp-gray to-kp-darker rounded-lg p-6 border border-red-900/30 hover:border-kp-yellow/50 transition-all duration-300">
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-start">
                      <span className="text-kp-yellow mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding py-20 bg-kp-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Serving North Shore Massachusetts
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We proudly serve residential and commercial customers throughout the North Shore area,
            including Salem, Beverly, Peabody, Danvers, Marblehead, Lynn, and surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href="tel:978-302-2521" className="btn-secondary">
              Call 978-302-2521
            </a>
          </div>
        </div>
      </section>
    </>
  )
}