import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/cart/Cart";
import Main from "./pages/main/Main";
import { store } from "./store/store";
import { Auth, fetchFlats } from "./databaseFunctions/databaseFunctions";

const App = () => {
  Auth().then(()=> store.dispatch(fetchFlats(5)))
  location.pathname === "/" ? location.assign("/buying") : null;
  return (
    <Provider store={store}>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/buying" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
