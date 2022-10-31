import React from 'react';


const BackgroundWrapper = (Children: React.FC<{}>, backgroundImg: string) : Function => {
    return () => {
        return (
            <div
                className="w-screen h-screen flex flex-row justify-center items-center"
                style={{
                backgroundImage: `url(${backgroundImg})`
            }}>
                <Children/>
            </div>
        )
    }
};

export default BackgroundWrapper;