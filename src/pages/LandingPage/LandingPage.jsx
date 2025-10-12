import Paragraph from "../../components/Paragraph/Paragraph"

export default function LandingPage() {
  return (
    <section>
      <h1>Landing Page!</h1>
      <Paragraph 
        className='landing-page-paragraph'
        heading='Mission Statement'
        text="The Stack Collective's mission is to facilitate the career development of full 
        stack tech professionals in meaningful software careers by providing networking, 
        educational, and career support opportunities."
      />
    </section>

  )
}