export const metadata = { title: "Contact — RS Metal" };

export default function ContactPage() {
  async function action(formData: FormData) {
    "use server";

    // Example: access file(s)
    const files = formData.getAll("projectFiles");
    console.log("Uploaded files:", files);

    // TODO: send files + form fields to Resend/SendGrid
    // or forward to your /api/contact route for processing.
    // e.g.
    // await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
    //   method: "POST",
    //   body: formData,
    // });
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Contact</h1>
        <div className="mt-6 card p-8">
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
                Accepted formats: PDF, DXF, DWG, STEP, images (max 25MB each).
              </p>
            </div>

            <button className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
