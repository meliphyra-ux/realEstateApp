import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main/Main";
import {store} from "./store/store"

const App = () => {

    // location.pathname === "/" ? location.assign("/buying") : null
    return (
        <Provider store={store}>
            <Header />
            <div className="main">
                {/* <Routes>
                    <Route path="/" element={<Main />}/>
                </Routes> */}
                <Main />
            </div>
        </Provider>
        
    );
};

export default App;