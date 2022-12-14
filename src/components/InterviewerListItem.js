import React from 'react';
import './InterviewerListItem.scss';
import classNames from "classnames";

export default function InterviewerListItem({selected, name, setInterviewer, avatar}) {
  const interviewerName = (
    selected ? name : ""
  );

  const interviewerClass = classNames(
    'interviewers__item',
    {
      'interviewers__item--selected': selected
    }
  );

  return (
    <li className={interviewerClass}  onClick={setInterviewer}>
    <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
  {interviewerName}
  </li>
  );
};