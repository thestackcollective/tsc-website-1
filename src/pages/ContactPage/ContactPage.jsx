export default function ContactPage() {
  return (
    <form>
      <h2>WANT TO JOIN OUR COMMUNITY OF HAVE ADDITIONAL QUESTIONS?</h2>
      <p>Fill out the form below</p>

      <label for="firstName">First Name:</label>
      <input type="text" name="firstName"></input>

      <label for="lastName">Last Name:</label>
      <input type="text" name="lastName"></input>

      <label for="email">Email</label>
      <input type="text" name="email"></input>

      <label for="referralQuestion">How did you hear about us?</label>
      <input type="text" name="referralQuestion"></input>

      <label for="message">Write your message/inquiry here:</label>
      <textarea type="text" name="message"></textarea>
      
      <button>SUBMIT</button>
    </form>
  )
}