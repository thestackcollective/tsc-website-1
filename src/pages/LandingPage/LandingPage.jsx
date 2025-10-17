import Paragraph from "../../components/Paragraph/Paragraph"
import EventTeaserSectionContainer from "../../components/EventTeaserSection/EventTeaserSectionContainer"
import NavLinkButton from "../../components/NavLinkButton/NavLinkButton"
import DividerBar from "../../components/DividerBar/DividerBar"
import './LandingPage.css'

export default function LandingPage() {
  return (
    <section className="landing-page-section">
      <Paragraph 
        className='landing-page-paragraph'
        heading='Mission Statement'
        text="The Stack Collective's mission is to facilitate the career development of full 
        stack tech professionals in meaningful software careers by providing networking, 
        educational, and career support opportunities."
      />
      <DividerBar className='divider-bar-secondary' />
      <DividerBar className='divider-bar-primary' />
      <EventTeaserSectionContainer/>
      <DividerBar className='divider-bar-primary' />
      <DividerBar className='divider-bar-tertiary' />
      <NavLinkButton location="./contact" text="QUESTIONS FOR US?" />
    </section>

  )
}