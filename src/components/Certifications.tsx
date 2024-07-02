import './Certifications.css'
import { useContext } from 'react'

import { CertificationInfo } from '../types'

import LinkIcon from './icons/LinkIcon'
import { ThemeContext } from './ThemeContext'

function Certifications({ certification }: { certification: CertificationInfo }) {
  const { theme } = useContext(ThemeContext)

  const renderOrganization = () => {
    if (certification.organization.includes('^')) {
      const parts = certification.organization.split('^')
      return (
        <span>
          {parts[0]}
          <sup>{parts[1]}</sup>
        </span>
      )
    }
    return certification.organization
  }

  return (
    <div className="certification-info">
      <div className="certification-info__general">
        {certification.hasLink ? (
          <a
            className="certification-info__certification"
            href={certification.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {certification.name}
            <sup>
              <LinkIcon size={15} fill={theme === 'light' ? '#000000' : '#ffffff'} />
            </sup>
          </a>
        ) : (
          <span className="certification-info__certification">{certification.name}</span>
        )}
        <span className="certification-info__organization">, {renderOrganization()}</span>
      </div>

      <div className="certification-info__date">{certification.date}</div>
    </div>
  )
}

export default Certifications
