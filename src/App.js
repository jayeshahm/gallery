import "./App.css";
import { Provider } from 'react-redux';
import Search from "./components/search/search";
import { imageStore } from "./store/imageStore";

function App() {
  return (
    <Provider store={imageStore}>
      <div>
      <div>
        <h1 style={
          {
            display: "flex",
            justifyContent: "center"
          }
        }>Picture Gallery</h1>
      </div>
      <Search></Search>
    </div>
    </Provider>
    
  );
}

export default App;
