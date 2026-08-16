import { useEffect, useState } from 'react'
import { BedDouble, Building2, Home, MapPin, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { GlassButton } from '@/components/ui/glass-button'

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
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="app-icon" aria-hidden="true">
            <Building2 size={48} strokeWidth={1.8} />
          </div>
          <div className="eyebrow"><Sparkles size={14} /> BROKER FREE INDIA</div>
          <h1 id="hero-title">Behind every door,<br />a HOME, not a broker</h1>
          {/* <p>Discover verified homes, apartments, and plots directly from owners. Buy, rent, and move with complete confidence — without paying a broker.</p> */}
          <div className="download-row !mt-4" id="download">
            <GlassButton href="#download" aria-label="Download BFI on the App Store">
              <svg viewBox="0 0 384 512" fill="currentColor" height="24" width="24" className="shrink-0"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <span className="flex flex-col items-start leading-tight">
                <small style={{fontSize: '10px', opacity: 0.7, letterSpacing: '0.02em'}}>Download on the</small>
                <span style={{fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1}}>App Store</span>
              </span>
            </GlassButton>
            <GlassButton href="#download" aria-label="Get BFI on Google Play">
              <svg viewBox="0 0 512 512" fill="currentColor" height="22" width="22" className="shrink-0"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <span className="flex flex-col items-start leading-tight">
                <small style={{fontSize: '10px', opacity: 0.7, letterSpacing: '0.02em'}}>Get it on</small>
                <span style={{fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1}}>Google Play</span>
              </span>
            </GlassButton>
          </div>
        </div>

        <div className="phone-stage mt-2" aria-label="Animated preview of BFI property listings">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit orbit-four" />
          <div className="orbit orbit-five" />
        <div className="phone phone-back phone-left">
          <div className="phone-screen muted-screen">
            <div className="screen-top"><span>9:41</span><span>● ▰</span></div>
            <div style={{marginTop: '18px', fontSize: '13px', fontWeight: 700, color: '#aaa'}}>Saved</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px'}}>
              {[{icon: '🏠', label: 'HSR Layout 2BHK', price: '₹65 L'}, {icon: '🏢', label: 'Whitefield Studio', price: '₹28 L'}, {icon: '🏡', label: 'Koramangala Plot', price: '₹1.2 Cr'}].map((item, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px'}}>
                  <span style={{fontSize: '16px'}}>{item.icon}</span>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '9px', fontWeight: 600, color: '#e0e0e0'}}>{item.label}</div>
                    <div style={{fontSize: '8px', color: '#ee4c40', fontWeight: 700}}>{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="phone phone-back phone-right">
          <div className="phone-screen muted-screen">
            <div className="screen-top"><span>9:41</span><span>● ▰</span></div>
            <div style={{marginTop: '18px', fontSize: '13px', fontWeight: 700, color: '#aaa'}}>Notifications</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px'}}>
              {[{emoji: '🔔', msg: 'New listing in HSR Layout!', time: '2m ago'}, {emoji: '✅', msg: 'Owner verified your tour', time: '1h ago'}, {emoji: '💬', msg: 'Message from owner', time: '3h ago'}].map((n, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px'}}>
                  <span style={{fontSize: '14px'}}>{n.emoji}</span>
                  <div>
                    <div style={{fontSize: '8px', fontWeight: 600, color: '#e0e0e0'}}>{n.msg}</div>
                    <div style={{fontSize: '7px', color: '#888', marginTop: '2px'}}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
