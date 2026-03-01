import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import LogoS from '../../../assets/images/tsclogo.svg'
import './index.scss'
export default function Logo() {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 1,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Stack Collective Logo"
      />
    </div>
  )
}
