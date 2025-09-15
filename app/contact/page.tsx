export const metadata = { title: "Contact — RS Metal" };

export default function ContactPage(){
  async function action(formData: FormData) {
    "use server";
    // TODO: send with Resend/SendGrid or call your /api/contact route:
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, { method: "POST", body: formData });
    // console.log("Contact form submitted", Object.fromEntries(formData.entries()));
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-oswald">Contact</h1>
        <div className="mt-6 card p-8">
          {/* IMPORTANT: no method or encType when using Server Actions */}
          <form action={action} className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name"
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3" />
            <input required type="email" name="email" placeholder="Email"
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3" />
            <input name="phone" placeholder="Phone (optional)"
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2" />
            <textarea required name="message" placeholder="Project details" rows={6}
              className="rounded-xl bg-metal-900 border border-white/10 px-4 py-3 md:col-span-2"></textarea>
            <button className="md:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
