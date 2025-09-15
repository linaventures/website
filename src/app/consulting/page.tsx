import Link from "next/link";

export default function Consulting() {
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
          <h1 className="text-lg font-bold text-black mb-8">Consulting</h1>
          
          {/* Content Sections */}
          <section>
            <p className="mb-6 leading-relaxed">
              I help organizations tell better stories, build stronger narratives, and navigate the intersection of emerging technology and human experience.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Over the past five years, I&apos;ve worked with Web3 organizations, AI startups, and traditional companies adapting to new technologies. Current and former clients include Gitcoin, Universal Profiles, and various early-stage companies building at the frontier of decentralized systems and AI-native products. My work spans narrative strategy, campaign development, content creation, and helping technical teams communicate complex ideas effectively.
            </p>
            
            <p className="mb-12 leading-relaxed">
              I&apos;m also actively building AI-powered tools and products, giving me hands-on experience with the technologies and challenges my clients face. This practical knowledge informs my consulting approach and keeps me current with rapidly evolving landscapes.
            </p>

            {/* Where I Can Help Section */}
            <h2 className="text-lg font-bold text-black mb-6">Where I can help</h2>
            
            <p className="mb-6 leading-relaxed">
              Clients usually come to me in one of two situations:
            </p>

            <div className="ml-6 mb-6">
              <p className="mb-4 leading-relaxed">
                <span className="mr-4">1.</span>They&apos;ve built something innovative — a new product, platform, or approach — but struggle to communicate its value clearly. Their technical team understands the complexity, but they need help translating that into stories that resonate with users, investors, or the broader market.
              </p>
              
              <p className="mb-4 leading-relaxed">
                <span className="mr-4">2.</span>They&apos;re navigating a major shift — adopting AI tools, entering Web3 space, or transforming their business model — and need strategic guidance on messaging, positioning, and community building during periods of rapid change.
              </p>
            </div>

            <p className="mb-6 leading-relaxed">
              If this sounds familiar, let&apos;s talk.
            </p>

            <p className="leading-relaxed">
              Reach out at{" "}
              <a href="mailto:lina@thirdroom.studio" className="text-[#0000FF] hover:underline">lina@thirdroom.studio</a>.
            </p>
          </section>

        </div>
      </main>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
}
