
import Page from './components/page/Page';
import { PageConfigs } from './utils';

export default function App() {
  return (
    <div className="container w-25">
      <Page configId={PageConfigs.USER_DETAILS_FORM} />
    </div>
  );
}
