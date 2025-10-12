import EventCard from "./EventCard"

export default function EventTeaserSectionContainer() {
  const EVENTS = [
    {
      eventHeader: 'RollerSkating Ruby',
      text: 'This land is my land, this land is your land'
    },
    {
      eventHeader: 'Parasailing Python',
      text: 'From California, to the New York Islands'
    },
    {
      eventHeader: 'Nodding off Node',
      text: 'From the redwood forests to the spring waters'
    }
  ]

  const EventsList = EVENTS.map(listedEvent => {
    <EventCard
      
      />
  })

}