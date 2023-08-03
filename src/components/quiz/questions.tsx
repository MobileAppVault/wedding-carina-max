export type ChoiceType = {
  value: string;
  message: string;
};
export type QuestionType = {
  question: string;
  answer: number;
  answer2?: number;
  answer3?: number;
  choices: ChoiceType[];
};
export const QUESTIONS_DEMO: QuestionType[] = [
  {
    question: "Why do you call it 'honeymoon'?",
    choices: [
      {
        value:
          "Because honey and alcohol is an aphrodisiac for fertility and it is said to last for one month until the next moon",
        message: "So damn right!",
      },
      {
        value:
          "The honeymoon traditionally took place during the full moon with a honey milk bath",
        message: "Sorry, you failed!",
      },
      {
        value:
          "The name 'Honeymoon' represents the romance and magic associated with the moon.",
        message: "Sorry, you failed!",
      },
    ],
    answer: 1,
  },
  {
    question: "Who made this awesome quiz?",
    choices: [
      {
        value: "Ben & Lena",
        message: "Excuse me?",
      },
      {
        value: "Nici & Marcus",
        message: "So damn right!",
      },
      {
        value: "Zuckerberg & Gates",
        message: "Excuse me?",
      },
    ],
    answer: 2,
  },
];

export const QUESTIONS: QuestionType[] = [
  {
    question: "Who made this awesome quiz?",
    choices: [
      {
        value: "Ben & Lena",
        message: "Excuse me?",
      },
      {
        value: "Nici & Marcus",
        message: "So damn right!",
      },
      {
        value: "Zuckerberg & Gates",
        message: "Excuse me?",
      },
    ],
    answer: 2,
  },
  {
    question: "What are you going to wear ALL THE TIME on your honeymoon?",
    choices: [
      {
        value: "Of course the best Mr & Mrs Shirts from Nici & Marcus!!!!!!!",
        message: "So damn right!",
      },
      {
        value: "Nothing!",
        message: "Excuse me?",
      },
      {
        value: "Coconuts & plam leaves",
        message: "Excuse me?",
      },
    ],
    answer: 1,
  },
  {
    question: "What will you miss the most during your honeymoon?",
    choices: [
      {
        value: "Your plants at home",
        message: "Irinas truth :D",
      },
      {
        value: "Nici & Marcus",
        message: "Come on! We want the truth here!",
      },
      {
        value: "Playstation",
        message: "Heiners truth :D",
      },
    ],
    answer: 1,
    answer2: 3,
  },
  {
    question: "Why do you call it 'honeymoon'?",
    choices: [
      {
        value:
          "Because honey and alcohol is an aphrodisiac for fertility and it is said to last for one month until the next moon",
        message: "So damn right!",
      },
      {
        value:
          "The honeymoon traditionally took place during the full moon with a honey milk bath",
        message: "Sorry, you failed!",
      },
      {
        value:
          "The name 'Honeymoon' represents the romance and magic associated with the moon.",
        message: "Sorry, you failed!",
      },
    ],
    answer: 1,
  },
  {
    question: "When did the term 'honeymoon' come about?",
    choices: [
      {
        value: "In the 19th century",
        message: "So damn right!",
      },
      {
        value: "In the 15th century",
        message: "Sorry, you failed!",
      },
      {
        value: "In ancient Rome",
        message: "Sorry, you failed!",
      },
    ],
    answer: 1,
  },
  {
    question: "What is the first wedding anniversary?",
    choices: [
      {
        value: "Leather wedding",
        message: "Sorry, you failed!",
      },
      {
        value: "Cotton wedding",
        message: "Sorry, you failed!",
      },
      {
        value: "Paper Wedding",
        message: "So damn right!",
      },
    ],
    answer: 3,
  },
  {
    question: "What does the bridal bouquet symbolize at a wedding?",
    choices: [
      {
        value: "Happiness and love",
        message: "So damn right!",
      },
      {
        value: "Wealth and prosperity",
        message: "Sorry, you failed!",
      },
      {
        value: "Health and growth",
        message: "Sorry, you failed!",
      },
    ],
    answer: 1,
  },
  {
    question: "Who was the most beautiful bride in the world?",
    choices: [
      {
        value: "Irina",
        message: "So damn right!",
      },
      {
        value: "Irina",
        message: "So damn right!",
      },
      {
        value: "Irina",
        message: "So damn right!",
      },
    ],
    answer: 1,
    answer2: 2,
    answer3: 3,
  },
  {
    question: "Who had the better wedding dance?",
    choices: [
      {
        value: "Nici & Marcus",
        message: "naaaaaaahhhh!!!",
      },
      {
        value: "Irina & Heiner",
        message: "true, but did we danced so badly?",
      },
      {
        value: "Both",
        message: "Damn right! We all rocked the dance floor!",
      },
    ],
    answer: 3,
  },
  {
    question: "How many islands does the Seychelles include?",
    choices: [
      {
        value: "50 islands",
        message: "Sorry, you failed!",
      },
      {
        value: "115 islands",
        message: "so damn right!",
      },
      {
        value: "200 islands",
        message: "Sorry, you failed!",
      },
    ],
    answer: 2,
  },
  {
    question: "Which is the largest island in the Seychelles?",
    choices: [
      {
        value: "La Digue",
        message: "Sorry, you failed!",
      },
      {
        value: "Mahé",
        message: "so damn right!",
      },
      {
        value: "Praslin",
        message: "Sorry, you failed!",
      },
    ],
    answer: 2,
  },
  {
    question:
      "Which animal species is endemic to the Seychelles and is considered to be the symbol of the islands?",
    choices: [
      {
        value: "Giant crabs",
        message: "Sorry, you failed!",
      },
      {
        value: "Giant tortoises",
        message: "so damn right!",
      },
      {
        value: "Dolphins",
        message: "Sorry, you failed!",
      },
    ],
    answer: 2,
  },
  {
    question:
      "Which national park in the Seychelles is a UNESCO World Heritage Site?",
    choices: [
      {
        value: "Morne Seychellois National Park",
        message: "Sorry, you failed!",
      },
      {
        value: "Vallee de Mai National Park",
        message: "so damn right!",
      },
      {
        value: "Sainte Anne Marine National Park",
        message: "Sorry, you failed!",
      },
    ],
    answer: 2,
  },
  {
    question:
      "What species of sea turtles regularly nest on Seychelles beaches?",
    choices: [
      {
        value: "Leatherback sea turtle",
        message: "Sorry, you failed!",
      },
      {
        value: "Humpback turtle",
        message: "Sorry, you failed!",
      },
      {
        value: "Green sea turtle",
        message: "so damn right!",
      },
    ],
    answer: 3,
  },
  {
    question:
      "Which plant is a symbol of the Seychelles and is often considered a national symbol?",
    choices: [
      {
        value: "Baobab tree",
        message: "Sorry, you failed!",
      },
      {
        value: "Orchid",
        message: "so damn right!",
      },
      {
        value: "Coconut palm",
        message: "Sorry, you failed!",
      },
    ],
    answer: 2,
  },
  {
    question:
      "Which bird species is native to the Seychelles and known for its loud and melodious song?",
    choices: [
      {
        value: "Parrots",
        message: "Sorry, you failed!",
      },
      {
        value: "Frigatebirds",
        message: "Sorry, you failed!",
      },
      {
        value: "Sunbirds",
        message: "so damn right!",
      },
    ],
    answer: 3,
  },
  {
    question: "Which of the following marine life is native to the Seychelles?",
    choices: [
      {
        value: "Clownfish",
        message: "so damn right!",
      },
      {
        value: "Angelfish",
        message: "Sorry, you failed!",
      },
      {
        value: "Puffer fish",
        message: "Sorry, you failed!",
      },
    ],
    answer: 1,
  },
  {
    question:
      "Are you happy that you learned a lot about the Seychelles with this legendary quiz?",
    choices: [
      {
        value: "Yes",
        message: "more enthusiasm please!!!",
      },
      {
        value: "No",
        message: "Excuse meeeee?",
      },
      {
        value: "Yes Yes Yes Yes!!!",
        message: "Thank you!",
      },
    ],
    answer: 3,
  },
  {
    question: "Was this the best wedding gift ever?",
    choices: [
      {
        value: "Yes!",
        message: "We want the truth here!",
      },
      {
        value: "No!",
        message: "Excuse meeeee?",
      },
      {
        value: "One of many!",
        message: "Thank you!",
      },
    ],
    answer: 3,
  },
  {
    question: "Do you think that's it?",
    choices: [
      {
        value: "Excuse me, where is the money???",
        message: "okay okay, here we go…",
      },
      {
        value: "Yes",
        message: "We want the truth here!",
      },
      {
        value: "I hope not",
        message: "okay okay, here we go…",
      },
    ],
    answer: 1,
    answer2: 3,
  },
];
