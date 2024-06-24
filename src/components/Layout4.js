import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  { name: 'Start', completed: true },
  { name: 'Continue', completed: true },
  { name: 'Analysis', completed: true },
  { name: 'Additional Documents', completed: false },
  { name: 'Relief', completed: false },
  { name: 'Suggestions', completed: false },
  { name: 'First Draft', completed: false },
  { name: 'Q&A', completed: false },
  { name: 'Final Draft', completed: false },
];

const Layout4 = () => {
  return (
    <div className="relative p-4 ">
      <ul className="relative space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="relative flex items-center space-x-2">
            {step.completed ? (
              <FaCheckCircle className="text-blue-600 ml-2 z-10" />
            ) : (
              <FaCheckCircle className="text-gray-300 ml-2 z-10" />
            )}
            <span className={step.completed ? 'text-blue-600' : 'text-gray-400'}>
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <span
                className={`absolute left-2 top-6 h-full w-px ${steps[index + 1].completed ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></span>
            )}
          </li>
        ))}
      </ul>

      <div className="absolute ml-5 mt-20 ">
        <button className="absolute px-20 bg-gradient-to-r from-blue-400 to-blue-800  text-white font-bold py-2  rounded-full ">Continue</button>
      </div>
    </div>
  );
};

export default Layout4;
