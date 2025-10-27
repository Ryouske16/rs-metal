"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        form.reset();
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      console.error("❌ Contact form error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald mb-8">
          Contact <span className="gradient-text">Us</span>
        </h1>

        {/* ✅ Contact Info */}
        <div className="mb-10 p-8 rounded-xl bg-white/5 border border-white/10 shadow-glow">
          <h2 className="text-2xl font-oswald mb-4">
            Contact <span className="gradient-text">RS Metal</span>
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-2xl">
            Whether you have drawings, project details, or just an idea, reach
            out to us anytime. Our team will get back to you promptly.
          </p>

          <div className="space-y-1 text-sm font-medium mb-6">
            <p>
              📞{" "}
              <a
                href="tel:+447523907497"
                className="gradient-text hover:opacity-80 transition"
              >
                +44 7523 907497
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:07403040313"
                className="gradient-text hover:opacity-80 transition"
              >
                +44 7403 040313
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:+447380828761"
                className="gradient-text hover:opacity-80 transition"
              >
                +44 7380 828761
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@rsmetal.co.uk"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
            >
              info@rsmetal.co.uk
            </a>
            <a
              href="mailto:rsmetalfabrications@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition"
            >
              rsmetalfabrications@gmail.com
            </a>
          </div>
        </div>

        {/* ✅ Contact Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3"
            />
            <input
              name="phone"
              placeholder="Phone (optional)"
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2"
            />
            <textarea
              required
              name="message"
              placeholder="Project details"
              rows={6}
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2"
            ></textarea>

            {/* ✅ File Upload + How-to link */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">
                  Upload Your Project Files
                </label>

                {/* Short link to CAD preparation guide */}
                <Link
                  href="/blog/cad-preparation"
                  className="text-xs text-cyan-400 hover:text-violet-400 underline underline-offset-2 transition"
                >
                  How to prepare CAD drawing
                </Link>
              </div>

              <input
                type="file"
                name="file"
                multiple
                className="block w-full text-sm text-gray-300 
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-gradient-to-r file:from-cyan-400 file:to-violet-600 file:text-black
                           hover:file:opacity-90"
              />
              <p className="mt-2 text-xs text-gray-500">
                Accepted formats: PDF, DXF, DWG, STEP, images (max 25 MB each).
              </p>
            </div>

            <button
              disabled={loading}
              className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {/* ✅ Feedback Messages */}
          {success && (
            <p className="mt-4 text-green-400 text-sm font-medium">
              ✅ Message sent successfully! We’ll get back to you soon.
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-400 text-sm font-medium">
              ❌ Failed to send message. Please try again later.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
