import { useState } from 'react'

const workItems = [
  { id: 1, category: 'Suits', title: 'Salmon Silk Anarkali', description: 'Floor-length salmon silk Anarkali with gold zari border, mirror-work cuffs and a vibrant Patola dupatta. Bespoke stitching for a Chennai customer.', image: '/images/work-anarkali-suit.png' },
  { id: 2, category: 'Co-ords', title: 'Brocade Co-ord Set', description: 'Sleeveless deep V-neck blouse with matching wide-leg palazzo pants in rich patchwork brocade. Multicolour paisley and floral motifs with gold zari border.', image: '/images/work-brocade-coord-set.png' },
]

const categories = ['All', 'Suits', 'Co-ords']

function WorkCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group">
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded-md">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-150 group-hover:absolute group-hover:z-50 group-hover:shadow-xl"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-primary)' }}>
          {item.category}
        </span>
        <h3 className="mt-1 text-base font-semibold text-secondary">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
      </div>
    </div>
  )
}

export default function OurWork() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? workItems : workItems.filter(i => i.category === active)

  return (
    <section className="py-16 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary">Our Work</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Every stitch tells a story. Here's a glimpse of the garments we've crafted and transformed for our customers across Chennai.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                active === cat
                  ? 'text-white border-transparent'
                  : 'bg-white text-secondary border-gray-200 hover:border-gray-400'
              }`}
              style={active === cat ? { background: 'var(--color-accent)', borderColor: 'var(--color-accent)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(item => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-4">Like what you see? Let's create something beautiful for you.</p>
          <a href="/#contact" className="btn-primary">Book a Tailor</a>
        </div>
      </div>
    </section>
  )
}
