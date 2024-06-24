import React from "react";
import { FaCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const sections = [
  {
    title: "Pre litigation",
    steps: [
      {
        name: "Legal Notice",
        description:
          "Notifies the opposing party of the dispute and demands resolution.",
        completed: true,
      },
      {
        name: "Reply to Legal Notice",
        description:
          "A response to a legal notice received from the opposing party.",
        completed: true,
      },
    ],
  },
  {
    title: "Litigation",
    steps: [
      {
        name: "Plaint/Complaint",
        description: "Initiates the lawsuit, detailing the plaintiff's claims.",
        completed: true,
      },
      {
        name: "Vakalatnama",
        description: "Authorizes a lawyer to represent the client in court.",
        completed: true,
      },
      {
        name: "Written Statement/Answer",
        description: "The defendant's formal response to the plaint.",
        completed: true,
      },
      {
        name: "Reply to Written Statement",
        description:
          "Addresses points raised in the defendant's written statement.",
        completed: true,
      },
    ],
  },
  {
    title: "Interlocutory Applications",
    steps: [
      {
        name: "Application for Temporary Injunction",
        description:
          "Seeks immediate court intervention to preserve status quo.",
        completed: false,
      },
      {
        name: "Counter-Affidavit to Opposition's Application",
        description:
          "Responds to interlocutory applications from the opposing party.",
        completed: false,
      },
    ],
  },
];

const MainLayout3 = () => {
  return (
    <div className=" p-2 w-full">
      <h2 className="text-xl font-bold text-gray-800">Case flow</h2>
      <p className="text-blue-600 mt-1 mb-4">
        Select the document for drafting
      </p>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <div className="flex items-center mb-2">
            <FaCircle className="text-blue-600" />
            <h3 className="ml-2 text-lg font-semibold text-gray-700">
              {section.title}
            </h3>
          </div>

          <div className="ml-7 relative">
            {section.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="flex items-start mb-4 relative">
                <div className="ml-2 p-2 rounded-lg border w-full">
                  <div className="flex  items-center ">
                    <FiFileText className="text-gray-600 mr-2" />
                    <p className="text-base font-medium">{step.name}</p>
                  </div>

                  {stepIndex < section.steps.length - 1 && (
              <span
                className={`absolute top-0  h-full  ${section.steps[stepIndex +1].completed ? 'bg-blue-600' : 'bg-blue-600'}`}
                style={{ width: "1px", height: "250%", left: "-3%" }}
              ></span>
            )}
                
                  <p className="text-sm ml-6 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainLayout3;
