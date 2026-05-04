import { Link } from 'react-router-dom';
import { contactInfo } from '../data';

export default function Footer() {
  return (
    <footer className="py-16 bg-background">
      <div className="container-projects px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border/50 pt-16">
          <div className="md:col-span-6 lg:col-span-4">
            <Link to="/" className="text-3xl text-accent-gradient font-display italic mb-4 inline-block hover:opacity-80 transition-opacity">
              Amaze Architects
            </Link>
            <p className="text-xs text-ink/60 max-w-xs leading-relaxed">
              Architecture & interior design studio crafting timeless spaces with precision and creativity.
            </p>
          </div>
          
          <div className="md:col-span-6 lg:col-span-4">
            <div className="text-[10px] tracking-luxe uppercase text-ink font-medium mb-6">Studio</div>
            <address className="not-italic text-sm text-ink/80 flex flex-col gap-2">
              <p>{contactInfo.address}</p>
              <p>Ajmer, Rajasthan</p>
            </address>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <div className="text-[10px] tracking-luxe uppercase text-ink font-medium mb-6">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-ink/80">
              {contactInfo.phones.map(phone => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">{phone}</a>
              ))}
              <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">{contactInfo.email}</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-luxe uppercase text-ink/40">
          <p>© 2024 Amaze Architects & Consultant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
