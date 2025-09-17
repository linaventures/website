import Link from "next/link";

export default function ProductBuilding() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Header */}
      <header className="px-6 py-8 pb-16 sm:px-12 sm:pb-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          {/* Name/Logo */}
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <Link href="/" className="text-[#0000FF] hover:underline text-lg">
              Lina Pauline
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="text-center sm:text-right">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="/writing" className="text-[#0000FF] hover:underline">
                writing
              </a>
              <a href="/consulting" className="text-[#0000FF] hover:underline">
                consulting
              </a>
              <a href="/product-building" className="text-[#0000FF] hover:underline">
                product-building
              </a>
              <a href="/testimonials" className="text-[#0000FF] hover:underline">
                testimonials
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 sm:px-12">
        <div className="max-w-[700px] mx-auto text-left">
          
          {/* Page Title */}
          <h1 className="text-lg font-bold text-black mb-8">Product-Building</h1>
          
          {/* Content Sections */}
          <section>
            <p className="mb-6 leading-relaxed">
              <span className="font-bold">Coding is no longer a barrier.</span> I&apos;ve gone from &quot;non-technical&quot; to shipping websites (including this one), apps, and technical experiments with tools like{" "}
              <a href="https://x.com/linaventures1/status/1966158358982832577" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">Cursor</a>.
            </p>
            
            <p className="mb-12 leading-relaxed">
              Over the last three months, I&apos;ve spent most of my time building{" "}
              <a href="https://capsules.ink/" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Capsules</a> and{" "}
              <a href="https://canaryapp.io/" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Canary</a>. Capsules began as a personal experiment to publish my writing in a more immersive way and has grown into an alpha platform with early creators, gaining traction through word of mouth and{" "}
              <a href="https://x.com/linaventures1/status/1965775276660646342" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">building in public</a>. Canary started as a{" "}
              <a href="https://x.com/linaventures1/status/1935322911428198577" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">hackathon win</a>, was accepted into the Cypherpunk Launchpad (
              <a href="https://x.com/web3privacy/status/1935339746433327200" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">W3PN</a>), and will be showcased at the{" "}
              <a href="https://congress.web3privacy.info/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">Cypherpunk Congress in Argentina</a> in November 2025.
            </p>

            {/* Product-building made me a better marketer */}
            <h2 className="text-lg font-bold text-black mb-6">Product-building made me a better marketer.</h2>
            
            <p className="mb-6 leading-relaxed">
              I didn&apos;t go into -1 to 0 with a roadmap. Instead, I followed questions: <em>what can a single person plus AI ship in a few days? how might AI reinvent content creation? what does the future of creativity look like with the advent of AI?</em> That mindset of experimentation led me to unexpected products.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I learned to strip ideas down to the smallest testable slice, ship working demos quickly, and iterate based on user feedback. I learned to think like a product-designer, focusing on the first 60 seconds (onboarding, trust signals, microcopy) and pairing it with interviews to surface friction and validate.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I learned that GTM doesn&apos;t begin after launch. With Capsules, I seeded use cases by{" "}
              <a href="https://capsules.thirdroom.studio/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">publishing my own work</a>, and{" "}
              <a href="https://x.com/linaventures1/status/1965775276660646342" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">sharing the process publicly</a>. And I learned how to extend small teams with tools: prototyping Capsules with{" "}
              <a href="https://x.com/linaventures1/status/1965043754446012787" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">N8N</a>, and orchestrating AI workflows and agents (always with a human in the loop) to replace repetitive work with systems.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Most importantly I learned that you don&apos;t need a big team to ship, you just need the willingness to experiment, learn, and share.
            </p>

            <p className="mb-12 leading-relaxed">
              <a href="mailto:lina@thirdroom.studio" className="text-[#0000FF] hover:underline font-bold">lina@thirdroom.studio</a>
            </p>
          </section>

        </div>
      </main>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
}
