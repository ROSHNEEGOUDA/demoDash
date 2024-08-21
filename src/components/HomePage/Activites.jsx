import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ActivitiesPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });


  const DesktopView = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-2xl font-bold">Activities</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">
              Explore
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">
              Policy 
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">
              Innovation 
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">
              Inclusion & Outreach
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="h-64 bg-gray-200 mb-4 rounded-lg"></div>
          <div className="flex flex-wrap -mx-2">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5"
                >
                  <Link to="/homepage/activites/activity">
                    <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
                    <h2 className="text-lg font-bold">Title</h2>
                    <p className="text-gray-600">Category · Points</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  const MobileView = () => {
    return (
      <div className=" bg-gray-100 min-h-screen pb-20 md:pb-4">
        <h1 className="text-2xl font-bold">Activities</h1>
        <div className="flex flex-wrap gap-2 mt-4 mb-14">
          <button className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium">
            Explore
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium">
            Policy Advocacy 
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium">
           Research
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium">
            Inclusion & Outreach
          </button>
        </div>

        <div className="h-64 bg-gray-200 mb-4 rounded-lg"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(3)
            .fill(0)
            .map((_, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {Array(2)
                  .fill(0)
                  .map((_, colIndex) => (
                    <div className="p-2 bg-white rounded-lg shadow-lg">
                      <Link to="/homepage/activites/activity" key={`${rowIndex}-${colIndex}`} className="mb-5">
                        <div className="bg-gray-200 h-32 rounded-lg mb-2 mt-2"></div>
                        <h2 className="text-md font-bold">Title</h2>
                        <p className="text-gray-600 text-sm">Category · Points</p>
                      </Link>
                    </div>
                  ))}
              </React.Fragment>
            ))}
        </div>

      </div>
    );
  };

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  )
};

export default ActivitiesPage;
