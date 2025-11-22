const Step = ({num, title, desc}) => (
  <div className="p-4 text-center">
    <div className="mb-3 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-secondary font-bold">{num}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
)

export default function HowItWorks(){
  return (
    <section id="how" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">How DarziGhar Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Step num="1" title="Book Online" desc="Choose service, schedule a visit or pickup, share preferences." />
          <Step num="2" title="Trusted Tailor" desc="A trained tailor measures & stitches with quality checks." />
          <Step num="3" title="Delivered to You" desc="Final fitting & doorstep delivery or pickup — your choice." />
        </div>
      </div>
    </section>
  )
}
