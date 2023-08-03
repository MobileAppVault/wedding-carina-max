"use client";
import { useState } from "react";
import Quiz from "../quiz";
import CountdownComponent from "../countdown";
import LoadingComponent from "../loading";
import Page from "../page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const IS_DEBUG = false;
const VALID_CODE = "KEY";

const App: React.FC = () => {
  const [section, setSection] = useState(2);

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitCode = () => {
    setLoading(true);
    // Simulating loading delay
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        if (VALID_CODE.toUpperCase() == code.toUpperCase()) {
          onPageCodeNext();
        } else {
          alert("😡 You failed, try again! 🤬");
        }
      }, 500);
    }, 2000);
  };
  const onCountdownComplete = () => setSection(1); // countdown => loading
  const onLoadingComplete = () => setSection(2); // loading => Welcome
  const onPageWelcomeNext = () => setSection(3); // Welcome => quiz
  const onQuizSuccess = () => setSection(4); // quiz => gratulation page
  const onPageGratulationNext = () => setSection(5); // gratulation page => video
  const onPageVideoNext = () => setSection(6); // video => code
  const onPageCodeNext = () => {
    setSection(7);
    sendNotifcations();
  }; // code => final page
  const onPageCodeBack = () => setSection(5); // code => video

  const sendNotifcations = () => {
    sendMail();
    sendPush();
  };

  const sendMail = () => {
    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    }).then(async (res) => {
      const responseData = await res.json();
      if (res.status === 200) {
      } else {
        //alert("ERROR - SOMETHING WENT WRONG - PLEASE CONTACT YOUR SUPPORT");
      }
    });
  };

  const sendPush = () => {
    fetch("/api/push", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    }).then(async (res) => {
      const responseData = await res.json();
      if (res.status === 200) {
      } else {
        //alert("ERROR - SOMETHING WENT WRONG - PLEASE CONTACT YOUR SUPPORT");
      }
    });
  };

  return (
    <div>
      {section == 0 && (
        <CountdownComponent
          onComplete={onCountdownComplete}
          isDebugMode={false}
        />
      )}
      {section == 1 && (
        <LoadingComponent onComplete={onLoadingComplete} waitInSeconds={10} />
      )}

      {section == 2 && (
        <Page
          //imageUrl="https://media4.giphy.com/media/P5CaMAKnBwZgBEOlij/giphy.gif?cid=ecf05e47mb8xjnrbaip3cwvlitgbzqqklo994ih0x6q4j99s&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          title={""}
          textBig={""}
          text={""}
          onNext={onPageWelcomeNext}
          buttonLabel="Ready for the quiz!"
        >
          <div className="w-3/4 md:w-full mx-auto">
            <div className="text-white bg-black p-4 rotate-2 text-2xl ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </div>
            <div className="text-white bg-black p-4 -rotate-1 text-2xl mt-2 ">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </div>
            <div className="text-white bg-black p-4 rotate-2 text-2xl mt-2 mb-8 ">
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentes
            </div>
          </div>
        </Page>
      )}
      {section == 3 && <Quiz onNext={onQuizSuccess} />}
      {section == 4 && (
        <Page
          imageUrl="https://media3.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif?cid=ecf05e47i2dy82bm8vrrz02dc0off8mkamyly3mjofkme2gk&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          title={
            <>
              <span>CONGRATULATIONS!</span>
              <h3 className="text-6xl text-black font-bold mb-4">🥳</h3>
            </>
          }
          textBig={
            <>
              <p>You have completed the quiz!</p>
            </>
          }
          onNext={onPageGratulationNext}
          buttonLabel="Ready for your present?"
        />
      )}
      {section == 5 && (
        <Page
          videoUrl="/videos/video-quiz-02.mp4"
          onNext={onPageVideoNext}
          buttonLabel="That's it?"
        />
      )}
      {section == 6 && (
        <Page>
          <div className="card   ">
            <figure>
              <img
                className="mt-6"
                src="https://media0.giphy.com/media/3GnCVaJAGhfJ6/giphy.gif?cid=ecf05e472q0s1eaazsnev154fh7msms1xpxkr6ue3sn9f57y&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="puzzle"
              />
            </figure>

            <div className="card-body ">
              <h2 className="card-title ">
                <span className="w-full text-2xl md:text-4xl text-center text-gray-800">
                  No! Did you notice something strange in the video? (3 letters)
                </span>
              </h2>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="px-4 py-2 border border-gray-300 h-24 text-center font-mono text-2xl md:text-5xl text-black rounded-md "
                placeholder="Enter the code"
              />
              <div className="card-actions justify-end">
                <button
                  onClick={handleSubmitCode}
                  className="btn btn-lg btn-secondary mt-4 w-full font-mono"
                >
                  {loading ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                      thinking...
                    </>
                  ) : (
                    <>submit</>
                  )}
                </button>
                <button
                  onClick={onPageCodeBack}
                  className="btn btn-outline btn-xs btn-primary  mt-4 w-full font-mono"
                >
                  Show me the damn video again!
                </button>
              </div>
            </div>
          </div>
        </Page>
      )}

      {section == 7 && (
        <Page
          videoUrl="/videos/video-final-01.mp4"
          text="Watch this video until the end!"
        />
      )}
    </div>
  );
  /*
  return (
    <div>
      {section == 0 && (
        <CountdownComponent onComplete={onCountdownComplete} isDebugMode />
      )}
      {section == 1 && (
        <LoadingComponent onComplete={onLoadingComplete} waitInSeconds={5} />
      )}
      {section == 2 && (
        <VideoPlayer onCodeSuccess={onVideoCodeSuccess} validCode="123" />
      )}
      {section == 3 && <Quiz />}
    </div>
  );
  */
};

export default App;

/*
{section == 0 && <VideoPlayer onCodeSuccess={onCodeSuccess} />}
      {section == 1 && <Quiz />}

      */
