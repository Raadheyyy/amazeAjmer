import { contactInfo } from '../data';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 container-content px-8 md:px-14 min-h-screen bg-background flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Contact Info and Form */}
        <div>
          <h1 className="text-5xl md:text-7xl text-ink font-display font-light mb-8">get in <span className="text-accent italic font-normal">touch</span></h1>
          <p className="text-ink/70 mb-12 max-w-md">
            Whether you have a specific project in mind or simply want to explore possibilities, we are here to listen and collaborate.
          </p>

          <form className="flex flex-col gap-8 mb-16">
            <div className="relative">
              <input type="text" id="name" required className="w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors peer placeholder-transparent" placeholder="Name" />
              <label htmlFor="name" className="absolute left-0 top-2 text-[11px] tracking-luxe uppercase text-ink/40 transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px]">Name</label>
            </div>

            <div className="relative mt-4">
              <input type="email" id="email" required className="w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors peer placeholder-transparent" placeholder="Email" />
              <label htmlFor="email" className="absolute left-0 top-2 text-[11px] tracking-luxe uppercase text-ink/40 transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px]">Email Address</label>
            </div>

            <div className="relative mt-4">
              <textarea id="message" rows={4} required className="w-full bg-transparent border-b border-border py-2 text-ink focus:outline-none focus:border-ink transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-0 top-2 text-[11px] tracking-luxe uppercase text-ink/40 transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px]">Project Details</label>
            </div>

            <button type="button" className="mt-4 self-start bg-ink text-background px-8 py-3 text-[11px] tracking-luxe uppercase hover:bg-accent transition-colors duration-300">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Map and Address */}
        <div className="h-full flex flex-col gap-8">
          <div className="w-full aspect-square md:aspect-4/3 bg-muted relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {/* Google Maps Embed - Updated for Adarsh Nagar, Ajmer */}
            {/* Google Maps Embed - Updated for Adarsh Nagar, Ajmer */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.178878288172!2d74.652957775415!3d26.417703481188116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be1b23ddd5a7f%3A0xa20cf6753c3802d5!2sAmaze%20Architects%20Consultant!5e0!3m2!1sen!2sus!4v1777898760580!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Amaze Architects Location"
            ></iframe>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">Visit Us</div>
              <address className="not-italic text-sm text-ink/80 flex flex-col gap-1">
                <p>{contactInfo.address}</p>
                <p>Ajmer, Rajasthan</p>
                <p className="mt-2 text-ink/40 italic">Open Monday — Saturday</p>
              </address>
            </div>
            <div>
              <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">Connect</div>
              <div className="flex flex-col gap-1 text-sm text-ink/80">
                {contactInfo.phones.map(phone => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">{phone}</a>
                ))}
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">{contactInfo.email}</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
