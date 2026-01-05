function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 md:gap-8">
        <a href="#" className="font-semibold hover:text-blue-600">Home</a>
        <a href="#" className="font-semibold hover:text-blue-600">Features</a>
        <a href="#" className="font-semibold hover:text-blue-600">Contact</a>
      </nav>

      {/* HERO SECTION */}
      <section className="p-6 text-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Tailwind Responsive Page
        </h2>

        <img
          src="https://via.placeholder.com/300"
          alt="hero"
          className="mx-auto mt-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />

        {/* BUTTON */}
        <button className="mt-6 px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Click Me
        </button>
      </section>

      {/* FEATURES GRID */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow">
            <img
              src="https://via.placeholder.com/200"
              className="rounded mb-3"
            />
            <h3 className="font-bold">Feature {item}</h3>
            <p className="text-sm text-gray-600">
              This is a feature description.
            </p>
            <button className="mt-3 px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* LIST */}
      <section className="p-6">
        <ul className="list-disc list-inside pl-5">
          <li className="hover:text-blue-600">Fast</li>
          <li className="hover:text-blue-600">Responsive</li>
          <li className="hover:text-blue-600">Modern</li>
        </ul>
      </section>

      {/* TABLE */}
      <section className="p-6 overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((row, i) => (
              <tr
                key={row}
                className={`border hover:bg-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="border p-2">User {row}</td>
                <td className="border p-2">Developer</td>
                <td className="border p-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FORM */}
      <section className="p-6">
        <form className="bg-white p-6 rounded shadow max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
