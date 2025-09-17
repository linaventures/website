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
          <h1 className="text-lg font-bold text-black mb-8">Consulting</h1>
          
          {/* Content Sections */}
          <section>
            <p className="mb-12 leading-relaxed">
              I work with frontier tech teams to turn complex ideas into stories that build trust, attract support, and create momentum for what they&apos;re building.
            </p>

            {/* Where I Can Help Section */}
            <h2 className="text-lg font-bold text-black mb-6">Where I can help</h2>
            
            <p className="mb-6 leading-relaxed">
              Clients usually come to me in one of two situations:
            </p>

            <div className="ml-6 mb-6">
              <p className="mb-4 leading-relaxed">
                <span className="mr-4">1.</span>They&apos;ve built something innovative, a new product, platform, or approach, but struggle to communicate its value clearly. Their technical team understands the complexity, but they need help translating that into stories that resonate with users, investors, or the broader market.
              </p>
              
              <p className="mb-4 leading-relaxed">
                <span className="mr-4">2.</span>They want to build a narrative infrastructure, and need strategic guidance on how to build repeatable processes, founder stories, or content libraries that grow with their organization.
              </p>
            </div>

            <p className="mb-12 leading-relaxed">
              If this sounds familiar, let&apos;s talk.
            </p>

            {/* What I Do Section */}
            <h2 className="text-lg font-bold text-black mb-6">What I do</h2>
            
            <p className="mb-6 leading-relaxed">
              I&apos;m a narrative strategist who helps organizations find and tell their stories in emerging technology spaces. (I wrote about{" "}
              <a href="https://www.linkedin.com/pulse/what-your-story-matters-more-now-because-machines-cant-schrott-ffc7e/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">why storytelling matters more now in the age of AI</a>). That can look like:
            </p>
            
            <p className="mb-6 leading-relaxed">
              Most engagements fall into one of these areas: <span className="font-bold">Time-delimited packages of strategic support</span>.
            </p>
            
            <p className="mb-6 leading-relaxed">
              These are focused blocks of time that you and your team can use to get support in thinking through narrative challenges and positioning decisions your organization faces:
            </p>

            <div className="ml-6 mb-6">
              <p className="mb-4 leading-relaxed">
                • <span className="font-bold">Focused on messaging and positioning</span>: This package focuses on helping your team develop clear, compelling messaging that cuts through noise and connects with your target audience.
              </p>
              
              <p className="mb-4 leading-relaxed">
                • <span className="font-bold">Focused on content strategy and production</span>: This package focuses on helping teams create systematic approaches to content that builds trust, demonstrates expertise, and drives meaningful engagement.
              </p>
            </div>

            <p className="mb-6 leading-relaxed">
              These packages are a low-friction way to try out working together without needing extensive prior discovery.
            </p>

            <p className="mb-6 leading-relaxed">
              I also provide more customized offerings:
            </p>

            <p className="mb-12 leading-relaxed">
              <span className="font-bold">Fully customized consulting and advisory engagements</span> tailored to your organization&apos;s specific challenges or objectives, sometimes those which you can&apos;t even name yet.
            </p>

            {/* How I Engage Section */}
            <h2 className="text-lg font-bold text-black mb-6">How I engage</h2>
            
            <p className="mb-6 leading-relaxed">
              No matter the engagement type, whether it&apos;s a package of focused hours or a fully customized project, <span className="font-bold">you always work directly with me</span>.
            </p>
            
            <p className="mb-12 leading-relaxed">
              I scope engagements around specific areas where I have deep expertise and comparative advantage. Where needed, I bring in handpicked specialists from my network, people I trust, who are exceptional in their respective fields.
            </p>

            {/* What You Get Section */}
            <h2 className="text-lg font-bold text-black mb-6">What you get</h2>
            
            <p className="mb-6 leading-relaxed">
              Working with me helps your organization:
            </p>

            <div className="ml-6 mb-6">
              <p className="mb-2 leading-relaxed">
                • Find <span className="font-bold">clarity</span> in how you talk about your work.
              </p>
              <p className="mb-2 leading-relaxed">
                • Build <span className="font-bold">trust</span> with funders, communities, and partners.
              </p>
              <p className="mb-2 leading-relaxed">
                • Create <span className="font-bold">momentum</span> with stories and content systems that keep working long after the engagement ends.
              </p>
            </div>

            <p className="mb-12 leading-relaxed">
              <span className="font-bold">Get in touch</span> if you&apos;d like to talk about working together:{" "}
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
