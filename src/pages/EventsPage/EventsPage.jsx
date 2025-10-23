import "./EventsPage.css"
import EventInfo from "../../components/EventInfo/EventInfo"
import NavLinkButton from "../../components/NavLinkButton/NavLinkButton"

export default function EventsPage() {
    const events = [
    {
      id: 1,
      eventHeader: 'RollerSkating Ruby',
      date: 'Oct 9, 2025',
      text: 'This land is my land, this land is your land, From California, to the New York Islands',
    },
    {
      id: 2,
      eventHeader: 'Parasailing Python',
      date: 'Dec 19, 2025',
      text: 'From California, to the New York Islands, From the redwood forests to the spring waters',
    },
    {
      id: 3,
      eventHeader: 'Nodding off Node',
      date: 'Jan 19, 2026',
      text: 'From the redwood forests to the spring waters, this land was made for you and me.',
    },
    {
      id: 4,
      eventHeader: 'Study Session',
      date: 'Jan 26, 2026',
      text: 'Study, code, network; choose your own adventure!',
    }
  ]

  const eventsInfoList = events.map(event => {
    return (
      <EventInfo
        eventHeader={event.eventHeader}
        date={event.date}
        text={event.text}
        key={event.id}
      />
    )
  })

  return (
    <section className="events">
      <div className="events-contents">
        <div className="events-types">
          <p>Workshops</p>
          <p>Networking events</p>
          <p>Official meetings</p>
          <p>Study sessions</p>
        </div>
        <div className="events-info">
          {eventsInfoList}
        </div>
      </div>
      <div className="events-contact">
        <p>
          Have additional questions about the events?
          <span>
            <NavLinkButton location="/contact" text=" Contact us here." />
          </span>
        </p>
      </div>
    </section>
  )
}