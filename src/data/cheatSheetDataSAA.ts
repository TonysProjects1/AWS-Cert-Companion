export const cheatSheetDataSAA = [
  {
    id: "saa-domain-1",
    title: "Domain 1: Design Secure Architectures",
    weight: "30%",
    content: `
### 1.1 Design Secure Access
-   **AWS IAM (Identity and Access Management):** Users, Groups, Roles, and Policies (JSON). Use roles for EC2 to access AWS services securely instead of hardcoding credentials.
-   **IAM Identity Center (AWS SSO):** Centrally manage SSO access to multiple AWS accounts and business applications. Integrates with Active Directory.
-   **Amazon Cognito:** Authentication, authorization, and user management for web and mobile apps. User Pools (authentication/identity) vs. Identity Pools (AWS credentials).
-   **AWS Organizations:** Centrally manage multiple AWS accounts. Use Service Control Policies (SCPs) to enforce permission boundaries across the organization (e.g., restrict region usage).

### 1.2 Design Secure Workloads
-   **Amazon VPC (Virtual Private Cloud):** Logically isolated network. Use Public Subnets (has route to IGW) for ELBs/Bastions, Private Subnets for App/DB layers.
-   **Security Groups vs. NACLs:** Security Groups are stateful (return traffic allowed) and applied at ENI/instance level. NACLs are stateless (need explicit allow for inbound/outbound and ephemeral ports) and applied at the subnet level.
-   **VPC Endpoints (AWS PrivateLink):** Access AWS services (like S3, DynamoDB) privately without traffic traversing the public internet. Gateway Endpoints (S3, DynamoDB, free) vs. Interface Endpoints (ENI, hourly charge).
-   **Perimeter Security:** AWS Shield (DDoS protection, Standard is free, Advanced is paid for complex attacks), AWS WAF (Web Application Firewall, protects against SQLi/XSS on ALB, API Gateway, CloudFront).
-   **Threat Detection:** Amazon GuardDuty (intelligent threat discovery/machine learning), Amazon Inspector (automated security vulnerability assessments on EC2/ECR), AWS Security Hub (centralized security posture management).

### 1.3 Determine Data Security Controls
-   **AWS KMS (Key Management Service):** Create and manage cryptographic keys. envelope encryption pattern. Customer Managed Keys (CMK) vs AWS Managed Keys.
-   **AWS Secrets Manager:** Rotate, manage, and retrieve database credentials and API keys. Natively supports automatic rotation for RDS.
-   **AWS Systems Manager Parameter Store:** Secure, hierarchical storage for configuration data. Supports SecureString (via KMS).
-   **Amazon Macie:** Machine learning service that discovers, classifies, and protects sensitive data (PII) in Amazon S3.
`
  },
  {
    id: "saa-domain-2",
    title: "Domain 2: Design Resilient Architectures",
    weight: "26%",
    content: `
### 2.1 Scalable and Loosely Coupled Architectures
-   **Amazon SQS (Simple Queue Service):** Decouples components. Standard SQS (at-least-once, best-effort ordering) vs. FIFO SQS (exactly-once, strict ordering). Visibility timeout prevents duplicate processing. Dead-letter queues (DLQ) handle failed message processing.
-   **Amazon SNS (Simple Notification Service):** Pub/Sub messaging. Fan-out pattern (1 SNS topic pushes to multiple SQS queues or email/SMS endpoints).
-   **AWS Step Functions:** Serverless visual workflow orchestration. Used to sequence Lambda functions and coordinate complex, stateful microservices.
-   **Amazon API Gateway:** Create, maintain, and secure REST, HTTP, and WebSocket APIs. Features: Throttling, caching, edge-optimization, and WAF integration.

### 2.2 Highly Available and Fault-Tolerant Architectures
-   **Multi-AZ vs. Multi-Region:** Multi-AZ protects against data center failure (synchronous replication, high availability). Multi-Region protects against regional disasters (asynchronous, disaster recovery).
-   **Amazon Route 53 Routing Policies:** Simple (no health checks), Weighted (traffic distribution), Latency (closest region), Failover (Active-Passive DR), Geolocation (user location), Multivalue Answer (simple load balancing with health checks).
-   **Auto Scaling Groups (ASG):** Scales EC2 instances out/in based on metrics (e.g., CPU, SQS queue length). Scaling policies: Target Tracking (maintain metric), Step Scaling, Simple Scaling.
-   **Disaster Recovery (DR) Strategies:** 1) Backup & Restore (cheapest, slowest RTO), 2) Pilot Light (core services running but scaled down), 3) Warm Standby (scaled-down full environment), 4) Multi-Site Active/Active (most expensive, zero RTO/RPO).
`
  },
  {
    id: "saa-domain-3",
    title: "Domain 3: Design High-Performing Architectures",
    weight: "24%",
    content: `
### 3.1 High-Performing Storage Solutions
-   **Amazon S3:** Object storage. Use S3 Transfer Acceleration (uses CloudFront edge network for fast multi-part uploads) and S3 Byte-Range Fetches (parallel downloads).
-   **Amazon EBS (Elastic Block Store):** Block storage for EC2. gp2/gp3 (general purpose SSD), io1/io2 (Provisioned IOPS for extreme DB performance), st1 (throughput optimized HDD, big data), sc1 (cold HDD, cheap archive).
-   **Amazon EFS (Elastic File System):** Network File System (NFS), can be attached to 100s of EC2 instances simultaneously across multiple AZs. Linux only.
-   **Amazon FSx:** FSx for Windows File Server (SMB protocol, AD integration) and FSx for Lustre (HPC, machine learning, closely integrated with S3).
-   **EC2 Instance Store:** Ephemeral, ultra-high performance hardware storage physically attached to the host. Data is lost if the instance stops.

### 3.2 High-Performing Compute Solutions
-   **Amazon EC2 Instance Families:** Compute Optimized (C-series, for CPU-bound tasks), Memory Optimized (R/X/Z-series, for in-memory databases like Redis), Storage Optimized (I/D-series, high local I/O).
-   **AWS Lambda:** Serverless compute. Runs code responding to events. Pay per invocation and execution duration. Configure memory to proportionally increase CPU and network allocation.
-   **Containers:** Amazon ECS (Elastic Container Service) vs Amazon EKS (Elastic Kubernetes Service). AWS Fargate (serverless compute engine for containers, no EC2 instances to manage).

### 3.3 High-Performing Database Solutions
-   **Amazon RDS:** Managed RDBMS (MySQL, PostgreSQL). Multi-AZ for High Availability. Read Replicas (up to 5) for read-scaling (asynchronous replication).
-   **Amazon Aurora:** Cloud-native RDBMS. 5x MySQL performance. Storage automatically scales up to 128TB. 6 copies of data across 3 AZs. Aurora Global Database for cross-region reads. Aurora Serverless for unpredictable workloads.
-   **Amazon DynamoDB:** Serverless NoSQL key-value database. Single-digit millisecond latency. DynamoDB Accelerator (DAX) for microsecond read caching. Global Tables for active-active cross-region replication.
-   **Amazon ElastiCache:** In-memory caching (Redis for complex structures, pub/sub, persistence; Memcached for simple key/value caching). Unloads heavy read traffic from primary databases.

### 3.4 High-Performing Network Architectures
-   **Amazon CloudFront:** Global CDN. Caches static and dynamic content at edge locations. Protect origin using OAC (Origin Access Control). Lambda@Edge / CloudFront Functions for edge computing.
-   **AWS Global Accelerator:** Routes traffic through the AWS global network backbone, improving performance by up to 60%. Provides two anycast static IP addresses. Uses UDP/TCP (CloudFront is HTTP/HTTPS).
-   **Elastic Load Balancing:** ALB (Layer 7 HTTP/HTTPS, path/host routing, OIDC auth), NLB (Layer 4 TCP/UDP, ultra-high performance, static IP per AZ), GWLB (Layer 3 IP, virtual firewalls).

### 3.5 Data Ingestion and Analytics
-   **Amazon Kinesis:** Real-time data streaming. Kinesis Data Streams (manual scaling via shards, data retention), Kinesis Data Firehose (auto-scaling, load data into S3/Redshift/OpenSearch without custom code).
-   **Amazon Redshift:** Columnar, petabyte-scale data warehouse for OLAP (Online Analytical Processing) workloads.
-   **AWS Glue:** Serverless Data Integration and ETL (Extract, Transform, Load). Contains AWS Glue Data Catalog.
-   **Amazon Athena:** Serverless interactive query service. Write standard SQL to query data directly in Amazon S3. No clusters to manage.
`
  },
  {
    id: "saa-domain-4",
    title: "Domain 4: Design Cost-Optimized Architectures",
    weight: "20%",
    content: `
### 4.1 Cost-Optimized Storage
-   **Amazon S3 Storage Classes:** Standard (frequent), S3 Standard-IA (infrequent, retrieval fee), S3 One Zone-IA (non-critical reproducible data), S3 Glacier Flexible Retrieval (minutes/hours retrieval), S3 Glacier Deep Archive (12-48 hours, cheapest).
-   **S3 Intelligent-Tiering:** Automatically moves objects between access tiers based on changing access patterns to optimize costs without performance impact or operational overhead.
-   **S3 Lifecycle Policies:** Automate transitions to colder storage classes (e.g., Standard to IA after 30 days) and expire/delete old objects or old object versions.
-   **EBS Lifecycle Manager / Data Lifecycle Manager:** Automate the creation, retention, and deletion of EBS volume snapshots.

### 4.2 Cost-Optimized Compute
-   **On-Demand:** Default, pay-by-the-second. No long-term commitment. Good for spiky, unpredictable workloads.
-   **Reserved Instances / Savings Plans:** 1 or 3-year commitment. Up to 72% discount. Good for steady-state, predictable workloads.
-   **Spot Instances:** Up to 90% off. AWS can reclaim with 2-minute warning. Ideal for fault-tolerant, stateless, flexible, or batch processing workloads.
-   **AWS Compute Optimizer:** Uses machine learning to analyze historical utilization metrics and recommend optimal AWS compute resources (EC2, EBS, Lambda) to reduce costs and improve performance.

### 4.3 Cost-Optimized Network Architectures
-   **Data Transfer Costs:** Inbound data to AWS is free. Outbound data to the internet (DTO) is charged. Inter-AZ data transfer is charged. Try to keep traffic within the same availability zone or region where possible.
-   **VPC Endpoints (PrivateLink):** Avoid NAT Gateway data processing charges by routing traffic to AWS services (like S3, DynamoDB) directly through the AWS network using Gateway Endpoints (which are free).
-   **CloudFront vs. Data Transfer:** Using Amazon CloudFront to serve content to users over the internet can be cheaper than serving data directly out of S3 or EC2 due to different data transfer out pricing tiers.
`
  }
];
