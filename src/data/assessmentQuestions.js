export const assessmentQuestions = [
  {
    id: 1,
    question: "A robot is programmed to move forward 5 steps, turn right, move 3 steps, turn right again, and move 5 steps. What shape does the robot's path create?",
    options: [
      "A square",
      "A rectangle",
      "An L-shape",
      "A triangle"
    ],
    correctAnswer: 2,
    category: "Computational Thinking"
  },
  {
    id: 2,
    question: "You need to arrange these steps to make a sandwich. What is the correct order? 1) Add filling 2) Get two slices of bread 3) Put slices together 4) Spread butter",
    options: [
      "2, 4, 1, 3",
      "1, 2, 3, 4",
      "4, 2, 1, 3",
      "2, 1, 4, 3"
    ],
    correctAnswer: 0,
    category: "Sequencing"
  },
  {
    id: 3,
    question: "If the pattern is: 2, 4, 8, 16, ___, what number comes next?",
    options: [
      "24",
      "32",
      "20",
      "18"
    ],
    correctAnswer: 1,
    category: "Pattern Recognition"
  },
  {
    id: 4,
    question: "A farmer needs to cross a river with a fox, a chicken, and a bag of grain. The boat can only hold the farmer and one item. If left alone, the fox will eat the chicken, and the chicken will eat the grain. How many minimum trips does the farmer need to make to get everything across safely?",
    options: [
      "3 trips",
      "5 trips",
      "7 trips",
      "4 trips"
    ],
    correctAnswer: 2,
    category: "Problem Solving"
  },
  {
    id: 5,
    question: "In a game, you collect points: +10 for each coin, -5 for each obstacle. If you collect 8 coins and hit 3 obstacles, what's your final score?",
    options: [
      "65",
      "55",
      "75",
      "50"
    ],
    correctAnswer: 0,
    category: "Mathematical Logic"
  },
  {
    id: 6,
    question: "A program has the following pseudocode:\nIF temperature > 30 THEN\n  PRINT 'Hot'\nELSE IF temperature > 20 THEN\n  PRINT 'Warm'\nELSE\n  PRINT 'Cold'\nEND IF\n\nWhat will be printed if temperature = 25?",
    options: [
      "Hot",
      "Warm",
      "Cold",
      "Nothing"
    ],
    correctAnswer: 1,
    category: "Conditional Logic"
  },
  {
    id: 7,
    question: "You have a list of numbers: [7, 2, 9, 1, 5, 3]. To find the largest number, what is the minimum number of comparisons needed?",
    options: [
      "6",
      "5",
      "4",
      "3"
    ],
    correctAnswer: 1,
    category: "Algorithm Efficiency"
  },
  {
    id: 8,
    question: "A recursive function calculates factorial. factorial(5) calls factorial(4), which calls factorial(3), etc. How many function calls are made in total to calculate factorial(5)?",
    options: [
      "5",
      "6",
      "4",
      "10"
    ],
    correctAnswer: 1,
    category: "Recursion"
  },
  {
    id: 9,
    question: "You're debugging a program. The expected output is 15, but you get 12. You notice the code adds three numbers: a=5, b=4, c=3, but the result is a+b. What type of error is this?",
    options: [
      "Syntax error",
      "Runtime error",
      "Logic error",
      "Compilation error"
    ],
    correctAnswer: 2,
    category: "Debugging"
  },
  {
    id: 10,
    question: "A sorting algorithm compares adjacent elements and swaps them if they're in the wrong order. It repeats until the list is sorted. Which algorithm is this?",
    options: [
      "Quick Sort",
      "Merge Sort",
      "Bubble Sort",
      "Binary Search"
    ],
    correctAnswer: 2,
    category: "Algorithms"
  },
  {
    id: 11,
    question: "In binary, what is 1011 + 110?",
    options: [
      "10001",
      "10011",
      "11001",
      "10101"
    ],
    correctAnswer: 0,
    category: "Binary Operations"
  },
  {
    id: 12,
    question: "You need to search for a name in a sorted list of 1000 names. Which search method is most efficient?",
    options: [
      "Check each name from start to end",
      "Check random names until found",
      "Start from the middle and eliminate half each time",
      "Check every 10th name"
    ],
    correctAnswer: 2,
    category: "Search Algorithms"
  },
  {
    id: 13,
    question: "A variable 'counter' starts at 0. A loop runs 5 times, and each time it executes 'counter = counter + 2'. What is the final value of counter?",
    options: [
      "5",
      "7",
      "10",
      "12"
    ],
    correctAnswer: 2,
    category: "Loops"
  },
  {
    id: 14,
    question: "Which of these is the best example of decomposition in problem-solving?",
    options: [
      "Writing the entire solution in one go",
      "Breaking a complex problem into smaller sub-problems",
      "Using a faster computer",
      "Asking someone else to solve it"
    ],
    correctAnswer: 1,
    category: "Decomposition"
  },
  {
    id: 15,
    question: "You create a function that takes a list and returns a new list with all duplicates removed. If input is [3,1,3,2,1,4], how many elements should the output have?",
    options: [
      "6",
      "5",
      "4",
      "3"
    ],
    correctAnswer: 2,
    category: "Data Structures"
  },
  {
    id: 16,
    question: "In a network of 6 computers where each computer connects to every other computer, how many connections exist in total?",
    options: [
      "12",
      "15",
      "18",
      "30"
    ],
    correctAnswer: 1,
    category: "Graph Theory"
  },
  {
    id: 17,
    question: "A program encrypts messages by shifting each letter 3 positions forward (A→D, B→E, etc.). What type of cipher is this?",
    options: [
      "Substitution cipher",
      "Caesar cipher",
      "Transposition cipher",
      "One-time pad"
    ],
    correctAnswer: 1,
    category: "Cryptography"
  },
  {
    id: 18,
    question: "Which data structure follows the principle: Last In, First Out (LIFO)?",
    options: [
      "Queue",
      "Array",
      "Stack",
      "Tree"
    ],
    correctAnswer: 2,
    category: "Data Structures"
  },
  {
    id: 19,
    question: "You're optimizing a website. You notice images take 5 seconds to load, scripts take 2 seconds, and text takes 0.5 seconds. To improve load time most effectively, what should you optimize first?",
    options: [
      "The text loading",
      "The scripts",
      "The images",
      "All equally"
    ],
    correctAnswer: 2,
    category: "Optimization"
  },
  {
    id: 20,
    question: "In abstraction, what is the main goal?",
    options: [
      "To include every single detail",
      "To hide unnecessary details and focus on essential features",
      "To make problems more complex",
      "To avoid solving the problem"
    ],
    correctAnswer: 1,
    category: "Abstraction"
  }
];
