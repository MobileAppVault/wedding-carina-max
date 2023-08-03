import { useCallback, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

interface ICountdownComponentProps {
  onComplete: () => void;
  isDebugMode?: boolean;
}
const timestamp = Date.parse("2023-07-14T18:15:00");
const COUNTDOWN_DATE = new Date(timestamp);
//const COUNTDOWN_DATE = new Date("2023-07-14T02:00:00"); //YYYY-MM-DDTHH:mm:ss.sssZ

interface ITyleProps {
  value: number;
  label: string;
}
export const CountdownTile = ({ value, label }: ITyleProps) => (
  <div className="bg-white  rounded-lg shadow-xl p-3 md:p-4 flex flex-col items-center">
    <div className="text-4xl md:text-5xl font-serif font-thin antialiased mb-3 text-black">
      {value}
    </div>
    <div className="text-gray-500 font-sans  font-light text-xs">{label}</div>
  </div>
);

const CountdownComponent: React.FC<ICountdownComponentProps> = ({
  onComplete,
  isDebugMode,
}) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    // Render a countdown
    if (completed) return <></>;
    return (
      <div className="grid  grid-cols-4 gap-2">
        <CountdownTile value={days} label="day(s)" />
        <CountdownTile value={hours} label="hour(s)" />
        <CountdownTile value={minutes} label="minute(s)" />
        <CountdownTile value={seconds} label="second(s)" />
      </div>
    );
  };

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    var timer: NodeJS.Timeout;
    if (isDebugMode) {
      timer = setTimeout(() => {
        handleComplete();
      }, 5 * 1000);
    }
    return () => timer && clearTimeout(timer);
  }, [handleComplete, isDebugMode]);

  return (
    <div className="bg-desktop md:bg-mobile w-full h-screen">
      <div className=" relative w-screen md:pt-52 pt-32 flex items-center justify-center">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl md:text-6xl text-center font-serif font-thin antialiased mb-6 text-black">
            RELEASE IN...
          </h1>

          <h2 className="text-lg md:text-2xl text-center  font-serif antialiased text-gray-600 font-extralight mb-6">
            JULY 14, 2023 • SEYCHELLES, EAST AFRICA
          </h2>
          <Countdown
            onComplete={handleComplete}
            renderer={renderer}
            //date={COUNTDOWN_DATE}
            date="2023-07-14T18:15:00"
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
