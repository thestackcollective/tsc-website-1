import "./EventInfo.css"
import { CiCalendar } from "react-icons/ci";

export default function EventInfo({eventHeader, date, text}) {
  return (
    <section className="event-info">
      <div className="event-info-calendar">
        <CiCalendar />
      </div>
      <div className="event-info-details">
        <p className="event-info-details-header">{eventHeader}</p>
        <p className="event-info-details-date" >{date}</p>
        <p>{text}</p>
      </div>
    </section>
  )
}