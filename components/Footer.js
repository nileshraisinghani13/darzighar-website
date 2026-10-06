export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <img src="/logo.png" alt="DarziGhar" className="h-10 mb-2"/>
          <p className="text-sm text-gray-600">Custom Fits. Delivered to Your Doorstep.</p>
        </div>
        <div className="text-sm text-gray-600 mt-4 md:mt-0">
          <div>© {new Date().getFullYear ? new Date().getFullYear() : 2025} DarziGhar</div>
          <div className="mt-2">Contact: <a href="mailto:darzighar.fashion@gmail.com" className="underline">darzighar.fashion@gmail.com</a></div>
        </div>
      </div>
    </footer>
  )
}
