import React from "react";

import { FaTasks, FaFile, FaInfo, FaEye, FaLink,FaShare } from "react-icons/fa";

const cardData = [
  {
    icon: <FaTasks className="mx-auto text-gray-700 w-12 h-12" />,
    title: "Task Activities",
    description:
      "Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can be submitted online which helps students to finish their tasks online.",
  },
  {
    icon: <FaFile className="mx-auto text-gray-700 w-12 h-12" />,
    title: "Exam Results",
    description:
      "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.",
  },
  {
    icon: <FaInfo className="mx-auto text-gray-700 w-12 h-12" />,
    title: "Notice Updates",
    description:
      "The necessary announcements and updates will reach to the students and parents quickly.",
  },

  {
    icon: <FaEye className="mx-auto text-gray-700 w-12 h-12" />,
    title: "Monitoring",
    description:
      "All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc.",
  },
  {
    icon: <FaLink className="mx-auto text-gray-700 w-12 h-12" />,
    title: "Connectivity",
    description:
      "When all the information is available online, and is shared regularly with parents and students transparency will be maintained.",
  },
  {
    icon: <FaShare className="mx-auto text-gray-700 w-12 h-12" />,
    title: "Planning & Sharing",
    description:
      "It becomes important nowadays for students to share their thoughts and ideas, SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.",
  },
];

const BenefitCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="p-6 bg-white shadow-[0_0_5px_#ddd] rounded-2xl text-center"
        >
          {card.icon}
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            {card.title}
          </h2>
          <p className="mt-2 text-gray-600 text-lg">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitCard;
