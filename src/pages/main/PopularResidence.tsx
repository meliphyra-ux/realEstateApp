import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import BackgroundWrapper from "../../components/backgroundWrapper";
import bg from "../../assets/bg.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const PopularResidence: FC = () => {
  const flats = useSelector((state: RootState) => state.flats.flatsArray);
  return (
    <section className="max-w-6xl w-full flex flex-col items-center justify-around h-4/5">
      <h2 className="text-5xl font-[Sora, sans_serif] font-bold inline-block w-full relative">
        Our Popular Residence{" "}
        <Link
          to="#"
          className="absolute top-1/2 -translate-y-1/2 right-0 text-lg font-light"
        >
          Explore All {"-->"}
        </Link>
      </h2>
      <div className="flex flex-row justify-between">
        {flats.length !== 0 ? (
          flats.map((flat) => (
            <Card
              key={flat._id}
              _id={flat._id}
              imgSrc={flat.imgSrc}
              location={flat.location}
              beds={flat.beds}
              area={flat.area}
              yearOfBuilding={flat.yearOfBuilding}
              price={flat.price}
            />
          ))
        ) : (
          <Card
            key="Loading..."
            _id="Loading..."
            imgSrc=""
            location="Loading..."
            beds={0}
            area="Loading..."
            yearOfBuilding={0}
            price={0}
          />
        )}
      </div>
    </section>
  );
};

export default BackgroundWrapper(PopularResidence, String(bg));
