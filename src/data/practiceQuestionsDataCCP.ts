import { PracticeQuestion } from './practiceQuestionsData';

export const practiceQuestionsDataCCP: PracticeQuestion[] = [
  {
    id: "ccp-q1",
    domainId: "ccp-domain-1",
    domainName: "Cloud Concepts",
    question: "Which AWS Cloud benefit refers to the ability to acquire resources as you need them and release resources when you no longer need them?",
    options: [
      { id: 'ccp-q1-o1', text: "Reliability", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q1-o2', text: "High Availability", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q1-o3', text: "Elasticity", isCorrect: true, explanation: "Elasticity allows you to scale compute capacity up and down easily as demand changes, ensuring you only pay for what you use." },
      { id: 'ccp-q1-o4', text: "Agility", isCorrect: false, explanation: "Incorrect" }
    ]
  },
  {
    id: "ccp-q2",
    domainId: "ccp-domain-2",
    domainName: "Security and Compliance",
    question: "According to the AWS Shared Responsibility Model, which of the following is an AWS responsibility?",
    options: [
      { id: 'ccp-q2-o1', text: "Configuring security groups on Amazon EC2", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q2-o2', text: "Physical security of AWS data centers", isCorrect: true, explanation: "AWS is responsible for the 'Security OF the Cloud', which includes protecting the physical infrastructure that runs the AWS Cloud services." },
      { id: 'ccp-q2-o3', text: "Encrypting customer data at rest", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q2-o4', text: "Managing IAM user passwords", isCorrect: false, explanation: "Incorrect" }
    ]
  },
  {
    id: "ccp-q3",
    domainId: "ccp-domain-3",
    domainName: "Cloud Technology and Services",
    question: "Which AWS service provides a serverless compute option where you pay only for the compute time you consume?",
    options: [
      { id: 'ccp-q3-o1', text: "Amazon EC2", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q3-o2', text: "AWS Lambda", isCorrect: true, explanation: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers." },
      { id: 'ccp-q3-o3', text: "Amazon ECS", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q3-o4', text: "Amazon LightSail", isCorrect: false, explanation: "Incorrect" }
    ]
  },
  {
    id: "ccp-q4",
    domainId: "ccp-domain-4",
    domainName: "Billing, Pricing, and Support",
    question: "Which AWS Support plan provides access to a designated Technical Account Manager (TAM)?",
    options: [
      { id: 'ccp-q4-o1', text: "Basic Support", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q4-o2', text: "Developer Support", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q4-o3', text: "Business Support", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q4-o4', text: "Enterprise Support", isCorrect: true, explanation: "Enterprise Support includes access to a designated Technical Account Manager (TAM) to coordinate access to programs and provide proactive guidance." }
    ]
  },
  {
    id: "ccp-q5",
    domainId: "ccp-domain-1",
    domainName: "Cloud Concepts",
    question: "What does the 'Operational Excellence' pillar of the AWS Well-Architected Framework focus on?",
    options: [
      { id: 'ccp-q5-o1', text: "Protecting information and systems", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q5-o2', text: "Recovering from failures automatically", isCorrect: false, explanation: "Incorrect" },
      { id: 'ccp-q5-o3', text: "Running and monitoring systems to deliver business value and continually improving processes", isCorrect: true, explanation: "The Operational Excellence pillar focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures." },
      { id: 'ccp-q5-o4', text: "Selecting the most cost-effective resources", isCorrect: false, explanation: "Incorrect" }
    ]
  }
];
