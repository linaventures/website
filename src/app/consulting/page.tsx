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

            <p className="mb-12 leading-relaxed">
              If this sounds familiar, let&apos;s talk.
            </p>

            {/* What I Do Section */}
            <h2 className="text-lg font-bold text-black mb-6">What I do</h2>
            
            <p className="mb-6 leading-relaxed">
              I&apos;m a narrative strategist who helps organizations find and tell their stories in emerging technology spaces. (I wrote about{" "}
              <a href="https://www.linkedin.com/pulse/what-your-story-matters-more-now-because-machines-cant-schrott-ffc7e/" className="text-[#0000FF] hover:underline">why storytelling matters more now in the age of AI</a>).
            </p>
            
            <p className="mb-6 leading-relaxed">
              Most engagements fall into one of these areas: <span className="font-bold">Time-delimited packages of strategic support</span>.
            </p>
            
            <p className="mb-6 leading-relaxed">
              These are focused blocks of time that you and your team can use to get support in thinking through narrative challenges and positioning decisions your organization faces:
            </p>

            <div className="ml-6 mb-6">
              <p className="mb-4 leading-relaxed">
                • <span className="text-[#0000FF] font-bold">Focused on messaging and positioning</span>: This package focuses on helping your team develop clear, compelling messaging that cuts through noise and connects with your target audience.
              </p>
              
              <p className="mb-4 leading-relaxed">
                • <span className="text-[#0000FF] font-bold">Focused on content strategy and production</span>: This package focuses on helping teams create systematic approaches to content that builds trust, demonstrates expertise, and drives meaningful engagement.
              </p>
            </div>

            <p className="mb-6 leading-relaxed">
              These packages are a low-friction way to try out working together without needing extensive prior discovery.
            </p>

            <p className="mb-12 leading-relaxed">
              I also provide more customized offerings:
            </p>

            <div className="ml-6 mb-12">
              <p className="mb-4 leading-relaxed">
                • A 1-2 day <span className="text-[#0000FF] font-bold">intensive narrative workshop</span> that uncovers and aligns your team around core stories that drive decision-making and external communication.
              </p>
              
              <p className="mb-4 leading-relaxed">
                • 1-3 day <span className="font-bold">intensive courses on storytelling in tech</span> that build your organization&apos;s internal capability to think and communicate narratively in complex technical environments.
              </p>
              
              <p className="mb-4 leading-relaxed">
                • <span className="font-bold">Fully customized consulting and advisory engagements</span> tailored to your organization&apos;s specific challenges or objectives — sometimes{" "}
                <a href="mailto:lina@thirdroom.studio" className="text-[#0000FF] hover:underline">those which you can&apos;t even name yet</a>.
              </p>
            </div>

            {/* How I Engage Section */}
            <h2 className="text-lg font-bold text-black mb-6">How I engage</h2>
            
            <p className="mb-6 leading-relaxed">
              No matter the engagement type — whether it&apos;s a package of focused hours or a fully customized project — <span className="font-bold">you always work directly with me</span>.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I scope engagements around specific areas where I have deep expertise and comparative advantage. Where needed, I bring in handpicked specialists from my network — people I trust, who are exceptional in their respective fields.
            </p>
            
            <p className="mb-12 leading-relaxed">
              By design, I don&apos;t operate the conventional consulting model that monetizes the heavily marked-up time of junior staff.
            </p>

            {/* What You Get Section */}
            <h2 className="text-lg font-bold text-black mb-6">What you get</h2>
            
            <p className="mb-6 leading-relaxed">
              When clients work with me, their organizations learn to distinguish signal from noise — and how to communicate accordingly.
            </p>
            
            <p className="mb-12 leading-relaxed">
              This empowers their teams to work more autonomously, tell their stories more compellingly, and move faster toward effective solutions that resonate with their audiences.
            </p>

            <p className="mb-12 leading-relaxed">
              <a href="mailto:lina@thirdroom.studio" className="text-[#0000FF] hover:underline font-bold">Get in touch</a> if you&apos;d like to talk about working together.
            </p>

            <hr className="border-t border-gray-300 mb-12" />

            {/* Organizations Section */}
            <h2 className="text-lg font-bold text-black mb-6">Some organizations I&apos;ve worked with, past and present</h2>
            
            <div className="ml-6">
              <p className="mb-2 leading-relaxed">• Gitcoin</p>
              <p className="mb-2 leading-relaxed">• Universal Profiles</p>
              <p className="mb-2 leading-relaxed">• Thalia Buchhandlung</p>
              <p className="mb-2 leading-relaxed">• Sky Deutschland</p>
              <p className="mb-2 leading-relaxed">• FortyIQ</p>
              <p className="mb-2 leading-relaxed">• Various early-stage AI and Web3 startups</p>
            </div>
          </section>

        </div>
      </main>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
}
