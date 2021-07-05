import React from 'react';
import { render } from 'react-dom';
import './style.css';

import questions from './questions';

import { AccordionQuestion } from './AccordionQuestion';
import { Footer } from './Footer';

const App = () => {
  return (
    <main>
      <div className="Accordion-container">
        <h4 className="title">Questions And Answers About Login</h4>
        <div className="question-container">
          {questions.map(question => (
            <AccordionQuestion question={question} key={question.id} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

render(<App />, document.getElementById('root'));
