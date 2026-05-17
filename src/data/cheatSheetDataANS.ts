import { DomainData } from './cheatSheetData';

export const cheatSheetDataANS: DomainData[] = [
  {
    title: "Domain 1: Network Design",
    content: `
### 1.1 Edge Network Services
*   **Amazon CloudFront:** Global content delivery network (CDN). Uses edge locations to cache content, lower latency, and reduce origin load.
*   **AWS Global Accelerator:** Routes traffic through the AWS global network infrastructure, improving performance by up to 60%. Uses anycast IP addresses.

### 1.2 DNS Solutions
*   **Amazon Route 53:** Highly available and scalable cloud DNS web service.
*   **Hosted Zones:** Public (internet-facing) and Private (VPC-internal).
*   **Routing Policies:** Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, and Multivalue Answer.
*   **Route 53 Resolver:** Endpoints (Inbound/Outbound) for hybrid DNS resolution across Direct Connect or VPN.

### 1.3 Load Balancing
*   **Application Load Balancer (ALB):** Layer 7 (HTTP/HTTPS). Supports path-based and host-based routing.
*   **Network Load Balancer (NLB):** Layer 4 (TCP/UDP). Ultra-high performance, static IP addresses.
*   **Gateway Load Balancer (GWLB):** Layer 3 (IP). Used to deploy, scale, and manage third-party virtual appliances.

### 1.4 Logging and Monitoring Requirements
*   **VPC Flow Logs:** Captures IP traffic info (source/destination IP, port, protocol, packets). Does not capture the packet payload.
*   **Traffic Mirroring:** Copies inbound and outbound traffic from the ENI. Good for deep packet inspection (DPI).

### 1.5 & 1.6 Routing Strategy and Connectivity Architecture
*   **AWS Direct Connect (DX):** Dedicated physical connection. Bypass the public internet.
*   **AWS Site-to-Site VPN:** Encrypted IPsec tunnel over the public internet.
*   **AWS Transit Gateway:** Hub and spoke model. Simplifies network topology connecting VPCs and on-premises networks.
*   **VPC Peering:** Connect two VPCs directly without a gateway. Non-transitive.
`
  },
  {
    title: "Domain 2: Network Implementation",
    content: `
### 2.1 Hybrid Connectivity Implementation
*   **BGP (Border Gateway Protocol):** Dynamic routing protocol used with Direct Connect and VPNs to exchange routes.
*   **Transit Gateway Connect:** Supports SD-WAN appliances with GRE tunnels and BGP.

### 2.2 Multi-Account Routing and Connectivity
*   **AWS RAM (Resource Access Manager):** Share AWS resources (like Transit Gateways, Subnets) with other AWS accounts or via AWS Organizations.
*   **Shared VPCs:** Allows multiple AWS accounts to create application resources (EC2, RDS) into centralized, shared Amazon VPCs.

### 2.3 Complex Hybrid DNS
*   **DNSSEC:** Secures DNS traffic by preventing DNS spoofing using cryptographic signatures. Supported on Route 53.
*   **Conditional Forwarding:** Directing DNS queries for specific domains to specific DNS resolvers (e.g., forwarding 'corp.local' to an on-premises nameserver via Route 53 Resolver Outbound Endpoints).

### 2.4 Infrastructure Automation
*   **Infrastructure as Code:** AWS CloudFormation, AWS CDK, HashiCorp Terraform. Avoid hardcoding IPs; use dynamic references and intrinsic functions.
*   **Event-Driven Networking:** Use Amazon EventBridge to trigger AWS Lambda functions for automated network remediation (e.g., modifying security groups).
`
  },
  {
    title: "Domain 3: Network Management and Operation",
    content: `
### 3.1 Maintain Routing and Connectivity
*   **Direct Connect Gateways:** Allows you to connect your AWS Direct Connect connection to multiple VPCs in any AWS Region.
*   **BGP Communities:** Used with Direct Connect to control route preference and localized routing (e.g., Localize traffic to a specific Region).

### 3.2 Troubleshooting Network Traffic
*   **Reachability Analyzer:** A configuration analysis tool that enables you to perform connectivity testing between a source resource and a destination resource.
*   **Transit Gateway Network Manager:** Centrally view and monitor global networks across AWS and on-premises environments.

### 3.3 Network Optimization
*   **Jumbo Frames:** Supports MTU up to 9001 bytes inside a VPC and over Direct Connect. VPNs are limited to 1500 bytes.
*   **ECMP (Equal-Cost Multi-Path):** Supported on Transit Gateway. Allows load balancing traffic across multiple VPN tunnels, aggregating bandwidth.
`
  },
  {
    title: "Domain 4: Network Security, Compliance, and Governance",
    content: `
### 4.1 Network Security Features
*   **Network Access Control Lists (NACLs):** Stateless, operates at the subnet level. Needs explicit allow for inbound and outbound.
*   **Security Groups (SGs):** Stateful, operates at the instance/ENI level.
*   **AWS Network Firewall:** Highly available, managed network firewall with stateful inspection, IPS, and web filtering.
*   **AWS WAF:** Web Application Firewall protects against SQL injection, XSS, and matches rules like IP rate limiting.

### 4.2 Logging and Auditing
*   **AWS CloudTrail:** Tracks user activity and API usage. Critical for auditing changes to network infrastructure.
*   **AWS Firewall Manager:** Centrally manage firewall rules across your accounts and applications in AWS Organizations.

### 4.3 Data Confidentiality
*   **Encryption in Transit:** Use TLS for Application Load Balancers and CloudFront. Use IPsec for VPNs.
*   **MACsec (Media Access Control Security):** Provides Layer 2 encryption for AWS Direct Connect dedicated links.
*   **AWS PrivateLink (VPC Endpoints):** Access AWS services (like S3, DynamoDB) without the traffic traversing the public internet.
`
  }
];
