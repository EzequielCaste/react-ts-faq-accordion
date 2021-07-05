import React, { useState } from 'react';

interface Props {
  title: string;
  info: string;
}

export const AccordionQuestion: React.FC = ({ question }) => {
  const { title, info } = question;
  const [hide, setHide] = useState(true);
  const showInfo = () => {
    setHide(prev => !prev);
  };
  return (
    <div className="question-card">
      <header>
        <h4 className="question">{title}</h4>
        <button onClick={showInfo}>{hide ? '+' : '-'}</button>
      </header>
      <p className={`info ${hide ? 'hide' : 'show'}`}>{info}</p>
    </div>
  );
};
