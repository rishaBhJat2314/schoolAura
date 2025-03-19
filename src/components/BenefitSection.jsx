import React from 'react'
import HighlightText from './Common/HighlightText'
import BenefitCard from './BenefitCard'

const BenefitSection = () => {
  return (
    <div className="px-20 flex flex-col items-center">
      <HighlightText first={"BENEITS OF SCHOOLAURA"} second={""} />
      <HighlightText first={""} second={"FOR STUDENTS"} />
      <BenefitCard />
    </div>
  );
}

export default BenefitSection
