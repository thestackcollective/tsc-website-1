import './EventCard.css'

export default function EventCard({date,image, altText, eventHeading, text}) {
  return (
    <article className='event-card'>
      <img src={image} alt={altText} />
      <h3>{eventHeading}</h3>
      <h4>{date}</h4>
      <p>{text}</p>
    </article>
  )
}