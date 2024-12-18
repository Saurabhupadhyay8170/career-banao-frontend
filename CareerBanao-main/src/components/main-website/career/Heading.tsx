import { Link } from "react-router-dom"


function Heading() {
  return (
    <div className='Heading'>
        <h2>Want to work with <br />CareerBanao?</h2>
        <p>If you have what it takes and can give us compelling resons that make you stand out from the rest (for all the right reason, of course!), then we'd like to hear from you.</p>
        <Link to="#currentOpening">View Job Openings</Link>
    </div>
  )
}
export default Heading