export const cheatSheetDataCCP = [
  {
    title: "Domain 1: Cloud Concepts",
    weight: "24%",
    content: `
### 1.1 Define the benefits of the AWS Cloud
-   **Value Proposition:** AWS provides highly available, scalable, elasticity, agility, reliability, and secure cloud IT infrastructure.
-   **Global Infrastructure:** Deploy applications globally in minutes, lowering latency and improving user experience.
-   **High Availability & Elasticity:** Systems remain available despite failures (Multi-AZ). Elasticity allows provisioning resources to match demand (Auto Scaling).
-   **Agility:** Increase speed of innovation and reduce time to market by easily experimenting and provisioning resources.

### 1.2 Identify design principles of the AWS Cloud
-   **AWS Well-Architected Framework Pillars:** 
    1. Operational Excellence (run/monitor systems, continual improvement)
    2. Security (protect information/systems)
    3. Reliability (recover from failures, mitigate disruptions)
    4. Performance Efficiency (use compute resources efficiently)
    5. Cost Optimization (avoid unnecessary costs)
    6. Sustainability (minimize environmental impact)

### 1.3 Migration to the AWS Cloud
-   **AWS Cloud Adoption Framework (AWS CAF):** Helps organizations realize measurable business outcomes (reduced business risk, improved ESG performance, increased revenue, increased operational efficiency).
-   **Migration Strategies:** Methods like database replication (AWS DMS), and data transfer (AWS Snowball for petabyte-scale offline data transfer).

### 1.4 Concepts of Cloud Economics
-   **Fixed vs Variable Costs:** Move from capital expenses (CapEx - fixed server costs) to operational expenses (OpEx - variable, pay as you go).
-   **Right-sizing:** Choosing the lowest-cost instance type that meets performance requirements to eliminate waste.
-   **Licensing & Automation:** Bring Your Own License (BYOL) vs included licenses. Automation reduces manual effort and operation costs.
-   **Economies of Scale:** AWS achieves lower variable costs than you can get on your own because usage from hundreds of thousands of customers is aggregated.
`
  },
  {
    title: "Domain 2: Security and Compliance",
    weight: "30%",
    content: `
### 2.1 AWS Shared Responsibility Model
-   **Customer Responsibilities (Security IN the Cloud):** Customer data management, IAM (passwords/keys/permissions), OS patching, firewall configuration, encryption.
-   **AWS Responsibilities (Security OF the Cloud):** Global infrastructure (regions/AZs/edge locations), physical security of data centers, compute, storage, database, and networking hardware.
-   **Shifting Responsibilities:** Varies by service (e.g., EC2 = customer patches OS; RDS/Lambda = AWS patches OS/platform).

### 2.2 Cloud Security, Governance, and Compliance Concepts
-   **Compliance & Governance:** AWS Artifact is the go-to portal for on-demand access to AWS’ security and compliance reports.
-   **Encryption:** Data encryption in transit (TLS) and at rest (AWS KMS).
-   **Logging & Monitoring:** Amazon CloudWatch (monitoring metrics), AWS CloudTrail (auditing API calls), AWS Config (evaluating configurations).
-   **Securing Resources:** Amazon Inspector (automated vulnerability management), Amazon GuardDuty (intelligent threat detection), AWS Shield (DDoS protection), AWS Security Hub.

### 2.3 AWS Access Management Capabilities
-   **IAM (Identity and Access Management):** Create Users, Groups, Roles, and Policies. Follow the **Principle of Least Privilege**.
-   **Root User Account:** Use only for initial setup (like billing). Secure it with Multi-Factor Authentication (MFA). Never use for daily tasks.
-   **IAM Identity Center (AWS SSO):** Centrally manage access to multiple AWS accounts and business applications.
-   **Credentials:** Access keys (programmatic access), passwords (Console). Secrets Manager (secure password/credential rotation).

### 2.4 Components and Resources for Security
-   **Network Security:** AWS WAF (Web Application Firewall for HTTP/HTTPS filtering, SQLi, XSS), AWS Firewall Manager.
-   **Third-Party Tools:** Available on the AWS Marketplace.
-   **Advisories & Best Practices:** AWS Trusted Advisor (checks for cost, performance, security, fault tolerance, service limits), AWS Knowledge Center.
`
  },
  {
    title: "Domain 3: Cloud Technology and Services",
    weight: "34%",
    content: `
### 3.1 Provisioning and Operating
-   **Access Methods:** AWS Management Console (GUI), Command Line Interface (AWS CLI), Software Development Kits (AWS SDKs).
-   **Infrastructure as Code (IaC):** Methods to automate deployments (e.g., AWS CloudFormation).
-   **Deployment Models:** Cloud (all in AWS), Hybrid (AWS + on-premises), On-Premises (Private Cloud).

### 3.2 AWS Global Infrastructure
-   **Regions:** Physical locations around the world with multiple Availability Zones. Use multiple regions for disaster recovery and lower end-user latency.
-   **Availability Zones (AZs):** One or more discrete data centers with redundant power, networking, and connectivity. They do not share single points of failure.
-   **Edge Locations:** Used by Amazon CloudFront (CDN) to cache content closer to end-users for lower latency.

### 3.3 Compute Services
-   **Amazon EC2:** Virtual servers (compute optimized, memory optimized, storage optimized).
-   **Containers:** Amazon Elastic Container Service (ECS), Amazon Elastic Kubernetes Service (EKS). AWS Fargate (serverless compute for containers).
-   **Serverless Compute:** AWS Lambda (run code without managing servers, event-driven).
-   **Load Balancing & Auto Scaling:** Elastic Load Balancing distributes traffic. Auto Scaling dynamically matches capacity to demand.

### 3.4 Database Services
-   **Amazon RDS & Aurora:** Managed Relational Databases (SQL). Use for structured data.
-   **Amazon DynamoDB:** Managed NoSQL Database (key-value/document). Fast, single-digit millisecond latency.
-   **Amazon ElastiCache:** In-memory caching (Redis/Memcached) to speed up database queries.
-   **Migration:** AWS Database Migration Service (DMS), AWS Schema Conversion Tool (SCT).

### 3.5 Network Services
-   **Amazon VPC:** Logically isolated virtual network. Consists of subnets, internet gateways, NAT gateways.
-   **VPC Security:** Security Groups (stateful, instance level), Network ACLs (stateless, subnet level).
-   **Amazon Route 53:** Highly available and scalable Domain Name System (DNS) web service.
-   **Connectivity:** AWS Site-to-Site VPN, AWS Direct Connect (dedicated physical connection).

### 3.6 Storage Services
-   **Amazon S3:** Object storage. Storage classes include S3 Standard, S3 Standard-IA, S3 One Zone-IA, S3 Glacier Flexible Retrieval/Deep Archive.
-   **Amazon EBS:** Block storage attached to EC2 instances.
-   **Amazon EFS:** Managed network file system for Linux EC2 instances.
-   **AWS Storage Gateway:** Hybrid cloud storage service (connect on-premise apps to AWS storage).
-   **AWS Backup:** Centralized backup management.

### 3.7 AI/ML and Analytics Services
-   **AI/ML:** Amazon SageMaker (build/train/deploy ML models), Amazon Lex (voice and text chatbots), Amazon Kendra (intelligent enterprise search).
-   **Analytics:** Amazon Athena (query data in S3 using SQL), Amazon Kinesis (real-time data streaming), AWS Glue (serverless ETL), Amazon QuickSight (BI dashboards).

### 3.8 Other Services
-   **Integration:** Amazon EventBridge (serverless event bus), Amazon SNS (pub/sub notifications), Amazon SQS (message queues).
-   **Business:** Amazon Connect (cloud contact center), Amazon SES (email).
-   **Developer Tools:** AWS CodeBuild, AWS CodePipeline, AWS X-Ray (debugging).
-   **End-User Computing:** Amazon AppStream 2.0, Amazon WorkSpaces.
`
  },
  {
    title: "Domain 4: Billing, Pricing, and Support",
    weight: "12%",
    content: `
### 4.1 Compare AWS Pricing Models
-   **Amazon EC2 Pricing:** 
    -   *On-Demand:* Pay by the second/hour. No commitment. Predictable pricing.
    -   *Reserved Instances / Savings Plans:* 1 or 3-year commitment, significant discounts.
    -   *Spot Instances:* Spare capacity, massive discounts (up to 90%). Good for fault-tolerant, interruptible workloads.
    -   *Dedicated Hosts/Instances:* Physical servers dedicated to your use (compliance/licensing).
-   **Data Transfer Costs:** Data moving INTO AWS (inbound) is generally free. Data moving OUT of AWS (outbound/DTO) to the internet or outside regions accrues charges.
-   **Storage Pricing:** Pay for what you use based on storage tier, capacity, and retrieval costs (e.g., Glacier retrieval).

### 4.2 Resources for Billing, Budget, and Cost Management
-   **AWS Cost Explorer:** Visualize, understand, and manage your AWS costs and usage over time.
-   **AWS Budgets:** Set custom budgets that alert you when costs exceed a threshold.
-   **AWS Pricing Calculator:** Estimate the cost for an architecture solution proactively.
-   **AWS Organizations:** Provides consolidated billing (one bill for all accounts) and combined volume discounts.
-   **Cost Allocation Tags:** Organize costs across multiple services by tagging resources (e.g., Project: Alpha).

### 4.3 Technical Resources and AWS Support Options
-   **AWS Support Plans:** 
    1. *Basic:* Free. Includes billing support, limits increases, and 7 core Trusted Advisor checks.
    2. *Developer:* Business hours email access to Cloud Support Associates.
    3. *Business:* 24x7 phone/email/chat access to Cloud Support Engineers. Full Trusted Advisor subset.
    4. *Enterprise On-Ramp / Enterprise:* Designated Technical Account Manager (TAM), Concierge Support team. Response time < 15 mins for critical systems down.
-   **AWS Trusted Advisor:** Online tool that acts like a customized cloud expert to help provision resources following best practices.
-   **AWS Health Dashboard:** Provides alerts and remediation guidance when AWS is experiencing events that may impact you.
-   **AWS Partner Network (APN):** Independent software vendors and system integrators helping customers on AWS. Available on the AWS Marketplace.
-   **AWS Professional Services:** A global team of experts that can help you realize your desired business outcomes when using the AWS Cloud.
`
  }
];
