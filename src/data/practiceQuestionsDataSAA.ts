import { PracticeQuestion } from './practiceQuestionsData';

export const practiceQuestionsDataSAA: PracticeQuestion[] = [
  {
    id: "saa-q1",
    domainId: "saa-domain-1",
    domainName: "Domain 1: Design Secure Architectures",
    question: "A company seeks to enforce a policy that prevents any IAM user or role from terminating an Amazon EC2 instance that has a specific tag, regardless of their IAM permissions. What is the most appropriate way to enforce this globally across multiple accounts?",
    options: [
      { id: "a", text: "Create an IAM permissions boundary and apply it to all users.", isCorrect: false, explanation: "Incorrect. Permission boundaries control the maximum permissions a specific IAM entity can have, but require applying to every entity individually." },
      { id: "b", text: "Create an AWS Organizations Service Control Policy (SCP) that denies the ec2:TerminateInstances action based on the tag.", isCorrect: true, explanation: "Correct. SCPs are the most appropriate way to centrally control maximum available permissions for all accounts, overriding any local IAM policies." },
      { id: "c", text: "Create an inline IAM policy on an administrative IAM group.", isCorrect: false, explanation: "Incorrect. Group policies don't scale automatically across multiple AWS accounts in an organization and can be bypassed by root users or outside roles." },
      { id: "d", text: "Use Amazon Inspector to block the API call.", isCorrect: false, explanation: "Incorrect. Amazon Inspector is for automated vulnerability management, not API call blocking." }
    ]
  },
  {
    id: "saa-q2",
    domainId: "saa-domain-2",
    domainName: "Domain 2: Design Resilient Architectures",
    question: "A web application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The architecture must handle sudden, unpredictable spikes in traffic without manual intervention. Which service will best accomplish this?",
    options: [
      { id: "a", text: "Amazon Route 53", isCorrect: false, explanation: "Incorrect. Route 53 routes DNS traffic but does not scale the compute instances behind the ALB." },
      { id: "b", text: "AWS Auto Scaling using target tracking policies", isCorrect: true, explanation: "Correct. Auto Scaling creates or terminates instances based on CloudWatch metrics like CPU utilization, ensuring the system responds automatically to traffic spikes." },
      { id: "c", text: "Amazon SQS", isCorrect: false, explanation: "Incorrect. SQS buffers traffic for asynchronous jobs, but doesn't handle the synchronous web requests coming through an ALB." },
      { id: "d", text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect. CloudTrail logs API calls for governance and compliance, not application scaling." }
    ]
  },
  {
    id: "saa-q3",
    domainId: "saa-domain-3",
    domainName: "Domain 3: Design High-Performing Architectures",
    question: "A video streaming service needs to store petabytes of video files. Users globally will access these files infrequently. Which combination of services provides a high-performing architecture for this workload?",
    options: [
      { id: "a", text: "Amazon EBS and Amazon CloudFront", isCorrect: false, explanation: "Incorrect. Amazon EBS is block storage meant for attachment to a single EC2 instance, not for petabytes of globally accessed video files." },
      { id: "b", text: "Amazon S3 and Amazon CloudFront", isCorrect: true, explanation: "Correct. S3 provides highly durable, scalable object storage for petabytes of data, and CloudFront is a globally distributed CDN that caches content closer to end-users for high performance." },
      { id: "c", text: "Amazon EFS and AWS Global Accelerator", isCorrect: false, explanation: "Incorrect. EFS is a file system for Linux EC2 instances. While Global Accelerator helps with routing, S3 + CloudFront is the standard pattern for static asset delivery." },
      { id: "d", text: "Amazon RDS and Amazon ElastiCache", isCorrect: false, explanation: "Incorrect. RDS and ElastiCache are database and caching components, not suitable for storing massive video files." }
    ]
  },
  {
    id: "saa-q4",
    domainId: "saa-domain-4",
    domainName: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company's database runs on an Amazon EC2 instance. The workload is steady and continuous 24/7. Which purchasing option offers the most significant cost savings?",
    options: [
      { id: "a", text: "On-Demand Instances", isCorrect: false, explanation: "Incorrect. On-Demand instances are billed by the second with no long-term commitment, making them expensive for steady, 24/7 workloads." },
      { id: "b", text: "Spot Instances", isCorrect: false, explanation: "Incorrect. While cheap, Spot Instances can be terminated by AWS with a 2-minute warning. They are highly inappropriate for a critical, continuous database workload." },
      { id: "c", text: "Reserved Instances", isCorrect: true, explanation: "Correct. Reserved Instances provide up to 72% discount compared to On-Demand pricing in exchange for a 1- or 3-year commitment, perfect for steady-state workloads." },
      { id: "d", text: "Dedicated Hosts", isCorrect: false, explanation: "Incorrect. Dedicated Hosts provide physical servers dedicated to your use (often for compliance or licensing reasons) and are generally the most expensive option." }
    ]
  }
];
