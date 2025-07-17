//to do: add feature to upload photos to google drive
import React from "react";

const Memories = () => {
  return (
    <section className="bg-hu-cream text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-hu-navy mb-4 tracking-wide drop-shadow-sm">
          📸 Got Memories?
        </h3>
        <p className="text-lg sm:text-xl text-hu-navy mb-8 font-medium leading-relaxed">
          Upload your favorite Howard memories for our{" "}
          <span className="text-hu-red font-semibold">Throwback Thursday.</span>
          <br />
          We’re spotlighting alumni all the way up to reunion week!
        </p>
        <button className="bg-hu-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200">
          Upload Photos
        </button>
      </div>
    </section>
  );
};

export default Memories;
