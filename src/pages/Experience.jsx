import React from "react";
import "../styles/Experience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import HouseIcon from "@mui/icons-material/House";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#31e1e7">
        {/* first experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012"
          iconStyle={{ background: "#31e1e7", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="paragraph">
            <h3 className="vertical-timeline-element-title">
              Walter Murray Collegiate{" "}
            </h3>
            <p> French Immersion (High Honours). </p>
            <p>
              {" "}
              WMCI Invitational Math Team Challenge 1st place award (3 members
              to a team, province-wide).{" "}
            </p>
            <p> First place (Singles) in City Badminton. </p>
            <p> First place (Provincial) division 1 soccer. </p>
            <p> Third place (Provincial) Triathalon. </p>
            <p> Seventh place (Provincial) Cross-Counrty. </p>
          </div>
        </VerticalTimelineElement>

        {/* second experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#31e1e7", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Saskatchewan SK, SK{" "}
          </h3>
          <p> Chemistry (B.Sc. Four-year)</p>
          <p> Particular interest in environmental and analytical chemistry</p>
        </VerticalTimelineElement>

        {/* 2.5 experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2020"
          iconStyle={{ background: "#d4af37", color: "#fff" }}
          icon={<HouseIcon />}
        >
          <h3 className="vertical-timeline-element-title">Work & Life </h3>
          <p> Lifeguard</p>
          <p> Badminton instructor</p>
          <p> First Marathon (3h 30min) </p>
          <p> Nursing (3-years) </p>
          <p>
            {" "}
            Ornithology (Banding of Great Horned Owls, Bald eagles, Raptors){" "}
          </p>
        </VerticalTimelineElement>

        {/* third experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#6c25be", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kelowna Bc, Ca </h3>
          <p> Quality Assurance</p>
          <p>
            Maintainance of facility (Chemical instruments maintenance,
            lighting, heating, humidity). Documentation of SOP to Provincial and
            Federal standards. Involved in all organizational aspects of plant
            growth and harvesting.{" "}
          </p>
        </VerticalTimelineElement>

        {/* fourth experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 (expected)"
          iconStyle={{ background: "#31e1e7", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Saskatchewan SK, SK{" "}
          </h3>
          <p> Computer Science (B.Sc. Four-year)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
