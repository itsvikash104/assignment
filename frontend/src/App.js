
import Page from './components/page/Page';
import { PageConfigs } from './enums';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page configId={PageConfigs.USER_DETAILS_FORM} />
      </header>
    </div>
  );
}
