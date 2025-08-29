export default function About() {
  return (
    <section className="bg-black text-white py-12 px-6">
      {/* Section Title + Line */}
      <div className="mb-8">
        <h2 className="text-sm font-bold">ABOUT ME</h2>
        <div className="w-full border-b border-gray-600 mt-2"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image on Left */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg" // replace with your image path
            alt="Profile"
            className="w-64 h-auto object-cover"
          />
        </div>

        {/* About Text on Right */}
        <div className="max-w-lg text-right mr-4 sm:mr-8 md:mr-16 lg:mr-24">
          <h3 className="text-3xl font-bold mb-2">Hi! I’m Jane</h3>
          <p className="text-red-400 font-semibold mb-4">I am a movie blogger</p>
          <p className="text-sm text-gray-300 mb-6">
            This is where I’ll add info on the user’s profile…
          </p>

          {/* Button */}
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-semibold inline-block"
          >
            My Blog
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-4 fixed right-4 top-1/2 -translate-y-1/2">
        <a href="#" className="text-white hover:text-red-500">🐦</a>
        <a href="#" className="text-white hover:text-red-500">📘</a>
        <a href="#" className="text-white hover:text-red-500">📸</a>
      </div>
    </section>
  );
}
