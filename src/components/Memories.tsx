//to do: add feature to upload photos to google drive
"use client";
import React, { useRef, useState } from "react";

const Memories = () => {
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    setShowForm(true);
    setSuccess(false);
    setError("");
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setSuccess(false);
    setError("");
    const files = fileInputRef.current.files;
    if (!files || files.length === 0) {
      setError("Please select at least one photo.");
      setUploading(false);
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSuccess(true);
        setShowForm(false);
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (err) {
      setError("Upload failed. Please try again.");
    }
    setUploading(false);
  };

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
        <button
          className="bg-hu-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200"
          onClick={handleUploadClick}
        >
          Upload Photos
        </button>
        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <form
              className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <h4 className="text-xl font-bold text-hu-navy mb-2">
                Upload Photos
              </h4>
              <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                className="border border-hu-navy rounded-lg p-2"
              />
              {error && <p className="text-hu-red text-sm">{error}</p>}
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="bg-hu-red text-white px-4 py-2 rounded-lg font-bold"
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-hu-navy px-4 py-2 rounded-lg font-bold"
                  onClick={handleClose}
                  disabled={uploading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        {success && (
          <p className="text-green-600 font-bold mt-4">
            Photos uploaded successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Memories;
