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

            {/* Testimonial 1 - Mathilda */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;Working with Lina is always a pleasure. Her attention to detail, unrelenting passion, and sharp strategic mindset are truly inspiring. Every project she takes on reflects her dedication, thoughtfulness, and exceptional ability to weave meaningful narratives. Her work is rooted in care, creativity, and an innate understanding of how to connect people and ideas, making her an invaluable asset to any team or initiative.&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Mathilda DV</span>,{" "}
                  <a href="https://www.linkedin.com/in/mathilda-dv-904b6a98/" className="text-[#0000FF] hover:underline font-bold">Head of Grants Program, Gitcoin</a>
                </p>
              </div>
              <img src="/Testimonials/mathilda.png" alt="Mathilda DV" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

            {/* Testimonial 2 - James */}
            <div className="mb-12">
              <p className="mb-4 leading-relaxed">
                &quot;I had been meeting hundreds of people in the last few months, expressing my life story through an elevator pitch. Each time unstructured and lacking consistency. I attended Lina&apos;s workshop during Edge City. I finally understood the immense value of professionally structuring the stories we repeat so many times that convey such important messages about ourselves. I have been using her frameworks ever since!&quot;
              </p>
              <p className="text-sm leading-relaxed">
                — <span className="font-bold">James Ross Vazquez</span>,{" "}
                <a href="https://www.linkedin.com/in/james-ross-vazquez/" className="text-[#0000FF] hover:underline font-bold">Strategy and BD, Valuat</a>
              </p>
            </div>

            {/* Testimonial 3 - Meggie */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;It is a delight to work with Lina! With her calm and approachable notion, she manages to make everyone feel welcome and seen. Her eye for detail amazes me each time. She is a reliable person, who delivers on time. Glad to have you on board!&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Meggie Jaworski</span>,{" "}
                  <a href="https://www.linkedin.com/in/meggie-jaworski/" className="text-[#0000FF] hover:underline font-bold">Managing Partner, wom3n.DAO</a>
                </p>
              </div>
              <img src="/Testimonials/meggie.jpg" alt="Meggie Jaworski" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

            {/* Testimonial 4 - Veronica */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;We were delighted when Lina joined the AsteriskDAO team. She sorted our brand messaging, and built our comms team. She&apos;s a genius at pulling out the founder&apos;s story and making a plan that works for the business. I can&apos;t recommend her enough!&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Veronica Kirin</span>,{" "}
                  <a href="https://www.linkedin.com/in/vmkirin/?originalSubdomain=de" className="text-[#0000FF] hover:underline font-bold">Founder Asterisk DAO</a>
                </p>
              </div>
              <img src="/Testimonials/veronica.jpg" alt="Veronica Kirin" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

            {/* Testimonial 5 - Seville */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;I feel so deeply grateful after my second storytelling consultation with Lina! She simply blew my mind - her level of professionalism, structure, intuitive reading, and depth of understanding of my story left me in awe. I feel honored to be working with her. I feel incredibly supported and seen, thank you so much for this experience and for believing in my story!&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Seville Avtsova</span>,{" "}
                  <a href="https://sevil-lives.squarespace.com/home" className="text-[#0000FF] hover:underline font-bold">Founder of Sevil-Lives</a>
                </p>
              </div>
              <img src="/Testimonials/seville.png" alt="Seville Avtsova" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

            {/* Testimonial 6 - Patricia */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;Lina spent time on our film set, shooting clips of the cast and crew at work, which we edited into an EPK. After we finished shooting, she developed an approach and filmed an interview with me. She was very skilled at following up in pursuit of deeper and more thoughtful conversation about the film and its context. I&apos;m leery of PR strategies that seem formulaic and trivial; I&apos;m convinced that Lina is genuinely interested in the creative process and in representing every person and their work intelligently and authentically.&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Patricia Gruben</span>,{" "}
                  <a href="https://en.wikipedia.org/wiki/Patricia_Gruben" className="text-[#0000FF] hover:underline font-bold">Filmmaker and Director/Professor at SFU</a>
                </p>
              </div>
              <img src="/Testimonials/patricia.jpg" alt="Patricia Gruben" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

            {/* Testimonial 7 - Zoe */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;Lina has a calm, collected and warm energy that will put anyone at ease the moment they meet her. Her ability to problem-solve and work through any issue with utmost professionalism is what truly stood out to me. I look forward to working with her in the future.&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Zoe Hertz</span>,{" "}
                  <a href="https://afterlifestudio.ca/about" className="text-[#0000FF] hover:underline font-bold">CEO and Founder Afterlife Films</a>
                </p>
              </div>
              <img src="/Testimonials/zoe.jpg" alt="Zoe Hertz" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

            {/* Testimonial 8 - Hani */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4 leading-relaxed">
                  &quot;We worked with Lina to conduct interviews for our video series, CAWI (Canadian Advisory of Women Immigrants) Women Leaders. She was an amazing sport and went above and beyond to capture the stories of the women highlighted in the Montreal area. She is respectful, organized and very driven. We hope to work with Lina in the future to develop more of these inspiring stories of women.&quot;
                </p>
                <p className="text-sm leading-relaxed">
                  — <span className="font-bold">Hani Rukh-E-Qamar</span>,{" "}
                  <a href="https://www.linkedin.com/in/hani-rukh-e-qamar-952628196/?originalSubdomain=ca" className="text-[#0000FF] hover:underline font-bold">Founder CAWI and Unicef Youth Consultant</a>
                </p>
              </div>
              <img src="/Testimonials/hani.jpg" alt="Hani Rukh-E-Qamar" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full flex-shrink-0" />
            </div>

          </section>

        </div>
      </main>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
}
