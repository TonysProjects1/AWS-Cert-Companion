import { PracticeQuestion } from './practiceQuestionsData';

import { saaQuestionsBatch2 } from './practiceQuestionsDataSAA2';

import { saaQuestionsBatch3 } from './practiceQuestionsDataSAA3';

import { saaQuestionsBatch4 } from './practiceQuestionsDataSAA4';

export const practiceQuestionsDataSAA: PracticeQuestion[] = [
...saaQuestionsBatch4,
...saaQuestionsBatch3,
...saaQuestionsBatch2,
  {
    id: "saa-q1",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
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
    domainName: "Design Resilient Architectures",
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
    domainName: "Design High-Performing Architectures",
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
    domainName: "Design Cost-Optimized Architectures",
    question: "A company's database runs on an Amazon EC2 instance. The workload is steady and continuous 24/7. Which purchasing option offers the most significant cost savings?",
    options: [
      { id: "a", text: "On-Demand Instances", isCorrect: false, explanation: "Incorrect. On-Demand instances are billed by the second with no long-term commitment, making them expensive for steady, 24/7 workloads." },
      { id: "b", text: "Spot Instances", isCorrect: false, explanation: "Incorrect. While cheap, Spot Instances can be terminated by AWS with a 2-minute warning. They are highly inappropriate for a critical, continuous database workload." },
      { id: "c", text: "Reserved Instances", isCorrect: true, explanation: "Correct. Reserved Instances provide up to 72% discount compared to On-Demand pricing in exchange for a 1- or 3-year commitment, perfect for steady-state workloads." },
      { id: "d", text: "Dedicated Hosts", isCorrect: false, explanation: "Incorrect. Dedicated Hosts provide physical servers dedicated to your use (often for compliance or licensing reasons) and are generally the most expensive option." }
    ]
  },
  {
    id: "saa-q5",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company wants to ensure that data stored in an Amazon S3 bucket is encrypted at rest using encryption keys managed by the company. The company also wants to automatically rotate the keys every year. Which encryption option should the Solutions Architect recommend?",
    options: [
      { id: "a", text: "Server-Side Encryption with Amazon S3 managed keys (SSE-S3)", isCorrect: false, explanation: "Incorrect. SSE-S3 uses keys managed by AWS, not by the company." },
      { id: "b", text: "Server-Side Encryption with AWS KMS Customer Managed Keys (SSE-KMS)", isCorrect: true, explanation: "Correct. Customer Managed Keys in AWS KMS allow the company to manage the keys and configure automatic annual key rotation." },
      { id: "c", text: "Server-Side Encryption with Customer-Provided Keys (SSE-C)", isCorrect: false, explanation: "Incorrect. With SSE-C, the customer provides the key for every request, but AWS does not manage or rotate the keys." },
      { id: "d", text: "Client-Side Encryption using the AWS Encryption SDK", isCorrect: false, explanation: "Incorrect. While client-side encryption gives the customer control, AWS KMS natively supports automatic key rotation out-of-the-box, making SSE-KMS the most efficient choice." }
    ]
  },
  {
    id: "saa-q6",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A multi-tier architecture uses an Amazon RDS Multi-AZ deployment. What is the primary benefit of this configuration?",
    options: [
      { id: "a", text: "It scales read capacity across multiple Availability Zones.", isCorrect: false, explanation: "Incorrect. Multi-AZ is for high availability, not scaling read capacity (Read Replicas are for read scaling)." },
      { id: "b", text: "It provides synchronous replication to a standby instance for high availability.", isCorrect: true, explanation: "Correct. RDS Multi-AZ provisions and maintains a synchronous standby replica in a different Availability Zone for automatic failover in case of infrastructure failure." },
      { id: "c", text: "It replicates data asynchronously to a different AWS Region for disaster recovery.", isCorrect: false, explanation: "Incorrect. This describes Cross-Region Read Replicas or Aurora Global Database, not standard Multi-AZ." },
      { id: "d", text: "It caches frequent database queries to improve performance.", isCorrect: false, explanation: "Incorrect. Caching is handled by services like Amazon ElastiCache, not RDS Multi-AZ." }
    ]
  },
  {
    id: "saa-q7",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An application requires a highly available, relational database that can transparently scale storage up to 128 TB and provide millisecond latency. Which AWS service meets these requirements?",
    options: [
      { id: "a", text: "Amazon DynamoDB", isCorrect: false, explanation: "Incorrect. DynamoDB is a NoSQL database, not a relational database." },
      { id: "b", text: "Amazon Redshift", isCorrect: false, explanation: "Incorrect. Redshift is a columnar data warehouse for analytics (OLAP), not typically used for highly available transactional (OLTP) needs requiring transparent 128TB storage scaling." },
      { id: "c", text: "Amazon Aurora", isCorrect: true, explanation: "Correct. Aurora is a highly available, cloud-native relational database that automatically scales storage up to 128 TB in 10 GB increments." },
      { id: "d", text: "Amazon Athena", isCorrect: false, explanation: "Incorrect. Athena is a serverless interactive query service, not a relational database." }
    ]
  },
  {
    id: "saa-q8",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company stores logs in Amazon S3. The logs are frequently accessed for the first 30 days, then rarely accessed but must be retained for 5 years for compliance. Which S3 lifecycle policy is the MOST cost-effective?",
    options: [
      { id: "a", text: "Transition objects to S3 Standard-IA after 30 days, and delete them after 5 years.", isCorrect: false, explanation: "Incorrect. S3 Standard-IA is cheaper than Standard but more expensive than Glacier. For data rarely accessed after 30 days, Glacier is more cost-effective." },
      { id: "b", text: "Transition objects to S3 Glacier Deep Archive after 30 days, and delete them after 5 years.", isCorrect: true, explanation: "Correct. S3 Glacier Deep Archive provides the lowest cost storage for data that is rarely accessed and has a long retention period." },
      { id: "c", text: "Transition objects to S3 One Zone-IA after 30 days.", isCorrect: false, explanation: "Incorrect. One Zone-IA is not recommended for compliance data since it lacks resilience against the physical loss of an AZ." },
      { id: "d", text: "Use S3 Intelligent-Tiering for the entire 5 years.", isCorrect: false, explanation: "Incorrect. While Intelligent-Tiering is good for unpredictable access, a known 5-year archival pattern is more cost-effectively handled by explicit Lifecycle transitions to Deep Archive." }
    ]
  },
  {
    id: "saa-q9",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A decoupled application uses Amazon SQS. Sometimes, specific messages cause a worker instance to crash, and the message returns to the queue, causing a continuous loop of crashes. How should a Solutions Architect resolve this?",
    options: [
      { id: "a", text: "Increase the visibility timeout of the SQS queue.", isCorrect: false, explanation: "Incorrect. Increasing visibility timeout only delays the inevitable retry and crash; it doesn't break the loop." },
      { id: "b", text: "Implement an Auto Scaling group to replace crashed instances.", isCorrect: false, explanation: "Incorrect. While Auto Scaling ensures instance count, the poisonous message will simply crash the new instances." },
      { id: "c", text: "Configure a Dead-Letter Queue (DLQ) and route messages to it after a set number of max receives.", isCorrect: true, explanation: "Correct. A DLQ captures 'poison pill' messages that have failed processing multiple times, removing them from the primary queue to prevent crash loops." },
      { id: "d", text: "Switch from standard SQS to a FIFO SQS queue.", isCorrect: false, explanation: "Incorrect. FIFO handles strict ordering and exactly-once processing, but does not inherently solve poison pill messages without a DLQ." }
    ]
  },
  {
    id: "saa-q10",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An application requires a POSIX-compliant file system that can be accessed simultaneously from thousands of EC2 instances across multiple Availability Zones. Which service should be used?",
    options: [
      { id: "a", text: "Amazon EBS", isCorrect: false, explanation: "Incorrect. EBS Multi-Attach is limited to a single AZ and a small number of instances (typically up to 16)." },
      { id: "b", text: "Amazon S3", isCorrect: false, explanation: "Incorrect. S3 is object storage, not a POSIX-compliant file system." },
      { id: "c", text: "Amazon EFS", isCorrect: true, explanation: "Correct. Amazon Elastic File System (EFS) provides a fully managed, scalable, POSIX-compliant NFS file system that can be accessed by thousands of instances across multi-AZs concurrently." },
      { id: "d", text: "Amazon FSx for Windows File Server", isCorrect: false, explanation: "Incorrect. FSx for Windows uses the SMB protocol, not POSIX standard which is typically associated with Linux environments." }
    ]
  },
  {
    id: "saa-q11",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company requires that traffic from its on-premises data center to an Amazon S3 bucket never traverses the public internet. The data center is already connected to AWS via AWS Direct Connect. How should this be accomplished?",
    options: [
      { id: "a", text: "Create an Amazon S3 Gateway Endpoint and route traffic from the on-premises network to the endpoint.", isCorrect: false, explanation: "Incorrect. Gateway endpoints cannot be accessed directly from on-premises networks via Direct Connect." },
      { id: "b", text: "Create an Amazon S3 Interface Endpoint in the VPC and route on-premises traffic to the endpoint.", isCorrect: true, explanation: "Correct. Interface endpoints (AWS PrivateLink) provide private IP addresses within the VPC, which are reachable from on-premises over Direct Connect." },
      { id: "c", text: "Configure an Amazon API Gateway in front of S3.", isCorrect: false, explanation: "Incorrect. API Gateway does not inherently prevent traffic from traversing the internet without complex private endpoint setups, and is unnecessary overhead." },
      { id: "d", text: "Assign Elastic IP addresses to the Direct Connect connection and map them to S3.", isCorrect: false, explanation: "Incorrect. Elastic IPs are public, meaning the routing would still logically interact with public addressing spaces rather than pure private routing." }
    ]
  },
  {
    id: "saa-q12",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company's machine learning workload runs on Amazon EC2 instances. The workload is fault-tolerant, stateless, and can be interrupted and resumed without data loss. Which pricing model is most cost-effective?",
    options: [
      { id: "a", text: "On-Demand Instances", isCorrect: false, explanation: "Incorrect. On-Demand instances have no long-term commitment but do not leverage the deep discounts of Spot." },
      { id: "b", text: "Reserved Instances", isCorrect: false, explanation: "Incorrect. Reserved Instances require a 1 or 3-year commitment and are best for steady-state workloads, not purely batch/interruptible workloads." },
      { id: "c", text: "Spot Instances", isCorrect: true, explanation: "Correct. Spot Instances offer up to 90% savings for fault-tolerant, flexible, and interruptible workloads like batch processing or non-critical ML training." },
      { id: "d", text: "Dedicated Instances", isCorrect: false, explanation: "Incorrect. Dedicated instances run on hardware dedicated to a single customer, increasing costs." }
    ]
  },
  {
    id: "saa-q13",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "An application experiences high read traffic to its DynamoDB database, resulting in throttled requests. The read data is highly repetitive and latency-sensitive. Which solution will most effectively reduce database throttling and improve latency?",
    options: [
      { id: "a", text: "Enable DynamoDB Auto Scaling for read capacity units (RCUs).", isCorrect: false, explanation: "Incorrect. While Auto Scaling helps, DAX is specifically designed to handle repetitive read-heavy workloads and provide microsecond latency." },
      { id: "b", text: "Implement Amazon DynamoDB Accelerator (DAX).", isCorrect: true, explanation: "Correct. DAX is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement (microsecond latency) and lowers RCU consumption." },
      { id: "c", text: "Migrate the data from DynamoDB to Amazon RDS.", isCorrect: false, explanation: "Incorrect. Migrating to RDS is a massive architectural change and unnecessary when DynamoDB has native caching add-ons." },
      { id: "d", text: "Increase the Provisioned Write Capacity Units (WCUs).", isCorrect: false, explanation: "Incorrect. The issue is with read traffic, so increasing write capacity units will not help." }
    ]
  },
  {
    id: "saa-q14",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company is building an application that will use an Amazon Aurora PostgreSQL database. The application has highly unpredictable traffic patterns, sometimes experiencing hours of zero activity followed by massive traffic spikes. Which Aurora configuration provides the best performance and cost-efficiency?",
    options: [
      { id: "a", text: "Aurora Replicas with Auto Scaling", isCorrect: false, explanation: "Incorrect. Replicas scale read traffic, but a traditional provisioned cluster still accrues costs during the hours of zero activity." },
      { id: "b", text: "Aurora Global Database", isCorrect: false, explanation: "Incorrect. Global Database provides cross-region disaster recovery and low-latency global reads, but doesn't intrinsically handle the unpredictable scaling and cost constraints." },
      { id: "c", text: "Aurora Serverless", isCorrect: true, explanation: "Correct. Aurora Serverless automatically starts up, shuts down, and scales capacity up or down based on application needs, ideal for unpredictable workloads with periods of zero activity." },
      { id: "d", text: "Amazon RDS Multi-AZ", isCorrect: false, explanation: "Incorrect. RDS Multi-AZ provides high availability, not automatic compute scaling for unpredictable workloads." }
    ]
  },
  {
    id: "saa-q15",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "An application runs on an EC2 instance in a private subnet and needs to securely store and retrieve secrets from AWS Secrets Manager. The security team mandates that traffic must not cross the public internet. What must be configured?",
    options: [
      { id: "a", text: "A NAT Gateway in a public subnet.", isCorrect: false, explanation: "Incorrect. Traffic routed through a NAT Gateway traverses the public internet to reach the public endpoints of AWS services." },
      { id: "b", text: "An Interface VPC Endpoint for AWS Secrets Manager.", isCorrect: true, explanation: "Correct. Interface Endpoints (powered by AWS PrivateLink) route traffic over the AWS private network, keeping it off the public internet." },
      { id: "c", text: "A Gateway VPC Endpoint for AWS Secrets Manager.", isCorrect: false, explanation: "Incorrect. Gateway Endpoints are only available for Amazon S3 and Amazon DynamoDB, not AWS Secrets Manager." },
      { id: "d", text: "An AWS Transit Gateway.", isCorrect: false, explanation: "Incorrect. Transit Gateway connects VPCs and on-premises networks; it does not inherently bypass the internet for AWS service API calls without an endpoint." }
    ]
  },
  {
    id: "saa-q16",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A company has an application that processes large quantities of images. The process is asynchronous. Users upload images to an S3 bucket, which triggers a Lambda function. If the Lambda function fails, the image should not be lost and must be processed later. How can this be achieved?",
    options: [
      { id: "a", text: "Configure S3 Event Notifications to send the event to an Amazon SQS queue, and trigger the Lambda from the queue.", isCorrect: true, explanation: "Correct. SQS provides a durable buffer. If the Lambda fails, the message returns to the queue for retry, ensuring no data loss." },
      { id: "b", text: "Configure Amazon EventBridge to invoke AWS Step Functions.", isCorrect: false, explanation: "Incorrect. While Step Functions can handle state, SQS is the standard architectural pattern for simple, durable decoupling and buffering of asynchronous tasks." },
      { id: "c", text: "Store the images directly on Amazon EFS.", isCorrect: false, explanation: "Incorrect. EFS is a file system. Moving data there doesn't handle the asynchronous retry logic necessary when processing fails." },
      { id: "d", text: "Configure the S3 bucket with Cross-Region Replication.", isCorrect: false, explanation: "Incorrect. Replication copies the object to another region, but does not provide a retry queue for failed processing tasks." }
    ]
  },
  {
    id: "saa-q17",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A real-time multiplayer gaming startup needs to route UDP traffic globally to its servers with the absolute minimum latency possible. Which AWS service is designed specifically for this use case?",
    options: [
      { id: "a", text: "Amazon CloudFront", isCorrect: false, explanation: "Incorrect. CloudFront is a CDN designed for caching HTTP/HTTPS traffic, not raw UDP traffic routing." },
      { id: "b", text: "AWS Global Accelerator", isCorrect: true, explanation: "Correct. Global Accelerator routes TCP/UDP traffic over the AWS global network backbone, bypassing the public internet and providing the lowest possible latency." },
      { id: "c", text: "Application Load Balancer", isCorrect: false, explanation: "Incorrect. ALBs operate at Layer 7 and only support HTTP/HTTPS, not UDP." },
      { id: "d", text: "Amazon API Gateway", isCorrect: false, explanation: "Incorrect. API Gateway handles REST, HTTP, and WebSocket APIs, but is not designed for routing pure low-latency UDP streams globally." }
    ]
  },
  {
    id: "saa-q18",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company wants to protect its web application running on Application Load Balancers against common web exploits such as SQL injection (SQLi) and cross-site scripting (XSS). Which service provides this protection?",
    options: [
      { id: "a", text: "AWS Shield", isCorrect: false, explanation: "Incorrect. Shield protects against Distributed Denial of Service (DDoS) attacks, not Layer 7 exploits like SQLi/XSS." },
      { id: "b", text: "AWS WAF", isCorrect: true, explanation: "Correct. AWS Web Application Firewall (WAF) inspects Layer 7 HTTP/HTTPS traffic and allows you to create rules mitigating SQLi, XSS, and botnets." },
      { id: "c", text: "AWS Network Firewall", isCorrect: false, explanation: "Incorrect. Network Firewall provides stateful network layer (Layer 3/4) protection and domain name filtering, it does not inspect HTTP payloads natively for SQLi like WAF does." },
      { id: "d", text: "Amazon GuardDuty", isCorrect: false, explanation: "Incorrect. GuardDuty is a threat detection service that monitors logs for malicious activity, it does not actively block SQLi/XSS traffic inline." }
    ]
  },
  {
    id: "saa-q19",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An application continuously generates a massive stream of real-time clickstream data. The data needs to be captured, transformed smoothly, and then loaded into Amazon S3 for long-term storage without requiring the management of any continuous server infrastructure. Which service is best suited?",
    options: [
      { id: "a", text: "Amazon Kinesis Data Firehose", isCorrect: true, explanation: "Correct. Kinesis Data Firehose is fully managed, serverless, and automatically scales to continuously capture, transform, and load streaming data directly into S3." },
      { id: "b", text: "Amazon SQS", isCorrect: false, explanation: "Incorrect. SQS is a message queue, but it does not natively transform and load streams into S3 without custom polling compute logic." },
      { id: "c", text: "Amazon Redshift", isCorrect: false, explanation: "Incorrect. Redshift is a data warehouse target, not the ingestion streaming service itself." },
      { id: "d", text: "Amazon Kinesis Data Streams", isCorrect: false, explanation: "Incorrect. Data Streams requires manual scaling of shards and custom consumer applications (like Lambda or EC2) to transform and write the data to S3." }
    ]
  },
  {
    id: "saa-q20",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company has an Amazon RDS MySQL database that is only accessed by corporate users between 9 AM and 5 PM on weekdays. During weekends and nights, the database is idle but accrues costs. What is the most cost-effective solution?",
    options: [
      { id: "a", text: "Delete the database every night and restore it from a snapshot every morning.", isCorrect: false, explanation: "Incorrect. Extremely operationally complex and risks data loss or high RTO." },
      { id: "b", text: "Use Amazon EventBridge to trigger an AWS Lambda function that stops the RDS instance at night and starts it in the morning.", isCorrect: true, explanation: "Correct. Stopping the RDS instance prevents computing costs from accruing during off-hours. EventBridge + Lambda automates this." },
      { id: "c", text: "Migrate the database to DynamoDB.", isCorrect: false, explanation: "Incorrect. Migrating from an RDBMS to NoSQL requires significant code rewrites and architectural changes." },
      { id: "d", text: "Purchase Reserved Instances for the Database.", isCorrect: false, explanation: "Incorrect. While RIs save money on continuous workloads, paying for stopped instances directly when unused saves significantly more." }
    ]
  },
  {
    id: "saa-q21",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A company wants to architect a multi-region disaster recovery plan. Their primary application runs in us-east-1, and they want a scaled-down version of their environment running continuously in us-west-2 to ensure rapid recovery (RTO in minutes). Which DR strategy does this represent?",
    options: [
      { id: "a", text: "Backup and Restore", isCorrect: false, explanation: "Incorrect. Backup and restore involves no running compute in the secondary region until disaster strikes; very high RTO." },
      { id: "b", text: "Pilot Light", isCorrect: false, explanation: "Incorrect. Pilot light runs strictly core data replication services, leaving web/app compute essentially off until needed." },
      { id: "c", text: "Warm Standby", isCorrect: true, explanation: "Correct. Warm Standby maintains a scaled-down, fully functional version of the application running continuously in the secondary region." },
      { id: "d", text: "Multi-Site Active/Active", isCorrect: false, explanation: "Incorrect. Active/Active maintains full-scale, active environments in both regions receiving live traffic, which costs significantly more." }
    ]
  },
  {
    id: "saa-q22",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company operates in an industry with strict compliance requirements. They must maintain a centralized, immutable log of all API calls made within their AWS accounts for auditing purposes. Which AWS service fulfills this requirement?",
    options: [
      { id: "a", text: "Amazon CloudWatch Logs", isCorrect: false, explanation: "Incorrect. CloudWatch Logs store application and system logs, but are not the native, immutable source of AWS API auditing." },
      { id: "b", text: "AWS CloudTrail", isCorrect: true, explanation: "Correct. AWS CloudTrail records all API activity across an AWS account, and logs can be stored immutably in S3 for auditing and compliance." },
      { id: "c", text: "AWS Config", isCorrect: false, explanation: "Incorrect. AWS Config tracks configuration changes of resources over time, but is not primarily an API call logging service." },
      { id: "d", text: "Amazon GuardDuty", isCorrect: false, explanation: "Incorrect. GuardDuty analyzes findings for threats, but does not serve as an immutable storage vault for API logs." }
    ]
  },
  {
    id: "saa-q23",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An application hosted on an EC2 instance must process high-performance computing (HPC) workloads. The instance requires massive local storage with extremely high I/O performance and low latency. The data does not need to persist after the instance halts. Which storage layer should be utilized?",
    options: [
      { id: "a", text: "Amazon EBS Provisioned IOPS (io2)", isCorrect: false, explanation: "Incorrect. While io2 is fast, it is block storage attached over the network and persistent. Instance Store offers significantly higher raw local performance." },
      { id: "b", text: "Amazon EFS", isCorrect: false, explanation: "Incorrect. EFS is a network-based file system, not locally attached, and does not provide extreme single-instance low-latency I/O." },
      { id: "c", text: "Amazon EC2 Instance Store", isCorrect: true, explanation: "Correct. Instance Store provides temporary, block-level storage physically attached to the host computer, offering the highest IOPS and lowest latency for ephemeral data." },
      { id: "d", text: "Amazon S3", isCorrect: false, explanation: "Incorrect. S3 is highly durable object storage accessed via APIs over HTTP, which adds significant latency." }
    ]
  },
  {
    id: "saa-q24",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A data analytics team queries massive volumes of historical data stored in Amazon S3. They use standard SQL to perform ad-hoc analysis. To keep costs optimized, they want a serverless service where they only pay for the queries they run. Which service should they use?",
    options: [
      { id: "a", text: "Amazon RDS", isCorrect: false, explanation: "Incorrect. Amazon RDS is a provisioned relational database, not a serverless query engine for S3 objects." },
      { id: "b", text: "Amazon Athena", isCorrect: true, explanation: "Correct. Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL, and prices are based solely on the amount of data scanned." },
      { id: "c", text: "Amazon Redshift Provisioned Cluster", isCorrect: false, explanation: "Incorrect. A provisioned Redshift cluster requires paying for constant uptime, not just ad-hoc queries." },
      { id: "d", text: "AWS Glue", isCorrect: false, explanation: "Incorrect. AWS Glue is an ETL (Extract, Transform, Load) service, not a direct human-facing ad-hoc SQL query engine." }
    ]
  },
  {
    id: "saa-q25",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "An application processes orders from a website. Due to recent success, traffic volume has skyrocketed, causing the backend processing system to become overwhelmed and drop orders. To decouple the frontend website from the backend, which service should the Solutions Architect introduce?",
    options: [
      { id: "a", text: "Amazon SQS", isCorrect: true, explanation: "Correct. Amazon SQS acts as a buffer. The frontend sends orders to the queue, and the backend processes them at its own pace, preventing overwhelming traffic spikes from dropping data." },
      { id: "b", text: "Amazon SNS", isCorrect: false, explanation: "Incorrect. SNS is a pub/sub notification service. While it can trigger endpoints, it does not buffer or hold messages asynchronously for a single consumer to process at its own pace." },
      { id: "c", text: "AWS Auto Scaling", isCorrect: false, explanation: "Incorrect. Auto Scaling the backend might help, but the system is still tightly coupled and vulnerable to dropping sudden unscaled bursts." },
      { id: "d", text: "Amazon API Gateway", isCorrect: false, explanation: "Incorrect. API Gateway handles REST routing and throttling, but does not natively decouple or persistently buffer workloads like a message queue." }
    ]
  }
];
