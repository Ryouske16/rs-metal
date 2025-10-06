export const metadata = { title: "Contact — RS Metal" };

export default function ContactPage() {
  async function action(formData: FormData) {
    "use server";

    // Forward form data to your API route
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/contact`, {
      method: "POST",
      body: formData,
    });
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald mb-8">
          Contact <span className="gradient-text">Us</span>
        </h1>

        {/* ✅ Contact Info Section */}
        <div className="mb-10 p-8 rounded-xl bg-white/5 border border-white/10 shadow-glow">
          <h2 className="text-2xl font-oswald mb-4">
            Contact <span className="gradient-text">RS Metal</span>
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-2xl">
            Whether you have drawings, project details, or just an idea — reach out to us anytime. Our team will get back to you promptly.
          </p>

          {/* 📞 Phone Numbers */}
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
                07403 040313
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

          {/* 📧 Emails */}
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
          <form action={action} className="grid md:grid-cols-2 gap-4">
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

            {/* ✅ File upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Upload Your Project Files
              </label>
              <input
                type="file"
                name="projectFiles"
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

            <button className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:opacity-90 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
