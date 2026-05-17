import { RecommendedResource } from './recommendedReadingData';

export const recommendedReadingDataCCP: RecommendedResource[] = [
  {
    id: 'ccp-res-1',
    title: 'AWS Certified Cloud Practitioner Exam Guide',
    type: 'video',
    description: 'The official exam guide detailing the domains, objectives, and structure of the CLF-C02 exam.',
    url: 'https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf',
    domainId: 'ccp-domain-1'
  },
  {
    id: 'ccp-res-2',
    title: 'Overview of Amazon Web Services',
    type: 'documentation',
    description: 'A comprehensive whitepaper providing an overview of the AWS platform and its services.',
    url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html',
    domainId: 'ccp-domain-3'
  },
  {
    id: 'ccp-res-3',
    title: 'AWS Shared Responsibility Model',
    type: 'blog',
    description: 'Detailed explanation of how security and compliance is a shared responsibility between AWS and the customer.',
    url: 'https://aws.amazon.com/compliance/shared-responsibility-model/',
    domainId: 'ccp-domain-2'
  }
];
