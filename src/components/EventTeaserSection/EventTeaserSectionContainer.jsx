import EventCard from "./EventCard"
import NavLinkButton from "../NavLinkButton/NavLinkButton"
import './EventTeaserSectionContainer.css'

export default function EventTeaserSectionContainer() {
  const EVENTS = [
    {
      eventHeader: 'RollerSkating Ruby',
      date: 'Oct 9, 2025',
      text: 'This land is my land, this land is your land, From California, to the New York Islands',
      imageSource: '/images/folks_whiteboarding.jpg',
      altText: 'a group of people, two standing in front of a computer, two in front of a blackboard'
    },
    {
      eventHeader: 'Parasailing Python',
      date: 'Dec 19, 2025',
      text: 'From California, to the New York Islands, From the redwood forests to the spring waters',
      imageSource: 'images/pexels-mikhail-nilov-6894013.jpg',
      altText: 'a woman is sitting cross-legged on a big pillow, with a laptop on her lap'
    },
    {
      eventHeader: 'Nodding off Node',
      date: 'Jan 19, 2026',
      text: 'From the redwood forests to the spring waters, this land was made for you and me.',
      imageSource: 'images/woman_coding.jpg',
      altText: 'an image of a woman coding, with a man standing in the background'
    }
  ]

  const EventsList = EVENTS.map(listedEvent => {
    return (
      <EventCard
        eventHeading={listedEvent.eventHeader}
        date={listedEvent.date}
        text={listedEvent.text}
        altText={listedEvent.altText}
        image={listedEvent.imageSource}
      />
    )
  })

  return (
    <section className="event-teaser-section">
      <h2>UPCOMING EVENTS</h2>
      <div className="events-list">
        {EventsList}
      </div>
      <div>
        <NavLinkButton location="./events" text="Find More Events Here ->" />
      </div>
    </section>
  )

}