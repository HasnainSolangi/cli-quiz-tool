# Ultimate TypeScript Quiz

Welcome to the Ultimate TypeScript Quiz! This application is designed to test your knowledge of TypeScript across three levels: Basic, Intermediate, and Advanced. Answer questions correctly to progress through the levels and see how much you know about TypeScript.

This quiz covers a wide range of TypeScript concepts from basic to advanced levels.


[x] To ensure a manageable level of complexity for learners, I have selected and provided 45 questions out of the original 100 MCQs. For example, you can practice topics such as

### Basic Level (Questions 1-15):
- Covers fundamental TypeScript concepts like **primitive types**, **variables**, **functions**, **classes**, and **modules**.

### Intermediate Level (Questions 16-30):
- Introduces more advanced topics like **interfaces**, **decorators**, **generics**, **type aliases**, and **utility types**.

### Advanced Level (Questions 31-45):
- Delves into deeper concepts like **mapped types**, **discriminated unions**, **async/await**, **advanced utility types**, and working with **objects**, **functions** in a **type-safe** manner and **Advanced TypeScript** Concepts as you see fit.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Quiz Levels](#quiz-levels)
- [Questions](#questions)
- [Shuffle Function](#shuffle-function)
- [Time Management](#time-management)
- [Restart Option](#restart-option)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Ultimate TypeScript Quiz is an interactive command-line application that provides a fun and educational way to test and improve your TypeScript knowledge. The quiz consists of 100 questions divided into three difficulty levels. Players start at the Basic level and can progress to Intermediate and Advanced levels by correctly answering questions.

## Features

- **Multiple Levels**: The quiz has three levels of difficulty: Basic, Intermediate, and Advanced.
- **Randomized Questions**: Questions are shuffled each time you play to ensure a unique experience.
- **Timed Quiz**: You have a limited time to complete the quiz, adding an extra challenge.
- **Score Tracking**: Your score is tracked and displayed at the end of the quiz.
- **Restart Option**: You can choose to play again after completing the quiz.
- **Error Handling**: Graceful error handling to ensure a smooth user experience.

## Installation

To install and run the Ultimate TypeScript Quiz, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/ultimate-typescript-quiz.git
    cd ultimate-typescript-quiz
    ```

2. **Install Dependencies**:
 

3. **Run the Quiz**:
    ```
    npx 
    ```

## Usage

After installing the dependencies, you can start the quiz by running `npx`. The quiz will display a welcome message and instructions. Answer the questions by selecting the correct option. Your score will be displayed at the end of the quiz, and you will have the option to restart the quiz if desired.

## Quiz Levels

The quiz consists of three levels:

1. **Basic**: This level tests fundamental knowledge of TypeScript.
2. **Intermediate**: This level includes more challenging questions to test your deeper understanding.
3. **Advanced**: This level is designed to test your expertise and advanced knowledge of TypeScript.

**Players start at the Basic level and can progress to higher levels based on their performance.**

## Questions

The quiz includes 45 questions, each with four possible answers. Questions are categorized by level (Basic, Intermediate, Advanced). A correct answer earns points and helps the player progress to the next level.

## Shuffle Function

- The questions are shuffled using the lodash library to ensure a unique order each time the quiz is played. This randomness adds variety and replayability to the quiz.

```typescript
function shuffleArray<T>(array: T[]): T[] {
    return _.shuffle(array);
}
```

## Time Management

- Players have a limited amount of time to complete the quiz. The elapsed time is tracked, and the quiz ends if the time limit is exceeded.

```
function getElapsedTimeInMinutes(startTime: Date): number {
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - startTime.getTime();
    return Math.floor(elapsedTime / (1000 * 60));
}
```
## Restart Option

- After completing the quiz, players are given the option to restart and play again. This feature encourages replayability and allows players to improve their scores.

```
const { restart } = await inquirer.prompt([
    {
        type: 'confirm',
        name: 'restart',
        message: 'Do you want to play again?',
    },
]);

if (restart) {
    runQuiz();
} else {
    console.log(chalk.green("Thank you for playing! Goodbye."));
}
```

## Error Handling

- The quiz includes error handling to manage unexpected issues gracefully. This ensures a smooth user experience even if something goes wrong.

## Contributing
- Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.
___
## License
___

##### Name:- Hasnain Ahmed 
##### Roll No:- 00310538
##### Quarter:- 1
##### Batch:- 1
##### City:- Karachi
##### Centre:- Sindh Governor House Karachi
##### Campus:- Main
##### Days/Time:- Wednesday 09:00 am - 12:00 pm