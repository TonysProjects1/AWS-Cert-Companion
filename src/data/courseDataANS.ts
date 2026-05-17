import { Domain } from './courseData';

export const courseDataANS: Domain[] = [
  {
    id: "ans-domain-1",
    title: "Domain 1: Network Design",
    weight: "30%",
    description: "Design edge network services, DNS solutions, load balancing, logging/monitoring, and routing strategies.",
    topics: [
      {
        id: "ans-d1-t1",
        title: "Edge Networks, DNS, and Load Balancing",
        subtopics: [
          {
            title: "Edge Network Services",
            content: "- **Amazon CloudFront**: Global content delivery network (CDN).\n- **AWS Global Accelerator**: Improves availability and performance for local/global users using AWS's vast global network."
          },
          {
            title: "DNS Solutions",
            content: "- **Route 53**: Public/private hosted zones, alias records, resolving endpoints for hybrid architectures.\n- **DNSSEC**: Secure DNS communications."
          },
          {
            title: "Load Balancing",
            content: "- **ALB/NLB/GLB**: Application (L7), Network (L4), and Gateway Load Balancers.\n- **Cross-Zone Load Balancing**: Distribute traffic evenly across all AZs."
          }
        ],
        quiz: [
          {
            question: "Which feature of Route 53 routes traffic based on the geographic location of the user?",
            options: ["Latency routing", "Geolocation routing", "Weighted routing", "Failover routing"],
            correctAnswer: 1,
            explanation: "Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users."
          }
        ]
      },
      {
        id: "ans-d1-t2",
        title: "Routing and Connectivity Architecture",
        subtopics: [
          {
            title: "Hybrid Connectivity",
            content: "- **AWS Direct Connect**: Dedicated network connection to AWS.\n- **AWS Site-to-Site VPN**: IPsec VPN connection over the internet."
          },
          {
            title: "Multi-Account and Multi-VPC",
            content: "- **Transit Gateway**: Hub-and-spoke connectivity for VPCs and on-premises networks.\n- **VPC Peering**: Point-to-point connection between two VPCs.\n- **AWS RAM**: Resource Access Manager for sharing Transit Gateways and Subnets."
          }
        ],
        quiz: [
          {
            question: "Which service enables hub-and-spoke connectivity for thousands of VPCs and on-premises networks?",
            options: ["VPC Peering", "AWS Transit Gateway", "AWS Direct Connect", "Amazon Route 53"],
            correctAnswer: 1,
            explanation: "AWS Transit Gateway connects VPCs and on-premises networks through a central hub, simplifying network management."
          }
        ]
      }
    ]
  },
  {
    id: "ans-domain-2",
    title: "Domain 2: Network Implementation",
    weight: "26%",
    description: "Implement routing, hybrid connectivity, complex DNS architectures, and network automation.",
    topics: [
      {
        id: "ans-d2-t1",
        title: "Hybrid and Multi-Account Implementation",
        subtopics: [
          {
            title: "Implementing Hybrid Connectivity",
            content: "- **BGP**: Border Gateway Protocol for dynamic routing over Direct Connect or VPN.\n- **Transit Gateway Connect**: SD-WAN integration using GRE and BGP."
          },
          {
            title: "Complex DNS Architectures",
            content: "- **Route 53 Resolver Limits**: Inbound and outbound endpoints for resolving DNS queries between on-premises and AWS.\n- **Conditional Forwarding**: Forward rules for specific domains to specific IP addresses."
          }
        ],
        quiz: [
          {
            question: "To resolve domain names hosted on-premises from your VPC, what Route 53 feature should you implement?",
            options: ["Public Hosted Zone", "Route 53 Resolver Outbound Endpoint", "Route 53 Resolver Inbound Endpoint", "DNSSEC"],
            correctAnswer: 1,
            explanation: "A Route 53 Resolver Outbound Endpoint allows VPC instances to resolve DNS names hosted on your on-premises network."
          }
        ]
      },
      {
        id: "ans-d2-t2",
        title: "Network Automation",
        subtopics: [
          {
            title: "Infrastructure as Code (IaC)",
            content: "- **AWS CloudFormation / AWS CDK**: Automate repeatable network infrastructure.\n- **Event-driven networking**: Lambda triggered by EventBridge for dynamic network changes."
          }
        ],
        quiz: [
          {
            question: "Which of the following is an AWS declarative Infrastructure as Code service?",
            options: ["AWS Lambda", "Amazon EC2", "AWS CloudFormation", "AWS Step Functions"],
            correctAnswer: 2,
            explanation: "AWS CloudFormation is an IaC service that allows you to model, provision, and manage AWS and third-party resources."
          }
        ]
      }
    ]
  },
  {
    id: "ans-domain-3",
    title: "Domain 3: Network Management and Operation",
    weight: "20%",
    description: "Maintain routing, monitor traffic, troubleshoot connectivity, and optimize network performance.",
    topics: [
      {
        id: "ans-d3-t1",
        title: "Monitoring and Troubleshooting",
        subtopics: [
          {
            title: "Network Visibility",
            content: "- **VPC Flow Logs**: Capture IP traffic going to and from network interfaces.\n- **VPC Traffic Mirroring**: Copy network traffic from an ENI for deep packet inspection."
          },
          {
            title: "Troubleshooting Tools",
            content: "- **Reachability Analyzer**: Perform connectivity testing between source and destination in VPCs.\n- **Transit Gateway Network Manager**: Visualize and monitor your global network."
          }
        ],
        quiz: [
          {
            question: "Which tool is best used to perform deep packet inspection of traffic in a VPC?",
            options: ["VPC Flow Logs", "VPC Traffic Mirroring", "Reachability Analyzer", "CloudWatch Metrics"],
            correctAnswer: 1,
            explanation: "VPC Traffic Mirroring allows you to copy network traffic from an elastic network interface and send it to out-of-band security and monitoring appliances."
          }
        ]
      },
      {
        id: "ans-d3-t2",
        title: "Network Optimization",
        subtopics: [
          {
            title: "Performance Optimization",
            content: "- **Jumbo Frames**: Set MTU to 9001 for higher throughput within a VPC or over Direct Connect.\n- **ECMP (Equal-cost multi-path)**: Load share traffic across multiple VPN tunnels via Transit Gateway."
          }
        ],
        quiz: [
          {
            question: "To maximize throughput between two Amazon EC2 instances in the same VPC, what maximum transmission unit (MTU) size should be used?",
            options: ["1500", "4096", "9001", "65535"],
            correctAnswer: 2,
            explanation: "AWS supports jumbo frames with an MTU of up to 9001 bytes, which increases payload size per packet and reduces networking overhead."
          }
        ]
      }
    ]
  },
  {
    id: "ans-domain-4",
    title: "Domain 4: Network Security, Compliance, and Governance",
    weight: "24%",
    description: "Implement security features, validate via auditing, and maintain data confidentiality.",
    topics: [
      {
        id: "ans-d4-t1",
        title: "Security and Compliance",
        subtopics: [
          {
            title: "Securing Network Flows",
            content: "- **AWS Network Firewall**: Managed network firewall and intrusion prevention service.\n- **AWS WAF**: Application firewall filtering HTTP/HTTPS requests.\n- **AWS Shield**: Managed DDoS protection."
          },
          {
            title: "Confidentiality and Encryption",
            content: "- **IPsec & TLS**: Encryption in transit.\n- **MACsec**: Media Access Control Security over AWS Direct Connect dedicated connections."
          }
        ],
        quiz: [
          {
            question: "Which service offers Layer 3 to Layer 7 network protections and stateful packet inspection for your VPC?",
            options: ["AWS WAF", "Amazon GuardDuty", "AWS Network Firewall", "AWS Shield Advanced"],
            correctAnswer: 2,
            explanation: "AWS Network Firewall provides stateful filtering, intrusion prevention, and web filtering for your VPC."
          }
        ]
      }
    ]
  }
];
