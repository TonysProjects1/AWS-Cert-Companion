import { FlashcardItem } from './flashcardsData';

export const flashcardsDataCCP: FlashcardItem[] = [
  {
    id: "ccp-fc-1",
    front: "AWS Shared Responsibility Model: Who is responsible for patching the Guest OS on an EC2 instance?",
    back: "The Customer. AWS is responsible for patching the host OS, but the customer is responsible for the Guest OS, applications, and security group firewall rules."
  },
  {
    id: "ccp-fc-2",
    front: "What is an Availability Zone (AZ)?",
    back: "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region."
  },
  {
    id: "ccp-fc-3",
    front: "What does Amazon S3 stand for?",
    back: "Amazon Simple Storage Service. It provides object storage."
  },
  {
    id: "ccp-fc-4",
    front: "Which AWS service is used to estimate the cost of an AWS architecture before deploying it?",
    back: "AWS Pricing Calculator."
  },
  {
    id: "ccp-fc-5",
    front: "What is the principle of least privilege?",
    back: "Granting a user only the permissions required to complete a specific task and nothing more."
  }
];
