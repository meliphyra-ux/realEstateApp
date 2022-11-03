import React from "react";

const BackgroundWrapper = (
  Children: React.FC<{}>,
  backgroundImg: string
): Function => {
  return () => {
    return (
      <div
        className="w-full min-h-screen flex flex-row justify-center items-center bg-cover pt-20"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <Children />
      </div>
    );
  };
};

export default BackgroundWrapper;
