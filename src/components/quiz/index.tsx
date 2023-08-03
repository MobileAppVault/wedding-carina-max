import { useCallback, useRef, useState } from "react";
import Modal, { ModalRef } from "./modal";
import { ChoiceType, QUESTIONS, QUESTIONS_DEMO } from "./questions";

interface IQuizComponentProps {
  onNext?: () => void;
}
const Quiz: React.FC<IQuizComponentProps> = ({ onNext }) => {
  const [questions, setQuestions] = useState(QUESTIONS);
  const myModal = useRef<ModalRef>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<
    ChoiceType | undefined
  >();
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState(0);

  const handleNext = useCallback(() => {
    onNext && onNext();
  }, [onNext]);

  const handleChoiceSelection = (choice: ChoiceType, index: number) => {
    setSelectedChoice(choice);
    setSelectedChoiceIndex(index);
  };
  const retryQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedChoice(undefined);
    setSelectedChoiceIndex(0);
    setCorrectCount(0);
  };

  const handleQuizSubmit = () => {
    // Logic to handle quiz submission
    // You can customize this as per your requirements
    const currentQuestion = questions[currentQuestionIndex];
    var isCorrect = currentQuestion.answer - 1 === selectedChoiceIndex;

    if (!isCorrect && currentQuestion.answer2)
      isCorrect = currentQuestion.answer2 - 1 === selectedChoiceIndex;

    if (!isCorrect && currentQuestion.answer3)
      isCorrect = currentQuestion.answer3 - 1 === selectedChoiceIndex;

    console.log("Question:", currentQuestion.question);
    console.log("Selected choice:", selectedChoice);
    console.log("Is correct:", isCorrect);

    if (!isCorrect) {
      //alert("Oh No! 😢 It's wrong.");
      openModalWrong();
      return;
    }

    if (isCorrect) setCorrectCount(correctCount + 1);
    setSelectedChoice(undefined);
    setSelectedChoiceIndex(0);

    // Move to the next question
    //setCurrentQuestionIndex(currentQuestionIndex + 1);
    openModalCorrect();
  };

  const openModalWrong = () => {
    // You may need to access the modal ref and call showModal, here is a simplistic example.
    // Depending upon your requirements, this could be handled in various ways.

    myModal.current?.open({
      //title: "Oh",
      content: selectedChoice?.message,
      buttonLabel: "Try Again",
      onClose: () => {
        setSelectedChoice(undefined);
      },
    });
  };

  const openModalCorrect = () => {
    // You may need to access the modal ref and call showModal, here is a simplistic example.
    // Depending upon your requirements, this could be handled in various ways.

    myModal.current?.open({
      //title: "Oh",
      content: selectedChoice?.message,
      buttonLabel: "Next question",
      onClose: () => {
        if (currentQuestionIndex === questions.length - 1) {
          handleNext();
        } else {
          setSelectedChoice(undefined);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      },
    });
  };

  return (
    <>
      <Modal ref={myModal} />
      <div className="bg-desktop md:bg-mobile w-full h-screen">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <div>
              <h2 className="text-2xl text-black font-bold mb-4">
                It&apos;s Quiz Time
              </h2>
              <p className="text-lg mb-4 mx-8">
                {questions[currentQuestionIndex].question}
              </p>
              <div className="flex flex-col gap-4 mx-8 justify-center mb-4 text-center items-center">
                {questions[currentQuestionIndex].choices.map(
                  (choice, index) => (
                    <button
                      key={index}
                      className={`py-0  btn btn-block   ${
                        selectedChoice && selectedChoice.value == choice.value
                          ? "btn-active btn-info"
                          : ""
                      }`}
                      onClick={() => handleChoiceSelection(choice, index)}
                    >
                      {choice.value}
                    </button>
                  )
                )}
              </div>
              <div className="flex flex-col mx-8 mt-10">
                <button
                  className={`btn   btn-block   font-mono 
                ${
                  !selectedChoice
                    ? "btn-outline btn-secondary"
                    : "btn-secondary"
                }`}
                  onClick={selectedChoice ? handleQuizSubmit : () => {}}
                  //disabled={!selectedChoice}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
