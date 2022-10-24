import React, {FC} from 'react';

interface WrapperBackground {
    Children: any;
    backgroundImg: string;
}

const BackgroundWrapper = (Component: FC, backgroundImg: string) : Function => {
    return () => {
        return (
            <div
                className="w-screen h-screen flex flex-row justify-center items-center"
                style={{
                backgroundImage: `url(${backgroundImg})`
            }}>
                <Component/>
            </div>
        )
    }
};

export default BackgroundWrapper;