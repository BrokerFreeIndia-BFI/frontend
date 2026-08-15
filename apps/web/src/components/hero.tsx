import { useEffect, useState } from 'react'
import { Apple, BedDouble, Building2, Home, MapPin, Play, Search, ShieldCheck, Sparkles } from 'lucide-react'

const phrases = ['your dream home', 'zero brokerage', 'a better move']

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="hero-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BFI home">
          <span className="brand-mark"><Building2 size={18} strokeWidth={2.4} /></span>
          <span>BFI</span>
        </a>
        <a className="header-cta" href="#download">Get Started</a>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="app-icon" aria-hidden="true">
            <Building2 size={48} strokeWidth={1.8} />
          </div>
          <div className="eyebrow"><Sparkles size={14} /> BROKER FREE INDIA</div>
          <h1 id="hero-title">Find your place.<br />Skip the brokerage.</h1>
          <p>Discover verified homes, apartments, and plots directly from owners. Buy, rent, and move with complete confidence — without paying a broker.</p>
          <div className="download-row" id="download">
            <a className="app-store" href="#download" aria-label="Download BFI on the App Store">
              <Apple size={27} fill="currentColor" />
              <span><small>Download on the</small>App Store</span>
            </a>
            <a className="app-store" href="#download" aria-label="Get BFI on Google Play">
              <Play size={25} fill="currentColor" />
              <span><small>Get it on</small>Google Play</span>
            </a>
          </div>
        </div>

        <div className="phone-stage" aria-label="Animated preview of BFI property listings">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone phone-back phone-left"><div className="phone-screen muted-screen" /></div>
          <div className="phone phone-back phone-right"><div className="phone-screen muted-screen" /></div>
          <div className="phone phone-main">
            <div className="phone-notch" />
            <div className="phone-screen property-screen">
              <div className="screen-top"><span>9:41</span><span>● ● ▰</span></div>
              <div className="property-brand"><Building2 size={15} /> <strong>BFI</strong><span>⌄</span></div>
              <div className="search-bar"><Search size={13} /> <span>Search homes in Bengaluru</span></div>
              <div className="property-tabs"><b>Buy</b><span>Rent</span><span>Plots</span></div>
              <div className="property-image"><div className="house-art"><Home size={42} /></div><span className="verified-badge"><ShieldCheck size={10} /> Verified</span><span className="heart">♡</span></div>
              <div className="property-info"><strong>Modern 2 BHK Apartment</strong><small><MapPin size={10} /> HSR Layout, Bengaluru</small><div><b>₹78 L</b><span>2 beds · 2 baths · 1,240 sq.ft</span></div></div>
              <div className="property-actions"><span>Contact owner</span><span><BedDouble size={12} /> View details</span></div>
            </div>
          </div>
        </div>

        <div className="floating-note note-one"><ShieldCheck size={15} /> <span>Owner verified</span><b>100%</b></div>
        <div className="floating-note note-two"><MapPin size={15} /> <span>Find</span><b className="rotating-word" key={phraseIndex}>{phrases[phraseIndex]}</b></div>
      </section>
    </main>
  )
}

export default Hero
