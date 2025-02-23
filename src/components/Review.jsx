/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  
  {
    content: 'Lead team ⏐ Qualifying in 2021 ⏐ District victory in 2022 ⏐ Qualifiers in 2023 ⏐ Runners up in 2024.',
    name: 'University Sports Club',
    company: ' Team Director of "FC Allied" ⏐ 2021-2024'
  },
  {
    content: 'Achieved 74% in 12th ⏐ I found applied mathematics very interesting and deepen my understanding of it.',
    name: 'Higher Secondary School',
    company: 'Oaj Institue Of Science ⏐ 2019-2021'
  },
  {
    content: 'CGPA 7.50 ⏐ sept 2021-Ongoing ⏐ I shaped my skills in web development & learned new technologies ⏐ I attended 2 TechFests involving geeksforgeeks CEO-Mr.Sandeep Jain ⏐ Participated in 3 Hackathons ⏐ Ranked 11th in Techmanjari 2022.',
    name: 'Bachelors in Computer Science',
    company: 'Gujarat Technological University ⏐ 2021-Ongoing'
  },
  {
    content: 'Achieved 67% & 76%tile in 10th ⏐ 1st place in under^15 swimming ⏐ Badminton runners up in District 2016.',
    name: 'Primary/Seconday School',
    company: 'The KPES English School ⏐ 2008-2019'
  },
  {
    content: 'Lead team ⏐ Qualifying in 2021 ⏐ district victory in 2022 ⏐ Qualifiers in 2023 ⏐ Runners up in 2024.',
    name: 'University Sports Club',
    company: 'Team Director of "FC Allied" ⏐ 2021-2024'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Academics & Achievements
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review