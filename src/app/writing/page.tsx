import Link from "next/link";

export default function Writing() {
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
        <div className="max-w-[700px] text-left ml-0 sm:ml-24">
          
          {/* Writing List */}
          <section>
            <div className="space-y-6">
              
              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">14/08/2025</span>
                <a href="https://capsules.thirdroom.studio/2/" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  What if AI could help us deepen the relationships we already have instead of replacing them?
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">10/07/2025</span>
                <a href="https://capsules.thirdroom.studio/1/" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  What&apos;s A <em>Canary Trigger</em>? Let me explain.
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">15/05/2025</span>
                <a href="https://www.linkedin.com/pulse/befriending-1-0-wandering-lina-pauline-schrott-iyvfe/?trackingId=8oaHgv5A4eMTU5gsTSz6Uw%3D%3D" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  Befriending -1 to 0: The Wandering
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">01/05/2025</span>
                <a href="https://www.linkedin.com/pulse/what-your-story-matters-more-now-because-machines-cant-schrott-ffc7e/?trackingId=6KTp9r4yRo2oSv8Xk4fCFQ%3D%3D" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  What if Your Story Matters More Now, Because Machines Can&apos;t Live YOUR Experience? Insights from the Artist and the Machine Conference
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">13/01/2025</span>
                <a href="https://www.gitcoin.co/blog/sei-unveils-latest-grants-campaign-with-gitcoin-empowering-creators" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  Sei Unveils Latest Grants Campaign with Gitcoin: Empowering Creators
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">20/11/2024</span>
                <a href="https://www.gitcoin.co/blog/how-community-centric-grants-drive-growth-lessons-from-seis-grants-campaign" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  How Community-Centric Grants Drive Growth: Lessons from Sei&apos;s Grants Campaign
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">17/10/2024</span>
                <a href="https://www.gitcoin.co/blog/leveling-the-field-how-connection-oriented-cluster-matching-strengthens-quadratic-funding" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  Leveling the Field: How Connection-Oriented Cluster Matching Strengthens Quadratic Funding
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">15/10/2024</span>
                <a href="https://www.gitcoin.co/blog/the-ethers-js-journey-on-gitcoin-grants" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  From $3K to +$500K: The Ethers.js Journey on Gitcoin Grants
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">20/09/2024</span>
                <a href="https://www.gitcoin.co/blog/how-gitcoin-is-unlocking-the-potential-of-public-goods-across-asia" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  How Gitcoin is Unlocking the Potential of Public Goods Across Asia: A Case Study
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">03/09/2024</span>
                <a href="https://www.gitcoin.co/blog/lukso-gitcoin-a-qf-round" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  LUKSO partners with Gitcoin: Elevating the Future of Digital Identity and Creativity through a QF round
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">02/08/2024</span>
                <a href="https://www.gitcoin.co/blog/how-gitcoin-unlocks-alternative-funding-avenues-for-ngos-a-case-study-the-tor-project" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  How Gitcoin Unlocks Alternative Funding Avenues for NGOs: A Case Study, The Tor Project
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">04/07/2024</span>
                <a href="https://www.gitcoin.co/blog/idriss-bootstrapping-success-through-gitcoin" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  IDriss: Bootstrapping Success through Gitcoin
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">14/06/2024</span>
                <a href="https://gitcoin.mirror.xyz/RjqdZrPZaDiW_g0xqfey1xYW0OP5F502xo8vBojRFDQ" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  Catalyzing Change: ReFi DAO&apos;s Impact Through Gitcoin Funding Rounds
                </a>
              </div>

              <div className="flex items-start">
                <span className="text-black w-28 sm:w-36 flex-shrink-0 text-right pr-4 sm:pr-6 whitespace-nowrap leading-relaxed">03/03/2021</span>
                <a href="https://medium.com/@linapauline/have-you-ever-made-a-bucket-list-for-yourself-74429b427aa0" className="text-[#0000FF] hover:bg-[#0000FF] hover:text-white px-1 -mx-1 leading-relaxed">
                  Have you ever made a bucket list for yourself?
                </a>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
}
