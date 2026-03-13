import { useState, useEffect, useRef } from 'react'

export default function Widget() {
  const [ loaded, setLoaded ] = useState(false);
  let widgetRef = useRef(null);

  useEffect(() => {
    // console.log(widgetRef.current)

    const donorScript = document.createElement('script');
    donorScript.id = 'script-id'
    donorScript.src = 'https://donorbox.org/widgets.js';
    // script.type = 'text/javascript';
    donorScript.type = 'module';
    donorScript.async = true;

    donorScript.onload = () => setLoaded(true)

    // donorScript.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(donorScript);

    

    // widgetRef.current.appendChild(script)

    // return () => widgetRef.current.removeChild(script)

    // const script = document.createElement('script');
    // script.id = 'script-id'
    // script.src = 'https://donorbox.org/widget.js';
    // // script.type = 'text/javascript';
    // script.type = 'module';
    // script.async = true;
    // document.getElementById('donor-box-id').appendChild(script);
    // return () => document.getElementById('donor-box-id').removeChild(script);
    // return () => {
    //   // This runs when the component unmounts
    //   const scriptElement = document.getElementById('script-id');
    //   if (scriptElement) {
    //     // document.body.removeChild(scriptElement);
    //     document.getElementById('donor-box-id').removeChild(scriptElement);
    //   }
    // };
  }, []);

  useEffect(() => {
    if (!loaded) return;
  }, [loaded])
  
  return (
    <div ref={widgetRef} id="donor-box-id" className="donor-box">
      {/* <script type="module" src="https://donorbox.org/widgets.js" onload={() => widgetRef.current.appendChild(tag)} async></script> */}
      {/* <script type="module" src="https://donorbox.org/widgets.js" async></script> */}
      <dbox-widget campaign="stackcollective-donation-page" type="donation_form" enable-auto-scroll="true"></dbox-widget>
    </div>
  )
}