import React from 'react';
import moment from 'moment';

const TimelineItem = ({ item }) => {
  // Function to format date using Moment.js
  const formatDate = (date) => {
    return moment(date).format("DD MMM YYYY");
  };

  return (
    <li>
      {/* Individual timeline item */}
      <div className="relative pb-8">
        {/* Timeline connector line */}
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              {/* Timeline dot */}
              <div className="h-8 w-8 bg-purple rounded-full ring-opacity-80 flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="darkGray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 py-0">
            {/* Timeline item content */}
            <div className="text-md">
              <div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-0">
                  {/* Job title */}
                  <a
                    href="#"
                    className="lg:text-2xl text-xl font-semibold mr-2"
                  >
                    {item.jobTitle}
                  </a>
                  {/* Date range */}
                  <h2 className="text-xs font-semibold mr-2">
                    <span>
                      {formatDate(item.startDate)}
                    </span>{" "}
                    -{" "}
                    <span>
                      {formatDate(item.endDate)}
                    </span>
                  </h2>
                </div>
                {/* Company name and location */}
                <p className="text-base font-bold mr-2 lg:mt-0 mt-3">
                  <span className="text-gray-400">
                    {item.company_name}
                  </span>{" "}
                  <span>({item.jobLocation})</span>
                </p>
              </div>
            </div>
            {/* Summary and bullet points */}
            <div className="mt-2">
              <p>{item.summary}</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-400">
                {item.bulletPoints}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
