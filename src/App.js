import FetchDataGithubGist from "./component/FetchDataGithubGist";
import BarChart from "./component/BarChart";
import data from "./data/flare-2.json"
import TreeChart from "./component/TreeChart";


function App() {
  return (
    <div className="App">
      {/* <FetchDataGithubGist /> */}
      {/* <BarChart /> */}
      <TreeChart data={data} />
    </div>
  );
}

export default App;
