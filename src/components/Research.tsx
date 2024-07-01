import './Research.css'
import LinkIcon from './icons/LinkIcon'
import { ResearchInfo } from '../store'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Research({ research }: { research: ResearchInfo }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className='research-info'>
            {research.ongoing ? <span className='research-info__ongoing'>(Ongoing)</span> : null}
            {research.hasLink ?
                <div className='research-info__research-link'>
                    <a href={research.link} target='_blank'>{research.name}</a>
                    <div>
                        <LinkIcon size={15} fill={theme === 'light' ? "#000000" : "#ffffff"} />
                    </div>
                </div>
                : <span className='research-info__research'>{research.name}</span>
            }
        </div>
    )
}

export default Research
