import { expandedReXoFaq } from "@/data/rexoFaqExpanded";

export type ReXoFaqItem = {
  question: string;
  aliases: string[];
  answers: [string, string, string, string, string, string, string, string, string, string];
};

// Answers are deliberately selected only for a whole-question match. A changed
// word such as "not", "without", or "fees" must go to Gemini for review.
export const rexoFaq: ReXoFaqItem[] = [
  {
    question: "What are the benefits of Aarushi Infotech AI Classes?",
    aliases: [
      "what are the benefits of aarushi infotech ai classes",
      "show me all the benefits of aarushi infotech ai classes",
      "what are the benefits of ai classes",
      "why should i learn ai at aarushi infotech",
      "what can i gain from ai classes",
    ],
    answers: [
      "The classes bring together AI fundamentals, data skills, content creation, responsible AI, and business technology for a broad introduction to practical technology topics.",
      "Learners can explore AI basics, working with data, AI-assisted creative workflows, responsible use, and business applications in one program.",
      "The program connects foundational AI knowledge with practical areas such as data analysis, content creation, responsible use, and business technology.",
      "A benefit is learning several connected technology topics, from AI fundamentals and data skills to creative and business applications.",
      "The classes offer a structured introduction to AI and related digital-work topics, helping learners see how these areas connect.",
      "You can build understanding across AI basics, data handling and analysis, content creation, responsible AI, and business technology.",
      "The curriculum spans foundational and applied topics, giving learners a wider view of how AI and technology relate to practical work.",
      "Learners explore multiple areas rather than AI in isolation: data, creative workflows, thoughtful use, and business technology.",
      "The classes cover a useful range of subjects, including AI concepts, data skills, AI-supported content, responsible use, and business applications.",
      "Aarushi Infotech's AI Classes provide a structured way to explore AI, data, creativity, responsible use, and technology in business.",
    ],
  },
  {
    question: "What AI classes are available?",
    aliases: [
      "what ai classes are available",
      "what ai classes does aarushi infotech offer",
      "which ai classes can i take",
      "show me all ai classes",
      "list all ai classes",
      "what classes are offered",
      "what are the ai classes",
    ],
    answers: [
      "Aarushi Infotech's AI Classes cover AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology.",
      "You can explore six areas: AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology.",
      "The AI Classes include foundations of AI, working with data, analyzing data, creating content, using AI responsibly, and business technology.",
      "Aarushi Infotech offers classes in AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology.",
      "The class topics range from AI basics and data skills to creative AI, responsible use, and technology for business.",
      "There are six learning areas: AI Fundamentals; Data Handling; Data Analysis; Content Creation; Responsible AI; and Business Technology.",
      "You can learn AI basics, organize and interpret data, explore AI-assisted content, consider responsible use, and study business technology.",
      "Aarushi Infotech's AI class catalog covers six topics, including AI basics, data, content creation, responsible AI, and business technology.",
      "The available topics are AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology.",
      "The program brings together foundational AI learning with data, creativity, responsible use, and business technology topics.",
    ],
  },
  {
    question: "What is AI Fundamentals?",
    aliases: [
      "what is ai fundamentals",
      "tell me about ai fundamentals",
      "explain ai fundamentals",
      "what do you learn in ai fundamentals",
      "what does ai fundamentals cover",
    ],
    answers: [
      "AI Fundamentals introduces the core ideas behind Artificial Intelligence and gives learners a starting point for exploring AI tools and applications.",
      "This class area helps learners understand what AI is and how it can support practical tasks.",
      "AI Fundamentals builds a foundation for understanding Artificial Intelligence before exploring topics such as data, content creation, and business technology.",
      "It is an introduction to AI concepts, designed to make the technology easier to understand and explore.",
      "Learners begin with essential AI ideas and consider how AI may be used in everyday work.",
      "AI Fundamentals is a starting point for learning about AI and its practical applications.",
      "The topic focuses on the basic concepts of Artificial Intelligence and prepares learners to explore related technology areas.",
      "If you are new to AI, this subject introduces its main ideas and builds a foundation for further learning.",
      "The class covers foundational AI understanding and thoughtful ways to explore AI tools in practical tasks.",
      "AI Fundamentals helps learners get comfortable with core AI concepts before moving into more applied subjects.",
    ],
  },
  {
    question: "What is Data Handling?",
    aliases: [
      "what is data handling",
      "tell me about data handling",
      "explain data handling",
      "what do you learn in data handling",
      "what does data handling cover",
    ],
    answers: [
      "Data Handling is about organizing and managing information so it is easier to find, understand, and use.",
      "This topic introduces practical ways to arrange and work with information in everyday tasks.",
      "Learners explore how to keep data organized and manageable for digital and business workflows.",
      "Data Handling builds a structured approach to working with information, from arranging it to making it useful.",
      "The class focuses on organizing information so it is clearer and easier to work with later.",
      "Data Handling helps learners develop orderly habits for managing information in day-to-day work.",
      "It covers practical understanding of collecting, arranging, and managing data.",
      "This area looks at why organized information matters and how it supports more effective digital work.",
      "Learners consider ways to make information easier to locate, understand, and use.",
      "Data Handling is a practical introduction to keeping information well organized and manageable.",
    ],
  },
  {
    question: "What is Data Analysis?",
    aliases: [
      "what is data analysis",
      "tell me about data analysis",
      "explain data analysis",
      "what do you learn in data analysis",
      "what does data analysis cover",
    ],
    answers: [
      "Data Analysis is about examining information, finding meaningful patterns, and using those observations to form insights.",
      "This topic helps learners make sense of data by looking for patterns and useful details.",
      "Learners explore how to move from raw information toward insights by noticing trends and relationships.",
      "Data Analysis develops skills for reviewing information, identifying patterns, and explaining what they may mean.",
      "The class focuses on interpreting information and finding useful patterns, rather than looking at numbers in isolation.",
      "Data Analysis shows how information can tell a clearer story and support better understanding.",
      "Learners practice asking useful questions about data and drawing observations from what they find.",
      "This area introduces ways to examine information and turn patterns into meaningful understanding.",
      "Data Analysis builds analytical thinking: review information, find patterns, and communicate useful insights.",
      "It is a practical introduction to understanding what data shows and why those observations matter.",
    ],
  },
  {
    question: "What is Content Creation?",
    aliases: [
      "what is content creation",
      "tell me about content creation",
      "explain content creation",
      "what do you learn in content creation",
      "what does content creation cover",
    ],
    answers: [
      "Content Creation explores how AI can assist with digital content and creative work while the person remains in control of the result.",
      "Learners consider ways AI tools can support ideas, drafting, and improving creative workflows.",
      "This topic introduces practical uses of AI for creating digital material and making creative work more effective.",
      "Content Creation looks at combining human ideas with AI assistance for digital content.",
      "The class explores AI as a productivity tool for developing and refining content.",
      "Learners explore how AI may contribute to creative work, from getting started to refining a draft.",
      "This area covers AI-supported creativity and purposeful ways to use tools in content workflows.",
      "Content Creation introduces how AI can help with digital material while creative choices remain with the creator.",
      "The topic focuses on using AI to support content and creative workflows, not replace human direction.",
      "You will explore practical ways AI can help people create and improve digital content.",
    ],
  },
  {
    question: "What is Responsible AI?",
    aliases: [
      "what is responsible ai",
      "tell me about responsible ai",
      "explain responsible ai",
      "what do you learn in responsible ai",
      "what does responsible ai cover",
    ],
    answers: [
      "Responsible AI is about using AI thoughtfully and safely, with awareness of why careful use matters.",
      "This topic encourages learners to consider not only what AI can do, but how it should be used.",
      "Learners explore responsible practices and develop awareness for using technology carefully.",
      "Responsible AI builds a foundation for thoughtful use of AI systems and tools.",
      "The class focuses on careful, considered use of AI and the importance of good judgment.",
      "This area helps learners ask thoughtful questions about how AI is applied and used responsibly.",
      "Responsible AI introduces practices that encourage care and awareness when working with AI.",
      "Learners consider why people should remain thoughtful when applying AI to tasks.",
      "It is a learning area about using AI with care and attention to responsible practices.",
      "Responsible AI helps people build awareness of careful and thoughtful technology use.",
    ],
  },
  {
    question: "What is Business Technology?",
    aliases: [
      "what is business technology",
      "tell me about business technology",
      "explain business technology",
      "what do you learn in business technology",
      "what does business technology cover",
    ],
    answers: [
      "Business Technology explores how modern technology and AI may support business activities and workflows.",
      "This topic connects digital tools and AI with practical business needs.",
      "Learners consider ways technology can support productivity, communication, and everyday business workflows.",
      "Business Technology introduces practical links between modern technology and the way businesses work.",
      "The class looks at AI applications and technology-driven workflows in a business setting.",
      "Learners explore how digital tools can fit into business tasks and workflows.",
      "This area helps learners think about practical uses of AI and technology for businesses.",
      "Business Technology covers technology concepts that relate to modern work and business activities.",
      "The topic considers where technology may support business productivity and operations.",
      "It is an introduction to applying digital thinking and technology to practical business needs.",
    ],
  },
  {
    question: "What services does Aarushi Infotech provide?",
    aliases: [
      "what services does aarushi infotech provide",
      "what services does aarushi infotech offer",
      "tell me about aarushi infotech services",
      "what does aarushi infotech do",
      "list aarushi infotech services",
    ],
    answers: [
      "Aarushi Infotech lists custom solutions and customization, data handling and analysis, cloud storage, and Tally-related services and support.",
      "The listed services include tailored technology solutions, data work, cloud storage, and Tally support.",
      "Aarushi Infotech's service areas include custom solutions, customization, data handling, data analysis, cloud storage, and Tally.",
      "The company offers technology-focused services for businesses, including data-related work, customized solutions, cloud storage, and Tally assistance.",
      "You can ask Aarushi Infotech about customization, data handling and analysis, cloud storage, or Tally-related support.",
      "Aarushi Infotech lists services across custom technology solutions, data, cloud storage, and Tally.",
      "Its services include custom solutions, working with data, cloud storage, and assistance with Tally.",
      "The listed technology services cover customization, data handling and analysis, cloud storage, and Tally support.",
      "Aarushi Infotech supports business technology needs through tailored solutions, data services, cloud storage, and Tally-related help.",
      "The website lists custom solutions, data handling, data analysis, cloud storage, and Tally services. Contact the team to discuss a specific need.",
    ],
  },
  {
    question: "What Tally Prime services are available?",
    aliases: [
      "what tally prime services are available",
      "tell me about tally prime",
      "what tally prime help is available",
      "what tally services does aarushi infotech offer",
      "does aarushi infotech help with tally prime",
    ],
    answers: [
      "Aarushi Infotech lists Tally Prime teaching, licensing, installation and setup, implementation, bug fixing, and ongoing support.",
      "Tally Prime assistance includes learning, license services, setup, implementation, troubleshooting, and support.",
      "The listed Tally services cover classes, licensing, installation, configuration, implementation, and bug fixing.",
      "Aarushi Infotech can help with learning Tally Prime and related services such as setup, implementation, licensing, and support.",
      "Support areas include Tally Prime teaching, license services, installation and setup, implementation, and bug fixes.",
      "The Tally Prime offering includes learning and technical assistance, including licensing, setup, implementation, and support.",
      "Aarushi Infotech lists Tally Prime services from teaching and licensing through setup, implementation, bug fixing, and support.",
      "You can ask about Tally Prime classes, licenses, installation, implementation, troubleshooting, or ongoing assistance.",
      "The website lists Tally Prime learning, licensing, installation, setup, implementation, bug fixing, and support.",
      "Aarushi Infotech provides Tally Prime-related learning and support. Contact the team to discuss which service fits your needs.",
    ],
  },
  {
    question: "How can I contact Aarushi Infotech?",
    aliases: [
      "how can i contact aarushi infotech",
      "how do i contact aarushi infotech",
      "how can i reach aarushi infotech",
      "what are aarushi infotech contact options",
      "how can i contact aarushi infotech for classes",
    ],
    answers: [
      "Use the website's Contact section to reach Aarushi Infotech by email, phone, or WhatsApp. It also links to Google Maps for location information.",
      "The website provides email, phone, WhatsApp, and a Google Maps link in its Contact section.",
      "Visit the Contact section and choose email, phone, WhatsApp, or the Google Maps option for location details.",
      "You can contact the team through the channels listed on the site: email, phone, and WhatsApp.",
      "Aarushi Infotech's website lists email, phone, and WhatsApp contact options, plus a Google Maps link.",
      "Open the site's Contact section for the available ways to reach the team and view location information.",
      "For class or service questions, use the email, phone, or WhatsApp links provided on the website.",
      "The Contact section has the team's available communication links and a Google Maps option.",
      "You can find contact methods on the website, including email, phone, WhatsApp, and Google Maps.",
      "Use the website's Contact options to speak with Aarushi Infotech about classes or services.",
    ],
  },
];

const normalizedAliases = new Map<string, { answers: readonly string[] }>();
for (const item of rexoFaq) {
  for (const alias of item.aliases) {
    normalizedAliases.set(normalizeFaqQuestion(alias), item);
  }
}
for (const item of expandedReXoFaq) {
  normalizedAliases.set(normalizeFaqQuestion(item.question), item);
}

function normalizeFaqQuestion(value: string): string {
  return value.toLocaleLowerCase().normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu, " ").trim().replace(/\s+/g, " ");
}

/** Exact normalized aliases keep negation and other meaning-changing words safe. */
export function findReXoFaqAnswer(question: string): string | null {
  const match = normalizedAliases.get(normalizeFaqQuestion(question));
  if (!match) return null;
  return match.answers[Math.floor(Math.random() * match.answers.length)] ?? null;
}
