import EventCard from "./EventCard"
import NavLinkButton from "../NavLinkButton/NavLinkButton"
import './EventTeaserSectionContainer.css'

export default function EventTeaserSectionContainer() {
  const EVENTS = [
    {
      eventHeader: 'RollerSkating Ruby',
      text: 'This land is my land, this land is your land, From California, to the New York Islands',
      imageSource: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fexcited-african-guy-dancing-modern-smartphone-advertisement-mobile-application-over-yellow-background-showing-empty-193620177.jpg&sp=1760310533Tc7211e03173b61a3a9e3baa7db0939a1be1b41d77773885f0ee26209055ab33c',
      altText: 'an image of a man holding up a cellphone'
    },
    {
      eventHeader: 'Parasailing Python',
      text: 'From California, to the New York Islands, From the redwood forests to the spring waters',
      imageSource: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F02%2F72%2F90%2F28%2F360_F_272902867_xASWPZ0a6EdFm5FmSD1gqMBCgKhKlcPZ.jpg&sp=1760310533T30dc6bec6a9a1e23960e3c1cc8f56344cc1e6181bae1146291c17a4ae22ae6d6',
      altText: 'an image of a man excitedly smiling'
    },
    {
      eventHeader: 'Nodding off Node',
      text: 'From the redwood forests to the spring waters',
      imageSource: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstorage.googleapis.com%2Fwebsite-production%2Fuploads%2F2017%2F10%2Fstock-photo-guide-cheesy-celebration.jpg&sp=1760310533T04edc4d56f05016453c703fb5fbef2128d062cbc96572e8cb2daeba762bc6c8d',
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
        <NavLinkButton location="./events" text="Find More Events Here" />
      </div>
    </section>
  )

}