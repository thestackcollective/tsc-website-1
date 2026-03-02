import { useEffect, useRef } from 'react'

export default function Widget() {
  let widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.type = 'text/javascript';
    // script.type = 'module';
    script.async = true;
    document.getElementById('donor-box-id').appendChild(script);
    return () => document.getElementById('donor-box-id').removeChild(script);
  }, []);
  
  return (
    <div ref={widgetRef} id="donor-box-id" className="donor-box">
      <dbox-widget campaign="stackcollective-donation-page" type="donation_form" enable-auto-scroll="true"></dbox-widget>
    </div>
  )
}