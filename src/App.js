import './App.css';
import { useIsDevCycleInitialized, withDevCycleProvider } from '@devcycle/react-client-sdk';
import ToggleBot from './components/ToggleBot';
import Description from './components/Description';

if (!process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY) {
  alert('Set your REACT_APP_DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle React SDK.')
}

function App() {
  /**
   * The useIsDevCycleInitialized hook will return true when the DevCycle client
   * has finished initializing. Before the client has initialized, all variables
   * will return the default values.
   */
  const devcycleReady = useIsDevCycleInitialized();

  const appContent = devcycleReady
    ? (
        <div className="App-wrapper">
          <ToggleBot />
          <Description />
        </div>
      )
    : <h2>Initializing...</h2>

  return (
    <div className="App">
      <div className="App-header">
        <p>Demo Application</p>
        <img
          height="46"
          src="/devcycle-togglebot-full-colour.svg"
          alt="DevCycle"
        />
      </div>
      {appContent}
    </div>
  );
}

/**
 * Wrapping your app with the DevCycle provider will make the client
 * available to all child components.
 * See the documentation for more information:
 * https://docs.devcycle.com/sdk/client-side-sdks/react/react-gettingstarted#provider-config
 */
export default withDevCycleProvider({
  sdkKey: process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY,
  /**
   * Modify this user object to see how targeting is affected
   */
  user: {
    user_id: 'user123',
    name: 'Jane Doe',
    email: 'jane.doe@email.com'
  },
  options: {
    logLevel: 'debug',
  }
})(App);
