export default function EventCard({image, altText, eventHeading, text}) {
  return (
    <article>
      <img src={image} alt={altText} />
      <h3>{eventHeading}</h3>
      <p>{text}</p>
    </article>
  )
}