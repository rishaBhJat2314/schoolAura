import React from 'react'
import SmartEducation from '../components/SmartEducation'
import AchieveSection from '../components/AchieveSection'
import BestEducation from '../components/BestEducation'
import BenefitSection from '../components/BenefitSection'
import MobileAppSection from '../components/MobileSection'
import OnlineEducation from '../components/OnlineEducation'
import SpreadSection from '../components/SpreadingSection'
import VideoSection from '../components/VideoSection'
import ParentsReview from '../components/ParentReview'

const Home = () => {
  return (
    <div>
      <SmartEducation />
      <AchieveSection />
      <BestEducation />
      <BenefitSection />
      <MobileAppSection />
      <OnlineEducation />
      <SpreadSection />
      <VideoSection />
      <ParentsReview />
    </div>
  )
}

export default Home


/* column........

<div className=" grid grid-cols-4 gap-x-4 h-16">
              {activeTab === "School" &&
                schoolClasses.map((item, index) => (
                  <div
                    key={index}
                    className=" text-white flex px-4 mt-5 rounded-lg border-[1px] border-slate-200"
                    data-aos="zoom-in"
                    // data-aos-delay={index * 50}
                  >
                    <img
                      src={dummyImage}
                      alt="School"
                      className="lg:w-14 lg:h-14 sm:h-6 sm:w-7 object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-orange-500 lg:text-xl sm:text-md font-bold">
                        {item.name}
                      </div>
                      <div className=" text-zinc-600 lg:text-xl sm:text-md">
                        +{item.count}
                      </div>
                    </div>
                  </div>
                ))}

              {activeTab === "Competitive" &&
                competitiveExams.map((exam, index) => (
                  <div
                    key={index}
                    className=" text-white flex px-4 mt-5 rounded-lg border-[1px] border-slate-200"
                    data-aos="zoom-in"
                    // data-aos-delay={index * 50}
                  >
                    <img
                      src={dummyImage}
                      alt="School"
                      className="lg:w-14 lg:h-14 sm:h-6 sm:w-7 object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-orange-500 lg:text-lg sm:text-md font-bold">
                        {exam.name}
                      </div>
                      <div className=" text-zinc-600 lg:text-lg sm:text-md">
                        +{exam.count}
                      </div>
                    </div>
                  </div>
                ))}

              {activeTab === "Entrance" &&
                entranceExams.map((exam, index) => (
                  <div
                    key={index}
                    className=" text-white flex px-4 mt-5 rounded-lg border-[1px] border-slate-200"
                    data-aos="zoom-in"
                    // data-aos-delay={index * 50}
                  >
                    <img
                      src={dummyImage}
                      alt="School"
                      className="lg:w-14 lg:h-14 sm:h-6 sm:w-7 object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-orange-500 lg:text-xl sm:text-md font-bold">
                        {exam.name}
                      </div>
                      <div className=" text-zinc-600 lg:text-xl sm:text-md">
                        +{exam.count}
                      </div>
                    </div>
                  </div>
                ))}

              {activeTab === "Tutors" && (
                <div
                  className="text-gray-500 text-lg font-semibold text-center py-10"
                  data-aos="fade-up"
                >
                  Coming Soon
                </div>
              )}
            </div>

*/
