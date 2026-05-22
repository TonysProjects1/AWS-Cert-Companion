import { PracticeQuestion } from './practiceQuestionsData';

export const saaQuestionsBatch4: PracticeQuestion[] = [
  {
    id: "saa-q51",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company’s on-premises application is migrating to AWS. The application uses a tightly-coupled message broker running on RabbitMQ. The development team does not have time to rewrite the application logic to use HTTP-based queues like Amazon SQS, but they want AWS to manage the message broker. Which AWS service enables the easiest migration?",
    options: [
      { id: "a", text: "Amazon SQS", isCorrect: false, explanation: "Incorrect. SQS is an AWS-proprietary API and requires rewriting the application's producer/consumer code to use AWS SDKs instead of standard MQTT/AMQP protocols." },
      { id: "b", text: "Amazon MQ", isCorrect: true, explanation: "Correct. Amazon MQ is a managed message broker service fully compatible with Apache ActiveMQ and RabbitMQ. It allows migrating existing applications with almost no code rewrites." },
      { id: "c", text: "Amazon SNS", isCorrect: false, explanation: "Incorrect. SNS is a pub/sub notification system, not a compatible drop-in replacement for a RabbitMQ message broker." },
      { id: "d", text: "AWS Step Functions", isCorrect: false, explanation: "Incorrect. Step Functions orchestrate workflows; they do not function as persistent, protocol-compatible message brokers." }
    ]
  },
  {
    id: "saa-q52",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A startup provides a highly variable data-processing API built entirely on AWS Lambda and Amazon API Gateway. Traffic is usually close to zero but spikes unpredictably to thousands of requests per second. Which database service provides the cheapest zero-idle-cost model while absorbing extreme scaling without provisioning limits?",
    options: [
      { id: "a", text: "Amazon RDS Multi-AZ", isCorrect: false, explanation: "Incorrect. Standard RDS incurs significant standing hourly costs regardless of whether it is receiving traffic." },
      { id: "b", text: "Amazon DynamoDB with On-Demand Capacity", isCorrect: true, explanation: "Correct. DynamoDB On-Demand capacity charges exactly per read/write request with zero standing hourly compute fees. It scales instantly to accommodate massive, unpredictable spikes." },
      { id: "c", text: "Amazon Aurora Provisioned", isCorrect: false, explanation: "Incorrect. While highly scalable, a provisioned Aurora cluster still incurs steep hourly base compute costs." },
      { id: "d", text: "Amazon Redshift", isCorrect: false, explanation: "Incorrect. Redshift is a data warehouse requiring provisioned clusters (unless strictly using Serverless), but is not designed for synchronous API backend transactions." }
    ]
  },
  {
    id: "saa-q53",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A legacy healthcare application must upload sensitive PHI (Protected Health Information) files directly into Amazon S3. For compliance, the data must be encrypted immediately upon reaching the S3 bucket using AES-256, but the company explicitly refuses to manage or track any encryption keys themselves. Which encryption method MUST be enforced on the S3 bucket?",
    options: [
      { id: "a", text: "Client-Side Encryption", isCorrect: false, explanation: "Incorrect. Client-Side Encryption forces the company to manage the encryption algorithms and keys within their own application prior to uploading." },
      { id: "b", text: "Server-Side Encryption with Customer-Provided Keys (SSE-C)", isCorrect: false, explanation: "Incorrect. SSE-C explicitly requires the company to manage and provide keys with every HTTP upload request." },
      { id: "c", text: "Server-Side Encryption with AWS KMS (SSE-KMS)", isCorrect: false, explanation: "Incorrect. While an option, KMS requires managing KMS policies and occasionally key configuration (for CMKs)." },
      { id: "d", text: "Server-Side Encryption with Amazon S3 Managed Keys (SSE-S3)", isCorrect: true, explanation: "Correct. SSE-S3 automatically transparently encrypts all data using AES-256 where AWS completely manages both the encryption and the decryption keys natively, ensuring compliance with zero key management overhead for the company." }
    ]
  },
  {
    id: "saa-q54",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A company maintains an application spanning hundreds of EC2 instances. Every month, a massive batch-processing job runs. To ensure resilience and avoid manual configuration of new instances during traffic surges, instances are deployed in an Auto Scaling group. What determines exactly what software is installed on the EC2 instances when the Auto Scaling group dynamically creates them?",
    options: [
      { id: "a", text: "Amazon CloudWatch Alarms", isCorrect: false, explanation: "Incorrect. Alarms trigger the scaling action, but do not contain instructions on what software is installed on the newly created instances." },
      { id: "b", text: "An Amazon Machine Image (AMI) combined with EC2 User Data", isCorrect: true, explanation: "Correct. The Auto Scaling group Launch Template references an AMI (providing the base OS) and User Data (run-once bootstrap scripts) to fully configure and install application software upon boot." },
      { id: "c", text: "AWS Elastic Beanstalk configuration files", isCorrect: false, explanation: "Incorrect. While Beanstalk automates deployment, the raw foundation of how an ASG fundamentally provisions a standard EC2 instance relies on AMIs and User Data." },
      { id: "d", text: "Amazon SQS Queues", isCorrect: false, explanation: "Incorrect. SQS provides work queuing, it has absolutely no control over the OS-level provisioning of instances." }
    ]
  },
  {
    id: "saa-q55",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A global enterprise serves video files from Amazon S3. Users in Asia report slow download speeds because the bucket is hosted in us-east-1. Management wants to drastically accelerate the upload and download processes over long geographical distances utilizing the AWS Edge Network. Which S3 feature should be enabled?",
    options: [
      { id: "a", text: "S3 Cross-Region Replication", isCorrect: false, explanation: "Incorrect. While CRR moves data closer, it requires entirely duplicating the bucket and managing object synchronization across regions." },
      { id: "b", text: "S3 Transfer Acceleration", isCorrect: true, explanation: "Correct. Transfer Acceleration leverages Amazon CloudFront's globally distributed Edge Locations to vastly speed up in-transit data movement between clients and the central S3 bucket using the optimized AWS network backbone." },
      { id: "c", text: "S3 Intelligent-Tiering", isCorrect: false, explanation: "Incorrect. Intelligent-Tiering is a lifecycle pricing mechanism, it does not accelerate network transport speeds." },
      { id: "d", text: "AWS Direct Connect", isCorrect: false, explanation: "Incorrect. Direct Connect requires establishing physical fiber-optic connections to specific corporate data centers, taking months to set up, rather than accelerating public user web traffic." }
    ]
  },
  {
    id: "saa-q56",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "An application utilizes Amazon EFS for shared file storage across instances. Storage size has swelled to hundreds of terabytes. Analysis shows that 80% of files have not been accessed in over 90 days. The workload remains heavily read-intensive for new files. What represents the most cost-effective solution requiring zero application changes?",
    options: [
      { id: "a", text: "Enable Amazon EFS Lifecycle Management to transition unused files to EFS Infrequent Access (EFS IA).", isCorrect: true, explanation: "Correct. EFS Lifecycle Management seamlessly moves files not accessed for a specified period (e.g., 90 days) to the significantly cheaper EFS IA storage class, requiring absolutely no code rewrites or directory changes." },
      { id: "b", text: "Migrate the 90-day-old files manually to Amazon S3 Glacier using a cron job script.", isCorrect: false, explanation: "Incorrect. Moving files off the shared EFS mount alters file paths and breaks application logic requiring zero application changes." },
      { id: "c", text: "Change the EFS mode from Provisioned Throughput to Bursting Throughput.", isCorrect: false, explanation: "Incorrect. Changing throughput modes does not alter the fundamental storage costs of the aged terabytes." },
      { id: "d", text: "Compress the EFS volume using a third-party disk utility software.", isCorrect: false, explanation: "Incorrect. EFS is a managed service; unsupported manual disk-level volume compression utilities are not best practices or typically viable on EFS networks." }
    ]
  },
  {
    id: "saa-q57",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company's AWS root account was compromised. A malicious user launched massive EC2 fleets globally, resulting in a devastating bill. To prevent catastrophic financial damage, the Security team wants automatic threat evaluation that actively looks for anomalous behaviors, compromised IAM credentials, and unexpected API usage patterns throughout their environment. Which service provides this intelligent threat detection?",
    options: [
      { id: "a", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect. Amazon Macie primarily utilizes ML to discover and protect sensitive PII data natively within S3 repositories." },
      { id: "b", text: "Amazon Inspector", isCorrect: false, explanation: "Incorrect. Amazon Inspector scans EC2 instances and container images for software vulnerabilities and network exposure, but doesn't primarily evaluate anomalous behavioral IAM/API activities." },
      { id: "c", text: "Amazon GuardDuty", isCorrect: true, explanation: "Correct. Amazon GuardDuty is a continuous intelligent threat detection service that monitors CloudTrail logs, VPC Flow Logs, and DNS logs to identify unexpected/potentially unauthorized behavior and compromised credentials." },
      { id: "d", text: "AWS WAF", isCorrect: false, explanation: "Incorrect. WAF is a web firewall blocking HTTP web exploits, not an internal infrastructure threat tracker." }
    ]
  },
  {
    id: "saa-q58",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "An analytics application operates using multiple AWS Lambda functions coordinated to form a complex, multi-stage data processing pipeline. Processing a single job requires passing data sequentially through 5 different functions, with branching logic and conditional retries. The engineering team currently manages this state manually using nested Lambda calls, resulting in brittle error handling. Which AWS service is explicitly designed to coordinate this stateful workflow?",
    options: [
      { id: "a", text: "Amazon EventBridge", isCorrect: false, explanation: "Incorrect. EventBridge routes events, but does not inherently manage or track long-running execution state across sequential task operations." },
      { id: "b", text: "AWS Step Functions", isCorrect: true, explanation: "Correct. AWS Step Functions is a visual serverless workflow orchestrator explicitly designed to coordinate multiple AWS services (like Lambda) into resilient, stateful, auditable pipelines with native retry logic." },
      { id: "c", text: "Amazon SQS", isCorrect: false, explanation: "Incorrect. SQS provides decoupled queues, but is not a state machine orchestrator that natively determines conditional logic pathways between 5 distinct functions." },
      { id: "d", text: "Amazon SNS", isCorrect: false, explanation: "Incorrect. SNS creates loosely coupled fan-out notifications, incapable of pausing, tracking state, or executing conditional, sequential pipeline steps." }
    ]
  },
  {
    id: "saa-q59",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company’s corporate website experiences primarily read-heavy traffic accessing static HTML, CSS, and large high-resolution images. It is currently hosted entirely on a few small EC2 instances which struggle with performance during global peaks. The company wants to offload the EC2 instances entirely while significantly improving global loading times. What is the architecture best practice?",
    options: [
      { id: "a", text: "Migrate the static assets to an Amazon S3 bucket configured for Static Website Hosting, and distribute the site using Amazon CloudFront.", isCorrect: true, explanation: "Correct. S3 natively hosts static files perfectly without requiring operational EC2 maintenance. CloudFront completely offloads the S3 bucket by caching massive assets at global edge locations." },
      { id: "b", text: "Implement an Auto Scaling Group behind an Application Load Balancer.", isCorrect: false, explanation: "Incorrect. While this adds EC2 scalability, it does not achieve the goal of offloading/retiring the EC2 fleet entirely, nor does it natively distribute static assets to edge endpoints." },
      { id: "c", text: "Migrate the codebase to AWS Fargate instances.", isCorrect: false, explanation: "Incorrect. Fargate simply changes the compute paradigm to containers but still runs active compute. It's overkill for purely static HTML/CSS files." },
      { id: "d", text: "Implement Amazon ElastiCache to store the high-resolution images.", isCorrect: false, explanation: "Incorrect. ElastiCache is not designed to reliably serve giant binary files to external internet clients; it's a backend in-memory data store." }
    ]
  },
  {
    id: "saa-q60",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A firm operates a distributed fleet of 40 instances performing heavy scientific modeling. 30 of these instances operate constantly at an unvarying baseline 24/7/365. The remaining 10 instances are spun up completely dynamically on weekday mornings to aid in transient calculation jobs. Which combination of instance purchasing options provides the maximum cost savings?",
    options: [
      { id: "a", text: "Use 30 On-Demand instances, and 10 Spot instances.", isCorrect: false, explanation: "Incorrect. 24/7 unvarying baselines should never run on standard On-Demand pricing due to massive financial loss over a year." },
      { id: "b", text: "Purchase a 1-year or 3-year Compute Savings Plan covering the baseline of 30 instances, and use Spot instances for the remaining 10 transient instances.", isCorrect: true, explanation: "Correct. A Savings Plan slashes the continuous 24/7 baseline cost (up to 72%), while Spot instances absorb the transient, flexible compute load at up to a 90% discount." },
      { id: "c", text: "Run all 40 instances as Spot instances.", isCorrect: false, explanation: "Incorrect. If AWS reclaims Spot instances, the primary 30 baseline servers would be terminated, fatally disrupting the core continual workloads." },
      { id: "d", text: "Purchase Reserved Instances covering all 40 capacity needs.", isCorrect: false, explanation: "Incorrect. Buying Reserved Instances for 10 transient servers that are only awake for a few hours on weekdays throws money away on idle provisioned hours." }
    ]
  },
  {
    id: "saa-q61",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company’s regulatory department dictates that no user in any AWS account is permitted to turn off AWS CloudTrail logging. To ensure that regional administrators cannot accidentally or maliciously modify CloudTrail configurations, what should a Solutions Architect implement?",
    options: [
      { id: "a", text: "Create an IAM permissions boundary on every regional administrator's account.", isCorrect: false, explanation: "Incorrect. While a permissions boundary works individually, enforcing it reliably and uniformly across numerous global administrators manually is impossible at scale." },
      { id: "b", text: "Utilize AWS Organizations and apply a Service Control Policy (SCP) to the entire organization that denies the 'cloudtrail:StopLogging' action.", isCorrect: true, explanation: "Correct. SCPs apply globally across designated AWS Organization OUs and accounts. An SCP Deny rule trumps ANY IAM permissions, including root accounts in member accounts, ensuring no one can turn off CloudTrail." },
      { id: "c", text: "Launch Amazon Inspector to generate reports on CloudTrail status.", isCorrect: false, explanation: "Incorrect. Inspector evaluates workloads; it does not block API operational commands." },
      { id: "d", text: "Set CloudWatch Alarms to restart CloudTrail if it goes down.", isCorrect: false, explanation: "Incorrect. This is a reactive measure, meaning the logging is still temporarily broken, which violates the regulatory requirement of prevention." }
    ]
  },
  {
    id: "saa-q62",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A company operates an eCommerce store. When users place an order, an invoice generation module often fails due to upstream API bugs. Users frequently abandon the site if the UI hangs. The architecture team wants to separate the core checkout from the unreliable invoice module so the invoice generation can fail and retry indefinitely in the background without affecting the user. Which service acts as the resilient buffer?",
    options: [
      { id: "a", text: "Amazon SQS", isCorrect: true, explanation: "Correct. A queue decouples the two elements. The checkout places the command in SQS instantly and succeeds. If the invoice module dies processing the queue item, SQS will durably hold it and allow infinite retries." },
      { id: "b", text: "AWS Client VPN", isCorrect: false, explanation: "Incorrect. Client VPN handles networking, unrelated to architectural decoupling." },
      { id: "c", text: "Amazon DynamoDB", isCorrect: false, explanation: "Incorrect. While a database stores state, standard database rows do not intrinsically act as distributed, retry-capable message buffers with visibility timeouts like SQS." },
      { id: "d", text: "Amazon Kinesis Data Streams", isCorrect: false, explanation: "Incorrect. Kinesis creates a continuous time-ordered log stream. While possible, using SQS for discrete, retryable task-based messaging is the textbook architectural standard." }
    ]
  },
  {
    id: "saa-q63",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A financial modeling firm needs to run massive parallel simulations taking about 3 minutes each upon hundreds of thousands of independent data points. The simulation requires instant provisioning scaling from 0 to 1,000 independent compute nodes instantly, with absolutely zero infrastructure administration. What compute architecture satisfies these high-performance scaling requirements?",
    options: [
      { id: "a", text: "Deploy an Auto Scaling Group stretching across all Availability Zones.", isCorrect: false, explanation: "Incorrect. Even the fastest ASGs take many minutes to boot OS images, failing the requirement for 'instant provisioning from 0 to 1,000'." },
      { id: "b", text: "Implement AWS Lambda processing triggered by an SQS Queue.", isCorrect: true, explanation: "Correct. Lambda scales concurrently by thousands almost instantaneously and is entirely serverless (zero management), perfectly handling highly parallelized 3-minute functions." },
      { id: "c", text: "Configure Amazon Aurora Serverless.", isCorrect: false, explanation: "Incorrect. Aurora Serverless scales a relational database, it does not provide arbitrary compute simulation execution engines." },
      { id: "d", text: "Run instances on Dedicated Hosts.", isCorrect: false, explanation: "Incorrect. Dedicated hosts limit hardware flexibility and take intense manual configurations." }
    ]
  },
  {
    id: "saa-q64",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company’s microservices frequently transmit massive volumes of data directly to each other. Analysis of the monthly AWS bill reveals staggering 'Data Transfer Inside Region' costs. Upon review, the architect realizes the microservices in different Availability Zones communicate using Public IP addresses instead of internal network paths. How can these transfer costs be minimized instantly?",
    options: [
      { id: "a", text: "Configure the instances to communicate using their Private IPv4 addresses.", isCorrect: true, explanation: "Correct. Traffic between Private IP addresses inside the same AWS region falls under significantly cheaper intra-regional data rates compared to traffic routing out to Public IP addresses (which incurs higher penalties)." },
      { id: "b", text: "Deploy a NAT Gateway to funnel all traffic.", isCorrect: false, explanation: "Incorrect. NAT Gateways aggressively charge per gigabyte processed, significantly increasing the data transfer bill." },
      { id: "c", text: "Move all microservices into a single Availability Zone.", isCorrect: false, explanation: "Incorrect. This eliminates inter-AZ costs entirely, but utterly destroys High Availability standards by introducing a massive single point of failure." },
      { id: "d", text: "Wrap the traffic in IPsec VPN tunnels.", isCorrect: false, explanation: "Incorrect. Encapsulating traffic adds extreme compute overhead without alleviating the underlying AWS meter evaluating the outbound network pipes." }
    ]
  },
  {
    id: "saa-q65",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A healthcare startup must ensure data stored in an Amazon S3 bucket is natively compliant with WORM (Write Once, Read Many) policies, completely preventing any user—even the root account—from modifying or overriding objects for 5 years after upload. What feature ensures immutable object protection?",
    options: [
      { id: "a", text: "S3 Bucket Policies denying DeleteObject", isCorrect: false, explanation: "Incorrect. Bucket policies can be altered by administrators or the root account at any time to remove the restriction, defeating absolute WORM enforcement." },
      { id: "b", text: "S3 Object Lock configured in Compliance Mode.", isCorrect: true, explanation: "Correct. S3 Object Lock set to Compliance Mode physically prevents any user, including the root account, from modifying or overwriting objects until the configured retention term (5 years) has expired." },
      { id: "c", text: "S3 Versioning with MFA Delete enabled.", isCorrect: false, explanation: "Incorrect. MFA Delete requires an authenticator code to destroy a file, but it doesn't force absolute time-based WORM lock compliance; the administrator can still push the button." },
      { id: "d", text: "AWS Key Management Service (KMS).", isCorrect: false, explanation: "Incorrect. KMS handles cryptographic access rights, it does not intrinsically lock an object's file state from deletion." }
    ]
  },
  {
    id: "saa-q66",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "A developer builds an application hosted on an EC2 instance that frequently crashes due to memory leaks. The system goes unresponsive, but the EC2 hypervisor falsely reports the instance state as 'running'. A standard Auto Scaling group using default EC2 checks fails to replace the frozen instance. How can resilience be automatically restored?",
    options: [
      { id: "a", text: "Write an EventBridge rule that pings the instance every minute.", isCorrect: false, explanation: "Incorrect. This is overly complex custom code bypassing modern cloud features." },
      { id: "b", text: "Deploy the instance behind a Load Balancer and configure the Auto Scaling group to rely on ELB Health Checks.", isCorrect: true, explanation: "Correct. ELB Health Checks actively hit the application port (e.g., HTTP 200). If the app freezes due to a memory leak, it stops responding. The ELB warns the ASG to terminate the dead instance." },
      { id: "c", text: "Convert the instance to an EBS-Optimized instance.", isCorrect: false, explanation: "Incorrect. EBS-Optimization provides dedicated storage bandwidth, it does not fix hypervisor-blind application memory crashes." },
      { id: "d", text: "Use Amazon Inspector to reboot the freezing process.", isCorrect: false, explanation: "Incorrect. Inspector scans for security flaws; it is not an orchestration engine performing reboots." }
    ]
  },
  {
    id: "saa-q67",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A database runs on Amazon Aurora utilizing multiple Read Replicas. Recently, users report severe lagging in data synchronization across the different replicas during ultra-heavy traffic spikes. How does the core Aurora storage engine natively alleviate the typical MySQL 'replica lag' problem?",
    options: [
      { id: "a", text: "Aurora Replicas do not perform their own isolated storage writes; they share the exact same underlying distributed storage volume as the primary instance.", isCorrect: true, explanation: "Correct. By sharing the single underlying cloud-native storage layer concurrently, Aurora Read Replicas typically suffer single-digit millisecond latency because they do not have to synchronously replay binary logs over a network drive." },
      { id: "b", text: "Aurora intercepts web requests and routes them to ElastiCache.", isCorrect: false, explanation: "Incorrect. ElastiCache is an external service managed independently by the client application, not embedded into the base Aurora engine." },
      { id: "c", text: "Aurora Replicas are forced to use Provisioned IOPS (io2) block volumes.", isCorrect: false, explanation: "Incorrect. Aurora utilizes a proprietary distributed log-structured storage clustering layer spread across hundreds of independent storage nodes, it does not use discrete EBS volumes per replica." },
      { id: "d", text: "Aurora uses DynamoDB Accelerator (DAX) natively.", isCorrect: false, explanation: "Incorrect. DAX is specifically the caching engine for Amazon DynamoDB, entirely separate from Amazon Aurora RDBMS architecture." }
    ]
  },
  {
    id: "saa-q68",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A media streaming company needs to store a massive global library containing hundreds of thousands of high-definition video master files on Amazon S3. The access patterns are completely unpredictable; some videos go viral overnight, while others remain untouched for years. What S3 storage class requires zero operational tuning but minimizes unpredictable costs flawlessly?",
    options: [
      { id: "a", text: "S3 Standard", isCorrect: false, explanation: "Incorrect. Leaving everything in Standard forces the company to pay premium continuous rates for millions of files that might not be touched for years." },
      { id: "b", text: "S3 Intelligent-Tiering", isCorrect: true, explanation: "Correct. Intelligent-Tiering automatically monitors access patterns. It moves hot data to frequent tiers and rapidly shifts cold data into cheaper infrequent archive tiers silently, eliminating overhead." },
      { id: "c", text: "S3 One Zone-IA", isCorrect: false, explanation: "Incorrect. Storing master video templates in a single availability zone is highly irresponsible due to the risk of total data loss." },
      { id: "d", text: "S3 Glacier Deep Archive", isCorrect: false, explanation: "Incorrect. Deep Archive takes hours to return data explicitly. Viral videos would fail to stream immediately." }
    ]
  },
  {
    id: "saa-q69",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "An organization's networking team is creating an immensely complex AWS infrastructure composed of hundreds of transit gateways, VPNs, and nested VPC peered subnets. The security team needs a way to verify structurally that there are zero unencrypted network pathways from an untrusted public subnet directly into their sensitive financial private subnets. What service can trace and map this statically?",
    options: [
      { id: "a", text: "Amazon GuardDuty", isCorrect: false, explanation: "Incorrect. GuardDuty identifies active active hacking streams; it does not statically evaluate network structure diagrams." },
      { id: "b", text: "AWS Network Access Analyzer", isCorrect: true, explanation: "Correct. Network Access Analyzer identifies unintended network access pathways. It allows security teams to mathematically verify that a specific isolated network path is definitively secure against leaks BEFORE a hacker tests it." },
      { id: "c", text: "VPC Flow Logs", isCorrect: false, explanation: "Incorrect. Flow logs only record live packets moving through an ENI. It does not mathematically verify potential pathways of future traffic." },
      { id: "d", text: "AWS Shield", isCorrect: false, explanation: "Incorrect. Shield protects edges against volume-based DDoS, it knows nothing about complex internal subnet topology routing." }
    ]
  },
  {
    id: "saa-q70",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "An application runs heavily transactional operations against a relational database hosted on Amazon EC2. The company wants to migrate to Amazon RDS. Currently, the local EC2 database stores backups explicitly in the exact same Availability Zone. To maximize regional resilience, where should the RDS automated backups be physically stored?",
    options: [
      { id: "a", text: "Backups should be stored on Amazon EBS locally connected to the primary RDS node.", isCorrect: false, explanation: "Incorrect. Keeping backups on the local block volume defeats the purpose of backups; if the node dies, the backup dies." },
      { id: "b", text: "Backups are automatically managed by AWS and stored efficiently and durably in Amazon S3.", isCorrect: true, explanation: "Correct. Amazon RDS automatically ships all automated snapshots and transaction logs to standard Amazon S3 in the background. Because S3 is a regional service spanning multiple independent AZs natively, the backups are extraordinarily resilient to single-AZ destruction." },
      { id: "c", text: "Backups should be placed into AWS Storage Gateway.", isCorrect: false, explanation: "Incorrect. Storage Gateway connects on-premises networks to AWS storage; it is rarely used internally purely for native RDS." },
      { id: "d", text: "Backups should be shipped to DynamoDB tables.", isCorrect: false, explanation: "Incorrect. Relational DB binary snapshot files absolutely should not be serialized into NoSQL DynamoDB tables." }
    ]
  },
  {
    id: "saa-q71",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "An analytics application parses terabytes of text files generated by an IoT system every night. The raw IoT files reside in Amazon S3. The development team wishes to write advanced serverless SQL queries to slice and analyze this IoT telemetry effortlessly without booting up a highly expensive Redshift data warehouse cluster. Which serverless service performs interactive SQL specifically against raw S3 files natively?",
    options: [
      { id: "a", text: "Amazon OpenSearch Service", isCorrect: false, explanation: "Incorrect. OpenSearch is primarily an ELK/Lucene-based logging and enterprise search engine, not a pure serverless SQL query platform." },
      { id: "b", text: "Amazon Athena", isCorrect: true, explanation: "Correct. Amazon Athena allows you to run SQL queries instantly on raw unstructured data (CSV, JSON, Parquet) sitting in S3 without managing database clusters or indexing." },
      { id: "c", text: "AWS Elastic Beanstalk", isCorrect: false, explanation: "Incorrect. Elastic Beanstalk deploys custom web applications, it offers no native SQL parsing abilities." },
      { id: "d", text: "Amazon RDS", isCorrect: false, explanation: "Incorrect. RDS is an RDBMS that requires importing the terabytes of files heavily into internal tables before SQL works, breaking the serverless 'raw S3' query requirement." }
    ]
  },
  {
    id: "saa-q72",
    domainId: "saa-domain-4",
    domainName: "Design Cost-Optimized Architectures",
    question: "A company’s development team constantly deploys hundreds of AWS Elastic Beanstalk environments for testing purposes. Over the weekend, developers frequently forget to tear down their test environments, resulting in thousands of dollars in wasted compute expenses. Which cost-optimization mechanism ensures the temporary test environments are disabled quickly when untouched?",
    options: [
      { id: "a", text: "Enable AWS Compute Optimizer to terminate unloved instances.", isCorrect: false, explanation: "Incorrect. Compute Optimizer simply offers resizing dashboard charts. It performs no proactive termination actions." },
      { id: "b", text: "Set up an AWS Budgets action configured to alert when a spending limit is exceeded.", isCorrect: false, explanation: "Incorrect. An alert just triggers an email. Someone still has to wake up on the weekend and manually dismantle environments." },
      { id: "c", text: "Implement an AWS Systems Manager or EventBridge automation script to spin down environments based on tagging on Fridays.", isCorrect: true, explanation: "Correct. Automating aggressive start/stop schedules against non-production developer workloads tagged appropriately handles the problem inherently and ruthlessly efficiently." },
      { id: "d", text: "Implement Amazon Cognito limitations.", isCorrect: false, explanation: "Incorrect. Cognito handles front-end user auth for apps, not internal AWS resource lifecycles." }
    ]
  },
  {
    id: "saa-q73",
    domainId: "saa-domain-1",
    domainName: "Design Secure Architectures",
    question: "A company’s application runs on AWS Fargate. It dynamically downloads credentials to establish a connection with a third-party payment gateway. These credentials must be encrypted aggressively, automatically rotated every 30 days without application downtime, and tracked via detailed audit trails in CloudTrail. Which AWS service is engineered precisely for this complex requirement?",
    options: [
      { id: "a", text: "AWS Systems Manager Parameter Store (SecureString)", isCorrect: false, explanation: "Incorrect. While SecureString safely encrypts data, Parameter Store relies on users to manually update the text. It contains no native 'automatic rotation' engine." },
      { id: "b", text: "AWS Key Management Service (KMS) Custom Key Store", isCorrect: false, explanation: "Incorrect. KMS manages the cryptographic scrambling keys used to lock strings. It does not store the raw textual DB credentials themselves." },
      { id: "c", text: "AWS Secrets Manager", isCorrect: true, explanation: "Correct. Secrets Manager specifically encrypts secrets, logs all retrievals in CloudTrail, and features a robust native capability to trigger Lambdas rotating the physical payloads on a rigid calendar completely automatically." },
      { id: "d", text: "AWS Certificate Manager (ACM)", isCorrect: false, explanation: "Incorrect. ACM handles SSL/TLS certificates exclusively for web servers, not programmatic application connection string payloads." }
    ]
  },
  {
    id: "saa-q74",
    domainId: "saa-domain-2",
    domainName: "Design Resilient Architectures",
    question: "An e-commerce architecture relies on Amazon SQS to buffer orders. Some orders contain deeply malformed or invalid JSON payloads originating from legacy bugged mobile applications. The consumer Lambda function continuously crashes when encountering these malformed items, freezing the queue's progress until the visibility timeout lapses. How can the developer keep the queue flowing resiliently while isolating the bugs?",
    options: [
      { id: "a", text: "Expand the Visibility Timeout of the main queue to 12 hours.", isCorrect: false, explanation: "Incorrect. Expanding the timeout delays the inevitable crash and leaves the main thread repeatedly hammering the same failed poison pill message." },
      { id: "b", text: "Attach a Dead-Letter Queue (DLQ) configured through the Redrive Policy.", isCorrect: true, explanation: "Correct. A DLQ catches bad messages. You configure a Redrive Policy indicating 'after 3 failures, move this message out of the main queue instantly into the DLQ'. This allows processing of healthy orders to resume smoothly." },
      { id: "c", text: "Shift the queue architecture from Standard SQS to FIFO SQS.", isCorrect: false, explanation: "Incorrect. In FIFO queues, a poison pill will disastrously block the strict order stream forever. FIFO exacerbates the impact of malformed messages." },
      { id: "d", text: "Use Amazon S3 to store JSON orders.", isCorrect: false, explanation: "Incorrect. S3 is designed to hold objects, it is not an event-streaming decoupling processor." }
    ]
  },
  {
    id: "saa-q75",
    domainId: "saa-domain-3",
    domainName: "Design High-Performing Architectures",
    question: "A company’s on-premises Active Directory handles thousands of employee logins globally. The architecture team wants to migrate internal HR applications to AWS. The applications run on EC2 Windows instances and require seamless Microsoft Active Directory integration. The company absolutely refuses to maintain, patch, or configure dual Windows Server machines manually. Which service provides a fast, fully managed Windows Domain Controller architecture in the cloud?",
    options: [
      { id: "a", text: "AWS Managed Microsoft AD", isCorrect: true, explanation: "Correct. AWS Managed Microsoft AD is a native Windows Active Directory environment deployed across multiple AZs. AWS handles all patching, AD database synchronization, and domain controller upkeep, meeting the requirement of seamless AD connectivity without manual OS management." },
      { id: "b", text: "AWS IAM Identity Center (Successor to AWS SSO)", isCorrect: false, explanation: "Incorrect. Identity Center excels at federating user access centrally to disparate apps, but it doesn't run the underlying native Microsoft Active Directory domain controllers serving actual Windows machine domain-joins inside EC2 subnets." },
      { id: "c", text: "Amazon Cognito", isCorrect: false, explanation: "Incorrect. Cognito utilizes JWT tokens built for B2C public web app sign-in scenarios; it does NOT connect deeply to corporate Windows OS AD domain structures." },
      { id: "d", text: "AWS Directory Service Simple AD", isCorrect: false, explanation: "Incorrect. Simple AD is a Samba-based imitation of AD suitable for basic endpoints, but the requirements demand genuine Microsoft AD functionality without patching servers." }
    ]
  }
];
