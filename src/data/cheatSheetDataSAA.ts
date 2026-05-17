export const cheatSheetDataSAA = [
  {
    id: "saa-domain-1",
    title: "Domain 1: Design Secure Architectures",
    weight: "30%",
    content: `
### 1.1 Design Secure Access
*   **AWS IAM:** Manage access to AWS services and resources securely. Create users, groups, roles, and policies.
*   **AWS Organizations:** Centrally manage and govern your environment as it grows.
*   **Service Control Policies (SCPs):** Provide central control over the maximum available permissions for all accounts in your organization.

### 1.2 Design Secure Workloads
*   **Amazon VPC:** Logically isolated network. Use Security Groups (stateful, instance level) and Network ACLs (stateless, subnet level).
*   **AWS WAF:** Protect against common web exploits like SQL injection and cross-site scripting (XSS).
*   **AWS Shield:** Managed Distributed Denial of Service (DDoS) protection.

### 1.3 Determine Data Security Controls
*   **AWS KMS:** Key Management Service to create and manage cryptographic keys.
*   **AWS Secrets Manager:** Rotate, manage, and retrieve database credentials, API keys, and other secrets through their lifecycle.
`
  },
  {
    id: "saa-domain-2",
    title: "Domain 2: Design Resilient Architectures",
    weight: "26%",
    content: `
### 2.1 Scalable and Loosely Coupled Architectures
*   **Amazon SQS:** Fully managed message queuing to decouple microservices and distributed systems.
*   **Amazon SNS:** Fully managed structured pub/sub messaging.
*   **AWS Lambda:** Serverless compute to run code without provisioning or managing servers.

### 2.2 Highly Available Architectures
*   **Amazon Route 53:** Highly available and scalable cloud DNS web service.
*   **Auto Scaling:** Automatically adjust capacity to maintain steady, predictable performance.
`
  },
  {
    id: "saa-domain-3",
    title: "Domain 3: Design High-Performing Architectures",
    weight: "24%",
    content: `
### 3.1 High-Performing Storage
*   **Amazon S3:** Object storage built to store and retrieve any amount of data from anywhere.
*   **Amazon EBS:** Block-level storage volumes for EC2 instances.
*   **Amazon EFS:** Scalable, elastic, cloud-native NFS file system for Linux EC2 instances.

### 3.2 High-Performing Compute
*   **Amazon EC2:** Virtual servers in the cloud. Choose instance families based on workload (Compute Optimized, Memory Optimized, etc.).

### 3.3 High-Performing Database Solutions
*   **Amazon RDS:** Managed relational databases (MySQL, PostgreSQL, etc.). Use read replicas for scaling read operations, multi-AZ for high availability.
*   **Amazon Aurora:** High-performance, fully managed, MySQL- and PostgreSQL-compatible relational database.
*   **Amazon DynamoDB:** Fully managed, serverless, NoSQL database with single-digit millisecond latency.
*   **Amazon ElastiCache:** In-memory caching service (Redis, Memcached) to accelerate application performance.

### 3.4 High-Performing Network Architectures
*   **AWS Global Accelerator:** Improves availability and performance of applications with local or global users.
*   **Amazon CloudFront:** Fast content delivery network (CDN) service.
*   **Elastic Load Balancing (ELB):** Automatically distributes incoming application traffic across multiple targets.
*   **AWS Direct Connect:** Dedicated network connection from your premises to AWS.

### 3.5 High-Performing Data Ingestion and Transformation
*   **Amazon Kinesis:** Collect, process, and analyze real-time streaming data.
*   **AWS Glue:** Serverless data integration service (ETL - Extract, Transform, Load).
*   **Amazon EMR:** Big data platform for processing vast amounts of data using open source tools like Hadoop, Spark.
`
  },
  {
    id: "saa-domain-4",
    title: "Domain 4: Design Cost-Optimized Architectures",
    weight: "20%",
    content: `
### 4.1 Cost-Optimized Storage
*   **S3 Storage Classes:** Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive.
*   **S3 Lifecycle Policies:** Automate transitions between storage classes to save money.

### 4.2 Cost-Optimized Compute
*   **Purchasing Options:** On-Demand, Reserved Instances (for steady state), Savings Plans, Spot Instances (for fault-tolerant, interruptible workloads).
*   **AWS Compute Optimizer:** Recommends optimal AWS compute resources to reduce costs and improve performance.

### 4.3 Cost-Optimized Database Solutions
*   **Capacity Planning:** Right-size instances; pause Amazon Aurora Serverless when unused.
*   **Managed Services:** Leveraging managed databases (like RDS/DynamoDB) to reduce administrative overhead and licensing costs.

### 4.4 Cost-Optimized Network Architectures
*   **Data Transfer Costs:** Keep traffic within the same availability zone or region where possible. 
*   **NAT Gateway vs NAT Instance:** Manage outbound traffic costs; minimize cross-region data transfer.
*   **Amazon CloudFront:** Use edge caching to reduce data transfer out (DTO) from origin servers like S3 or EC2.
`
  }
];
