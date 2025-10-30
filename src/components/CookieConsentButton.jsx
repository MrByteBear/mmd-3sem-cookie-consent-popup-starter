const CookieConsentButton = ({isAccepted, setIsAccepted}) => {

  const [isAccepted, setIsAccepted] = useState(false);

  return ( 
         <button 
        onClick={() => setIsAccepted(!isAccepted)}
        className="cookie-consent-popup-cta pointer">
          I like Cookies
        </button>
   );
}
 
export default CookieConsentButton;
