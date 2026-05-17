import { Resource } from './recommendedReadingData';

export const recommendedReadingDataANS: Resource[] = [
  {
    id: "ans-res-1",
    title: 'AWS Certified Advanced Networking - Specialty (ANS-C01) Exam Guide',
    description: 'The official exam guide detailing the domains, weightings, and scope of the exam.',
    url: 'https://d1.awsstatic.com/training-and-certification/docs-advnetworking-spec/AWS-Certified-Advanced-Networking-Specialty_Exam-Guide.pdf',
    type: 'guide',
    domain: 'All Domains'
  },
  {
    id: "ans-res-2",
    title: 'Amazon VPC Connectivity Options',
    description: 'Comprehensive whitepaper on connecting VPCs, on-premises data centers, and external networks.',
    url: 'https://docs.aws.amazon.com/whitepapers/latest/amazon-vpc-connectivity-options/amazon-vpc-connectivity-options.html',
    type: 'whitepaper',
    domain: 'Domain 1 & 2'
  },
  {
    id: "ans-res-3",
    title: 'AWS Network Firewall Overview',
    description: 'Understanding AWS Network Firewall capabilities for intrusion prevention and stateful inspection.',
    url: 'https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html',
    type: 'documentation',
    domain: 'Domain 4'
  },
  {
    id: "ans-res-4",
    title: 'AWS Transit Gateway Design Best Practices',
    description: 'Learn patterns for hub-and-spoke connectivity across AWS accounts and hybrid networks.',
    url: 'https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway-design-best-practices.html',
    type: 'whitepaper',
    domain: 'Domain 1 & 2'
  },
  {
    id: "ans-res-5",
    title: 'Resolving DNS Queries between VPCs and your Network',
    description: 'A deep dive into Route 53 Resolver features for multi-environment architectures.',
    url: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html',
    type: 'documentation',
    domain: 'Domain 2'
  }
];
