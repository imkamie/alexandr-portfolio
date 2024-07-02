import './Volunteering.css'
import { VolunteeringInfo } from '../../types'

function Volunteering({ volunteering }: { volunteering: VolunteeringInfo }) {
  return (
    <div className="volunteering">
      <div className="volunteering-info">
        <span className="volunteering-info__general">
          <span className="volunteering-info__position">{volunteering.position}, </span>
          {volunteering.organization}
        </span>
        <div className="volunteering-info__date">{volunteering.dates}</div>
      </div>
      <div className="volunteering-info__description">{volunteering.description}</div>
    </div>
  )
}

export default Volunteering
