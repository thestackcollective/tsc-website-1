
import { NavLink } from 'react-router'
export default function NavLinkButton({ location, text}) {
  return (
    <NavLink
      to={`${location}`}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {text}
    </NavLink>
  )
}