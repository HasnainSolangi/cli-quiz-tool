import inquirer from "inquirer";
import chalk from "chalk";
import shuffle from "lodash.shuffle"; // Added for shuffling questions
// Display the welcome message
console.log(chalk.bgBlue("\n Welcome to the Ultimate Quiz of\n\t"));
console.log(chalk.green("╔╦╗╦ ╦╔═╗╔═╗╔═╗╔═╗╦═╗╦╔═╗╔╦╗"));
console.log(chalk.green(" ║ ╚╦╝╠═╝║╣ ╚═╗║  ╠╦╝║╠═╝ ║"));
console.log(chalk.green(" ╩  ╩ ╩  ╚═╝╚═╝╚═╝╩╚═╩╩   ╩\n"));
console.log(chalk.blue("This quiz consists of 45 questions, ranging from Basic to Advanced levels.\nOnce you start, you have 45 minutes to complete it.\nYou need to score at least 70% to pass the quiz."));
console.log(chalk.blue("Test your knowledge and see how well you understand TypeScript."));
console.log(chalk.blue("Remember, you can end the quiz at any time if you wish to stop.\n"));
console.log(chalk.blue("Good luck and have fun!\n"));
// Define the quiz level enum
var Level;
(function (Level) {
    Level[Level["Basic"] = 0] = "Basic";
    Level[Level["Intermediate"] = 1] = "Intermediate";
    Level[Level["Advanced"] = 2] = "Advanced";
})(Level || (Level = {}));
// Define the quiz questions
let questions = [
    // Basic Level Questions
    {
        level: Level.Basic,
        index: 1,
        question: "What is the data type for a boolean value in TypeScript?",
        answers: ["string", "number", "boolean", "object"],
        correctAnswer: 2,
        explanation: "Boolean values in TypeScript are represented by the 'boolean' data type.",
    },
    {
        level: Level.Basic,
        index: 2,
        question: "What keyword is used to define a variable in TypeScript?",
        answers: ["var", "function", "let", "class"],
        correctAnswer: 2,
        explanation: "'let' is used to define a variable in TypeScript. 'var' can also be used but 'let' is preferred due to block scoping.",
    },
    {
        level: Level.Basic,
        index: 3,
        question: "Which of the following is a valid TypeScript type?",
        answers: ["symbol", "integer", "unsigned", "character"],
        correctAnswer: 0,
        explanation: "'symbol' is a valid TypeScript type introduced in ES6. The others are not valid TypeScript types.",
    },
    {
        level: Level.Basic,
        index: 4,
        question: "How do you declare a constant in TypeScript?",
        answers: ["let", "const", "var", "static"],
        correctAnswer: 1,
        explanation: "Constants are declared using the 'const' keyword, which ensures that the variable cannot be reassigned.",
    },
    {
        level: Level.Basic,
        index: 5,
        question: "Which type is used to represent a null value in TypeScript?",
        answers: ["undefined", "void", "none", "null"],
        correctAnswer: 3,
        explanation: "The 'null' type represents a null value in TypeScript, while 'undefined' represents an uninitialized value.",
    },
    {
        level: Level.Basic,
        index: 6,
        question: "How do you specify an optional parameter in a TypeScript function?",
        answers: [
            'appending a "!"',
            'appending a "?"',
            'appending a "$"',
            "no special syntax",
        ],
        correctAnswer: 1,
        explanation: "Optional parameters in TypeScript are denoted by appending a '?' to the parameter name.",
    },
    {
        level: Level.Basic,
        index: 7,
        question: "Which of these is a valid TypeScript tuple?",
        answers: [
            "[string, number]",
            "{string, number}",
            "<string, number>",
            "(string, number)",
        ],
        correctAnswer: 0,
        explanation: "Tuples in TypeScript are defined using square brackets, e.g., '[string, number]'.",
    },
    {
        level: Level.Basic,
        index: 8,
        question: "What is the file extension for a TypeScript file?",
        answers: [".js", ".jsx", ".ts", ".tsx"],
        correctAnswer: 2,
        explanation: "TypeScript files have the '.ts' extension, while '.tsx' is used for TypeScript files with JSX.",
    },
    {
        level: Level.Basic,
        index: 9,
        question: "How do you define a string variable in TypeScript?",
        answers: [
            "let str: String;",
            "let str: text;",
            "let str: char;",
            "let str: string;",
        ],
        correctAnswer: 3,
        explanation: "A string variable in TypeScript is defined using the 'string' type annotation, e.g., 'let str: string;'.",
    },
    {
        level: Level.Basic,
        index: 10,
        question: "How do you define a number variable in TypeScript?",
        answers: [
            "let num: Number;",
            "let num: int;",
            "let num: number;",
            "let num: integer;",
        ],
        correctAnswer: 2,
        explanation: "A number variable in TypeScript is defined using the 'number' type annotation, e.g., 'let num: number;'.",
    },
    {
        level: Level.Basic,
        index: 11,
        question: "How do you specify the return type of a function in TypeScript?",
        answers: [
            "function func() -> void",
            "function func(): void",
            "function func: void",
            "function func => void",
        ],
        correctAnswer: 1,
        explanation: "The return type of a function in TypeScript is specified after the parameter list, e.g., 'function func(): void'.",
    },
    {
        level: Level.Basic,
        index: 12,
        question: 'What does the "any" type represent in TypeScript?',
        answers: [
            "String data type",
            "Any data type",
            "Number data type",
            "Boolean data type",
        ],
        correctAnswer: 1,
        explanation: "The 'any' type in TypeScript can represent any data type, providing a way to opt out of type-checking.",
    },
    {
        level: Level.Basic,
        index: 13,
        question: "How do you create a class in TypeScript?",
        answers: [
            "new MyClass {}",
            "object MyClass {}",
            "function MyClass {}",
            "class MyClass {}",
        ],
        correctAnswer: 3,
        explanation: "Classes in TypeScript are created using the 'class' keyword, e.g., 'class MyClass {}'.",
    },
    {
        level: Level.Basic,
        index: 14,
        question: 'What is the use of the "this" keyword in TypeScript?',
        answers: [
            "Refers to the current object",
            "Refers to the parent object",
            "Refers to the global object",
            "Refers to the child object",
        ],
        correctAnswer: 0,
        explanation: "The 'this' keyword in TypeScript refers to the current object instance.",
    },
    {
        level: Level.Basic,
        index: 15,
        question: "How do you define a function with default parameters in TypeScript?",
        answers: [
            'function func(param: "default" = string) {}',
            'function func(param: string = "default") {}',
            'function func(param = "default": string) {}',
            'function func(param = string: "default") {}',
        ],
        correctAnswer: 1,
        explanation: "Default parameters in TypeScript are specified in the parameter list, e.g., 'function func(param: string = 'default') {}'.",
    },
    // Intermediate Level Questions
    {
        level: Level.Intermediate,
        index: 1,
        question: "How do you import a module in TypeScript?",
        answers: [
            "A) import { MyModule } from 'my-module';",
            "B) require('my-module');",
            "C) load 'my-module';",
            "D) importModule 'my-module';",
        ],
        correctAnswer: 0,
        explanation: "In TypeScript, modules are imported using the 'import' keyword followed by the module path within curly braces, e.g., 'import { MyModule } from 'my-module';'.",
    },
    {
        level: Level.Intermediate,
        index: 2,
        question: "How do you specify the type of 'this' in a function?",
        answers: [
            "A) function myFunc(self: MyType) {}",
            "B) function myFunc(thisType: MyType) {}",
            "C) function myFunc(this: MyType) {}",
            "D) function myFunc(that: MyType) {}",
        ],
        correctAnswer: 2,
        explanation: "To specify the type of 'this' in a function in TypeScript, you use the 'this' parameter followed by a colon and the type, e.g., 'function myFunc(this: MyType) {}'.",
    },
    {
        level: Level.Intermediate,
        index: 3,
        question: "How do you define a type alias for a function signature?",
        answers: [
            "A) type MyFunc = (a: string, b: number) => void;",
            "B) type MyFunc = function(a: string, b: number): void;",
            "C) type MyFunc = def(a: string, b: number): void;",
            "D) type MyFunc = (a: string, b: number) -> void;",
        ],
        correctAnswer: 0,
        explanation: "To define a type alias for a function signature in TypeScript, you use the 'type' keyword followed by the alias name, an equal sign, and the function signature, e.g., 'type MyFunc = (a: string, b: number) => void;'.",
    },
    {
        level: Level.Intermediate,
        index: 4,
        question: "Which of the following is a mapped type in TypeScript?",
        answers: [
            "A) { [key: string]: any }",
            "B) { key: value }",
            "C) { P: K }",
            "D) { [P in K]: T[P] }",
        ],
        correctAnswer: 3,
        explanation: "The type '{ [P in K]: T[P] }' represents a mapped type in TypeScript, where each property in the resulting type is based on a property from another type.",
    },
    {
        level: Level.Intermediate,
        index: 5,
        question: "How do you handle asynchronous code in TypeScript?",
        answers: [
            "A) Using promises only",
            "B) Using async/await",
            "C) Using callbacks only",
            "D) Using setTimeout",
        ],
        correctAnswer: 1,
        explanation: "Asynchronous code in TypeScript can be handled using the 'async/await' syntax, which provides a more readable way to write asynchronous code compared to using callbacks or promises alone.",
    },
    {
        level: Level.Intermediate,
        index: 6,
        question: "How do you define a type for a function parameter that can be of multiple types?",
        answers: [
            "A) param: string & number;",
            "B) param: string | number;",
            "C) param: string, number;",
            "D) param: string || number;",
        ],
        correctAnswer: 1,
        explanation: "To define a type for a function parameter that can be of multiple types in TypeScript, you use the '|' operator between the types, e.g., 'param: string | number;'. This indicates that the parameter can accept values of either type.",
    },
    {
        level: Level.Intermediate,
        index: 7,
        question: "Which keyword is used to create a new instance of a class?",
        answers: ["A) new", "B) create", "C) instance", "D) instantiate"],
        correctAnswer: 0,
        explanation: "In TypeScript, the 'new' keyword is used to create a new instance of a class. It initializes a new object based on the class blueprint.",
    },
    {
        level: Level.Intermediate,
        index: 8,
        question: "How do you cast a variable to a specific type in TypeScript?",
        answers: [
            "A) <Type>variable",
            "B) variable as Type",
            "C) Type(variable)",
            "D) Both 1 and 2",
        ],
        correctAnswer: 3,
        explanation: "In TypeScript, you can cast a variable to a specific type using either the angle brackets syntax '<Type>variable' or the 'as' keyword syntax 'variable as Type'. Both approaches are valid and achieve the same result.",
    },
    {
        level: Level.Intermediate,
        index: 9,
        question: "What is the purpose of the 'keyof' operator in TypeScript?",
        answers: [
            "A) To get a union of all property names of a type",
            "B) To get the value of a key",
            "C) To access the index signature",
            "D) To create a mapped type",
        ],
        correctAnswer: 0,
        explanation: "The 'keyof' operator in TypeScript is used to get a union of all property names of a type. It allows you to obtain a type that represents all possible property names as strings.",
    },
    {
        level: Level.Intermediate,
        index: 10,
        question: "How do you create a type that represents all keys of an object as strings?",
        answers: [
            "A) type StringKeys<T> = { [K in keyof T]: K; }",
            "B) type StringKeys<T> = { [K: string]: T[K]; }",
            "C) type StringKeys<T> = { [K: keyof T]: string; }",
            "D) type StringKeys<T> = { [K in keyof T]: string; }",
        ],
        correctAnswer: 3,
        explanation: "To create a type that represents all keys of an object as strings in TypeScript, you use the mapped type syntax '{ [K in keyof T]: string; }'. This ensures that all keys of the object are converted to strings.",
    },
    {
        level: Level.Intermediate,
        index: 11,
        question: "What is a key difference between TypeScript and JavaScript?",
        answers: [
            "A) TypeScript supports functional programming, JavaScript does not",
            "B) TypeScript is statically typed, JavaScript is dynamically typed",
            "C) TypeScript is a superset of JavaScript",
            "D) TypeScript has fewer features than JavaScript",
        ],
        correctAnswer: 1,
        explanation: "One key difference between TypeScript and JavaScript is that TypeScript is statically typed, whereas JavaScript is dynamically typed. This means that TypeScript performs type checking at compile time, while JavaScript does so at runtime.",
    },
    {
        level: Level.Intermediate,
        index: 12,
        question: "How do you define a type for a function parameter that can be of multiple types?",
        answers: [
            "A) param: string | number;",
            "B) param: string & number;",
            "C) param: string, number;",
            "D) param: string || number;",
        ],
        correctAnswer: 0,
        explanation: "To define a type for a function parameter that can be of multiple types in TypeScript, you use the '|' operator between the types, e.g., 'param: string | number;'. This indicates that the parameter can accept values of either type.",
    },
    {
        level: Level.Intermediate,
        index: 13,
        question: "What is the purpose of the 'never' type in TypeScript?",
        answers: [
            "A) To represent null values",
            "B) To represent values that never occur",
            "C) To represent undefined values",
            "D) To represent any values",
        ],
        correctAnswer: 1,
        explanation: "The 'never' type in TypeScript is used to represent values that never occur. It is typically used to indicate functions that never return (i.e., throw an error or enter an infinite loop), or to denote unreachable code.",
    },
    {
        level: Level.Intermediate,
        index: 14,
        question: "Which of the following is a TypeScript type annotation syntax?",
        answers: [
            "A) let x: = string;",
            "B) let x = string;",
            "C) let x: string;",
            "D) let x: : string;",
        ],
        correctAnswer: 2,
        explanation: "The TypeScript type annotation syntax uses a colon ':' to specify the type of a variable or parameter, e.g., 'let x: string;'. This informs the compiler that the variable 'x' should hold values of type 'string'.",
    },
    {
        level: Level.Intermediate,
        index: 15,
        question: "What is the purpose of the 'readonly' modifier in TypeScript?",
        answers: [
            "A) To prevent inheritance",
            "B) To make a property write-only",
            "C) To enforce type safety",
            "D) To make a property immutable",
        ],
        correctAnswer: 3,
        explanation: "The 'readonly' modifier in TypeScript is used to make a property immutable, meaning its value cannot be changed once it is assigned. This helps enforce data integrity and prevents unintended modifications.",
    },
    // Advanced Level Questions
    {
        level: Level.Advanced,
        index: 1,
        question: "How do you define generic types in TypeScript?",
        answers: [
            "Using interfaces with placeholders",
            "Using angle brackets with type variables",
            "There are no generics in TypeScript",
            "Using inheritance",
        ],
        correctAnswer: 1,
        explanation: "Option 2 is correct. Generic types in TypeScript are defined using angle brackets with type variables, allowing for the creation of flexible and reusable components.",
    },
    {
        level: Level.Advanced,
        index: 2,
        question: "What are decorators used for in TypeScript?",
        answers: [
            "To modify class behavior",
            "To define metadata for classes",
            "To add functionality to existing functions",
            "All of the above",
        ],
        correctAnswer: 3,
        explanation: "Option 4 is correct. Decorators in TypeScript can be used for various purposes such as modifying class behavior, defining metadata for classes, and adding functionality to existing functions.",
    },
    {
        level: Level.Advanced,
        index: 3,
        question: "How do you define a mapped type in TypeScript?",
        answers: [
            "Using a for...in loop",
            "Using an index signature",
            "Using a key remapping",
            "Using a template literal type",
        ],
        correctAnswer: 1,
        explanation: "Option 2 is correct. Mapped types in TypeScript are defined using an index signature, allowing for the transformation of one set of properties into another set of properties.",
    },
    {
        level: Level.Advanced,
        index: 4,
        question: 'What is the "Extract" utility type used for in TypeScript?',
        answers: [
            "To extract properties from an object",
            "To extract methods from a class",
            "To extract values from an array",
            "To extract types from a union",
        ],
        correctAnswer: 3,
        explanation: 'Option 4 is correct. The "Extract" utility type in TypeScript is used to extract types from a union, selecting only those types that are assignable to a specified type.',
    },
    {
        level: Level.Advanced,
        index: 5,
        question: 'What is the "Exclude" utility type used for in TypeScript?',
        answers: [
            "To exclude properties from an object",
            "To exclude methods from a class",
            "To exclude values from an array",
            "To exclude types from a union",
        ],
        correctAnswer: 3,
        explanation: 'Option 4 is correct. The "Exclude" utility type in TypeScript is used to exclude types from a union, removing types that are assignable to a specified type.',
    },
    {
        level: Level.Advanced,
        index: 6,
        question: 'What is the "ReturnType" utility type used for in TypeScript?',
        answers: [
            "To get the parameter types of a function type",
            "To get the properties of an object type",
            "To get the return type of a function type",
            "To get the methods of a class type",
        ],
        correctAnswer: 2,
        explanation: 'Option 3 is correct. The "ReturnType" utility type in TypeScript is used to get the return type of a function type, enabling the retrieval of the type that a function returns.',
    },
    {
        level: Level.Advanced,
        index: 7,
        question: 'What is the "infer" keyword used for in TypeScript?',
        answers: [
            "To declare a variable",
            "To define a function",
            "To infer a type within a conditional type",
            "To create a class",
        ],
        correctAnswer: 2,
        explanation: 'Option 3 is correct. The "infer" keyword in TypeScript is used to infer a type within a conditional type, allowing for the creation of flexible and dynamic type definitions.',
    },
    {
        level: Level.Advanced,
        index: 8,
        question: "How do you define a template literal type in TypeScript?",
        answers: [
            "Using double quotes with type expressions",
            "Using single quotes with type expressions",
            "Using angle brackets with type expressions",
            "Using backticks with type expressions",
        ],
        correctAnswer: 3,
        explanation: "Option 4 is correct. Template literal types in TypeScript are defined using backticks (`) with type expressions, allowing for the creation of string literal types based on template strings.",
    },
    {
        level: Level.Advanced,
        index: 9,
        question: "What is the purpose of the 'Awaited' utility type in TypeScript?",
        answers: [
            "To create a type that represents a promise",
            "To wait for a type to resolve",
            "To extract the type inside a promise",
            "To handle errors in async functions",
        ],
        correctAnswer: 2,
        explanation: 'Option 3 is correct. The purpose of the "Awaited" utility type in TypeScript is to extract the type inside a promise, providing the resolved type of a Promise<T>.',
    },
    {
        level: Level.Advanced,
        index: 10,
        question: "How do you create a type-safe counterpart to the 'any' type in TypeScript?",
        answers: ["void", "never", "object", "unknown"],
        correctAnswer: 3,
        explanation: 'Option 4 is correct. The "unknown" type in TypeScript serves as a type-safe counterpart to the "any" type, allowing for stricter type checking and avoiding unexpected runtime errors.',
    },
    {
        level: Level.Advanced,
        index: 11,
        question: "How do you specify that a class property should be immutable?",
        answers: ["readonly", "const", "static", "final"],
        correctAnswer: 0,
        explanation: 'Option 1 is correct. In TypeScript, the "readonly" keyword is used to specify that a class property should be immutable, meaning it cannot be reassigned after initialization.',
    },
    {
        level: Level.Advanced,
        index: 12,
        question: "How do you create a tuple type with optional elements in TypeScript?",
        answers: [
            "By using the 'Optional' keyword before each element's type",
            "By appending a question mark (?) to each element's type",
            "By wrapping each element's type in square brackets []",
            "By using the 'Nullable' keyword before the tuple declaration",
        ],
        correctAnswer: 1,
        explanation: "Option 2 is correct. To create a tuple type with optional elements in TypeScript, you can use the syntax where each element's type is followed by a question mark (?) to denote optionality.",
    },
    {
        level: Level.Advanced,
        index: 13,
        question: "How do you create an async function in TypeScript?",
        answers: [
            "async function myFunc() {}",
            "function async myFunc() {}",
            "function myFunc async() {}",
            "function myFunc() async {}",
        ],
        correctAnswer: 0,
        explanation: 'Option 1 is correct. To create an async function in TypeScript, you use the "async" keyword before the function declaration, indicating that the function will return a promise.',
    },
    {
        level: Level.Advanced,
        index: 14,
        question: "What is the purpose of the 'Parameters' utility type in TypeScript?",
        answers: [
            "To get the return type of a function",
            "To get the properties of an object type",
            "To get the parameter types of a function",
            "To get the methods of a class type",
        ],
        correctAnswer: 2,
        explanation: 'Option 3 is correct. The "Parameters" utility type in TypeScript is used to extract the parameter types of a function type, allowing for introspection and type manipulation based on function parameters.',
    },
    {
        level: Level.Advanced,
        index: 15,
        question: "How do advanced TypeScript utility types enhance code readability and maintainability?",
        answers: [
            "By providing tools to create more precise and expressive type definitions",
            "By reducing the need for manual type checking and assertion",
            "By enabling better integration with existing JavaScript libraries and frameworks",
            "By improving runtime performance and memory management",
        ],
        correctAnswer: 0,
        explanation: "Option 1 is correct. Advanced TypeScript utility types enhance code readability and maintainability by providing tools to create more precise and expressive type definitions, reducing the need for manual type checking and assertion, and enabling better integration with existing JavaScript libraries and frameworks.",
    },
];
// Set the maximum number of listeners for the process input stream to avoid the warning
process.stdin.setMaxListeners(15);
// Define passing ratio (e.g., 70%)
const PASSING_RATIO = 0.7;
// Function to ask a question with time limit
async function askQuestion(question, timeLimit = 60) {
    // Display the question
    console.log(`Question: ${question.question}\n`);
    // Add the "End Quiz" option to the list of choices
    const choicesWithEnd = [...question.answers, "End Quiz"];
    // Set timeout for user answer
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Time's up")), timeLimit * 1000));
    // Ask for user's answer
    const answerPromise = inquirer.prompt([
        {
            type: "list",
            name: "userAnswer",
            message: "Select your answer:",
            choices: choicesWithEnd,
        },
    ]);
    // Race the timeout and user answer
    try {
        const result = await Promise.race([answerPromise, timeoutPromise]);
        return result;
    }
    catch (error) {
        console.log(chalk.red("Time's Up!"));
        return null;
    }
}
// Function to display quiz results
function displayResults(questionsAnswered, correctAnswers, incorrectAnswers) {
    console.log(chalk.yellow(`\nQuiz ended. You answered ${questionsAnswered} questions.`));
    console.log(chalk.green(`Correct answers: ${correctAnswers}`));
    console.log(chalk.red(`Incorrect answers: ${incorrectAnswers}`));
    // Calculate the passing score
    const passingScore = Math.ceil(questionsAnswered * PASSING_RATIO);
    if (correctAnswers >= passingScore) {
        console.log(chalk.green(`Congratulations! You passed the quiz with a score of ${correctAnswers} out of ${questionsAnswered}.`));
    }
    else {
        console.log(chalk.red(`You didn't pass the quiz. You needed at least ${passingScore} correct answers. Better luck next time!`));
    }
}
// Function to run the quiz
async function runQuiz() {
    let score = 0;
    let questionsAnswered = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    for (let level = Level.Basic; level <= Level.Advanced; level++) {
        console.log(chalk.blue(`\nLevel: ${level === Level.Basic
            ? "Basic"
            : level === Level.Intermediate
                ? "Intermediate"
                : "Advanced"}`));
        // Shuffle questions for each level
        const shuffledQuestions = shuffle(questions.filter((q) => q.level === level));
        for (const question of shuffledQuestions) {
            const answer = await askQuestion(question);
            questionsAnswered++;
            // If the user chose to end the quiz
            if (answer && answer.userAnswer === "End Quiz") {
                displayResults(questionsAnswered - 1, correctAnswers, incorrectAnswers);
                process.exit(0);
            }
            if (answer &&
                question.answers.indexOf(answer.userAnswer) === question.correctAnswer) {
                console.log(chalk.green("Correct!"));
                score++;
                correctAnswers++;
            }
            else {
                console.log(chalk.red("Incorrect."));
                incorrectAnswers++;
                // Show explanation for wrong answer
                if (question.explanation)
                    console.log(chalk.yellow(`Explanation: ${question.explanation}`));
            }
        }
    }
    // Display final score
    displayResults(questionsAnswered, correctAnswers, incorrectAnswers);
    // Ask if the user wants to play again
    const playAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        },
    ]);
    if (playAgain.playAgain) {
        // If yes, run the quiz again
        runQuiz();
    }
    else {
        // If no, display exit message and exit
        console.log(chalk.blue("Quiz completed! Hope you enjoyed it. See you next time!"));
        process.exit(0);
    }
}
// Start the quiz
runQuiz();
