import React, {useEffect, useState} from 'react';
import Card, {CardProps} from "./components/Card";
import {getAllFlats} from "./databaseFunctions/databaseFunctions";

const App = () => {
    const [flats, setFlats] = useState<CardProps[]>([])
    useEffect(() => {
        getAllFlats()
            .then(res => {
                setFlats(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div className="main">
            <>
                {flats && flats.map(flat => (
                    <Card key={flat._id} location={flat.location} beds={flat.beds} area={flat.area}
                          yearOfBuilding={flat.yearOfBuilding} price={flat.price}/>
                ))}</>
        </div>
    );
};

export default App;