export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
}

export const flashcardsDataSAA: Flashcard[] = [
  { id: "saa-fc1", front: "What is an AWS Auto Scaling group?", back: "A logical collection of EC2 instances that share similar characteristics and are treated as a logical grouping for the purposes of instance scaling and management.", category: "Compute" },
  { id: "saa-fc2", front: "What is the difference between a Security Group and a Network ACL?", back: "Security Groups are stateful firewalls at the instance level. Network ACLs are stateless firewalls at the subnet level.", category: "Networking" },
  { id: "saa-fc3", front: "Which S3 storage class provides the lowest cost for long-term archiving of data where retrieval time of hours is acceptable?", back: "Amazon S3 Glacier Deep Archive.", category: "Storage" },
  { id: "saa-fc4", front: "What AWS service can decouple components of a microservices architecture using message queues?", back: "Amazon SQS (Simple Queue Service).", category: "Application Integration" },
  { id: "saa-fc5", front: "What is an AWS Target Tracking Scaling Policy?", back: "A policy that increases or decreases capacity to keep a specified metric at a target value (e.g., maintaining average CPU utilization at 50%).", category: "Compute" },
  { id: "saa-fc6", front: "How can you centrally restrict maximum permissions across multiple AWS accounts?", back: "Using AWS Organizations Service Control Policies (SCPs).", category: "Security" },
  { id: "saa-fc7", front: "What AWS service caches content at edge locations to improve performance for global users?", back: "Amazon CloudFront.", category: "Networking" },
  { id: "saa-fc8", front: "Which database is fully managed, serverless, NoSQL, and provides single-digit millisecond latency?", back: "Amazon DynamoDB.", category: "Database" }
];
