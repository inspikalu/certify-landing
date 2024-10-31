import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Marquee from "@/app/components/Marquee"
import Cards from "@/app/components/Cards"
import Profiles from "@/app/components/Profiles"
import Footer from "@/app/components/Footer"

const MarginedSection = function({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-[40px]">
      {children}
    </section>
  )
}

const Home = function() {
  return <div className="mt-6">
    <MarginedSection>
      <Navbar />
      <Hero />
    </MarginedSection>

    <Marquee />
    <MarginedSection>
      <Cards />
    </MarginedSection>
    <Profiles />
    <Footer />
  </div>
}

export default Home 
