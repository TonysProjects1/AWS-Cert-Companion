import { PracticeQuestion } from './practiceQuestionsData';

export const practiceQuestionsDataANS: PracticeQuestion[] = [
  {
    id: "ans-q1",
    domainId: "ans-domain-1",
    text: "A company wants to connect its on-premises data center to AWS using a dedicated network connection. Which service should they use?",
    options: [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "AWS Transit Gateway",
      "AWS PrivateLink"
    ],
    correctAnswer: 1,
    explanation: "AWS Direct Connect provides a dedicated, private connection between your on-premises data center and AWS, bypassing the public internet."
  },
  {
    id: "ans-q2",
    domainId: "ans-domain-2",
    text: "You are designing a hybrid DNS resolution strategy. Instances in your VPC need to resolve names hosted on your on-premises DNS servers. What should you use?",
    options: [
      "Route 53 Resolver Inbound Endpoint",
      "Route 53 Public Hosted Zone",
      "Route 53 Resolver Outbound Endpoint",
      "Amazon CloudFront"
    ],
    correctAnswer: 2,
    explanation: "Route 53 Resolver Outbound Endpoints allow DNS queries to be forwarded from VPCs to on-premises DNS resolvers."
  },
  {
    id: "ans-q3",
    domainId: "ans-domain-3",
    text: "You want to inspect all inbound and outbound traffic on an EC2 instance's elastic network interface (ENI) for deep packet inspection. Which feature should you enable?",
    options: [
      "VPC Flow Logs",
      "VPC Traffic Mirroring",
      "AWS WAF",
      "AWS CloudTrail"
    ],
    correctAnswer: 1,
    explanation: "VPC Traffic Mirroring allows you to copy network traffic from an ENI and send it to out-of-band security and monitoring appliances for deep packet inspection."
  },
  {
    id: "ans-q4",
    domainId: "ans-domain-4",
    text: "A web application requires protection from common web exploits and vulnerabilities such as SQL injection. Which AWS service should be attached to the Application Load Balancer?",
    options: [
      "AWS Shield Advanced",
      "AWS WAF",
      "AWS Network Firewall",
      "Security Groups"
    ],
    correctAnswer: 1,
    explanation: "AWS WAF is a web application firewall that protects web applications from common web exploits, such as SQL injection and cross-site scripting."
  },
  {
    id: "ans-q5",
    domainId: "ans-domain-1",
    text: "Which service leverages AWS's global network and uses anycast IP addresses to improve the performance of your users' traffic by up to 60%?",
    options: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Amazon API Gateway",
      "AWS Transit Gateway"
    ],
    correctAnswer: 1,
    explanation: "AWS Global Accelerator provides two static anycast IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, routing traffic over the AWS global network."
  }
];
