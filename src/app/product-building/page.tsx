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
              <span className="font-bold">Coding is no longer a barrier.</span> I&apos;ve gone from &quot;non-technical&quot; to shipping websites (including this one), apps, and technical experiments with tools like Cursor.
            </p>
            
            <p className="mb-12 leading-relaxed">
              Over the last three months, I&apos;ve spent most of my time building{" "}
              <a href="https://capsules.ink/" className="text-[#0000FF] hover:underline font-bold">Capsules</a> and{" "}
              <a href="https://canaryapp.io/" className="text-[#0000FF] hover:underline font-bold">Canary</a>. Capsules began as a personal experiment to publish my writing in a more immersive way and has grown into an alpha platform with early creators, gaining traction through word of mouth and{" "}
              <a href="https://x.com/linaventures1/status/1965775276660646342" className="text-[#0000FF] hover:underline">building in public</a>. Canary started as a{" "}
              <a href="https://x.com/linaventures1/status/1935322911428198577" className="text-[#0000FF] hover:underline">hackathon win</a>, was accepted into the Cypherpunk Launchpad (
              <a href="https://x.com/web3privacy/status/1935339746433327200" className="text-[#0000FF] hover:underline">W3PN</a>), and will be showcased at the{" "}
              <a href="https://congress.web3privacy.info/" className="text-[#0000FF] hover:underline">Cypherpunk Congress in Argentina</a> in November 2025.
            </p>

            {/* Product-building made me a better marketer */}
            <h2 className="text-lg font-bold text-black mb-6">Product-building made me a better marketer.</h2>
            
            <p className="mb-6 leading-relaxed">
              I didn&apos;t go into -1 to 0 with a roadmap. Instead, I followed questions: <em>what can a single person plus AI ship in a few days? how might AI reinvent content creation? what does the future of creativity look like with the advent of AI?</em> That mindset of experimentation led me to unexpected products and faster learning cycles.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I learned to strip ideas down to the smallest testable slice, ship working demos quickly, and iterate based on user feedback rather than on assumptions. I learned to think like a user, designing the first 60 seconds—onboarding, trust signals, microcopy—and pairing it with interviews to surface friction and validate whether the story matched the lived experience.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I learned that go-to-market doesn&apos;t begin after launch. With Capsules, I seeded use cases by publishing my own work, shared the process publicly, and brought in early testers whose feedback shaped the product. And I learned how to extend small teams with tools: prototyping Capsules with N8N, building a content research generator, and orchestrating AI workflows and agents (always with a human in the loop) to replace repetitive work with systems.
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
