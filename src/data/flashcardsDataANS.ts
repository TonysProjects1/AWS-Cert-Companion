import { FlashcardData } from './flashcardsData';

export const flashcardsDataANS: FlashcardData[] = [
  {
    id: "ans-fc-1",
    domain: "Network Design",
    front: "What is an AWS Transit Gateway?",
    back: "A network transit hub that connects VPCs and on-premises networks to a single gateway."
  },
  {
    id: "ans-fc-2",
    domain: "Network Design",
    front: "AWS Global Accelerator vs Amazon CloudFront?",
    back: "Global Accelerator uses Anycast IPs directly to edge locations to optimize TCP/UDP paths; CloudFront caches HTTP/HTTPS content."
  },
  {
    id: "ans-fc-3",
    domain: "Network Implementation",
    front: "What does a Route 53 Resolver Outbound Endpoint do?",
    back: "Forwards DNS queries from a VPC to an on-premises network resolver."
  },
  {
    id: "ans-fc-4",
    domain: "Management and Operation",
    front: "What is the maximum MTU size supported within a VPC and over Direct Connect?",
    back: "9001 bytes (Jumbo Frames)."
  },
  {
    id: "ans-fc-5",
    domain: "Security and Compliance",
    front: "What is AWS Network Firewall?",
    back: "A stateful, managed network firewall and intrusion prevention service for your VPC."
  }
];
