import React from "react";

import PageSecondHeader from "./PageSecondHeader";
const MainLayout2 = () => {
  return (

    <div className="w-full">
        <div className="w-full">

         <PageSecondHeader />
        </div>
    <div className="w-full">
    
      <div className="w-full">
        <h1 className="text-xl font-bold text-gray-800">Questions</h1>
        <div className="ml-4">
          <div className="flex space-x-4 mt-2 ">
            <div className="border text-white px-4 p-2 bg-blue-600 rounded-full">
              <p>By Petitioner</p>
            </div>
            <div className="border text-gray-500 font-semibold px-4 p-2  rounded-full">
              <p>By Respondent</p>
            </div>
          </div>

          <div className="mt-4 ml-2">
            <div className="mt-2">
            <p className="text-m font-bold text-gray-800">1. Was the dog on a leash or under the controlof the owner at the time of the incident ?</p>
            <p className="text-sm text-gray-600 font-bold">Reason -</p>
            <p>This question aims to establish wheather the owner was negligent in controlling the dog,which is proving <br /> liability.</p>
            <div className="mt-4 border"/>
            </div>

            <div className="mt-2">
            <p className="text-m font-bold text-gray-800">2. Did the dog show any signs of aggression or previous violent behavior before the incident ? </p>
            <p className="text-sm text-gray-600 font-bold">Reason -</p>
            <p>This question is important to demonsate the owner's knowledge of the dog's aggressive tendencies, which can <br /> support the claim of negligence.</p>
            <div className="mt-4 border"/>
            </div>

            
            <div className="mt-2">
            <p className="text-m font-bold text-gray-800">3. were there any warning signs or notices indicatates the presence of a dangerous dog on the owner's property ? </p>
            <p className="text-sm text-gray-600 font-bold">Reason -</p>
            <p>This question seeks to determine if the owner took reasonable precautions to warn others about the potential danger <br /> posed by the dog.</p>
            <div className="mt-4 border"/>
            </div>

            
            <div className="mt-2">
            <p className="text-m font-bold text-gray-800">4. Has the dog involved in similar incidents of biting or aggression in the past ? </p>
            <p className="text-sm text-gray-600 font-bold">Reason -</p>
            <p>This question is important to demonsate the owner's knowledge of the dog's aggressive tendencies, which can <br /> support the claim of negligence.</p>
            <div className="mt-4 border"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default MainLayout2;
