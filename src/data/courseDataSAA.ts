import { Topic, Domain } from './courseData';

export const courseDataSAA: Domain[] = [
  {
    id: "saa-domain-1",
    title: "Domain 1: Design Secure Architectures",
    weight: "30%",
    description: "Design secure access, secure workloads, and data security controls.",
    topics: [
      {
        id: "saa-d1-t1",
        title: "Design Secure Access to AWS Resources",
        subtopics: [
          {
            title: "Access controls and management",
            content: "src/data/courseDataANS.ts**IAM**: Identity and Access Management for users, groups, roles, and policies.\nsrc/data/courseDataANS.ts**AWS IAM Identity Center**: Centralized access management across AWS accounts (formerly AWS SSO).\nsrc/data/courseDataANS.ts**Multi-factor authentication (MFA)**: Adds a layer of protection on top of user name and password."
          },
          {
            title: "Security strategy for multiple accounts",
            content: "src/data/courseDataANS.ts**AWS Organizations**: Centrally manage and govern your environment as you grow and scale your AWS resources.\nsrc/data/courseDataANS.ts**Service Control Policies (SCPs)**: Offer central control over the maximum available permissions for all accounts in your organization.\nsrc/data/courseDataANS.ts**AWS Control Tower**: The easiest way to set up and govern a secure, multi-account AWS environment."
          }
        ],
        quiz: [
          {
            question: "Which AWS service is best suited to centrally manage and enforce security policies across multiple AWS accounts?",
            options: ["AWS IAM", "AWS Organizations (using SCPs)", "AWS Shield", "Amazon GuardDuty"],
            correctAnswer: 1,
            explanation: "AWS Organizations using Service Control Policies (SCPs) allows you to centrally manage and enforce maximum permissions across multiple member accounts in an organization."
          }
        ]
      },
      {
        id: "saa-d1-t2",
        title: "Design Secure Workloads and Applications",
        subtopics: [
          {
            title: "VPC Architectures and Security Components",
            content: "src/data/courseDataANS.ts**Security Groups**: Stateful firewall at the instance level.\nsrc/data/courseDataANS.ts**Network ACLs**: Stateless firewall at the subnet level.\nsrc/data/courseDataANS.ts**Public/Private Subnets**: Public subnets route out via an Internet Gateway, private subnets (often) route out via a NAT Gateway."
          },
          {
            title: "External Threat Protection",
            content: "src/data/courseDataANS.ts**AWS WAF**: Web Application Firewall to protect web applications or APIs against common web exploits (e.g., SQL injection, XSS).\nsrc/data/courseDataANS.ts**AWS Shield**: Managed Distributed Denial of Service (DDoS) protection service.\nsrc/data/courseDataANS.ts**AWS Secrets Manager**: Helps you protect secrets needed to access your applications."
          }
        ],
        quiz: [
          {
            question: "A company wants to protect their web application from common web exploits like SQL injection and cross-site scripting (XSS). Which AWS service should they use?",
            options: ["AWS WAF", "AWS Shield", "Amazon GuardDuty", "AWS Secrets Manager"],
            correctAnswer: 0,
            explanation: "AWS WAF (Web Application Firewall) protects web applications/APIs against common web exploits like SQL injection and XSS."
          }
        ]
      }
    ]
  },
  {
    id: "saa-domain-2",
    title: "Domain 2: Design Resilient Architectures",
    weight: "26%",
    description: "Design scalable/loosely coupled and highly available/fault-tolerant architectures.",
    topics: [
      {
        id: "saa-d2-t1",
        title: "Design Scalable and Loosely Coupled Architectures",
        subtopics: [
          {
            title: "Queuing and Messaging",
            content: "src/data/courseDataANS.ts**Amazon SQS**: Fully managed message queuing for microservices, distributed systems, and serverless applications.\nsrc/data/courseDataANS.ts**Amazon SNS**: Fully managed pub/sub messaging service.\nsrc/data/courseDataANS.ts**Event-driven architectures**: Leveraging Amazon EventBridge or SNS to trigger decoupled actions."
          },
          {
            title: "Serverless and Containers",
            content: "src/data/courseDataANS.ts**AWS Lambda**: Run code without thinking about servers. Pay only for the compute time you consume.\nsrc/data/courseDataANS.ts**Amazon ECS & EKS**: Orchestration services for containerized applications.\nsrc/data/courseDataANS.ts**AWS Fargate**: Serverless compute for containers, removing the need to provision and manage servers."
          }
        ],
        quiz: [
          {
            question: "An application processes images uploaded by users. The processing can take several minutes. To ensure the web tier remains responsive, how should the architecture be designed?",
            options: ["Use a larger EC2 instance for the web tier.", "Store images in S3 and use Amazon SQS to decouple the web tier from the processing workers.", "Use Amazon EFS to share the images directly with the database.", "Run the processing synchronously in an AWS Lambda function triggered by API Gateway."],
            correctAnswer: 1,
            explanation: "Amazon SQS enables loose coupling. The web tier can place a message in the queue and immediately respond to the user, while worker nodes process the queue asynchronously."
          }
        ]
      }
    ]
  },
  {
    id: "saa-domain-3",
    title: "Domain 3: Design High-Performing Architectures",
    weight: "24%",
    description: "Determine high-performing storage, compute, database, network, and data ingestion architectures.",
    topics: [
      {
        id: "saa-d3-t1",
        title: "High-Performing compute and storage",
        subtopics: [
          {
            title: "Storage Options",
            content: "src/data/courseDataANS.ts**Amazon S3**: Object storage, highly scalable and durable.\nsrc/data/courseDataANS.ts**Amazon EBS**: Block storage designed for use with Amazon EC2.\nsrc/data/courseDataANS.ts**Amazon EFS**: Fully managed elastic NFS file system for use with Linux-based workloads."
          },
          {
            title: "Elastic Compute",
            content: "src/data/courseDataANS.ts**Amazon EC2 Auto Scaling**: Automatically adds or removes compute capacity to meet changes in demand.\nsrc/data/courseDataANS.ts**Instance Families**: Compute optimized (C), Memory optimized (R/X), Storage optimized (I/D), General purpose (M/T)."
          }
        ],
        quiz: [
          {
            question: "Which of the following EC2 instances is most appropriate for a high-performance in-memory database?",
            options: ["C5 (Compute Optimized)", "R5 (Memory Optimized)", "D2 (Storage Optimized)", "T3 (Burstable Performance)"],
            correctAnswer: 1,
            explanation: "Memory-optimized instances (like the R family) are designed to deliver fast performance for workloads that process large data sets in memory."
          }
        ]
      },
      {
        id: "saa-d3-t2",
        title: "High-Performing database, network, and ingestion",
        subtopics: [
          {
            title: "High-Performing Databases",
            content: "src/data/courseDataANS.ts**Amazon RDS**: Use read replicas to offload read traffic; Multi-AZ for high availability.\nsrc/data/courseDataANS.ts**Amazon DynamoDB**: Key-value and document database that delivers single-digit millisecond performance at any scale.\nsrc/data/courseDataANS.ts**Amazon Aurora**: High performance, fully managed rational database."
          },
          {
            title: "High-Performing Networks and Data Ingestion",
            content: "src/data/courseDataANS.ts**AWS Global Accelerator**: Overcome internet routing latency; route traffic to optimal endpoints.\nsrc/data/courseDataANS.ts**Amazon CloudFront**: Edge caching for low latency global content delivery.\nsrc/data/courseDataANS.ts**Amazon Kinesis**: High-throughput distributed streaming data ingestion."
          }
        ],
        quiz: [
          {
            question: "An application requires a database capable of providing single-digit millisecond latency at any scale. Which service best fits this requirement?",
            options: ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift"],
            correctAnswer: 2,
            explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale."
          }
        ]
      }
    ]
  },
  {
    id: "saa-domain-4",
    title: "Domain 4: Design Cost-Optimized Architectures",
    weight: "20%",
    description: "Design cost-optimized storage, compute, database, and network architectures.",
    topics: [
      {
        id: "saa-d4-t1",
        title: "Design Cost-Optimized Compute & Storage",
        subtopics: [
          {
            title: "Storage Cost Optimization",
            content: "src/data/courseDataANS.ts**S3 Storage Classes**: Compare Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, and Glacier Deep Archive.\nsrc/data/courseDataANS.ts**S3 Lifecycle Policies**: Automate moving objects between storage classes to reduce costs."
          },
          {
            title: "Compute Cost Optimization",
            content: "src/data/courseDataANS.ts**Purchasing Options**: On-Demand, Reserved Instances, Savings Plans, and Spot Instances (for stateless, fault-tolerant workloads)."
          }
        ],
        quiz: [
          {
            question: "A company runs a batch job that can be interrupted and resumed without consequence. Which EC2 purchasing option provides the most cost-effective solution?",
            options: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
            correctAnswer: 2,
            explanation: "Spot Instances allow you to request spare Amazon EC2 computing capacity for up to 90% off the On-Demand price. They can be interrupted, making them perfect for fault-tolerant batch jobs."
          }
        ]
      },
      {
        id: "saa-d4-t2",
        title: "Design Cost-Optimized Database and Network Architectures",
        subtopics: [
          {
            title: "Database Cost Optimization",
            content: "src/data/courseDataANS.ts**Right-sizing**: Use AWS Cost Explorer or Compute Optimizer to choose the right RDS instance size.\nsrc/data/courseDataANS.ts**Aurora Serverless**: Automatically starts, scales, and shuts down capacity based on demand, saving money for intermittent workloads."
          },
          {
            title: "Network Cost Optimization",
            content: "src/data/courseDataANS.ts**Data Transfer Costs**: Data transfer IN is usually free. Data transfer OUT has costs. Cross-AZ traffic incurs costs.\nsrc/data/courseDataANS.ts**CloudFront**: Can reduce data transfer out (DTO) costs from origins like EC2 or S3 by caching data at edge locations."
          }
        ],
        quiz: [
          {
            question: "Which of the following helps reduce AWS data transfer costs the most?",
            options: ["Accessing EC2 directly over the internet", "Transferring data between availability zones", "Using Amazon CloudFront to cache content at edge locations", "Assigning Elastic IP addresses to all instances"],
            correctAnswer: 2,
            explanation: "Caching content with Amazon CloudFront generally incurs lower data transfer out costs compared to serving directly from regional services like EC2 or S3."
          }
        ]
      }
    ]
  }
];
