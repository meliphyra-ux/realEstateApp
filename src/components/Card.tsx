import React, {FC} from 'react';
import point from "../assets/point.svg"

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
    imgSrc = "",
    location,
    beds,
    area,
    yearOfBuilding,
    price
}) => {
    return (
        <figure className="w-1/4 text-light bg-[#161617] rounded-xl">
            <img src={imgSrc} alt="View of apartments" className="object-fit w-full aspect-square object-center"/>
            <article className="px-[26px] pb-6">
                <div className="flex flex-row items-center">
                    <img className="mr-2" src={point} alt=""/>
                    <h3 className="text-[#D0D0D1]">{location}</h3>
                </div>
                <div className="flex justify-between">
                    <h5 className="text-[#969696]">{beds} beds</h5>
                    <h5 className="text-[#969696]">{area} m</h5>
                    <h5 className="text-[#969696]">{yearOfBuilding} s</h5>
                </div>
                <button>Book Now</button>
                <h2 className="inline-block w-2/3  text-end">${price}</h2>
            </article>
        </figure>
    );
};

export default Card;