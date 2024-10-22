import './Education.css'
import { EducationInfo } from '../../types'

function Education({ education }: { education: EducationInfo }) {
  return (
    <div className="education-info">
      <div className="education-info__uni-and-date">
        <div className="education-info__university">{education.university}</div>
        <div className="education-info__date">{education.graduationDate}</div>
      </div>
      <span className="education-info__degree">{education.degree}</span> in{' '}
      {education.major}
    </div>
  )
}

export default Education
