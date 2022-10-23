import React, {useEffect, useState} from 'react';
import Card, {CardProps} from "./components/Card";
import Main from "./pages/main/Main";

const App = () => {
    return (
        <div className="main">
            <Main />
        </div>
    );
};

export default App;