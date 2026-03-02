import { useEffect } from 'react'

export default function Widget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.type = 'text/javascript';
    // script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
  
  return (
    <dbox-widget campaign="stackcollective-donation-page" type="donation_form" enable-auto-scroll="true"></dbox-widget>
  )
}