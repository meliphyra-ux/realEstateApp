import { Provider } from "react-redux";
import Main from "./pages/main/Main";
import {store} from "./store/store"

const App = () => {
    return (
        <Provider store={store}>
            <div className="main">
                <Main />
            </div>
        </Provider>
        
    );
};

export default App;