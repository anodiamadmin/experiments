import AnodiamRouter from './Menu/AnodiamRouter';
import { ConfigLoader } from "./Utils/ConfigLoader";

const App = () => {
  return (
    <ConfigLoader>
      <AnodiamRouter />
    </ConfigLoader>
  );
};

export default App;