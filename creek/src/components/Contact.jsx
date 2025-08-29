export default function Contact() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Panel */}
        <div className="bg-red-600 flex items-center justify-center p-8">
          <h2 className="text-center text-2xl md:text-3xl font-bold leading-relaxed">
            HAVE I MISSED <br />
            ANYTHING GOOD <br />
            LATELY? <br />
            LET ME KNOW
          </h2>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="bg-[#111] p-8 flex flex-col justify-center">
          <form className="space-y-6">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First name *</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last name *</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email *</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Leave us a message...</label>
              <textarea
                rows="3"
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2035 by On My Screen.
      </div>
    </section>
  );
}
