import { DomainData } from './cheatSheetData';

export const cheatSheetDataANS: DomainData[] = [
  {
    title: "Domain 1: Network Design",
    content: `
### 1.1 Edge Network Services
-   **Amazon CloudFront:** Global content delivery network (CDN). Uses edge locations to cache content, lower latency, and reduce origin load. Supports Lambda@Edge and CloudFront Functions.
-   **AWS Global Accelerator:** Routes traffic through the AWS global network infrastructure, improving performance by up to 60%. Uses anycast IP addresses. Preserves client IP with ALB/NLB.

### 1.2 DNS Solutions
-   **Amazon Route 53:** Highly available and scalable cloud DNS web service.
-   **Hosted Zones:** Public (internet-facing) and Private (VPC-internal). Private Hosted Zones can be associated with multiple VPCs across regions.
-   **Routing Policies:** Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, and Multivalue Answer.
-   **Route 53 Resolver:** Endpoints (Inbound/Outbound) for hybrid DNS resolution across Direct Connect or VPN. Define rules to forward specific domains (conditional forwarding).

### 1.3 Load Balancing
-   **Application Load Balancer (ALB):** Layer 7 (HTTP/HTTPS). Supports path-based, host-based, and HTTP header routing. Can authenticate users via OIDC/Cognito.
-   **Network Load Balancer (NLB):** Layer 4 (TCP/UDP). Ultra-high performance, static IP addresses per AZ. Handles millions of requests per second.
-   **Gateway Load Balancer (GWLB):** Layer 3 (IP). Used to transparently deploy, scale, and manage third-party virtual appliances (firewalls, IDS/IPS) using GENEVE encapsulation.

### 1.4 Addressing and IP Management
-   **Amazon VPC IP Address Manager (IPAM):** Automatically plan, track, and monitor IP addresses across your AWS environment.
-   **IPv6:** Supports dual-stack and IPv6-only subnets. Egress-Only Internet Gateways allow outbound-only IPv6 traffic to the internet.
-   **Bring Your Own IP (BYOIP):** Bring your public IPv4 or IPv6 ranges to AWS and advertise them to the internet from AWS resources.

### 1.5 Logging and Monitoring Requirements
-   **VPC Flow Logs:** Captures IP traffic info (source/destination IP, port, protocol, packets). Does not capture the packet payload. Can be analyzed with Athena or CloudWatch Contributor Insights.
-   **Traffic Mirroring:** Copies inbound and outbound traffic from the ENI. Good for deep packet inspection (DPI) with appliances behind a GWLB.

### 1.6 Routing Strategy and Connectivity Architecture
-   **AWS Direct Connect (DX):** Dedicated physical connection (1-100Gbps). Bypasses the public internet. Connects via 802.1Q VLANs.
-   **AWS Site-to-Site VPN:** Encrypted IPsec tunnel over the public internet. Supports static and dynamic (BGP) routing.
-   **SD-WAN Integration:** Transit Gateway Connect simplifies SD-WAN using GRE tunnels and BGP over a VPC attachment.

### 1.7 Multi-Account Routing Strategy
-   **AWS Transit Gateway (TGW):** Hub and spoke model. Simplifies network topology by natively routing traffic between VPCs, VPNs, and DX Gateways. Supports inter-region peering.
-   **VPC Peering:** Connect two VPCs directly without a gateway. Non-transitive. Preferred for intra-region, point-to-point connections to avoid data processing charges.
`
  },
  {
    title: "Domain 2: Network Implementation",
    content: `
### 2.1 Direct Connect (DX) Implementation
-   **Virtual Interfaces (VIF):** Public VIF (connects to public AWS services like S3), Private VIF (connects to a single VPC via VGW), Transit VIF (connects to multiple VPCs via DX Gateway).
-   **Direct Connect Gateways (DXGW):** Connects your DX to multiple VPCs (via VGW) or a Transit Gateway. Globals resource (can connect to VPCs in any region). Non-transitive.
-   **High Availability:** Configure multiple connections at different DX locations using Maximum Resiliency (4 connections) or High Resiliency (2 connections) models.

### 2.2 Hybrid Connectivity Implementation
-   **BGP (Border Gateway Protocol):** Dynamic routing protocol used with DX and VPNs. Manage routing preference using BGP attributes (Local Preference, AS-PATH prepending, MED).
-   **Transit Gateway Connect:** Supports SD-WAN appliances with GRE tunnels and BGP, scaling beyond the IPsec throughput limit.

### 2.3 Multi-Account Routing and Connectivity
-   **AWS RAM (Resource Access Manager):** Share AWS resources (like Transit Gateways, Subnets, and IPAM pools) across AWS Organizations.
-   **Shared VPCs:** Allows multiple AWS accounts to deploy application resources (EC2, RDS) into centralized, shared Amazon VPC subnets managed by an infrastructure account.

### 2.4 Complex Hybrid DNS
-   **DNSSEC:** Secures DNS traffic by preventing DNS spoofing via cryptographic signatures. Requires configuring a key-signing key (KSK) using KMS.
-   **Conditional Forwarding:** Directing DNS queries for specific domains to specific DNS resolvers via Route 53 Resolver Outbound Endpoints (e.g., forwarding 'corp.local' to an on-premises nameserver).

### 2.5 Infrastructure Automation
-   **Infrastructure as Code (IaC):** AWS CloudFormation, AWS CDK, HashiCorp Terraform. Avoid hardcoding IPs; use dynamic references, exports, and imports.
-   **Event-Driven Networking:** Use Amazon EventBridge to detect network state changes and trigger AWS Lambda functions for automated network remediation (e.g., isolating an instance).
-   **AWS Cloud Map:** Cloud resource discovery service to keep track of dynamic IP addresses and ports for microservices.
`
  },
  {
    title: "Domain 3: Network Management and Operation",
    content: `
### 3.1 Network Monitoring & Observability
-   **Reachability Analyzer:** A static configuration analysis tool that tests connectivity between a source and a destination without sending real packets.
-   **Network Access Analyzer:** Verifies that your network components meet your security and compliance guidelines (e.g., verifying isolation).
-   **Transit Gateway Network Manager:** Centrally view and monitor global networks across AWS regions and on-premises environments.
-   **VPC Flow Logs:** Analyze network traffic to diagnose overly restrictive security groups or network ACLs.

### 3.2 Network Optimization & Performance
-   **Jumbo Frames:** Set MTU up to 9001 bytes inside a VPC and over Direct Connect for higher throughput. Site-to-Site VPNs are strictly limited to 1500 bytes.
-   **ECMP (Equal-Cost Multi-Path):** Supported on Transit Gateway. Allows load balancing traffic across multiple VPN tunnels to aggregate bandwidth beyond the single-tunnel 1.25 Gbps limit.
-   **BGP Communities:** Used with Direct Connect to control route preference and localized routing (e.g., Local Preferred, No Export).

### 3.3 Troubleshooting Connectivity
-   **Asymmetric Routing:** Occurs when traffic enters via one path (e.g., DX) but leaves via another (e.g., VPN). Stateful firewalls will drop return traffic.
-   **Overlapping IPs:** Use AWS PrivateLink or secondary Transit Gateways with NAT instances to resolve IP address overlapping between acquired companies or legacy networks.
-   **VPC Endpoint Issues:** Ensure Private DNS is enabled for Interface Endpoints to override default AWS public endpoints. Ensure endpoint policies allow necessary actions.
`
  },
  {
    title: "Domain 4: Network Security, Compliance, and Governance",
    content: `
### 4.1 Native Network Security Features
-   **Network Access Control Lists (NACLs):** Stateless, operates at the subnet level. Needs explicit allow for BOTH inbound and outbound rules, including ephemeral ports (1024-65535).
-   **Security Groups (SGs):** Stateful, operates at the instance/ENI level. Allows all outbound by default. Return traffic is automatically permitted.
-   **AWS Network Firewall:** Highly available, managed firewall offering stateful inspection, IPS, and domain name filtering (via SNI). Often deployed in an edge or inspection VPC.
-   **AWS WAF (Web Application Firewall):** Protects HTTP/HTTPS traffic on ALBs, API Gateway, AppSync, and CloudFront against SQLi, XSS, and botnets.

### 4.2 Traffic Encryption
-   **Encryption in Transit:** Use TLS certificates from ACM for Application Load Balancers and CloudFront to terminate TLS.
-   **MACsec (Media Access Control Security):** Provides Layer 2 encryption for AWS Direct Connect dedicated links (10Gbps/100Gbps).
-   **Nitro Enclaves:** Provides isolated compute environments. The Nitro hypervisor encrypts all traffic between instances in same VPC automatically.

### 4.3 Secure Connectivity to AWS Services
-   **AWS PrivateLink (VPC Endpoints):** Interfaces allowing private access to AWS services (like S3, DynamoDB) and SaaS apps without traffic traversing the public internet.
-   **Gateway Endpoints:** Explicitly for S3 and DynamoDB. Uses route tables, not IP addresses. Free of charge, unlike Interface Endpoints.
-   **VPC Endpoint Policies:** JSON policies attached to endpoints specifying which IAM principals can perform actions to which resources through the endpoint.

### 4.4 Governance and Compliance
-   **AWS CloudTrail:** Tracks user activity and API usage. Critical for auditing changes to network infrastructure.
-   **AWS Config:** Records the configuration state of network resources and tracks changes over time via Config Rules.
-   **AWS Firewall Manager:** Centrally manage WAF rules, Shield Advanced, Network Firewalls, and SG policies across your AWS Organization.
-   **Amazon Macie:** Uses ML to discover and protect sensitive data (PII) residing in S3.
`
  }
];
