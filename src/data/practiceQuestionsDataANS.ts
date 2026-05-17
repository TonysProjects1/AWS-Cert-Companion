import { PracticeQuestion } from './practiceQuestionsData';

export const practiceQuestionsDataANS: PracticeQuestion[] = [
  {
    id: "ans-q1",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "A company wants to connect its on-premises data center to AWS using a dedicated network connection. Which service should they use?",
    options: [
      { id: 'ans-q1-o1', text: "AWS Site-to-Site VPN", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q1-o2', text: "AWS Direct Connect", isCorrect: true, explanation: "AWS Direct Connect provides a dedicated, private connection between your on-premises data center and AWS, bypassing the public internet." },
      { id: 'ans-q1-o3', text: "AWS Transit Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q1-o4', text: "AWS PrivateLink", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q2",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "You are designing a hybrid DNS resolution strategy. Instances in your VPC need to resolve names hosted on your on-premises DNS servers. What should you use?",
    options: [
      { id: 'ans-q2-o1', text: "Route 53 Resolver Inbound Endpoint", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q2-o2', text: "Route 53 Public Hosted Zone", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q2-o3', text: "Route 53 Resolver Outbound Endpoint", isCorrect: true, explanation: "Route 53 Resolver Outbound Endpoints allow DNS queries to be forwarded from VPCs to on-premises DNS resolvers." },
      { id: 'ans-q2-o4', text: "Amazon CloudFront", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q3",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "You want to inspect all inbound and outbound traffic on an EC2 instance's elastic network interface (ENI) for deep packet inspection. Which feature should you enable?",
    options: [
      { id: 'ans-q3-o1', text: "VPC Flow Logs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q3-o2', text: "VPC Traffic Mirroring", isCorrect: true, explanation: "VPC Traffic Mirroring allows you to copy network traffic from an ENI and send it to out-of-band security and monitoring appliances for deep packet inspection." },
      { id: 'ans-q3-o3', text: "AWS WAF", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q3-o4', text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q4",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "A web application requires protection from common web exploits and vulnerabilities such as SQL injection. Which AWS service should be attached to the Application Load Balancer?",
    options: [
      { id: 'ans-q4-o1', text: "AWS Shield Advanced", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q4-o2', text: "AWS WAF", isCorrect: true, explanation: "AWS WAF is a web application firewall that protects web applications from common web exploits, such as SQL injection and cross-site scripting." },
      { id: 'ans-q4-o3', text: "AWS Network Firewall", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q4-o4', text: "Security Groups", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q5",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "Which service leverages AWS's global network and uses anycast IP addresses to improve the performance of your users' traffic by up to 60%?",
    options: [
      { id: 'ans-q5-o1', text: "Amazon CloudFront", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q5-o2', text: "AWS Global Accelerator", isCorrect: true, explanation: "AWS Global Accelerator provides two static anycast IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, routing traffic over the AWS global network." },
      { id: 'ans-q5-o3', text: "Amazon API Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q5-o4', text: "AWS Transit Gateway", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q6",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "A company has thousands of VPCs and needs to simplify their network topology by connecting them in a hub-and-spoke manner. Which service is best suited?",
    options: [
      { id: 'ans-q6-o1', text: "VPC Peering", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q6-o2', text: "AWS Direct Connect Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q6-o3', text: "AWS Transit Gateway", isCorrect: true, explanation: "AWS Transit Gateway acts as a central hub to connect VPCs and on-premises networks, simplifying complex peering relationships." },
      { id: 'ans-q6-o4', text: "AWS PrivateLink", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q7",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "To maximize network throughput over a Direct Connect connection, what should you configure on the instances and customer gateway?",
    options: [
      { id: 'ans-q7-o1', text: "Path MTU Discovery", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q7-o2', text: "Jumbo Frames (MTU 9001)", isCorrect: true, explanation: "Jumbo frames (MTU 9001) reduce the overhead of packet fragmentation, improving performance for high-throughput connections like DX and intra-VPC traffic." },
      { id: 'ans-q7-o3', text: "ECMP routing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q7-o4', text: "BGP metric tuning", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q8",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "Which Layer 2 encryption technology can be used to secure data over dedicated AWS Direct Connect connections?",
    options: [
      { id: 'ans-q8-o1', text: "IPsec", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q8-o2', text: "TLS", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q8-o3', text: "MACsec", isCorrect: true, explanation: "MACsec (Media Access Control Security) operates at Layer 2 and can encrypt data transitioning over 10Gbps or 100Gbps dedicated Direct Connect connections." },
      { id: 'ans-q8-o4', text: "SSL", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q9",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "You want to distribute traffic evenly across healthy targets in multiple Availability Zones. Which feature of an ALB should you ensure is enabled?",
    options: [
      { id: 'ans-q9-o1', text: "Server Name Indication (SNI)", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q9-o2', text: "Cross-Zone Load Balancing", isCorrect: true, explanation: "Cross-zone load balancing distributes traffic evenly across all registered and healthy targets in all enabled Availability Zones." },
      { id: 'ans-q9-o3', text: "Sticky Sessions", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q9-o4', text: "Connection Draining", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q10",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "What protocol does Transit Gateway Connect use to establish SD-WAN integration with AWS Transit Gateway?",
    options: [
      { id: 'ans-q10-o1', text: "IPsec over BGP", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q10-o2', text: "GRE and BGP", isCorrect: true, explanation: "Transit Gateway Connect uses Generic Routing Encapsulation (GRE) tunnels and BGP for dynamic routing to natively integrate SD-WAN appliances." },
      { id: 'ans-q10-o3', text: "VXLAN", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q10-o4', text: "MPLS", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q11",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "An application team reports intermittent connectivity issues to a specific VPC endpoint. Which AWS tool can trace the network path and verify if security groups or route tables are blocking traffic?",
    options: [
      { id: 'ans-q11-o1', text: "VPC Flow Logs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q11-o2', text: "VPC Reachability Analyzer", isCorrect: true, explanation: "Reachability Analyzer is a configuration analysis tool that enables you to perform connectivity testing between a source and destination in your VPCs." },
      { id: 'ans-q11-o3', text: "AWS X-Ray", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q11-o4', text: "Transit Gateway Network Manager", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q12",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "A security policy requires all inter-VPC traffic to be inspected by stateful intrusion prevention systems without changing the route table of every subnet. Which pattern is recommended?",
    options: [
      { id: 'ans-q12-o1', text: "VPC Peering with Security Groups", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q12-o2', text: "Gateway Load Balancer and third-party appliances", isCorrect: true, explanation: "Gateway Load Balancer (GWLB) allows you to easily deploy and scale third-party virtual network appliances (like firewalls/IPS) transparently at Layer 3." },
      { id: 'ans-q12-o3', text: "AWS Global Accelerator", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q12-o4', text: "Route 53 conditional forwarding", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q13",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "A customer wants a highly available load balancer to route traffic to independent applications based on the URL path. Which service should they choose?",
    options: [
      { id: 'ans-q13-o1', text: "Application Load Balancer", isCorrect: true, explanation: "Application Load Balancer (ALB) operates at Layer 7 and supports advanced routing features, such as path-based and host-based routing." },
      { id: 'ans-q13-o2', text: "Network Load Balancer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q13-o3', text: "Gateway Load Balancer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q13-o4', text: "Classic Load Balancer", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q14",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "You are designing an AWS network where multiple customer AWS accounts need to consume an API service privately without internet exposure. The IP ranges of consumer VPCs are unknown and may overlap. How should you expose the service?",
    options: [
      { id: 'ans-q14-o1', text: "VPC Peering", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q14-o2', text: "AWS Transit Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q14-o3', text: "AWS PrivateLink", isCorrect: true, explanation: "AWS PrivateLink enables private connectivity between VPCs and AWS services without exposing traffic to the public internet, and it gracefully handles overlapping IP CIDRs." },
      { id: 'ans-q14-o4', text: "AWS Site-to-Site VPN", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q15",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "Which managed service provides a centralized dashboard to visualize, monitor, and troubleshoot your global AWS and on-premises network?",
    options: [
      { id: 'ans-q15-o1', text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q15-o2', text: "Transit Gateway Network Manager", isCorrect: true, explanation: "Transit Gateway Network Manager gives you a consolidated view of your global network across AWS regions and on-premises locations." },
      { id: 'ans-q15-o3', text: "Route 53 Health Checks", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q15-o4', text: "AWS Config", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q16",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "Which service offers centralized management of firewall rules, AWS WAF rules, and Amazon VPC security groups across multiple AWS accounts?",
    options: [
      { id: 'ans-q16-o1', text: "AWS Network Firewall", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q16-o2', text: "AWS Firewall Manager", isCorrect: true, explanation: "AWS Firewall Manager simplifies administration and maintenance tasks across multiple accounts and resources by providing a central place to configure security rules." },
      { id: 'ans-q16-o3', text: "AWS Control Tower", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q16-o4', text: "AWS Security Hub", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q17",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "To resolve DNS queries originating from an on-premises network for names hosted in an AWS Private Hosted Zone, what must be configured?",
    options: [
      { id: 'ans-q17-o1', text: "Route 53 Resolver Inbound Endpoint", isCorrect: true, explanation: "Route 53 Resolver Inbound Endpoints receive DNS queries from on-premises networks and forward them to the VPC resolver." },
      { id: 'ans-q17-o2', text: "Route 53 Resolver Outbound Endpoint", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q17-o3', text: "DNSSEC", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q17-o4', text: "Public Hosted Zone", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q18",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "When implementing BGP over an AWS Site-to-Site VPN connection, what is the default routing behavior if multiple tunnels are active?",
    options: [
      { id: 'ans-q18-o1', text: "Active/Passive", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q18-o2', text: "Equal-Cost Multi-Path (ECMP)", isCorrect: true, explanation: "If you configure a VPN connection on a Transit Gateway, AWS supports ECMP and will distribute traffic across multiple active tunnels." },
      { id: 'ans-q18-o3', text: "Asymmetric Routing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q18-o4', text: "Source-Based Routing", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q19",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "What log type contains information about the source/destination IPs, ports, and action (ACCEPT/REJECT) for traffic entering or leaving a subnet but does NOT contain payload data?",
    options: [
      { id: 'ans-q19-o1', text: "CloudTrail Logs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q19-o2', text: "VPC Flow Logs", isCorrect: true, explanation: "VPC Flow Logs capture metadata about IP traffic going to and from network interfaces in a VPC." },
      { id: 'ans-q19-o3', text: "ALB Access Logs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q19-o4', text: "Route 53 Query Logs", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q20",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "A web application requires TLS mutual authentication (mTLS). Where should the mTLS termination occur?",
    options: [
      { id: 'ans-q20-o1', text: "Application Load Balancer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q20-o2', text: "Amazon CloudFront", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q20-o3', text: "Network Load Balancer (configured for passthrough)", isCorrect: true, explanation: "ALB does not currently support mTLS natively. To support mTLS, you must use a Network Load Balancer (with TCP listener) to pass traffic to the instances, or terminate mTLS on an API Gateway." },
      { id: 'ans-q20-o4', text: "AWS Global Accelerator", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q21",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "Which Route 53 routing policy evaluates the health of multiple endpoints and routes traffic to the primary resource unless it goes unhealthy, at which point it routes to a secondary resource?",
    options: [
      { id: 'ans-q21-o1', text: "Simple Routing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q21-o2', text: "Failover Routing", isCorrect: true, explanation: "Failover routing lets you route traffic to a resource when the resource is healthy or to a different resource when the first resource is unhealthy (Active/Passive)." },
      { id: 'ans-q21-o3', text: "Latency Routing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q21-o4', text: "Weighted Routing", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q22",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "You are setting up network infrastructure via Infrastructure as Code. You want to avoid hardcoding IP addresses in your stacks. What AWS CloudFormation feature can help reference values from other stacks?",
    options: [
      { id: 'ans-q22-o1', text: "Mappings", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q22-o2', text: "Conditions", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q22-o3', text: "Cross-Stack References (Export/ImportValue)", isCorrect: true, explanation: "Cross-stack references allow you to export values like VPC IDs or Subnet IDs from one stack and import them into another." },
      { id: 'ans-q22-o4', text: "StackSets", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q23",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "Which tool automatically generates metrics by analyzing your VPC Flow Logs without you needing to send them to external systems?",
    options: [
      { id: 'ans-q23-o1', text: "CloudWatch Contributor Insights", isCorrect: true, explanation: "CloudWatch Contributor Insights can be used to analyze VPC Flow Logs and create time-series displays of top contributors to traffic." },
      { id: 'ans-q23-o2', text: "Transit Gateway Network Manager", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q23-o3', text: "Macie", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q23-o4', text: "AWS X-Ray", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q24",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "A customer wants to enforce that no one can change a Security Group rule without triggering an automated rollback. Which service enables automated remediation of non-compliant configurations?",
    options: [
      { id: 'ans-q24-o1', text: "AWS Config Rules", isCorrect: true, explanation: "AWS Config Rules can continuously monitor resources and can be paired with Systems Manager Automation documents to automatically remediate non-compliant resources." },
      { id: 'ans-q24-o2', text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q24-o3', text: "Amazon GuardDuty", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q24-o4', text: "AWS WAF", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q25",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "Which load balancer operates primarily at Layer 4 (TCP/UDP) and provides ultra-high performance and a static IP per subnet?",
    options: [
      { id: 'ans-q25-o1', text: "Application Load Balancer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q25-o2', text: "Network Load Balancer", isCorrect: true, explanation: "The Network Load Balancer (NLB) provides high throughput, ultra-low latency, and assigns a static IP address in each Availability Zone." },
      { id: 'ans-q25-o3', text: "Gateway Load Balancer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q25-o4', text: "Classic Load Balancer", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q26",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "You want to share an AWS Transit Gateway created in an infrastructure account with multiple other AWS accounts in your organization. What service makes this possible?",
    options: [
      { id: 'ans-q26-o1', text: "AWS Single Sign-On", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q26-o2', text: "AWS IAM", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q26-o3', text: "AWS Resource Access Manager (RAM)", isCorrect: true, explanation: "AWS Resource Access Manager (RAM) enables sharing specific AWS resources, like Transit Gateways or subnets, across AWS accounts or within an AWS Organization." },
      { id: 'ans-q26-o4', text: "AWS Directory Service", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q27",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "If multiple VPN connections are attached to an AWS Transit Gateway, how can you aggregate their bandwidth?",
    options: [
      { id: 'ans-q27-o1', text: "By enabling Equal-Cost Multi-Path (ECMP)", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q27-o2', text: "By configuring BGP multipath on the Customer Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q27-o3', text: "Both ECMP and BGP multipath must be configured", isCorrect: true, explanation: "To aggregate VPN tunnel bandwidth via Transit Gateway, you must enable ECMP on the TGW and configure multipath BGP on your customer gateway." },
      { id: 'ans-q27-o4', text: "VPN bandwidth cannot be aggregated", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q28",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "An application requires protection against DNS spoofing. Which feature should you enable for your domain in Route 53?",
    options: [
      { id: 'ans-q28-o1', text: "DNSSEC", isCorrect: true, explanation: "DNSSEC provides cryptographic authentication of DNS data to protect against DNS spoofing and man-in-the-middle attacks." },
      { id: 'ans-q28-o2', text: "Route 53 Resolver", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q28-o3', text: "Route 53 Health Checks", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q28-o4', text: "Private Hosted Zones", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q29",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "You have two VPCs in different regions (us-east-1 and eu-west-1). What is the simplest way to establish a private network connection between them?",
    options: [
      { id: 'ans-q29-o1', text: "AWS Direct Connect", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q29-o2', text: "Inter-Region VPC Peering", isCorrect: true, explanation: "Inter-Region VPC Peering is a simple and cost-effective way to connect two VPCs in different regions without requiring gateways or VPN tunnels." },
      { id: 'ans-q29-o3', text: "AWS Site-to-Site VPN", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q29-o4', text: "AWS PrivateLink", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q30",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "When configuring a Direct Connect Gateway, what is the primary restriction compared to a Transit Gateway?",
    options: [
      { id: 'ans-q30-o1', text: "A DX Gateway cannot connect to a Transit Gateway.", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q30-o2', text: "A DX Gateway does not allow routing between the attached VPCs (non-transitive).", isCorrect: true, explanation: "A Direct Connect Gateway connects on-premises networks to multiple VPCs, but it does NOT route traffic directly between the connected VPCs (it is non-transitive)." },
      { id: 'ans-q30-o3', text: "A DX Gateway only supports 1Gbps connections.", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q30-o4', text: "A DX Gateway is limited to a single AWS region.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q31",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "Which service enables logging of every API call made against your AWS networking resources?",
    options: [
      { id: 'ans-q31-o1', text: "Amazon CloudWatch", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q31-o2', text: "AWS CloudTrail", isCorrect: true, explanation: "AWS CloudTrail records API calls for your account, providing a history of resource changes and user activity for security and operational auditing." },
      { id: 'ans-q31-o3', text: "VPC Flow Logs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q31-o4', text: "AWS Config", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q32",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "Your application servers reside in a private subnet. To securely download OS patches from an S3 bucket without using a NAT Gateway or traversing the internet, what should you configure?",
    options: [
      { id: 'ans-q32-o1', text: "Internet Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q32-o2', text: "AWS Global Accelerator", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q32-o3', text: "VPC Gateway Endpoint for S3", isCorrect: true, explanation: "A Gateway Endpoint for Amazon S3 provides reliable, private connectivity to S3 without requiring an Internet Gateway, NAT device, or VPN." },
      { id: 'ans-q32-o4', text: "VPC Interface Endpoint for EC2", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q33",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "To distribute user traffic across optimal AWS regions based on where the user is physically located, which Route 53 policy should you use?",
    options: [
      { id: 'ans-q33-o1', text: "Multivalue Answer Routing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q33-o2', text: "Latency Routing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q33-o3', text: "Geolocation Routing", isCorrect: true, explanation: "Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users (continent, country, or state)." },
      { id: 'ans-q33-o4', text: "Geoproximity Routing", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q34",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "When multiple teams deploy their own VPCs and need them to communicate seamlessly without managing complex peering meshes, what AWS networking feature significantly reduces complexity?",
    options: [
      { id: 'ans-q34-o1', text: "AWS Direct Connect", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q34-o2', text: "VPC sharing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q34-o3', text: "AWS Transit Gateway", isCorrect: true, explanation: "AWS Transit Gateway acts as a highly scalable cloud router that simplifies connectivity and replaces complex point-to-point VPC peering meshes." },
      { id: 'ans-q34-o4', text: "NAT Gateways", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q35",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "Which of the following is true about AWS Direct Connect limits regarding BGP prefixes?",
    options: [
      { id: 'ans-q35-o1', text: "There is no limit to advertised routes.", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q35-o2', text: "You can advertise up to 100 routes over a private virtual interface.", isCorrect: true, explanation: "AWS limits the number of BGP routes (prefixes) that can be advertised from your on-premises network into AWS over a private virtual interface to 100 (soft limit)." },
      { id: 'ans-q35-o3', text: "You can advertise exactly 1 route.", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q35-o4', text: "Direct Connect does not use BGP.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q36",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "A company requires strict filtering of outbound HTTP/HTTPS internet traffic by domain name. Which solution provides this capability natively for a VPC?",
    options: [
      { id: 'ans-q36-o1', text: "NAT Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q36-o2', text: "Network ACLs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q36-o3', text: "AWS Network Firewall", isCorrect: true, explanation: "AWS Network Firewall provides deep packet inspection and stateful rules that allow filtering of outbound internet traffic by domain extensions (FQDNs)." },
      { id: 'ans-q36-o4', text: "AWS Shield", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q37",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "Which tool helps you architect high availability by mapping out potential network failure paths prior to deployment?",
    options: [
      { id: 'ans-q37-o1', text: "AWS Reachability Analyzer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q37-o2', text: "AWS Artifact", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q37-o3', text: "Transit Gateway Network Manager", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q37-o4', text: "AWS Well-Architected Tool", isCorrect: true, explanation: "While not purely a networking tool, the AWS Well-Architected Tool helps review workloads against best practices including Reliability and High Availability." }
    ]
  },
  {
    id: "ans-q38",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "To influence inbound traffic from AWS to an on-premises location via BGP over Direct Connect, which attribute should you manipulate?",
    options: [
      { id: 'ans-q38-o1', text: "Local Preference", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q38-o2', text: "AS-PATH Prepending", isCorrect: true, explanation: "To influence route preference for traffic leaving AWS towards your network, you can use AS-PATH prepending on your advertised routes." },
      { id: 'ans-q38-o3', text: "MED", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q38-o4', text: "Weight", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q39",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "You are attempting to connect from on-premises to an EC2 instance via VPN. The connection fails. You verify routes exist. What is the next logical step to diagnose the issue?",
    options: [
      { id: 'ans-q39-o1', text: "Reboot the instance", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q39-o2', text: "Check Security Groups and Network ACLs", isCorrect: true, explanation: "If routing is correct but traffic fails, Security Groups (stateful) or Network ACLs (stateless) are typically the next layer blocking the traffic." },
      { id: 'ans-q39-o3', text: "Delete and recreate the VPN tunnel", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q39-o4', text: "Increase the MTU on the instance", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q40",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "How can you securely provide cross-account administrative access to AWS network resources without passing API keys or passwords?",
    options: [
      { id: 'ans-q40-o1', text: "IAM Users with shared passwords", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q40-o2', text: "Cross-account IAM Roles with trust policies", isCorrect: true, explanation: "Using IAM Roles with resource-based trust policies allows users from one AWS account to temporarily assume permissions in another account without sharing long-term credentials." },
      { id: 'ans-q40-o3', text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q40-o4', text: "VPC Peering", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q41",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "To resolve DNS domains using custom, overlapping IP spaces in multiple VPCs connected to a Transit Gateway, what feature should be used?",
    options: [
      { id: 'ans-q41-o1', text: "Route 53 Resolver Rules", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q41-o2', text: "Amazon CloudFront OAI", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q41-o3', text: "Route 53 Private Hosted Zones associated with each VPC", isCorrect: true, explanation: "Private Hosted Zones can be associated with multiple VPCs to control how Route 53 responds to DNS queries within them, managing internal name resolution." },
      { id: 'ans-q41-o4', text: "AWS Global Accelerator", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q42",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "When implementing IPv6 in an Amazon VPC, what acts as the equivalent of a NAT Gateway for outbound-only internet access for instances?",
    options: [
      { id: 'ans-q42-o1', text: "NAT Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q42-o2', text: "Internet Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q42-o3', text: "Egress-Only Internet Gateway", isCorrect: true, explanation: "An Egress-Only Internet Gateway (EIGW) allows IPv6 instances to access the internet while preventing incoming connections originated from the internet." },
      { id: 'ans-q42-o4', text: "Transit Gateway", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q43",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "You need real-time visualization of latency between regions across the AWS global backbone. What service component provides this?",
    options: [
      { id: 'ans-q43-o1', text: "VPC Traffic Mirroring", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q43-o2', text: "CloudWatch Logs Insights", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q43-o3', text: "Transit Gateway Network Manager - Infrastructure Performance", isCorrect: true, explanation: "Infrastructure Performance in Transit Gateway Network Manager provides near real-time and historical latency analytics for AWS Global Network traffic." },
      { id: 'ans-q43-o4', text: "AWS X-Ray", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q44",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "To meet strict compliance regulations, a company must ensure that an EC2 instance's network traffic cannot leave the host unencrypted. What EC2 networking feature provides hardware encryption transparently?",
    options: [
      { id: 'ans-q44-o1', text: "IPsec", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q44-o2', text: "TLS", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q44-o3', text: "Nitro Enclaves", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q44-o4', text: "Elastic Network Interface (ENI) with encryption in transit enabled at the hardware level (Instance-to-Instance encryption on Nitro)", isCorrect: true, explanation: "On current generation AWS Nitro instances, traffic between instances in the same VPC or peered VPCs is automatically encrypted at the hardware level." }
    ]
  },
  {
    id: "ans-q45",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "Which service simplifies delivering UDP traffic applications to a global audience with static IP endpoints?",
    options: [
      { id: 'ans-q45-o1', text: "Amazon CloudFront", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q45-o2', text: "AWS Global Accelerator", isCorrect: true, explanation: "AWS Global Accelerator supports both TCP and UDP traffic and provides static Anycast IPs to improve performance globally." },
      { id: 'ans-q45-o3', text: "Application Load Balancer", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q45-o4', text: "Route 53", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q46",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "To migrate a large fleet of on-premises IP addresses to AWS seamlessly without changing the IPs, what AWS feature should you use?",
    options: [
      { id: 'ans-q46-o1', text: "AWS PrivateLink", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q46-o2', text: "Bring Your Own IP (BYOIP)", isCorrect: true, explanation: "AWS allows you to bring your own publicly routable IPv4 and IPv6 address ranges (BYOIP) and use them for an Elastic IP structure." },
      { id: 'ans-q46-o3', text: "VPC Subnet sharing", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q46-o4', text: "Elastic IPs", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q47",
    domainId: "ans-domain-3",
    domainName: "Network Management and Operation",
    question: "An organization is receiving high charges for NAT Gateway data processing. To optimize costs for traffic destined to Amazon DynamoDB, what should they do?",
    options: [
      { id: 'ans-q47-o1', text: "Use smaller EC2 instances", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q47-o2', text: "Create a Gateway VPC Endpoint for DynamoDB", isCorrect: true, explanation: "Gateway Endpoints for DynamoDB and S3 are free and prevent traffic from passing through the NAT Gateway, eliminating data processing charges." },
      { id: 'ans-q47-o3', text: "Delete the NAT Gateway completely", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q47-o4', text: "Use Route 53 to redirect traffic", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q48",
    domainId: "ans-domain-4",
    domainName: "Network Security, Compliance, and Governance",
    question: "Which AWS service uses machine learning to automatically discover, classify, and protect sensitive data (like PII) stored in Amazon S3?",
    options: [
      { id: 'ans-q48-o1', text: "Amazon GuardDuty", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q48-o2', text: "Amazon Inspector", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q48-o3', text: "Amazon Macie", isCorrect: true, explanation: "Amazon Macie is a data security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data in AWS." },
      { id: 'ans-q48-o4', text: "AWS Security Hub", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q49",
    domainId: "ans-domain-1",
    domainName: "Network Design",
    question: "When designing an architecture requiring multicast capabilities, what service must you use to support native multicast routing?",
    options: [
      { id: 'ans-q49-o1', text: "VPC Peering", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q49-o2', text: "AWS Transit Gateway", isCorrect: true, explanation: "AWS Transit Gateway supports routing multicast traffic between Amazon VPCs and on-premises networks." },
      { id: 'ans-q49-o3', text: "AWS Direct Connect", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q49-o4', text: "Amazon Route 53", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "ans-q50",
    domainId: "ans-domain-2",
    domainName: "Network Implementation",
    question: "You are setting up DNS resolution between two VPCs in different regions connected via Transit Gateway Peering. How can instances in VPC-A resolve private names in VPC-B?",
    options: [
      { id: 'ans-q50-o1', text: "Associate VPC-A directly with the Private Hosted Zone of VPC-B", isCorrect: true, explanation: "You can associate a single Private Hosted Zone with multiple VPCs, even across different regions, allowing all associated VPCs to resolve the names." },
      { id: 'ans-q50-o2', text: "Configure Route 53 Resolver outbound and inbound endpoints in both VPCs", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q50-o3', text: "Use conditional forwarding over the Transit Gateway", isCorrect: false, explanation: "Incorrect." },
      { id: 'ans-q50-o4', text: "DNS over Transit Gateway Peering is not supported", isCorrect: false, explanation: "Incorrect." }
    ]
  }
];
