import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="August 2021 - present"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">Apius Technologies S.A</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Senior Software Engineer</h6>
                <p>Java | React.JS |  Spring Boot | Redux | Axios | Oracle | GraphQl | AWS | Docker</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2019 - August 2021"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">Trinetix</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Senior Software Engineer</h6>
                <p>React | React Native | Java | Spring Boot | MongoDB | RESTful APIS | AWS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2016 - June 2019"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">Vega IT</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Web Developer</h6>
                <p>React | TypeScript | Java | Spring Boot | React Native | PostgreSQL | Git | Android | IOS </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2013 - June 2016"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">DYNEVO</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Software Engineer</h6>
                <p>React | JavaScript | Java | Spring Boot | MySQl | Responsive Web Design | Redux | Router | IOS </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2005 - 2009"
                dateClassName="mx-lg-2"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} className="timeline-grad-icon" />}
            >
                <h3 className="vertical-timeline-element-title mb-4">Bachelor of Computer Science</h3>
            </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

export default Timeline;
