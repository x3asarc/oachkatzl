export default function SimpleBooking() {
  return (
    <div id="booking" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Stay</h2>
          <p className="text-lg text-gray-600">Ready to experience our luxury apartment?</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                <input type="date" className="w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                <input type="date" className="w-full rounded-md border-gray-300 shadow-sm" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
              <select className="w-full rounded-md border-gray-300 shadow-sm">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}