import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card, { CardProps } from "../../components/Card";
import { getFlats, Auth } from "../../databaseFunctions/databaseFunctions";
import BackgroundWrapper from "../../components/backgroundWrapper";
import bg from "../../assets/bg.svg";

const PopularResidence: FC = () => {
  const [flats, setFlats] = useState<CardProps[]>([]);
  useEffect(() => {
    Auth().then(() =>
      getFlats(5)
        .then((res) => {
          setFlats(res);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }, []);
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
        {flats ? (
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
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default BackgroundWrapper(PopularResidence, String(bg));
