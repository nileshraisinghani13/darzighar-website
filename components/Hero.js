export default function Hero(){
  return (
    <section className="bg-secondary text-beige py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Custom Fits. Delivered to Your Doorstep.</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
  DarziGhar is an on-demand home tailoring service offering custom stitching, bridal blouses, salwar suits, alterations, and wedding outfits with doorstep measurement and delivery. Currently serving Chennai.
</p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-primary text-secondary px-6 py-2 rounded-md font-medium">Explore Services</a>
          <a href="#contact" className="btn-primary">Book a Tailor</a>
        </div>
      </div>
    </section>
  )
}
