import { PracticeQuestion } from './practiceQuestionsData';

export const saaQuestionsBatch2: PracticeQuestion[] = [
  {
    id: "saa-q26",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company requires strict isolation of their Amazon RDS database. Only specific EC2 instances running their application tier should be able to access the database. Which native AWS security control should be implemented to achieve this?",
    options: [
      { id: "a", text: "Place the database in a public subnet and use IAM roles.", isCorrect: false, explanation: "Incorrect. Databases should not reside in public subnets. IAM roles do not control network-level ingress to RDS." },
      { id: "b", text: "Configure the database Security Group to only allow inbound traffic from the Security Group ID attached to the application EC2 instances.", isCorrect: true, explanation: "Correct. Security Groups can reference other Security Group IDs as sources, meaning only instances holding the referenced Security Group can communicate with the database." },
      { id: "c", text: "Configure Network ACLs on the database subnet to allow only the IP addresses of the application EC2 instances.", isCorrect: false, explanation: "Incorrect. IPs of Auto Scaled instances change. Managing dynamic IPs with NACLs is complex and fragile compared to Security Group referencing." },
      { id: "d", text: "Configure AWS WAF on the Application Load Balancer.", isCorrect: false, explanation: "Incorrect. AWS WAF protects the front-end ALB from web exploits; it does not control backend RDS database access." }
    ]
  },
  {
    id: "saa-q27",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company has a monolithic application that stores stateful session data in memory on its EC2 instances. Moving forward, the company wants to decouple the architecture and put the instances in an Auto Scaling group behind an ALB. Where should the session state data be moved to ensure high performance and loose coupling?",
    options: [
      { id: "a", text: "Amazon EBS", isCorrect: false, explanation: "Incorrect. EBS volumes are block storage attached to individual instances, meaning session state wouldn't be shared across the fleet." },
      { id: "b", text: "Amazon Redshift", isCorrect: false, explanation: "Incorrect. Redshift is a data warehouse designed for analytics, not for fast, transactional session lookups." },
      { id: "c", text: "Amazon ElastiCache", isCorrect: true, explanation: "Correct. Amazon ElastiCache (Redis or Memcached) provides an in-memory, highly available data store external to the EC2 instances, perfect for sharing sub-millisecond session state across an Auto Scaling group." },
      { id: "d", text: "Amazon S3", isCorrect: false, explanation: "Incorrect. While S3 is highly scalable, it operates over HTTP APIs and has higher latency than in-memory caches, making it less ideal for high-speed session states." }
    ]
  },
  {
    id: "saa-q28",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company is migrating a large database to AWS. They want to ensure they select the most appropriate Amazon EBS volume type for cost optimization. The database experiences continuous, high-throughput sequential reads and writes, primarily for big data processing and log parsing. Which EBS volume type is MOST cost-effective?",
    options: [
      { id: "a", text: "Provisioned IOPS SSD (io2)", isCorrect: false, explanation: "Incorrect. io2 is for latency-sensitive, high IOPS workloads, and is expensive; overkill for sequential big data logs." },
      { id: "b", text: "General Purpose SSD (gp3)", isCorrect: false, explanation: "Incorrect. gp3 is excellent for general relational databases, but not the absolute cheapest per TB for strictly sequential, high-throughput log operations." },
      { id: "c", text: "Throughput Optimized HDD (st1)", isCorrect: true, explanation: "Correct. st1 is fundamentally designed for low-cost, high-throughput, large sequential workloads like big data, EMR, and log parsing." },
      { id: "d", text: "Cold HDD (sc1)", isCorrect: false, explanation: "Incorrect. sc1 is the cheapest, but strictly targeted at infrequent access workloads, not continuous high-throughput processes." }
    ]
  },
  {
    id: "saa-q29",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A startup runs a popular website using Amazon Route 53 as its DNS provider. The architecture spans two AWS Regions: us-east-1 (Primary) and eu-west-1 (Secondary). The startup wants to automatically route traffic to eu-west-1 ONLY if the primary region's application goes down. Which Route 53 routing policy accomplishes this?",
    options: [
      { id: "a", text: "Failover routing policy", isCorrect: true, explanation: "Correct. Failover routing allows you to configure an active-passive disaster recovery scenario, routing traffic to the secondary location when Route 53 health checks indicate the primary is unhealthy." },
      { id: "b", text: "Latency routing policy", isCorrect: false, explanation: "Incorrect. Latency routing directs users to the region providing the fastest response time regardless of primary/secondary status." },
      { id: "c", text: "Geolocation routing policy", isCorrect: false, explanation: "Incorrect. Geolocation routes traffic based on the geographic location of the user, not the health status of a primary region." },
      { id: "d", text: "Weighted routing policy", isCorrect: false, explanation: "Incorrect. Weighted routing distributes traffic across multiple endpoints according to assigned proportions, not an absolute active-passive failover pattern." }
    ]
  },
  {
    id: "saa-q30",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company manages several AWS accounts representing different departments. They want to ensure that no developer in the 'Marketing' account can launch an Amazon EC2 instance larger than a 't3.micro', regardless of their local IAM roles. How should the Solutions Architect enforce this boundary?",
    options: [
      { id: "a", text: "Apply an AWS Organizations Service Control Policy (SCP) to the Marketing account denying EC2 instance launches unless the instance type is t3.micro.", isCorrect: true, explanation: "Correct. SCPs are the most secure and scalable way to govern and limit maximum permissions across an entire AWS account within an Organization." },
      { id: "b", text: "Write an AWS Lambda function triggered by CloudTrail to terminate any non-t3.micro instances immediately after launch.", isCorrect: false, explanation: "Incorrect. This is a reactive anti-pattern. While it works, it is slower, allows unauthorized launches to exist temporarily, and adds engineering overhead." },
      { id: "c", text: "Update the IAM policy of every Developer user in the Marketing account.", isCorrect: false, explanation: "Incorrect. Applying local IAM policies doesn't scale well and can be overridden if a user gains advanced permissions or uses a generic admin role." },
      { id: "d", text: "Configure AWS Trusted Advisor checks to alert on compliance breaches.", isCorrect: false, explanation: "Incorrect. Trusted Advisor simply reports on best practices; it does not actively prevent the launch of unauthorized instances." }
    ]
  },
  {
    id: "saa-q31",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An analytics company wants to migrate an existing MySQL database to AWS. The database struggles with heavy read queries affecting transactional write performance. The company wants AWS to automatically failover, auto-scale storage up to 128TB, and offload read queries with up to 15 synchronized replicas. Which service should they choose?",
    options: [
      { id: "a", text: "Amazon RDS for MySQL", isCorrect: false, explanation: "Incorrect. Traditional RDS scales storage manually (up to 64TB) and only supports up to 5 read replicas." },
      { id: "b", text: "Amazon Aurora MySQL", isCorrect: true, explanation: "Correct. Amazon Aurora natively auto-scales storage up to 128TB, supports up to 15 low-latency read replicas, and provides automatic failover." },
      { id: "c", text: "Amazon DynamoDB", isCorrect: false, explanation: "Incorrect. DynamoDB is a NoSQL key-value store, which is not compatible with an existing MySQL database without a complete architectural rewrite." },
      { id: "d", text: "Amazon Redshift", isCorrect: false, explanation: "Incorrect. Redshift is a data warehouse for OLAP workloads, not a drop-in replacement for an active transactional MySQL database." }
    ]
  },
  {
    id: "saa-q32",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company operates an image processing platform on AWS. Once images are processed by an EC2 layer, they are stored in an S3 bucket for compliance auditing for 7 years. They are rarely touched after the first week, and retrieval can safely take several hours if ever needed. How can they MINIMIZE storage costs?",
    options: [
      { id: "a", text: "Configure an S3 Lifecycle Policy to transition images to S3 Standard-IA after 7 days.", isCorrect: false, explanation: "Incorrect. Standard-IA is significantly more expensive than Glacier Deep Archive for data stored over 7 years." },
      { id: "b", text: "Store the images directly on an EBS Cold HDD (sc1) volume attached to an EC2 instance.", isCorrect: false, explanation: "Incorrect. EBS volumes rely on running/stopped EC2 hardware and are not cost-effective or resilient enough for 7-year cold-storage compliance compared to S3." },
      { id: "c", text: "Configure an S3 Lifecycle Policy to transition images to S3 Glacier Deep Archive after 7 days.", isCorrect: true, explanation: "Correct. For data rarely accessed and with tolerance for hours-long retrieval times, S3 Glacier Deep Archive provides the absolute lowest per-GB storage cost on AWS." },
      { id: "d", text: "Use Amazon Macie to compress the images before storing them in S3 Standard.", isCorrect: false, explanation: "Incorrect. Amazon Macie is a machine learning security service for discovering sensitive data, not a compression engine." }
    ]
  },
  {
    id: "saa-q33",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A company hosts an application on EC2 instances behind an internal Application Load Balancer. They need to expose this internal application to a partner company operating in a completely different AWS account, without configuring complex VPC peering, VPNs, or exposing the ALB to the public internet. Which AWS service enables this secure, private exposure?",
    options: [
      { id: "a", text: "AWS Client VPN", isCorrect: false, explanation: "Incorrect. Client VPN connects individual users (laptops) to AWS, rather than connecting system-to-system across accounts seamlessly." },
      { id: "b", text: "AWS PrivateLink (VPC Endpoint Services)", isCorrect: true, explanation: "Correct. AWS PrivateLink allows you to create a VPC Endpoint Service mapping to your internal Network Load Balancer, permitting another AWS account to access your service privately over the AWS backbone as if it were in their VPC." },
      { id: "c", text: "AWS Transit Gateway", isCorrect: false, explanation: "Incorrect. Transit Gateway connects VPCs and on-premises networks at a network routing level, which effectively bridges the networks. The requirement specified avoiding complex network routing." },
      { id: "d", text: "Amazon API Gateway with an Edge-Optimized endpoint", isCorrect: false, explanation: "Incorrect. Edge-Optimized endpoints are public-facing, violating the requirement to avoid exposing the service to the internet." }
    ]
  },
  {
    id: "saa-q34",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "An application allows users to upload documents. Due to PII compliance, all data written to Amazon S3 must be encrypted using keys that the company explicitly creates, manages, and rotates. However, the company does not want to write the encryption algorithms in their application code. Which mechanism meets the requirements?",
    options: [
      { id: "a", text: "Server-Side Encryption with Customer-Provided Keys (SSE-C)", isCorrect: false, explanation: "Incorrect. While SSE-C uses customer-provided keys, it forces the application to handle and pass the key securely via headers with every API call, increasing code complexity and management burden." },
      { id: "b", text: "Server-Side Encryption with AWS Managed Keys (SSE-S3)", isCorrect: false, explanation: "Incorrect. SSE-S3 uses encryption keys generated and managed entirely by AWS, violating the requirement that the company manages the keys." },
      { id: "c", text: "Client-Side Encryption using an AWS SDK", isCorrect: false, explanation: "Incorrect. Client-Side Encryption explicitly requires writing encryption algorithms/routines into the application code before sending to S3." },
      { id: "d", text: "Server-Side Encryption with AWS KMS Customer Managed Keys (SSE-KMS)", isCorrect: true, explanation: "Correct. AWS KMS allows the company to create, manage, and schedule automated rotation of their Customer Managed Keys natively. S3 handles the actual encryption workload transparently before writing to disk." }
    ]
  },
  {
    id: "saa-q35",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company runs a REST API on Amazon API Gateway backed by AWS Lambda. The API experiences severe latency during peak usage because the Lambda functions need to establish database connections to an Amazon RDS instance for every invocation. How can the Solutions Architect decrease this latency effectively?",
    options: [
      { id: "a", text: "Increase the memory allocated to the Lambda function.", isCorrect: false, explanation: "Incorrect. While increasing memory adds CPU capability, it does not solve the fundamental network overhead of establishing brand-new TCP database connections on every cold start." },
      { id: "b", text: "Migrate the RDS database to Amazon DynamoDB.", isCorrect: false, explanation: "Incorrect. While DynamoDB mitigates connection pooling issues (uses HTTP), a database migration is an intensive overhaul compared to a proxy solution." },
      { id: "c", text: "Implement Amazon RDS Proxy.", isCorrect: true, explanation: "Correct. RDS Proxy sits between Lambda and the database, pooling and sharing database connections natively. This drastically reduces the connection opening overhead during Lambda peaks." },
      { id: "d", text: "Configure Provisioned Concurrency on the Lambda function.", isCorrect: false, explanation: "Incorrect. Provisioned concurrency warms the compute environments, but if traffic spikes rapidly beyond the provisioned amount, the connection overhead bottleneck remains." }
    ]
  },
  {
    id: "saa-q36",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "Development teams have launched hundreds of EC2 instances and EBS volumes across multiple regions. The finance team is overwhelmed by the monthly bill and requires a mechanism to break down the costs per team, project, and environment. What is the most robust way to categorize these costs?",
    options: [
      { id: "a", text: "Create separate AWS accounts for every project.", isCorrect: false, explanation: "Incorrect. While boundaries help, setting up hundreds of AWS accounts retroactively for existing resources is highly disruptive and administratively heavy." },
      { id: "b", text: "Use Cost Allocation Tags and define tags like 'Team', 'Project', and 'Environment' on all resources.", isCorrect: true, explanation: "Correct. Activating Cost Allocation Tags in the Billing Console allows AWS to organize your resource costs on your cost allocation report based on metadata tags." },
      { id: "c", text: "Use AWS Trusted Advisor to flag expensive resources.", isCorrect: false, explanation: "Incorrect. Trusted Advisor points out underutilized resources for general savings, but doesn't intrinsically categorize or group billing data by team." },
      { id: "d", text: "Configure AWS Compute Optimizer rules to group instances.", isCorrect: false, explanation: "Incorrect. Compute Optimizer yields rightsizing recommendations via ML; it is not a billing categorization dashboard." }
    ]
  },
  {
    id: "saa-q37",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A multi-tier architecture consists of an active VPC in us-east-1 and a disaster recovery VPC in us-west-2. The databases are synced asynchronously cross-region. During a regional failure, the company's administrators must manually update external DNS to point to the DR region. They wish to automate this failover intelligently. Which AWS feature provides automated regional failover?",
    options: [
      { id: "a", text: "AWS Shield Advanced", isCorrect: false, explanation: "Incorrect. Shield Advanced protects against DDoS attacks; it does not automate DNS DR failover." },
      { id: "b", text: "AWS Route 53 with Failover Routing and Health Checks", isCorrect: true, explanation: "Correct. By attaching Route 53 Health Checks to the primary endpoint, a Failover Routing Policy automatically diverts traffic to the secondary endpoint if the primary becomes unhealthy." },
      { id: "c", text: "AWS Auto Scaling using Multi-Region targets", isCorrect: false, explanation: "Incorrect. Auto Scaling Groups are constrained to a single region. They cannot natively reach across regions to launch EC2 instances." },
      { id: "d", text: "An Application Load Balancer spanning multiple regions.", isCorrect: false, explanation: "Incorrect. ALBs are inherently regional resources; they cannot span across multiple regions." }
    ]
  },
  {
    id: "saa-q38",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company’s on-premises network must securely access Amazon S3 buckets without traversing the public internet. The company has a stable 1 Gbps AWS Direct Connect connection. What type of VPC Endpoint should the company provision to meet both the security requirement and utilize the Direct Connect infrastructure?",
    options: [
      { id: "a", text: "Gateway VPC Endpoint for S3.", isCorrect: false, explanation: "Incorrect. Gateway endpoints use routing tables natively inside the VPC and cannot be accessed directly from an on-premises network over Direct Connect." },
      { id: "b", text: "Interface VPC Endpoint for S3.", isCorrect: true, explanation: "Correct. Interface endpoints utilize AWS PrivateLink to provide private IP addresses inside the VPC subnet. These IPs are natively routable over Direct Connect from on-premises." },
      { id: "c", text: "Internet Gateway attached to the VPC.", isCorrect: false, explanation: "Incorrect. An IGW routes traffic to the public internet, violating the core security requirement." },
      { id: "d", text: "Transit Gateway with a public VIF.", isCorrect: false, explanation: "Incorrect. A public Virtual Interface (VIF) traverses the public AWS network footprint, and a Transit Gateway does not inherently bypass public IPs for S3 without an endpoint." }
    ]
  },
  {
    id: "saa-q39",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An ad-tech company logs billions of click events per day into a data lake. An AWS Lambda function executes nightly to process small subsets of data based on precise S3 object prefixes. Recently, execution time has sharply increased due to the 'ListObjectsV2' API call scanning millions of objects. How can they improve performance?",
    options: [
      { id: "a", text: "Switch the Lambda storage layer from S3 to EBS.", isCorrect: false, explanation: "Incorrect. Attaching massive EBS volumes to Lambda is not native, and migrating a data lake to block storage is financially and architecturally prohibitive." },
      { id: "b", text: "Index the object metadata in Amazon DynamoDB for rapid lookup.", isCorrect: true, explanation: "Correct. S3 object listings become slow when buckets contain millions of flat objects. Maintaining a parallel metadata index in DynamoDB allows millisecond database lookups instead of slow S3 bucket scans." },
      { id: "c", text: "Turn on S3 Transfer Acceleration.", isCorrect: false, explanation: "Incorrect. Transfer Acceleration speeds up long-distance uploads via CloudFront Edge Locations; it does not accelerate bucket listing APIs inside AWS." },
      { id: "d", text: "Enable AWS Shield Advanced on the S3 bucket.", isCorrect: false, explanation: "Incorrect. AWS Shield Advanced provides enhanced DDoS protection and has no impact on API response latency for listings." }
    ]
  },
  {
    id: "saa-q40",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A pharmaceutical research firm utilizes high-performance compute clusters on Amazon EC2 for molecular simulations. The simulations take highly variable amounts of time to complete but are completely fault-tolerant; if interrupted, the simulation automatically resumes from the last known checkpoint stored in S3. Which scaling strategy MINIMIZES compute costs?",
    options: [
      { id: "a", text: "Purchase a 3-year Compute Savings Plan.", isCorrect: false, explanation: "Incorrect. Savings Plans are great for steady baselines, but do not offer the extreme 90% flexibility discount of Spot Instances for fault-tolerant workloads." },
      { id: "b", text: "Deploy the worker nodes as Spot Instances via an Auto Scaling group.", isCorrect: true, explanation: "Correct. Spot Instances offer up to a 90% discount over On-Demand. Because the simulations are resilient and checkpointed, interruptions from AWS reclaiming Spot instances do not corrupt the workload." },
      { id: "c", text: "Utilize On-Demand instances, but script them to stop on weekends.", isCorrect: false, explanation: "Incorrect. Even if turned off on weekends, the per-hour cost of On-Demand is astronomically higher than Spot pricing for fault-tolerant compute." },
      { id: "d", text: "Run the simulation nodes natively on Amazon RDS.", isCorrect: false, explanation: "Incorrect. RDS is a relational database service, not a supercomputer/HPC processing engine." }
    ]
  }
];
