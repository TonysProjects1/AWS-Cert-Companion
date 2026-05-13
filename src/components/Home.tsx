import { BookOpen, GraduationCap, Cloud, Database, Network } from 'lucide-react';

interface CertOption {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: React.ElementType;
  active: boolean;
  color: string;
}

const CERT_OPTIONS: CertOption[] = [
  {
    id: 'aif-c01',
    code: 'AIF-C01',
    title: 'AWS Certified AI Practitioner',
    description: 'Foundational understanding of AI, ML, and generative AI concepts on AWS.',
    icon: BookOpen,
    active: true,
    color: '#FF9900' // AWS Orange
  },
  {
    id: 'clf-c02',
    code: 'CLF-C02',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.',
    icon: Cloud,
    active: false,
    color: '#232F3E' // AWS Navy
  },
  {
    id: 'saa-c03',
    code: 'SAA-C03',
    title: 'AWS Certified Solutions Architect',
    description: 'Design and deploy scalable, highly available, and fault-tolerant systems on AWS.',
    icon: GraduationCap,
    active: false,
    color: '#00A1C9' // AWS Blue
  },
  {
    id: 'data-engineer',
    code: 'DEA-C01',
    title: 'AWS Certified Data Engineer',
    description: 'Implement data pipelines, monitor data pipelines, and troubleshoot issues.',
    icon: Database,
    active: false,
    color: '#527FFF' // AWS Light Blue
  },
  {
    id: 'advanced-networking',
    code: 'ANS-C01',
    title: 'AWS Certified Advanced Networking',
    description: 'Design and maintain network architecture for all AWS services.',
    icon: Network,
    active: false,
    color: '#8C4FFF' // AWS Purple
  }
];

interface HomeProps {
  onSelectCert: (certId: string) => void;
}

export function Home({ onSelectCert }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] p-8 md:p-16 lg:p-24 border-t-[12px] border-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9900]">AWS Cert Companion</span>
            <h1 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tight leading-[0.85]">
              Certification<br />Pathways.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed opacity-70 mt-4 border-l-2 border-[#1A1A1A] pl-6">
              Select your target certification below to access tailored study guides, practice exams, flashcards, and an AI-powered tutor designed to help you succeed.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERT_OPTIONS.map((cert) => (
            <button
              key={cert.id}
              onClick={() => cert.active && onSelectCert(cert.id)}
              disabled={!cert.active}
              className={`group text-left p-8 border border-[#1A1A1A]/10 bg-white shadow-sm flex flex-col h-full transition-all duration-300
                ${cert.active 
                  ? 'hover:shadow-[8px_8px_0_0_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 cursor-pointer' 
                  : 'opacity-60 cursor-not-allowed grayscale'
                }
              `}
            >
              <div className="mb-6 flex items-start justify-between">
                <div 
                  className="w-12 h-12 rounded flex items-center justify-center bg-opacity-10"
                  style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                >
                  <cert.icon className="w-6 h-6" />
                </div>
                {!cert.active && (
                  <span className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 bg-slate-100 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <div className="mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: cert.color }}>
                  {cert.code}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif italic font-medium mb-3 group-hover:underline decoration-2 underline-offset-4 decoration-[#1A1A1A]/20">
                {cert.title}
              </h3>
              
              <p className="text-sm opacity-70 leading-relaxed mt-auto">
                {cert.description}
              </p>

              {cert.active && (
                <div className="mt-8 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold uppercase tracking-wider">Start Studying</span>
                  <span className="text-xl leading-none">→</span>
                </div>
              )}
            </button>
          ))}
        </div>
        
        <footer className='mt-32 pt-8 border-t border-[#1A1A1A]/10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold'>
          <div>AWS Cert Companion &copy; {new Date().getFullYear()}</div>
          <div>Master Your Cloud Journey</div>
        </footer>
      </div>
    </div>
  );
}
