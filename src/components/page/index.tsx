import { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface IPageComponentProps {
  onNext?: () => void;
  buttonLabel?: string;
  onBack?: () => void;
  buttonBackLabel?: string;
  title?: React.ReactNode;
  imageUrl?: string;
  videoUrl?: string;
  textBig?: React.ReactNode;
  text?: React.ReactNode;
  children?: React.ReactNode;
}

const Page: React.FC<IPageComponentProps> = ({
  onNext,
  buttonLabel,
  onBack,
  buttonBackLabel,
  title,
  imageUrl,
  videoUrl,
  textBig,
  text,
  children,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (videoUrl && videoUrl != "") {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);

  const handleNext = useCallback(() => {
    onNext && onNext();
  }, [onNext]);
  const handleBack = useCallback(() => {
    onBack && onBack();
  }, [onBack]);

  const handleVideoEnd = () => {
    setShowButton(true);
  };

  return (
    <>
      <div className="bg-desktop md:bg-mobile w-full h-screen">
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto text-center w-full">
              {title && (
                <h2 className=" text-3xl text-black  font-bold mb-4 md:text-5xl">
                  {title}
                </h2>
              )}
              {imageUrl && (
                <img src={imageUrl} alt="dubidamdam" className="mb-4" />
              )}
              {videoUrl && (
                <div className="mb-10">
                  <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    onEnded={handleVideoEnd}
                    //muted
                    controls
                  />
                </div>
              )}
              {children}
              {textBig && <p className="text-2xl mb-4 text-black">{textBig}</p>}
              {text && <p className="text-xl mb-4 text-black">{text}</p>}
              <div className="flex flex-col gap-2 w-3/4 md:w-full mx-auto">
                {buttonLabel && (
                  <button
                    onClick={
                      showButton
                        ? handleNext
                        : () => alert("WATCH THE VIDEO FIRST!")
                    }
                    className="btn btn-outline"
                  >
                    {buttonLabel}
                  </button>
                )}
                {buttonBackLabel && (
                  <button
                    onClick={handleBack}
                    className="btn btn-sm btn-outline btn-success"
                  >
                    {buttonBackLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
