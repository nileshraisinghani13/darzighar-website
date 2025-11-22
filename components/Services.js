const services = [
  {title: 'Blouse & Bridal Stitching', desc: 'Custom bridal blouses and party wear, expert fittings.', img: '/images/blouse_bridal.png'},
  {title: 'Salwar Suits & Kurtis', desc: 'Tailored everyday and festival wear.', img: '/images/salwar_kurtis.png'},
  {title: 'Wedding Dresses & Lehengas', desc: 'End-to-end tailoring for weddings.', img: '/images/wedding_lehengas.png'},
  {title: 'Alterations & Repairs', desc: 'Quick alteration turnaround with quality guarantee.', img: '/images/alterations_repairs.png'},
  {title: 'Corporate & School Uniforms', desc: 'Bulk tailoring with consistent sizing & quality.', img: '/images/corporate_uniforms.png'},
  {title: 'On-Demand Home Tailor (Chennai)', desc: 'Book a tailor to visit your home — measurement & stitching. Currently serving Chennai only.', img: '/images/home_tailor.png'},
]

export default function Services(){
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-5 bg-white rounded-lg shadow-sm flex flex-col">
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded-md group">
                <img 
                  src={s.img}
                  alt={s.title}
                  className="
                    max-h-full max-w-full object-contain 
                    transition-transform duration-300
                    group-hover:scale-150
                    group-hover:absolute group-hover:z-50 group-hover:shadow-xl
                  "
                />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
              <div className="mt-auto">
                <a href="#contact" className="btn-primary block text-center py-2 rounded-md">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
