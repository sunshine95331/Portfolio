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
                date="January 2019 - May 2023"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">EMURGO</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Full Stack Blockchain Engineer</h6>
                <p>Angular | React.JS |  Next.js | Web3.js | Ethereum | TypeScript | GraphQl | Smart Contract | Zustand</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2018 - July 2019"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">Rikklesoft</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Full Stack Blockchain Engineer</h6>
                <p>Angular | React.JS | Express.JS | Web3.js | PostgreSQL | Solana | Blockchain</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="April 2015 - May 2018"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">Verticurl</h3>
                <h6 className="vertical-timeline-element-subtitle mt-1">Full Stack Engineer</h6>
                <p>Angular | React.JS | Express.JS | Web3.js | TypeScript | NodeJs | Vue.js | Maria DB| PostgreSQL </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013 - 2015"
                dateClassName="mx-lg-2"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} className="timeline-grad-icon" />}
            >
                <h3 className="vertical-timeline-element-title mb-4">Master of Computer Applications</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2011 - 2013"
                dateClassName="mx-lg-2"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} className="timeline-grad-icon" />}
            >
                <h3 className="vertical-timeline-element-title mb-4">Bachelor of Computer Applications</h3>
            </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

export default Timeline;
