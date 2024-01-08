import { useDevCycleClient } from '@devcycle/react-client-sdk';

function Description() {
  const devcycleClient = useDevCycleClient()

  const variation = devcycleClient.config.features['hello-togglebot']?.variationName ?? 'Default'

  return (
    <div className="App-description">
      {getMessage(variation)}
      <a
        className="App-link"
        href="https://docs.devcycle.com/sdk/client-side-sdks/react/"
        target="_blank"
        rel="noopener noreferrer"
      >
        DevCycle React SDK Docs
      </a>
    </div>
  );
}

const getMessage = (variation) => {
  if (variation.toLowerCase() === 'default') {
    return (
      <>
        <h3>Welcome to DevCycle's example app.</h3>
        <p>
          If you got here through the onboarding flow, just follow the instructions to change and create new variations and see how the app reacts to new variable values.
        </p>
        <p>
          If you got to the example app on your own, follow our README guide to create the Feature and Variables you need in DevCycle to control this app.
        </p>
      </>
    )
  }
  return (
    <>
      <h3>Great! You've taken the first step in exploring DevCycle.</h3>
      <p>
        You've successfully toggled your very first variation. You are now serving a different value to your users and you can see how the example app has reacted to this change.
      </p>
      <p>
        Next, go ahead and create a whole new variation to see what else is possible in this app.
      </p>
    </>
  )
}

export default Description;
