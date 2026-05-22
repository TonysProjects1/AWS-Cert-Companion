import { PracticeQuestion } from './practiceQuestionsData';

export const saaQuestionsBatch3: PracticeQuestion[] = [
  {
    id: "saa-q41",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company's security policy requires that all communications between their Amazon EC2 web servers and Amazon RDS database servers are encrypted in transit. Which native option satisfies this requirement most effectively?",
    options: [
      { id: "a", text: "Configure an IPsec VPN tunnel between the EC2 instances and RDS.", isCorrect: false, explanation: "Incorrect. IPsec VPNs are for remote networks to AWS, not internal VPC instance-to-managed-service links." },
      { id: "b", text: "Enable AWS KMS Customer Managed Keys on the RDS instance.", isCorrect: false, explanation: "Incorrect. KMS encrypts the data at rest on the RDS storage volumes, not the data in transit over the network." },
      { id: "c", text: "Force SSL/TLS connections on the RDS instance via parameter groups.", isCorrect: true, explanation: "Correct. Relational databases in RDS natively support SSL/TLS encryption for data in transit; this must be enforced via the engine's parameter groups or connection strings." },
      { id: "d", text: "Use Amazon Macie to encrypt database packets.", isCorrect: false, explanation: "Incorrect. Macie is a machine learning security service for discovering sensitive data in S3, not an encryption transport protocol." }
    ]
  },
  {
    id: "saa-q42",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "An application processing a high volume of transactions relies on a single Amazon DynamoDB table. During end-of-month reporting, the reporting engine scans the entire table, consuming massive read capacity and causing transactions to throttle and fail. How can the Solutions Architect decouple the reporting workload to prevent transactional interference?",
    options: [
      { id: "a", text: "Turn on DynamoDB Streams and replicate to a secondary reporting table or data warehouse.", isCorrect: true, explanation: "Correct. DynamoDB Streams captures a time-ordered sequence of item-level modifications. You can use it to asynchronously replicate data to a separate database (like Redshift or a replicated reporting table), isolating the reporting queries from the transaction engine." },
      { id: "b", text: "Implement DynamoDB Accelerator (DAX) in front of the database.", isCorrect: false, explanation: "Incorrect. DAX helps with repeated microsecond reads (like popular items), but it does not intercept or offload full-table sequential scans typical of reporting engines." },
      { id: "c", text: "Use Amazon SQS to buffer the reporting queries.", isCorrect: false, explanation: "Incorrect. SQS buffers asynchronous write commands; it cannot fulfill synchronous data extraction queries required by a reporting engine." },
      { id: "d", text: "Increase the Provisioned Write Capacity.", isCorrect: false, explanation: "Incorrect. The failures are due to read capacity exhaustion during scans, so increasing write capabilities does not solve the root blockage." }
    ]
  },
  {
    id: "saa-q43",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company's highly popular dynamic web application is experiencing latency. The application is hosted on EC2 instances behind an ALB. Global users access the site. To reduce global latency, the architecture team wants to implement caching at AWS Edge locations. Which combination of services provides this functionality?",
    options: [
      { id: "a", text: "AWS Global Accelerator routing to an Application Load Balancer.", isCorrect: false, explanation: "Incorrect. Global Accelerator improves routing speed over the AWS backbone, but it does NOT cache dynamic or static HTTP content at the edge." },
      { id: "b", text: "Amazon CloudFront pointing to an Application Load Balancer origin.", isCorrect: true, explanation: "Correct. CloudFront is a global Content Delivery Network (CDN) that caches content directly at Edge locations closer to end users. It supports caching dynamic content back to an ALB." },
      { id: "c", text: "Amazon S3 Transfer Acceleration pointing to Amazon EFS.", isCorrect: false, explanation: "Incorrect. Transfer Acceleration speeds up S3 uploads. EFS is a Linux file system. Neither provide global HTTP caching for a dynamic application." },
      { id: "d", text: "Amazon API Gateway with Amazon ElastiCache.", isCorrect: false, explanation: "Incorrect. While API Gateway caches natively, ElastiCache operates inside a specific VPC region, not automatically at global Edge locations." }
    ]
  },
  {
    id: "saa-q44",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company mandates that all EBS volumes must be automatically backed up nightly and retained for exactly 30 days to meet compliance, after which they must be destroyed to save costs. Engineering teams frequently fail to delete old manual snapshots, inflating the bill. What managed service automates snapshot creation and enforces the retention pruning?",
    options: [
      { id: "a", text: "Amazon Data Lifecycle Manager (DLM)", isCorrect: true, explanation: "Correct. DLM automates the creation, retention, and deletion of EBS volume snapshots based on schedules and tags, eliminating the need for manual cleanup scripts." },
      { id: "b", text: "AWS Backup with AWS Identity and Access Management (IAM) restrictions.", isCorrect: false, explanation: "Incorrect. While AWS Backup can do this, DLM is the native, cost-free tool specifically engineered for EBS snapshot lifecycle management." },
      { id: "c", text: "Amazon CloudWatch Events triggering an AWS Lambda function.", isCorrect: false, explanation: "Incorrect. Custom Lambda scripts add operational overhead and are prone to code drift compared to native managed services like DLM." },
      { id: "d", text: "S3 Lifecycle Policies.", isCorrect: false, explanation: "Incorrect. EBS snapshots are stored under the hood in an AWS-managed S3 bucket not visible in the customer's account, so customer S3 Lifecycle policies cannot affect them." }
    ]
  },
  {
    id: "saa-q45",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A publicly facing web server requires connections to the internet to download operating system security patches. However, security rules dictate that the server must reside in a Private Subnet and have no public IP address. How can the instance securely download the patches?",
    options: [
      { id: "a", text: "Route traffic through a NAT Gateway provisioned in a Public Subnet.", isCorrect: true, explanation: "Correct. A NAT Gateway allows instances in a private subnet to initiate outbound IPv4 traffic to the internet (for patches) but prevents the internet from initiating unsolicited inbound connections." },
      { id: "b", text: "Attach an Internet Gateway to the Private Subnet.", isCorrect: false, explanation: "Incorrect. An IGW attached to a subnet makes it a Public Subnet, requiring instances to have public IP addresses to communicate." },
      { id: "c", text: "Deploy an Application Load Balancer in the Private Subnet.", isCorrect: false, explanation: "Incorrect. Load balancers distribute inbound traffic; they do not act as outbound internet gateways for server instances." },
      { id: "d", text: "Configure AWS PrivateLink to access OS patches.", isCorrect: false, explanation: "Incorrect. OS vendor repositories reside on the public internet, not as managed AWS services inside the AWS network backbone, so PrivateLink cannot reach them." }
    ]
  },
  {
    id: "saa-q46",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A critical file processing application heavily utilizes an Amazon EFS file system. A major business requirement states that if a catastrophic event destroys an entire AWS Region, the EFS data must not be lost and the application must be brought online in a secondary region within 24 hours. How should this disaster recovery requirement be met?",
    options: [
      { id: "a", text: "Configure EFS with One Zone storage class.", isCorrect: false, explanation: "Incorrect. One Zone EFS stores data in a single Availability Zone, making it entirely vulnerable to AZ or regional loss." },
      { id: "b", text: "Configure automated back-ups using AWS Backup with a cross-region copy rule.", isCorrect: true, explanation: "Correct. AWS Backup natively supports EFS. Creating a backup plan that includes a rule to copy the vault directly to a secondary AWS Region perfectly fulfills the multi-region DR requirement." },
      { id: "c", text: "Create an EBS snapshot and mirror it to the secondary region.", isCorrect: false, explanation: "Incorrect. EFS is a Network File System, not an Elastic Block Store volume; EBS snapshots cannot back up EFS." },
      { id: "d", text: "Enable S3 Cross-Region Replication on the EFS system.", isCorrect: false, explanation: "Incorrect. S3 Cross-Region Replication is for Amazon S3 object buckets, not Amazon EFS." }
    ]
  },
  {
    id: "saa-q47",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A big data workload running on Amazon EC2 frequently processes massive datasets consisting of millions of small files. The data must be shared across hundreds of instances. Using EFS requires high throughput to prevent bottlenecks, independent of the total data volume stored. Which EFS performance mode should be selected?",
    options: [
      { id: "a", text: "Bursting Throughput mode", isCorrect: false, explanation: "Incorrect. Bursting throughput is tied to the amount of data stored (baseline capacity). If the total storage size is small but the I/O requirements are massive, bursting mode will bottleneck quickly." },
      { id: "b", text: "Provisioned Throughput mode", isCorrect: true, explanation: "Correct. Provisioned throughput allows you to dial in specific high-throughput limits regardless of the total storage footprint, ideal for heavy, concurrent big-data processing." },
      { id: "c", text: "S3 Intelligent-Tiering Mode", isCorrect: false, explanation: "Incorrect. Intelligent-Tiering is an Amazon S3 storage class for cost optimization, not an EFS performance mode." },
      { id: "d", text: "Instance Store Mode", isCorrect: false, explanation: "Incorrect. Instance Store provides physically attached local storage, not shared network storage required across hundreds of instances." }
    ]
  },
  {
    id: "saa-q48",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "An organization operates multiple AWS accounts using AWS Organizations. The Chief Financial Officer wants to take advantage of volume discounts across all departments and receive a single, unified monthly bill from AWS. Which feature enables this?",
    options: [
      { id: "a", text: "Consolidated Billing", isCorrect: true, explanation: "Correct. Consolidated billing explicitly provides one overarching bill for an entire Organization and pools resource consumption (like S3 tiers or EC2 hours) across all accounts to achieve higher volume discount tiers." },
      { id: "b", text: "AWS Cost Explorer", isCorrect: false, explanation: "Incorrect. Cost Explorer is a reporting tool for visualizing and analyzing expenses, but it does not inherently apply unified billing structures or pool discounts." },
      { id: "c", text: "AWS Identity and Access Management (IAM)", isCorrect: false, explanation: "Incorrect. IAM dictates security access permissions, not financial structures." },
      { id: "d", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect. Macie utilizes ML to detect PII and sensitive data in S3; it has nothing to do with billing." }
    ]
  },
  {
    id: "saa-q49",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company has an Amazon API Gateway exposing a REST API. They notice periodic brute-force attempts coming from networks located spanning several specific foreign countries. Management requires absolute blocking of all API requests originating from these countries. What is the most robust way to implement this Geo-Restriction?",
    options: [
      { id: "a", text: "Attach AWS WAF to the API Gateway and configure geographic (GeoMatch) blocking rules.", isCorrect: true, explanation: "Correct. AWS WAF natively supports GeoMatch conditions, allowing you to easily drop traffic at the gateway layer based on the origin country." },
      { id: "b", text: "Update the VPC Network ACLs to block all IP blocks assigned to those countries.", isCorrect: false, explanation: "Incorrect. IP blocks are massive and highly volatile. Manually maintaining thousands of CIDR blocks in NACLs is an administrative nightmare and hard limit constraint." },
      { id: "c", text: "Use Amazon Inspector to drop foreign packets.", isCorrect: false, explanation: "Incorrect. Inspector evaluates application security vulnerabilities; it is not a perimeter firewall." },
      { id: "d", text: "Configure Amazon CloudFront SSL certificates to decline foreign connections.", isCorrect: false, explanation: "Incorrect. SSL termination happens regardless of geography; certificates do not validate geographic origin." }
    ]
  },
  {
    id: "saa-q50",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A social media startup expects a hyper-viral burst of millions of new users globally tomorrow due to a marketing event. They use Amazon S3 to store user-uploaded avatar images, but during the traffic spike, the 'ObjectCreated' events must trigger a resizing Lambda function. The Lambda concurrency limit might be hit causing events to be dropped. How can you ensure zero avatar resize events are lost during the spike?",
    options: [
      { id: "a", text: "Increase Lambda memory to process images faster.", isCorrect: false, explanation: "Incorrect. Faster processing doesn't prevent simultaneous spike concurrency limits from dropping events at the ingress gate." },
      { id: "b", text: "Use Amazon SQS as an event destination between S3 and Lambda.", isCorrect: true, explanation: "Correct. Pushing S3 events to an SQS queue creates a durable buffer. Lambda can poll the queue at a controlled pace, eliminating the risk of lost events due to sudden concurrency throttling." },
      { id: "c", text: "Implement an Auto Scaling Group for Lambda.", isCorrect: false, explanation: "Incorrect. Lambda natively auto-scales via concurrency pooling, there is no 'Auto Scaling Group' construct for serverless Lambda." },
      { id: "d", text: "Switch S3 to use a DynamoDB backend.", isCorrect: false, explanation: "Incorrect. A database swap makes no logical sense for binary avatar image storage and introduces massive code refactoring." }
    ]
  }
];
