import React, {FC} from 'react';

export interface CardProps{
    _id?: string;
    imgSrc?: string;
    location: string;
    beds: number;
    area: string;
    yearOfBuilding: number;
    price: number;
}

const Card:FC<CardProps> = ({
    _id,
    imgSrc,
    location,
    beds,
    area,
    yearOfBuilding,
    price
}) => {
    return (
        <figure className="w-1/4">
            <img src={imgSrc} alt="View of house"/>
            <h3>{location}</h3>
            <h5>{beds} beds</h5>
            <h5>{area} m</h5>
            <h5>{yearOfBuilding} s</h5>
            <button>Book Now</button>
            <h2>${price}</h2>
        </figure>
    );
};

export default Card;