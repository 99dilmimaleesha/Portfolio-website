import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center 
    bg-gradient-to-b from-purple-600 to-blue-500 text-white px-4 font-sans"
    >
      <h2 className=" text-6xl  mb-4 text-center">
        Frontend Developer, QA Engineer, Writer
      </h2>

      <p className="text-xl opacity-90 text-center max-w-2xl mb-8">
 
      </p>

      <Link to="/works">
        {" "}
        <button
          className="px-6 py-3 bg-white text-purple-700 font-semibold 
      rounded-xl shadow-lg hover:scale-105 transition"
        >
          Explore My Works
        </button>
      </Link>
    </section>
  );
}
