import './Rewards.css'
import { RewardsInfo } from '../../types'

function Reward({ reward }: { reward: RewardsInfo }) {
  return (
    <div className="rewards-info">
      <div className="rewards-info__general">
        <span className="rewards-info__name">{reward.name}, </span>
        {reward.organization}
      </div>
      <div className="rewards-info__date">{reward.date}</div>
    </div>
  )
}

export default Reward
