import Paragraph from "../../components/Paragraph/Paragraph"
import EventTeaserSectionContainer from "../../components/EventTeaserSection/EventTeaserSectionContainer"
import NavLinkButton from "../../components/NavLinkButton/NavLinkButton"

export default function LandingPage() {
  return (
    <section>
      <Paragraph 
        className='landing-page-paragraph'
        heading='Mission Statement'
        text="The Stack Collective's mission is to facilitate the career development of full 
        stack tech professionals in meaningful software careers by providing networking, 
        educational, and career support opportunities."
      />
      <EventTeaserSectionContainer/>
      <NavLinkButton location="./contact" text="Questions For Us?" />
    </section>

  )
}