import { FC } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import point from "../assets/point.svg";

export interface CardProps {
  _id: string;
  imgSrc?: string;
  location: string;
  beds: number;
  area: string;
  yearOfBuilding: number;
  price: number;
}

const Card: FC<CardProps> = ({
  _id,
  imgSrc = "",
  location,
  beds,
  area,
  yearOfBuilding,
  price,
}) => {
  const dispatch = useDispatch();
  return (
    <figure className="w-1/3 mx-4 text-light bg-[#161617] rounded-xl">
      <img
        src={imgSrc}
        alt="View of apartments"
        className="rounded-xl aspect-square object-cover w-full object-center"
      />
      <article className="px-[26px] pb-6">
        <div className="my-2 flex flex-row items-center">
          <img className="mr-2" src={point} alt="" />
          <h3 className="text-[#D0D0D1]">{location}</h3>
        </div>
        <div className="mb-2 flex justify-between">
          <h5 className="text-[#969696]">{beds} beds</h5>
          <h5 className="text-[#969696]">{area} m</h5>
          <h5 className="text-[#969696]">{yearOfBuilding} s</h5>
        </div>
        <button
          className="w-1/2 border-green-700 border-2 px-8 py-4 rounded-md  text-green-700 hover:text-white hover:bg-green-700 duration-150"
          onClick={() => {
            dispatch(
              addItem({
                _id: String(_id),
                imgSrc,
                location,
                beds,
                area,
                yearOfBuilding,
                price,
                counter: 1,
              })
            );
          }}
        >
          Book Now
        </button>
        <h2 className="inline-block w-1/2 text-end text-[20px]">
          ${price}/month
        </h2>
      </article>
    </figure>
  );
};

export default Card;
