import { useDevCycleClient, useVariableValue } from '@devcycle/react-client-sdk';
import classNames from 'classnames';

function ToggleBot() {
  /**
   * The useVariableValue hook will return the current value of a variable.
   * If no value is defined for the current user, the default value will be returned.
   */
  const devcycleClient = useDevCycleClient()
  const shouldWink = useVariableValue('togglebot-wink', false)
  const spinSpeed = useVariableValue('togglebot-speed', 'off')

  const variation = devcycleClient.config.features['hello-togglebot']?.variationName ?? 'Default'

  return (
    <div className="App-content">
      <div className="ToggleBot-message">
        "{getMessage(spinSpeed)}"
      </div>
      <img
        src={getImageSource(spinSpeed, shouldWink)}
        className={classNames(['ToggleBot-logo', `spin-${spinSpeed}`])}
        alt="togglebot"
      />
      <div className="ToggleBot-variation">
        Serving Variation: <b>"{variation}"</b>
      </div>
    </div>
  );
}

const getMessage = (spinSpeed) => {
  switch (spinSpeed) {
    case 'fast':
      return 'Gotta go fast!'
    case 'off-axis':
      return '...I\'m gonna be sick...'
    case 'surprise':
      return 'Unicorn!'
    default:
      return 'Hello! Nice to meet you.'
  }
}

const getImageSource = (spinSpeed, shouldWink) => {
  if (spinSpeed === 'surprise') return 'unicorn.svg'
  return shouldWink ? 'togglebot-wink.png' : 'togglebot.png'
}

export default ToggleBot;
