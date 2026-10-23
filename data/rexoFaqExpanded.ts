type ExpandedTopic = {
  label: string;
  idea: string;
};

export type ExpandedReXoFaqItem = {
  question: string;
  answers: [string, string, string, string, string, string, string, string, string, string];
};

const topics: ExpandedTopic[] = [
  {
    label: "AI Classes",
    idea: "six connected areas: AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology",
  },
  { label: "AI Fundamentals", idea: "core ideas behind artificial intelligence and practical ways to explore AI tools" },
  { label: "Data Handling", idea: "organizing and managing information so it is easier to find, understand, and use" },
  { label: "Data Analysis", idea: "examining information, noticing patterns, and forming useful insights" },
  { label: "Content Creation", idea: "using AI to support ideas and digital-content workflows while the creator guides the result" },
  { label: "Responsible AI", idea: "thoughtful AI use and awareness of why careful, responsible practices matter" },
  { label: "Business Technology", idea: "how modern technology and AI may support business tasks and workflows" },
  { label: "AI learning", idea: "building foundational understanding and exploring practical uses of AI" },
  { label: "Data skills", idea: "working with information, organizing it, and interpreting patterns to develop understanding" },
  { label: "AI for business", idea: "practical ways AI and digital tools may fit into business activities and workflows" },
];

const learners = [
  "a beginner",
  "a learner new to AI",
  "someone exploring digital tools",
  "a student interested in technology",
  "a learner working with information",
  "a person considering AI classes",
  "someone interested in creative work",
  "a business learner",
  "a learner building foundational skills",
  "someone exploring practical AI",
];

const questionFrames = [
  (topic: string, learner: string) => `What does ${topic} cover for ${learner}?`,
  (topic: string, learner: string) => `What can ${learner} learn from ${topic}?`,
  (topic: string, learner: string) => `What should ${learner} understand about ${topic}?`,
  (topic: string, learner: string) => `How is ${topic} useful to ${learner}?`,
  (topic: string, learner: string) => `Why might ${learner} study ${topic}?`,
  (topic: string, learner: string) => `Where can ${learner} begin with ${topic}?`,
  (topic: string, learner: string) => `How does ${topic} connect to practical technology learning for ${learner}?`,
  (topic: string, learner: string) => `What ideas are included in ${topic} for ${learner}?`,
  (topic: string, learner: string) => `How can ${learner} explore ${topic} in a practical way?`,
  (topic: string, learner: string) => `What is a clear introduction to ${topic} for ${learner}?`,
];

function makeAnswerVariants(idea: string): ExpandedReXoFaqItem["answers"] {
  return [
    `A learner can explore ${idea}.`,
    `This topic focuses on ${idea}.`,
    `Learners explore ${idea}.`,
    `At a high level, it is about ${idea}.`,
    `A useful starting point is understanding ${idea}.`,
    `The main idea is ${idea}.`,
    `In practical terms, learners build understanding of ${idea}.`,
    `This subject introduces ${idea}.`,
    `Learners can develop a foundation in ${idea}.`,
    `It gives learners a way to explore ${idea}.`,
  ];
}

// Ten topics × ten learner perspectives × ten question forms = 1,000 additional
// complete questions. Each one has ten safe answer variants based on site facts.
export const expandedReXoFaq: ExpandedReXoFaqItem[] = topics.flatMap((topic) => {
  const answers = makeAnswerVariants(topic.idea);
  return learners.flatMap((learner) =>
    questionFrames.map((makeQuestion) => ({ question: makeQuestion(topic.label, learner), answers })),
  );
});
