import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import timelineElements from "./config/timelineElement";

const Experience = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div
      name="experience"
      className="w-full h-full pt-[80px] bg-slate-50 text-slate-600"
    >
      {/* // */}
      <div className=" flex flex-col items-center py-[80px] px-[10px] md:px-[80px]  ">
        <div className="flex  pl-16 w-full">
          <p className="text-4xl font-bold inline w-[220px] border-b-4 border-gray-500 ">
            Experiences
          </p>
        </div>

        <VerticalTimeline className="">
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            // let showButton =
            //   element.buttonText !== undefined &&
            //   element.buttonText !== null &&
            //   element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {/* {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )} */}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
