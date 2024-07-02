import './Research.css'
import { useContext } from 'react'

import { ResearchInfo } from '../store'

import LinkIcon from './icons/LinkIcon'
import { ThemeContext } from './ThemeContext'

function Research({ research }: { research: ResearchInfo }) {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      {research.ongoing ? (
        <span className="research-info__ongoing">(Ongoing) </span>
      ) : null}
      {research.hasLink ? (
        <a
          className="research-info__research-link"
          href={research.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {research.name}
          <sup>
            <LinkIcon size={15} fill={theme === 'light' ? '#000000' : '#ffffff'} />
          </sup>
        </a>
      ) : (
        <span className="research-info__research">{research.name}</span>
      )}
    </div>
  )
}

export default Research
