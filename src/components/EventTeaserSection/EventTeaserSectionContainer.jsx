import EventCard from "./EventCard"
import NavLinkButton from "../NavLinkButton/NavLinkButton"
import './EventTeaserSectionContainer.css'

export default function EventTeaserSectionContainer() {
  const EVENTS = [
    {
      eventHeader: 'RollerSkating Ruby',
      text: 'This land is my land, this land is your land, From California, to the New York Islands',
      imageSource: '/images/background_decorating_image.jpeg',
      altText: 'an image of a man holding up a cellphone'
    },
    {
      eventHeader: 'Parasailing Python',
      text: 'From California, to the New York Islands, From the redwood forests to the spring waters',
      imageSource: 'images/background_image_decor_4.png',
      altText: 'an image of a man excitedly smiling'
    },
    {
      eventHeader: 'Nodding off Node',
      text: 'From the redwood forests to the spring waters',
      imageSource: 'images/background_image_decoration_2.jpeg',
      altText: 'image of a group of people jumping up and down for joy'
    }
  ]

  const EventsList = EVENTS.map(listedEvent => {
    return (
      <EventCard
        eventHeading={listedEvent.eventHeader}
        text={listedEvent.text}
        altText={listedEvent.altText}
        image={listedEvent.imageSource}
      />
    )
  })

  return (
    <section>
      <div className="events-list">
        {EventsList}
      </div>
      <div>
        <NavLinkButton location="./events" text="Find More Events Here ->" />
      </div>
    </section>
  )

}