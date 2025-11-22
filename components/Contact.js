import { useState } from 'react';

export default function Contact(){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Blouse & Bridal Stitching');
  const whatsappNumber = '+919840032297'; // international format without plus
  const email = 'darzighar.fashion@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello DarziGhar,%0A%0AI would like to book a tailor.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0A%0AThanks.`;
    // open WhatsApp chat with prefilled message
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  }

  return (
    <section id="contact" className="py-16 bg-beige">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Book a Tailor</h2>
        <p className="text-center text-sm text-gray-700 mb-6">Prefer WhatsApp? Tap the button or fill the form and we'll message you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input required value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input required value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 block w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Service</label>
                <select value={service} onChange={e=>setService(e.target.value)} className="mt-1 block w-full border rounded-md p-2">
                  <option>Blouse & Bridal Stitching</option>
                  <option>Salwar Suits & Kurtis</option>
                  <option>Wedding Dresses & Lehengas</option>
                  <option>Alterations & Repairs</option>
                  <option>Corporate & School Uniforms</option>
                  <option>On-Demand Home Tailor</option>
                </select>
              </div>
              <div className="pt-4">
                <button type="submit" className="btn-primary w-full">Book via WhatsApp</button>
              </div>
            </form>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col justify-center">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm mb-4">WhatsApp / Phone: <a href="https://wa.me/919840032297" target="_blank" rel="noreferrer" className="underline">+91 98400 32297</a></p>
            <p className="text-sm mb-4">Email: <a href="mailto:darzighar.fashion@gmail.com" className="underline">darzighar.fashion@gmail.com</a></p>
            <p className="text-sm">We typically respond within a few hours during business hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
