import Link from "next/link";

export default function Testimonials() {
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
          <h1 className="text-lg font-bold text-black mb-8">Testimonials</h1>
          
          {/* Content Sections */}
          <section>
            <p className="mb-12 leading-relaxed">
              Kind words from people I&apos;ve worked with across storytelling, Web3, and AI projects.
            </p>

            {/* Testimonial 1 */}
            <div className="mb-12">
              <p className="mb-4 leading-relaxed">
                &quot;Lina has an exceptional ability to distill complex technical concepts into compelling narratives. Her work on our campaign strategy helped us connect with our community in ways we hadn&apos;t thought possible.&quot;
              </p>
              <p className="text-sm leading-relaxed">
                — <span className="font-bold">Alex Johnson</span>, Product Lead at TechStartup
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="mb-12">
              <p className="mb-4 leading-relaxed">
                &quot;Working with Lina transformed how we think about storytelling in Web3. She doesn&apos;t just write content—she builds narrative frameworks that scale with your organization.&quot;
              </p>
              <p className="text-sm leading-relaxed">
                — <span className="font-bold">Sarah Chen</span>, Founder, DeFi Protocol
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="mb-12">
              <p className="mb-4 leading-relaxed">
                &quot;Lina&apos;s approach to building in public inspired our entire team. She showed us how to turn product development into community engagement, and the results speak for themselves.&quot;
              </p>
              <p className="text-sm leading-relaxed">
                — <span className="font-bold">Marcus Williams</span>, Co-founder, AI Tools Company
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="mb-12">
              <p className="mb-4 leading-relaxed">
                &quot;Her documentary background brings a unique perspective to product storytelling. Lina helped us find the human story in our technology, which completely changed how we communicate our mission.&quot;
              </p>
              <p className="text-sm leading-relaxed">
                — <span className="font-bold">Emma Rodriguez</span>, Marketing Director, Emerging Tech Fund
              </p>
            </div>

            {/* Contact for testimonials */}
            <p className="mb-12 leading-relaxed">
              If you&apos;d like to share your experience working together, reach out at{" "}
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
