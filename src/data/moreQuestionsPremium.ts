import { PracticeQuestion } from './practiceQuestionsData';

export const moreQuestionsPremium: PracticeQuestion[] = [
  {
    id: "premium_1",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "A data engineering team is preparing a large corpus of text for a machine learning model. During data preprocessing, they convert all text to lowercase, remove punctuation, and convert words like 'running' and 'ran' to 'run'. What preprocessing technique is being applied to the verbs?",
    options: [
      { id: "a", text: "Tokenization", isCorrect: false, explanation: "Incorrect. Tokenization splits text into smaller chunks (tokens), but does not change the tense or root form of the words." },
      { id: "b", text: "Lemmatization", isCorrect: true, explanation: "Correct. Lemmatization (and stemming) reduces words to their root morphological form, ensuring the model treats 'running' and 'ran' as the same core concept." },
      { id: "c", text: "Stop-word removal", isCorrect: false, explanation: "Incorrect. This involves removing common words like 'the' or 'and', not modifying verb tenses." },
      { id: "d", text: "One-Hot Encoding", isCorrect: false, explanation: "Incorrect. Encoding converts categorical data to binary numeric vectors, it does not normalize textual grammar." }
    ]
  },
  {
    id: "premium_2",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "An AI architect is designing a customer support bot utilizing a Foundational Model. The bot frequently generates plausible but entirely fabricated return policies. Which phenomenon describes this behavior, and which architecture pattern is the standard AWS recommendation to mitigate it?",
    options: [
      { id: "a", text: "Data Poisoning / Amazon Macie", isCorrect: false, explanation: "Incorrect. Data poisoning is an intentional attack during training. Macie analyzes S3 buckets for PII." },
      { id: "b", text: "Overfitting / Early Stopping", isCorrect: false, explanation: "Incorrect. Overfitting is a training issue where the model over-memorizes data. Early stopping prevents it but does not fix post-deployment factual accuracy." },
      { id: "c", text: "Hallucinations / Retrieval-Augmented Generation (RAG)", isCorrect: true, explanation: "Correct. The model is hallucinating (inventing facts). RAG mitigates this by aggressively grounding the model's responses in authenticated, retrieved corporate documents." },
      { id: "d", text: "Prompt Injection / Amazon Bedrock Guardrails", isCorrect: false, explanation: "Incorrect. Prompt injection is a security threat where a user forces the model to ignore instructions. Bedrock Guardrails block toxicity and injection, but do not inherently solve hallucinated logic without a knowledge base." }
    ]
  },
  {
    id: "premium_3",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A software company wants to integrate an LLM into their IDE to assist developers by writing complex boilerplate code. The system must process massive files containing over 50,000 lines of code at once. Which model constraint must the engineering team prioritize during model selection?",
    options: [
      { id: "a", text: "The model's Top-P limit.", isCorrect: false, explanation: "Incorrect. Top-P controls response variation and vocabulary diversity, not input size handling." },
      { id: "b", text: "The model's Context Window.", isCorrect: true, explanation: "Correct. The Context Window determines the maximum number of tokens (input + output) a model can process in a single request. 50,000 lines of code require a massive context window." },
      { id: "c", text: "The model's Temperature.", isCorrect: false, explanation: "Incorrect. Temperature controls creativity and determinism. A low temperature is preferred for code, but it doesn't allow processing larger files." },
      { id: "d", text: "The model's Parameter Count.", isCorrect: false, explanation: "Incorrect. While larger models generally perform better, the parameter count alone does not dictate the maximum input size capacity." }
    ]
  },
  {
    id: "premium_4",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "A healthcare provider is utilizing Amazon Bedrock to summarize patient medical records. According to the AWS Shared Responsibility Model, which action is solely the responsibility of the healthcare provider?",
    options: [
      { id: "a", text: "Securing the physical data centers hosting the Foundational Models.", isCorrect: false, explanation: "Incorrect. Physical infrastructure security is always the responsibility of AWS." },
      { id: "b", text: "Patching the hypervisor and host operating systems running the inference endpoints.", isCorrect: false, explanation: "Incorrect. AWS manages the underlying compute infrastructure for managed AI services like Bedrock." },
      { id: "c", text: "Ensuring that the IAM permissions correctly restrict which hospital employees can invoke the Bedrock API.", isCorrect: true, explanation: "Correct. Identity and Access Management (IAM), including Role-Based Access Control configuration, is always the customer's responsibility." },
      { id: "d", text: "Training the Anthropic Claude Foundational Model on general internet data.", isCorrect: false, explanation: "Incorrect. The pre-training of Managed Foundational Models is the responsibility of the AI provider (e.g., Anthropic, Amazon)." }
    ]
  },
  {
    id: "premium_5",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "A bank intends to deploy an AI-driven credit scoring application. To demonstrate 'Explainability' to regulatory bodies, which AWS service should they utilize to expose how specific demographic or financial features impacted an individual's credit denial?",
    options: [
      { id: "a", text: "Amazon SageMaker Clarify", isCorrect: true, explanation: "Correct. SageMaker Clarify detects bias in machine learning models and explains model predictions (using SHAP values) to help meet regulatory requirements." },
      { id: "b", text: "Amazon Inspector", isCorrect: false, explanation: "Incorrect. Amazon Inspector is a vulnerability management service that scans EC2 instances and container images for software exploits." },
      { id: "c", text: "Amazon CloudWatch", isCorrect: false, explanation: "Incorrect. CloudWatch monitors operational metrics (CPU, RAM, API latency), not the mathematical logic inside an AI model." },
      { id: "d", text: "AWS Control Tower", isCorrect: false, explanation: "Incorrect. Control Tower manages multi-account AWS environments, it does not analyze ML models." }
    ]
  }
];
