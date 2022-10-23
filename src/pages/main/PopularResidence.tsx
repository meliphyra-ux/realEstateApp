import React, {FunctionComponent, useEffect, useState} from 'react';
import Card, {CardProps} from "../../components/Card";
import {getFlats} from "../../databaseFunctions/databaseFunctions";
import BackgroundWrapper from "../../components/backgroundWrapper";
import bg from "../../assets/bg.svg"

const PopularResidence:FunctionComponent = () => {
    const [flats, setFlats] = useState<CardProps[]>([])
    useEffect(() => {
        getFlats(5)
            .then(res => {
                setFlats(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <section>
                {flats && flats.map(flat => (
                    <Card key={flat._id} imgSrc={flat.imgSrc} location={flat.location} beds={flat.beds} area={flat.area}
                          yearOfBuilding={flat.yearOfBuilding} price={flat.price}/>
                ))}
        </section>
    );
};

export default BackgroundWrapper(PopularResidence, String(bg));