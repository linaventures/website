import Link from "next/link";

export default function Home() {
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
          
          {/* Intro Section */}
          <section className="mb-16">
            <p className="mb-6 leading-relaxed">
              Hi, I&apos;m Lina. I deeply care about how stories shape people and products, and how we can design better ways to tell them. I am, amongst other things, a creative producer, consultant, and builder.
            </p>
            
            <p className="mb-6 leading-relaxed">
              I started out in documentary and advertising, moving between small,{" "}
              <a href="https://www.imdb.com/title/tt22014076/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">scrappy film projects</a> and large-scale campaigns. I&apos;ve directed shoots with a 30+ crew for{" "}
              <a href="https://www.youtube.com/watch?v=bGlWl1YG4cA" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">Sky Deutschland&apos;s <em>Babylon Berlin</em></a>, produced scripted TikTok series for{" "}
              <a href="https://www.tiktok.com/@thalia_buchhandlungen" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">Thalia Buchhandlung</a> that went on to generate{" "}
              <a href="https://www.tiktok.com/@thalia_buchhandlungen/video/7237493732671606042" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">over a million views</a>, and led documentary projects like{" "}
              <a href="https://youtu.be/R8MeW469Tzs?si=-xbrHYskCTAvhQWf" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer"><em>Blank Was A Canvas</em></a> amplifying underrepresented voices.
            </p>
            
            <p className="mb-6 leading-relaxed">
              In 2022, I shifted into web3 and emerging tech. I&apos;ve worked with organizations like{" "}
              <a href="https://x.com/gitcoin" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Gitcoin</a>, and{" "}
              <a href="https://x.com/ERC725Account" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Universal Profiles</a>. My focus was on developing{" "}
              <a href="https://www.gitcoin.co/blog/how-community-centric-grants-drive-growth-lessons-from-seis-grants-campaign" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">narrative strategies</a>,{" "}
              <a href="https://x.com/gitcoin/status/1805258048006431096" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">launching campaigns</a>, and{" "}
              <a href="https://x.com/gitcoin/status/1839764168221606390" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">capturing builder stories</a>. Sometimes that meant running interviews and turning them into 40+ evergreen videos. Sometimes it meant writing{" "}
              <a href="https://www.gitcoin.co/blog/how-gitcoin-unlocks-alternative-funding-avenues-for-ngos-a-case-study-the-tor-project" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">case studies</a>, or growing a newsletter from{" "}
              <a href="https://3beats.beehiiv.com/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">zero to hundreds of readers in weeks</a>. Always, it meant finding the story inside the complexity.
            </p>
            
            <p className="mb-6 leading-relaxed">
              This past year, I stepped back from client work to go into what has been coined a{" "}
              <a href="https://www.linkedin.com/pulse/befriending-1-0-wandering-lina-pauline-schrott-iyvfe" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">-1 to 0 phase</a>… a period of learning by building. I dove deep into{" "}
              <a href="https://x.com/linaventures1/status/1965043754446012787" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">agentic workflows</a>, AI-native tooling, and product prototyping on micro teams (2-3)<span className="font-bold">. Out of that came:</span>
            </p>

            <div className="mb-6 ml-4">
              <p className="mb-2 leading-relaxed">
                •{" "}
                <a href="https://capsules.ink/" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Capsules</a> — a storytelling format for immersive, scroll-driven publishing
              </p>
              <p className="mb-2 leading-relaxed">
                •{" "}
                <a href="https://canaryapp.io/" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Canary</a> — a secure vault for your most critical stories, truths, or instructions
              </p>
              <p className="mb-2 leading-relaxed">
                • <span className="font-bold">Field Notes</span> — a friendship LLM experiment (
                <a href="https://capsules.thirdroom.studio/2/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">read about it</a>)
              </p>
              <p className="mb-2 leading-relaxed">
                •{" "}
                <a href="https://luma.com/cyeeujcg" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">AI Tea Saloons</a> — community gatherings exploring the future of AI through facilitated dialogue
              </p>
              <p className="mb-2 leading-relaxed">
                •{" "}
                <a href="https://x.com/linaventures1/status/1965775276660646342" className="text-[#0000FF] hover:underline font-bold" target="_blank" rel="noopener noreferrer">Building in public</a> — sharing process, wins, and failures openly
              </p>
              <p className="mb-2 leading-relaxed">
                • <span className="font-bold">3x3</span> — a conversation series where thought leaders reflect on AI, creativity, and consciousness…three questions at a time (coming soon)
              </p>
            </div>
            
            <p className="mb-6 leading-relaxed">
              Building these projects has expanded <a href="/product-building" className="text-[#0000FF] hover:underline">my technical ability</a> substantially. I&apos;ve coded multiple landing pages, designed the UI & UX of a couple apps and automated various workflows with AI tools. It&apos;s shown me what&apos;s possible now: how much leverage small, focused tiger teams really have with AI.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-t border-gray-300 mb-16" />

          {/* Contact Section */}
          <section>
            <h2 className="font-bold text-black mb-6 text-lg">Contact</h2>
            
            <p className="mb-4 leading-relaxed">
              For consulting or collaborations:{" "}
              <a href="mailto:lina@thirdroom.studio" className="text-[#0000FF] hover:underline">lina@thirdroom.studio</a>.
            </p>
            
            <p className="mb-4 leading-relaxed">
              To connect:{" "}
              <a href="https://x.com/linaventures1" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">X @linaventures</a>,{" "}
              <a href="https://www.linkedin.com/in/linapaulineschrott/" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>,{" "}
              <a href="https://substack.com/@linaventures" className="text-[#0000FF] hover:underline" target="_blank" rel="noopener noreferrer">Substack</a>.
            </p>
          </section>

        </div>
      </main>

      {/* Profile Image */}
      <div className="px-6 sm:px-12 mb-12 mt-16">
        <div className="max-w-[700px] mx-auto text-left">
          <div className="relative inline-block">
            <img 
              src="/takeoff.jpg" 
              alt="Lina Pauline" 
              className="w-64 sm:w-80"
            />
            <p className="text-sm leading-relaxed mt-2 text-right">
              That&apos;s me about to take off on a flight over my favorite city, NYC.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
}
