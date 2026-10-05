export default function Navbar(){
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="/"><img src="/logo.png" alt="DarziGhar" className="h-16 md:h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"/></a>
          <span className="text-xl font-semibold text-secondary">DarziGhar</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#services" className="text-sm">Services</a>
          <a href="#how" className="text-sm">How it works</a>
          <a href="/our-work" className="text-sm">Our Work</a>
          <a href="#contact" className="btn-primary">Book a Tailor</a>
        </div>
      </div>
    </nav>
  )
}
