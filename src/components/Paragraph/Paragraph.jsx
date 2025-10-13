import './Paragraph.css'

export default function Paragraph({className, heading, text}) {
  return (
    <section className={className}>
      <h3>{heading}</h3>
      <p>{text}</p>
    </section>
  )
}