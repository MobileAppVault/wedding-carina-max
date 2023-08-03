import { useCallback, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { CountdownTile } from "../countdown";

interface ILoadingComponentProps {
  onComplete: () => void;
  waitInSeconds: number;
}

const LoadingComponent: React.FC<ILoadingComponentProps> = ({
  onComplete,
  waitInSeconds,
}) => {
  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, waitInSeconds * 1000);

    return () => clearTimeout(timer);
  }, [handleComplete, waitInSeconds]);

  return (
    <div className="bg-desktop md:bg-mobile w-full h-screen">
      <div className=" relative w-screen md:pt-52 pt-32 flex items-center justify-center">
        <div className="flex flex-col items-center ">
          <div className="flex flex-row">
            <h1 className="text-4xl md:text-6xl text-center font-serif font-thin antialiased mb-6 text-black glitch">
              WAIT FOR IT
            </h1>
            <span className="loading loading-dots loading-xs md:loading-md md:mt-2 text-black  "></span>
          </div>

          <h2 className="text-lg md:text-2xl text-center  font-serif antialiased text-gray-600 font-extralight mb-6">
            TURN ON YOUR SOUND
            <br />
            <div className="text-6xl pt-2 ">🔊</div>
          </h2>

          <div className=" mt-4 mb-10">
            <Countdown
              date={Date.now() + waitInSeconds * 1000}
              //onComplete={handleCountdownComplete}
              renderer={(props: CountdownRenderProps) => (
                <div className="text-6xl md:text-6xl font-serif font-thin antialiased text-black animate-pulse">
                  {props.seconds}
                </div>
              )}
            />
          </div>

          <div>
            <span
              className="loading loading-infinity loading-lg"
              style={{ color: "#e8c474" }}
            ></span>
            <span
              className="loading loading-infinity loading-lg"
              style={{ color: "#8db396" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
