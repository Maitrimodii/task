import React from 'react';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TimelineItem from './TimelineItem'; 

const Timeline = ({ data }) => {
  // Function to format date using Moment.js
  const formatDate = (date) => {
    return moment(date).format("DD MMM YYYY");
  };

  return (
    <>
      {/* Check if data exists before rendering */}
      {data && data.timeline && (
        <div className="px-8 justify-center items-center h-auto w-full mt-10 mb-0 lg:px-16">
          <div className="mb-8 flex justify-start items-center w-full lg:h-1/10 lg:w-full lg:flex lg:justify-start lg:items-center">
            <h1 className="text-2xl font-bold lg:text-4xl text-purple lg:px-4">My Story</h1>
          </div>
          {/* React Tabs component for organizing content */}
          <Tabs>
            <TabList className="text-center font-semibold text-lg mt-10 mb-10">
              <Tab>Education</Tab>
              <Tab>Experience</Tab>
            </TabList>

            {/* Education TabPanel */}
            <TabPanel>
              <div className="">
                <div className="max-w-4xl mx-auto p-8">
                  <ul>
                    {/* Mapping over education timeline items */}
                    {data.timeline
                      .filter((item) => item.forEducation && item.enabled)
                      .map((item, index) => (
                        <TimelineItem key={index} item={item} />
                      ))}
                  </ul>
                </div>
              </div>
            </TabPanel>

            {/* Experience TabPanel */}
            <TabPanel>
              <div className="">
                <div className="max-w-4xl mx-auto p-8">
                  <ul className='-mb-8'>
                    {/* Mapping over experience timeline items */}
                    {data.timeline
                      .filter((item) => !item.forEducation)
                      .map((item, index) => (
                        <TimelineItem key={index} item={item} />
                      ))}
                  </ul>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  )
}

export default Timeline;
