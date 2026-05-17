import { Domain } from './courseData';

export const courseDataCCP: Domain[] = [
  {
    id: "ccp-domain-1",
    title: "1. Cloud Concepts",
    progress: 0,
    topics: [
      {
        id: "ccp-ch1-t1",
        title: "Benefits of the AWS Cloud",
        subtopics: [
          {
            title: "Value Proposition",
            content: "AWS provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. Key benefits include elasticity, agility, global reach, and high availability."
          }
        ],
        quiz: []
      },
      {
        id: "ccp-ch1-t2",
        title: "Cloud Economics & Migration",
        subtopics: [
          {
             title: "Economics",
             content: "Moving to the cloud shifts your costs from CapEx (fixed) to OpEx (variable). Right-sizing ensures you only pay for what you need."
          }
        ],
        quiz: []
      }
    ]
  },
  {
    id: "ccp-domain-2",
    title: "2. Security and Compliance",
    progress: 0,
    topics: [
      {
        id: "ccp-ch2-t1",
        title: "Shared Responsibility Model",
        subtopics: [
          {
             title: "Overview",
             content: "AWS is responsible for the security OF the cloud (physical infrastructure, compute, storage, database, and networking hardware). The customer is responsible for security IN the cloud (customer data, IAM permissions, OS patching, firewall configuration)."
          }
        ],
        quiz: []
      }
    ]
  },
  {
    id: "ccp-domain-3",
    title: "3. Cloud Technology and Services",
    progress: 0,
    topics: [
      {
        id: "ccp-ch3-t1",
        title: "Global Infrastructure & Core Services",
        subtopics: [
          {
            title: "Infrastructure",
            content: "The AWS Global Infrastructure consists of Regions (geographic locations), Availability Zones (isolated clusters of data centers within a region for high availability), and Edge Locations (for CDN caching via CloudFront)."
          }
        ],
        quiz: []
      }
    ]
  },
  {
    id: "ccp-domain-4",
    title: "4. Billing, Pricing, and Support",
    progress: 0,
    topics: [
      {
        id: "ccp-ch4-t1",
        title: "Pricing Models & Support",
        subtopics: [
          {
            title: "Models",
            content: "AWS features multiple pricing models such as On-Demand (pay as you go), Reserved Instances (commit for 1 or 3 years for discounts), and Spot Instances (bid on unused capacity for up to 90% savings)."
          }
        ],
        quiz: []
      }
    ]
  }
];
