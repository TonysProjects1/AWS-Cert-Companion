export interface ReadingItem {
  id: string;
  title: string;
  type: 'AWS Whitepaper' | 'AWS Documentation' | 'Article' | 'Blog Post';
  url: string;
  description: string;
  timeToRead: string;
}

export const recommendedReadingDataSAA: ReadingItem[] = [
  {
    id: "saa-rr1",
    title: "AWS Well-Architected Framework",
    type: "AWS Whitepaper",
    url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
    description: "The foundational document for the SAA-C03 exam. Covers the six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
    timeToRead: "2 hours"
  },
  {
    id: "saa-rr2",
    title: "Amazon VPC User Guide",
    type: "AWS Documentation",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
    description: "Essential reading for understanding VPCs, subnets, route tables, Internet Gateways, NAT Gateways, and Peering connections.",
    timeToRead: "90 min"
  },
  {
    id: "saa-rr3",
    title: "AWS Storage Services Overview",
    type: "AWS Whitepaper",
    url: "https://aws.amazon.com/products/storage/",
    description: "High-level comparison of S3, EBS, and EFS, detailing when to use object, block, or file storage.",
    timeToRead: "45 min"
  },
  {
    id: "saa-rr4",
    title: "Disaster Recovery of Workloads on AWS",
    type: "AWS Whitepaper",
    url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html",
    description: "Details approaches for DR: Backup & Restore, Pilot Light, Warm Standby, and Multi-Site Active/Active.",
    timeToRead: "60 min"
  }
];
