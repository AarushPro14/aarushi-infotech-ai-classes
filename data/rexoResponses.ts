export type ReXoSuggestedMessage = {
  id: string;
  text: string;
};

export const rexoSuggestedMessages: ReXoSuggestedMessage[] = [
  {
    id: "all-classes",
    text: "Show me all AI Classes",
  },
  {
    id: "benefits",
    text: "Show me all the benefits of Aarushi Infotech AI Classes",
  },
  {
    id: "learn",
    text: "What will I learn?",
  },
  {
    id: "data-handling",
    text: "Tell me about Data Handling",
  },
  {
    id: "data-analysis",
    text: "Tell me about Data Analysis",
  },
  {
    id: "content",
    text: "Tell me about Content Creation",
  },
  {
    id: "responsible-ai",
    text: "What is Responsible AI?",
  },
  {
    id: "business",
    text: "How can AI help in business?",
  },
  {
    id: "tally",
    text: "Tell me about Tally Prime",
  },
  {
    id: "security",
    text: "Tell me about Tally Prime Security",
  },
  {
    id: "services",
    text: "What services does Aarushi Infotech provide?",
  },
  {
    id: "quick-book",
    text: "Show me the Quick Book",
  },
  {
    id: "pricing",
    text: "How much do the classes cost?",
  },
  {
    id: "contact",
    text: "How can I contact Aarushi Infotech?",
  },
];

export const rexoFallbackResponses = [
  "I don't have a reliable answer for that just yet. I can help with our AI classes, course topics, services, Tally Prime solutions, and contact options. Try asking about one of those.",
  "I may need a little more detail to help with that. You can ask me about an AI class, a specific topic such as Data Analysis, our services, or Tally Prime.",
  "I don't want to guess and give you the wrong information. I can help with Aarushi Infotech's AI Classes, technology topics, Tally Prime, services, and ways to contact the team.",
  "I'm not finding a confirmed answer in my guide yet. Try asking about AI Fundamentals, Data Handling, Content Creation, Responsible AI, Business Technology, or one of our services.",
  "Could you ask that another way or mention the topic you mean? I have information about the AI Classes, their learning areas, Tally Prime, and Aarushi Infotech services.",
  "That detail isn't clear in my guide, so I don't want to make it up. I can still help you explore the classes, data topics, AI use, business technology, Tally Prime, or contact options.",
];
