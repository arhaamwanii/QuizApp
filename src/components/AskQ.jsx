import React, { useState } from 'react';
import initialQuestions from '../questions';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

let timer = 30000 ;

export const AskQ = () => {
  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [formData , setFormData] = useState(initialQuestions)
  const [timeRemaining , setTimeReaining] = useState(timer)

  const handleAnswer = (index) => {
    const updatedQuestions = formData.map((question, i) => {
      if (i === currentQuestion) {
        // Update the selected index for the current question
        return {
          ...question,
          selectedIndex: index
        };
      }
      return question;
    });

    // Update the state with the modified array
    setFormData(updatedQuestions);

    // Move to the next question
    setCurrentQuestion((prev) => prev + 1);

    handleTime()
  };


  function handleTime(){
    setTimeout(() => handleAnswer(4) , 30000 )
    setInterval(() =>{
      setTimeReaining((prev) => prev - 10 )
    } , 10 )
  }

  if (currentQuestion >= initialQuestions.length) {
    return (
      <div>
        <h1>Quiz completed!</h1>
        {console.log(formData)}
      </div>
    );
  }

  const question = initialQuestions[currentQuestion];

  return (
    <div>
      <progress max={timer} value={timeRemaining}/>

      <h1>{question.text}</h1>
      {question.answers.map((option, index) => (
        <Button key={index} onClick={() => handleAnswer(index)}>{option}</Button>,
        handleTime()
      ))}
    </div>
  );
};




// import React, { useState } from 'react'
// import initialQuestions from '../questions';
// // import { Button } from "@/components/ui/button"

// export const AskQ = () => {
//   const [currentQuestion , setCurrentQuestion] = useState(0)
//   console.log(initialQuestions)
//   return(
//     initialQuestions[currentQuestion].map(
//       (prev)=> {
//         <h1>{prev.text}</h1>
//         prev.answers.map((options) => {
//           <button onClick={() => setCurrentQuestion((e) => e++)} >{options} </button>
//         })

//       }
//     )
//   )

// }

// side effect and use effect hook usage in this app

// const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState({});

//   const handleAnswer = (answer) => {
//     setUserAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [initialQuestions[currentQuestionIndex].id]: answer,
//     }));
//     // Move to the next question
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const renderCurrentQuestion = () => {
//     const currentQuestion = initialQuestions[currentQuestionIndex];
//     if (!currentQuestion) {
//       return (
//         <div>
//           <h2>Thank you for completing the quiz!</h2>
//           <pre>{JSON.stringify(userAnswers, null, 2)}</pre>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <h2>{currentQuestion.text}</h2>
//         <ul>
//           {currentQuestion.answers.map((answer, index) => (
//             <li key={index}>
//               <button onClick={() => handleAnswer(answer)}>{answer}</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div className="container mx-auto">
//       <h1>React Quiz</h1>
//       {renderCurrentQuestion()}
//     </div>
//   );








// export const AskQ = () => {
//   return (
//     <div>

//         <progress />
//         <h2> Question which is going to be asked is going to be put here how about that?</h2>
//         <div>
//             <Button variant="outline">There are a lot of op</Button>
//             <Button variant="outline">Button</Button>
//             <Button variant="outline">Button</Button>
//             <Button variant="outline">Button</Button>
//         </div>
//     </div>
//   )
// }




