import { 
  Building2, 
  PencilRuler as ArchitectureIcon, 
  Construction, 
  ShieldCheck, 
  CircleDollarSign, 
  Clock, 
  Users, 
  Cpu, 
  Leaf, 
  MessageSquare,
  ArrowRight,
  Menu,
  CheckCircle2,
  FileText,
  MapPin,
  DraftingCompass,
  Hammer,
  Key
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import image1 from './assets/images/regenerated_image_1778333201566.png';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const portfolio = [
  { title: 'Skyline Residences', category: 'Residential', image: image1 },
  { title: 'The Prism Center', category: 'Commercial', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZsEoCHbAcMmrR4RaC4clcCWChjZP9295SHnpKyuDaYEBXcRbc9XP1-SGzvghP1YeheZ_5Q-hCRyz7rQZEhusshQ9t0dOTyMgLGJWQgxGuek4uT4RneOJ7_n6XhBImdLfzOzoARouSHZD7FrwO4QRIqy1GLoO21l1Yvqi9PzOwrukc_9BFAQJKxd8GCMB3MBWxeWviaKiKo8w4txaGLx8u7yWI-EqhIyS_YPfZfMDu7_PaQ7l9KlLUSAYi0fEFgYNPTd2dw9Qh1Co' },
  { title: 'Ironwood Estate', category: 'Luxury Villa', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYTysg8PkZ6l_zhlUZAuMLPAoAy5z-yNuNuc9ZJyNPWdvYnCkaQvKvdUclXGY-0_2OJ6kq3UnhVpcZSrbnGa_rlxKU5WOUc_dOGgKEWF8nm4RNhnesfWUkUHEpP6SYE3h657AfbRhg-4utmbxthq907OsuR5zSysg7amFVlxnl4nisWVCyEvWUHl2Zyu98HQisi85cyh5-WUCzVlQ38kayuF_EB6iZYaoankIwouVATJV1hnJeq8nS6t3u4kMM-EZPPGvt9sC7N1Cz' },
];

const packages = [
  {
    title: 'BOQ Based',
    price: '$120 - $180',
    unit: '/ sq.ft',
    description: 'Precise measurement-based billing for maximum control over material procurement and labor costs.',
    icon: DraftingCompass,
    features: ['Full Transparency', 'Daily Progress Reports', 'Quality Material Audits'],
    highlight: false
  },
  {
    title: 'Turnkey Build',
    price: '$250 - $400',
    unit: '/ sq.ft',
    description: 'End-to-end management from groundbreaking to the final coat of paint. Hassle-free delivery.',
    icon: Building2,
    features: ['Zero Supervision Required', 'Premium Material Inclusion', 'Interior Finishing Included'],
    highlight: true
  },
  {
    title: 'Bare Shell',
    price: '$80 - $110',
    unit: '/ sq.ft',
    description: 'Core and shell construction for owners who want to customize every interior detail independently.',
    icon: Construction,
    features: ['Structural Integrity Focus', 'Weather-Proof Shell', 'Optimized Layout Design'],
    highlight: false
  }
];

const features = [
  { title: 'Quality Assurance', desc: 'Rigorous 150-point checklist at every stage of construction.', icon: ShieldCheck },
  { title: 'Transparent Pricing', desc: 'Real-time cost tracking with zero hidden variation charges.', icon: CircleDollarSign },
  { title: 'On-Time Delivery', desc: 'Penalty-backed completion guarantees for peace of mind.', icon: Clock },
  { title: 'Expert Team', desc: 'Certified structural engineers and master craftsmen.', icon: Users },
  { title: 'Smart Technology', desc: 'IoT integration for monitoring and building automation.', icon: Cpu },
  { title: 'Sustainable Materials', desc: 'Eco-friendly supply chain and energy-efficient designs.', icon: Leaf },
];

const journeySteps = [
  { title: 'Consultation', desc: 'Initial vision and feasibility study', icon: MessageSquare },
  { title: 'Design', desc: 'Architectural drafting & approvals', icon: ArchitectureIcon },
  { title: 'Estimation', desc: 'Detailed BOQ and timelines', icon: FileText },
  { title: 'Selection', desc: 'Curating high-grade materials', icon: Hammer },
  { title: 'Construction', desc: 'Precision engineering on-site', icon: Construction },
  { title: 'Handover', desc: 'Final inspection & possession', icon: Key },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [calculationStatus, setCalculationStatus] = useState<'idle' | 'calculating' | 'done'>('idle');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculationStatus('calculating');
    setTimeout(() => {
      setCalculationStatus('done');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm px-6 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tight text-primary"
          >
            BK ASSETZ
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-on-surface/70 text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-bold shadow-lg"
            >
              Get Estimate
            </motion.button>
            <button 
              className="md:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full bg-surface-container z-40 md:hidden border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-on-surface/70 hover:text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury architecture" 
            className="w-full h-full object-cover opacity-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYTysg8PkZ6l_zhlUZAuMLPAoAy5z-yNuNuc9ZJyNPWdvYnCkaQvKvdUclXGY-0_2OJ6kq3UnhVpcZSrbnGa_rlxKU5WOUc_dOGgKEWF8nm4RNhnesfWUkUHEpP6SYE3h657AfbRhg-4utmbxthq907OsuR5zSysg7amFVlxnl4nisWVCyEvWUHl2Zyu98HQisi85cyh5-WUCzVlQ38kayuF_EB6iZYaoankIwouVATJV1hnJeq8nS6t3u4kMM-EZPPGvt9sC7N1Cz"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              Premium Build Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-glow">
              Precision in Every Beam, <br />
              <span className="text-primary">Excellence</span> in Every Build
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl">
              Crafting bespoke architectural legacies through innovative engineering and uncompromising craftsmanship. We turn complex structural blueprints into timeless physical realities.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/20"
              >
                Get Free Estimate
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="glass-panel px-10 py-4 rounded-xl font-bold border border-white/20 transition-all"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pricing" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Tailored Construction Solutions</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Select the delivery model that perfectly aligns with your project complexity and investment goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`glass-panel p-8 rounded-2xl flex flex-col hover:border-primary/50 transition-all duration-500 group relative ${pkg.highlight ? 'bg-surface-container-high border-primary/30' : ''}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <pkg.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-primary font-bold text-2xl">
                  {pkg.price} <span className="text-on-surface-variant text-sm font-normal">{pkg.unit}</span>
                </div>
              </div>
              <p className="text-on-surface-variant mb-8">{pkg.description}</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-primary w-4 h-4" /> {feat}
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.highlight ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'border border-primary/40 text-primary hover:bg-primary hover:text-on-primary'}`}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-24 bg-surface-container-lowest">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Engineered for Excellence</h2>
            <p className="text-on-surface-variant">The pillars of our structural philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl border-white/5 hover:bg-white/5 transition-colors group"
              >
                <feat.icon className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
                <p className="text-on-surface-variant text-sm">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Legacy Portfolio</h2>
            <p className="text-on-surface-variant">A showcase of structural excellence across continents.</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-primary font-bold group"
          >
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] glass-panel border-white/5"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                <h4 className="text-2xl font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="process" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-20">The Archistruct Journey</h2>
        <div className="relative">
          <div className="absolute top-8 left-0 w-full h-0.5 bg-white/10 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {journeySteps.map((step, i) => (
              <div key={step.title} className="relative pt-12 md:pt-16 group flex flex-col items-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-primary/20 z-10 hidden md:block"
                />
                <div className="text-center group-hover:-translate-y-2 transition-transform">
                  <step.icon className="text-primary/50 w-8 h-8 mx-auto mb-4" />
                  <h5 className="font-bold text-sm mb-2">{step.title}</h5>
                  <p className="text-on-surface-variant text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator Form */}
      <section id="contact" className="py-24 bg-surface-container px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border-primary/20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Instant Cost Estimator</h2>
            <p className="text-on-surface-variant">Get a preliminary quote tailored to your vision.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleCalculate}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant">Full Name</label>
              <input className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/20" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant">Phone Number</label>
              <input className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/20" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant">Location</label>
              <input className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/20" placeholder="Project City/State" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-on-surface-variant">Project Type</label>
              <select className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all text-on-surface">
                <option>Residential Villa</option>
                <option>Commercial Complex</option>
                <option>Industrial Warehouse</option>
                <option>Interior Renovation</option>
              </select>
            </div>
            <div className="md:col-span-2 pt-6">
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={calculationStatus === 'calculating'}
                className="w-full bg-primary text-on-primary font-bold py-5 rounded-xl shadow-xl shadow-primary/20 disabled:opacity-50"
              >
                {calculationStatus === 'idle' && 'Calculate Estimated Quote'}
                {calculationStatus === 'calculating' && 'Calculating...'}
                {calculationStatus === 'done' && 'Quote Sent to Email!'}
              </motion.button>
              <p className="text-center mt-4 text-[10px] text-on-surface-variant">*Detailed breakdown will be shared via email within 24 hours.</p>
            </div>
          </form>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Blueprint" 
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZsEoCHbAcMmrR4RaC4clcCWChjZP9295SHnpKyuDaYEBXcRbc9XP1-SGzvghP1YeheZ_5Q-hCRyz7rQZEhusshQ9t0dOTyMgLGJWQgxGuek4uT4RneOJ7_n6XhBImdLfzOzoARouSHZD7FrwO4QRIqy1GLoO21l1Yvqi9PzOwrukc_9BFAQJKxd8GCMB3MBWxeWviaKiKo8w4txaGLx8u7yWI-EqhIyS_YPfZfMDu7_PaQ7l9KlLUSAYi0fEFgYNPTd2dw9Qh1Co"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-surface/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-glow">Start Your Legacy Today</h2>
          <p className="text-lg md:text-xl text-on-surface-variant">Collaborate with the industry's finest structural minds to build something that lasts generations. Precision engineering meets artistic vision.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold shadow-2xl shadow-primary/40"
          >
            Get Free Quote
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-surface-container-lowest border-t border-white/5 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">BK ASSETZ</div>
            <p className="text-on-surface-variant text-sm max-w-sm">Premium construction services for discerning clients worldwide. Building with precision since 1998.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Licensing</a>
            <a href="#" className="hover:text-primary transition-colors">Careers</a>
          </div>
          <p className="text-on-surface-variant text-xs">© 2024 Archistruct Premium Construction. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a 
        href="#"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center group"
      >
        <MessageSquare size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2 whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
}
