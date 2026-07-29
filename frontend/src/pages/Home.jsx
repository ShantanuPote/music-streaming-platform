import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-on-background font-body-base selection:bg-primary-container selection:text-on-primary-container">
      

      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-12 pt-24">
          <div
            className="pointer-events-none absolute inset-0 z-0 scale-105 bg-cover bg-center bg-no-repeat opacity-40 blur-sm mix-blend-screen"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9Mp-SjiuP2gEo9pcmN6zief7gk9Tx5WEFByxLRwgbNevAZEom15VjH8dkWdi8ctnWLx1Agh8kai1z94lNEq1CIuj7t7XAsRlXbirHMXdpvH6gWx_ebNwCPyN9HjPeSctgYygY4B9dOWQBLijOPSJ6WfrEd4T8A0OKsDGoKkcuADSBlJorK_OE5PoWtUU7sFw-0NgsR6A7ZijaADkjSwEM6WZZy-0O6XzidZluoEsj8fJL9Vu72lGw')",
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="relative z-10 mx-auto max-w-5xl px-container-padding text-center">
            <h1 className="mx-auto mb-6 max-w-4xl text-display-lg-mobile font-display-lg-mobile leading-tight md:text-display-lg md:font-display-lg">
              The Symphony of <br />
              <span className="text-gradient">Your Life.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-body-base font-body-base text-on-surface-variant md:text-headline-md md:font-headline-md">
              Experience music in high-fidelity with our signature atmospheric depth. Join millions of listeners today and immerse yourself in pure sound.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="w-full rounded-full bg-primary px-8 py-4 text-body-base font-bold text-on-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(208,188,255,0.5)] sm:w-auto"
                to="/register"
              >
                Get Started - Free Forever
              </Link>
              <button className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-4 text-body-base font-bold text-on-surface transition-all duration-300 hover:bg-white/10 sm:w-auto">
                View Plans
              </button>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-surface-container-lowest/50 py-12 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-12 px-container-padding opacity-80 md:gap-24">
            <div className="text-center">
              <p className="mb-1 text-display-lg-mobile font-display-lg-mobile text-primary">50M+</p>
              <p className="text-label-caps font-label-caps text-on-surface-variant">Tracks</p>
            </div>
            <div className="text-center">
              <p className="mb-1 text-display-lg-mobile font-display-lg-mobile text-secondary">10M+</p>
              <p className="text-label-caps font-label-caps text-on-surface-variant">Monthly Listeners</p>
            </div>
            <div className="text-center">
              <p className="mb-1 text-display-lg-mobile font-display-lg-mobile text-tertiary">0</p>
              <p className="text-label-caps font-label-caps text-on-surface-variant">Ads on Premium</p>
            </div>
          </div>
        </section>

        <section className="relative py-24" id="explore">
          <div className="relative z-10 mx-auto max-w-6xl px-container-padding">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-display-lg-mobile font-display-lg-mobile md:text-headline-md md:font-headline-md">Designed for the Senses</h2>
              <p className="mx-auto max-w-xl text-body-base font-body-base text-on-surface-variant">
                Not just a player, but an immersive environment for your audio journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="glass-panel group relative flex h-80 flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-colors duration-500 group-hover:bg-primary/40" />
                <div>
                  <span className="material-symbols-outlined mb-6 text-4xl text-primary" style={{ fontVariationSettings: "'wght' 200" }}>
                    high_quality
                  </span>
                  <h3 className="relative z-10 mb-2 text-headline-md font-headline-md">Studio Quality</h3>
                  <p className="relative z-10 text-body-sm font-body-sm text-on-surface-variant">
                    Hear every detail. Lossless audio streams directly to your devices, preserving the artist&apos;s original intent.
                  </p>
                </div>
              </div>

              <div className="glass-panel group relative mt-0 flex h-80 flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 md:mt-8">
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary/20 blur-2xl transition-colors duration-500 group-hover:bg-secondary/40" />
                <div>
                  <span className="material-symbols-outlined mb-6 text-4xl text-secondary" style={{ fontVariationSettings: "'wght' 200" }}>
                    offline_pin
                  </span>
                  <h3 className="relative z-10 mb-2 text-headline-md font-headline-md">Offline Anywhere</h3>
                  <p className="relative z-10 text-body-sm font-body-sm text-on-surface-variant">
                    Take your universe with you. Download full albums and playlists for a seamless experience without connections.
                  </p>
                </div>
              </div>

              <div className="glass-panel group relative flex h-80 flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute right-1/2 -top-8 h-32 w-32 translate-x-1/2 rounded-full bg-tertiary/20 blur-2xl transition-colors duration-500 group-hover:bg-tertiary/40" />
                <div>
                  <span className="material-symbols-outlined mb-6 text-4xl text-tertiary" style={{ fontVariationSettings: "'wght' 200" }}>
                    auto_awesome
                  </span>
                  <h3 className="relative z-10 mb-2 text-headline-md font-headline-md">Curated for You</h3>
                  <p className="relative z-10 text-body-sm font-body-sm text-on-surface-variant">
                    Algorithmic precision meets human touch. Discover new soundscapes tailored specifically to your listening habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center overflow-hidden py-32" id="premium">
          <div className="pointer-events-none absolute inset-0 z-0 mx-auto my-auto h-3/4 w-3/4 rounded-full bg-primary/5 blur-[100px]" />
          <div className="relative z-10 max-w-3xl px-container-padding text-center">
            <h2 className="mb-6 text-display-lg-mobile font-display-lg-mobile md:text-display-lg md:font-display-lg">Ready to dive in?</h2>
            <p className="mb-10 text-body-base font-body-base text-on-surface-variant">
              Start your free trial today and experience the difference of optical depth and lossless sound.
            </p>
            <Link
              to="/register"
              className="inline-block rounded-full bg-primary px-10 py-5 text-headline-md font-headline-md font-bold text-on-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(208,188,255,0.6)] active:scale-95"
            >
              Create Account
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 flex w-full flex-col items-center justify-between border-t border-white/5 bg-background px-container-padding py-8 md:flex-row">
        <div className="mb-4 md:mb-0">
          <span className="flex items-center gap-2 text-label-caps font-label-caps font-bold">
            <span className="material-symbols-outlined text-sm">graphic_eq</span>
            Streamify Music
          </span>
        </div>
        <div className="mb-4 flex gap-6 text-center md:mb-0" id="library">
          <a className="text-body-sm font-body-sm text-on-surface-variant opacity-60 transition-colors hover:text-primary hover:opacity-100" href="#privacy">
            Privacy Policy
          </a>
          <a className="text-body-sm font-body-sm text-on-surface-variant opacity-60 transition-colors hover:text-primary hover:opacity-100" href="#terms">
            Terms of Service
          </a>
          <a className="text-body-sm font-body-sm text-on-surface-variant opacity-60 transition-colors hover:text-primary hover:opacity-100" href="#help">
            Help Center
          </a>
        </div>
        <div className="text-body-sm font-body-sm text-on-surface-variant opacity-60">© 2024 Streamify Music. All rights reserved.</div>
      </footer>
    </div>
  )
}
