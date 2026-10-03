export type ReXoKnowledgeItem = {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  answers: string[];
};

// Keep each alternative useful on its own. ReXo rotates through these so a
// returning visitor does not see the same wording every time they ask.
export const rexoKnowledge: ReXoKnowledgeItem[] = [
  {
    id: "ai-fundamentals",
    category: "AI Classes",
    title: "AI Fundamentals",
    keywords: ["ai fundamentals", "artificial intelligence", "ai basics", "learn ai"],
    answers: [
      "AI Fundamentals is an introduction to Artificial Intelligence. It helps learners build a base for understanding what AI is and how people can use it in practical tasks.",
      "This topic introduces the core ideas behind AI and gives learners a starting point for exploring the technology. It connects basic understanding with examples of how AI may support everyday work.",
      "In AI Fundamentals, learners begin with the essential concepts of Artificial Intelligence. The goal is to make AI easier to understand and provide a foundation for learning more about AI tools and applications.",
      "AI Fundamentals helps you get comfortable with the basic ideas of Artificial Intelligence. It is a useful first step before exploring areas such as data, content creation, and business technology.",
      "This class area focuses on understanding AI at a foundational level. Learners explore what AI can help with and how it can be applied thoughtfully to practical activities.",
      "If you are new to AI, this is the place to begin. AI Fundamentals introduces the main concepts and builds the understanding needed to continue into more practical technology topics.",
    ],
  },
  {
    id: "data-handling",
    category: "AI Classes",
    title: "Data Handling",
    keywords: ["data handling", "handling data", "data management", "manage data", "organize information"],
    answers: [
      "Data Handling is about working with information in an organized and useful way. Learners explore how data can be arranged and managed so it is easier to work with in everyday tasks.",
      "This topic helps learners think clearly about information: how to organize it, keep it manageable, and use it more effectively. Those habits support many digital and business workflows.",
      "The Data Handling class introduces practical ways to work with data. It focuses on organizing information and developing skills that make day-to-day work with data more orderly.",
      "When information is scattered, it is harder to use. Data Handling explores how organizing and managing data can make it clearer and more useful for later tasks.",
      "Data Handling builds practical understanding of how information can be collected, arranged, and managed. The emphasis is on making data easier to find, understand, and use.",
      "In this area, learners develop a more structured approach to working with information. They learn why organized data matters and how it can support more effective digital work.",
    ],
  },
  {
    id: "data-analysis",
    category: "AI Classes",
    title: "Data Analysis",
    keywords: ["data analysis", "analyze data", "analysis", "data analytics", "patterns in data"],
    answers: [
      "Data Analysis is about making sense of information. Learners look for patterns and useful details, then use those observations to form meaningful insights.",
      "This topic shows how data can tell a clearer story. It introduces ways to examine information, notice patterns, and turn what you find into useful understanding.",
      "In Data Analysis, learners practice moving from raw information toward insight. The focus is on understanding data, spotting trends or relationships, and explaining what those patterns may mean.",
      "Data Analysis helps you ask useful questions of information instead of simply looking at rows of data. Learners explore how patterns can reveal observations that support better understanding.",
      "This class area develops analytical thinking. It covers how to review information, identify meaningful patterns, and communicate the insights that can be drawn from them.",
      "If you want to understand what information is showing, Data Analysis is a helpful skill area. It focuses on interpreting data and finding useful patterns rather than treating data as numbers alone.",
    ],
  },
  {
    id: "content-creation",
    category: "AI Classes",
    title: "Content Creation",
    keywords: ["content creation", "create content", "ai content", "writing with ai", "creative ai"],
    answers: [
      "Content Creation explores how AI can assist with digital content and creative work. Learners consider ways to use AI as a productivity tool while shaping useful content and improving their workflow.",
      "This topic looks at AI-supported creativity, including how AI can help people develop and refine digital content. The aim is to make creative workflows more effective while keeping the person in control of the result.",
      "In Content Creation, learners explore practical uses of AI for creating digital material. They can consider how AI tools may help with ideas and drafting as part of a broader creative process.",
      "AI can support parts of a creative workflow, from getting started to refining content. This class area introduces that support and encourages learners to use the tools purposefully.",
      "Content Creation focuses on combining human ideas with AI assistance. Learners explore how technology can help with digital content and productivity without replacing the choices made by the creator.",
      "If you are curious about making content with AI, this topic provides a practical introduction. It explores useful ways AI can contribute to creative work and everyday content workflows.",
    ],
  },
  {
    id: "responsible-ai",
    category: "AI Classes",
    title: "Responsible AI",
    keywords: ["responsible ai", "ai safety", "safe ai", "ethical ai", "privacy and ai"],
    answers: [
      "Responsible AI is about using AI thoughtfully and safely. Learners build awareness of why careful use matters and how to approach technology in a responsible way.",
      "This topic asks learners to consider not only what AI can do, but how it should be used. It introduces responsible practices and encourages people to think carefully when working with AI.",
      "Responsible AI focuses on thoughtful use of AI systems. Learners explore the importance of using technology carefully and developing awareness of responsible technology practices.",
      "AI is most useful when people use it with care. This class area introduces responsible AI use and helps learners understand why attention and good judgment matter.",
      "In Responsible AI, learners develop a foundation for using AI in a considered way. The subject encourages awareness, care, and responsibility when applying AI to tasks.",
      "This class helps learners approach AI with the right questions about careful use. It focuses on responsible practices and why people should remain thoughtful when using AI tools.",
    ],
  },
  {
    id: "business-technology",
    category: "AI Classes",
    title: "Business Technology",
    keywords: ["business technology", "ai business", "business ai", "technology business", "ai for business"],
    answers: [
      "Business Technology explores how modern technology and AI can support business activities. Learners consider practical applications and technology-driven workflows that relate to the way businesses work.",
      "This topic connects AI and digital tools with business needs. It helps learners explore where technology may support productivity, communication, and everyday workflows.",
      "In Business Technology, learners look at practical links between technology and business. The class introduces AI applications and ways technology can support modern work.",
      "Business Technology is about applying digital thinking to business activities. Learners explore how AI and technology can fit into workflows and support practical business tasks.",
      "This area gives learners a way to think about AI in a business setting. It covers technology-driven workflows and practical concepts that can help businesses work with digital tools.",
      "If you want to understand AI beyond personal use, Business Technology explores business applications. It considers how modern technology may support work, operations, and productivity.",
    ],
  },
  {
    id: "benefits",
    category: "Benefits",
    title: "Benefits of AI Classes",
    keywords: ["benefits", "benefit", "why ai classes", "advantages", "why learn ai", "what will i gain"],
    answers: [
      "Aarushi Infotech AI Classes bring together AI fundamentals, data skills, content creation, responsible AI, and business technology. This gives learners a broad introduction to practical technology topics and helps them build useful understanding across several areas.",
      "The classes are designed to help learners understand AI and develop practical technology skills. Alongside AI basics, the learning areas include data handling and analysis, creative work with AI, responsible use, and business applications.",
      "One benefit is getting to explore several connected areas instead of AI in isolation. Learners can build foundational AI knowledge, practice thinking about data, discover AI-assisted content workflows, and consider responsible and business uses.",
      "These classes offer a structured introduction to topics that are increasingly part of digital work. The curriculum spans AI, data, creativity, responsible use, and business technology, helping learners see how the areas relate.",
      "Learners can develop a wider view of modern technology through the AI Classes topics. The program covers foundational understanding as well as practical areas such as data analysis, content creation, and business technology.",
      "If you are deciding whether to explore the classes, they cover a useful range of subjects: AI basics, working with data, creating content, responsible use, and technology in business. The focus is on building understanding and practical skills.",
    ],
  },
  {
    id: "features",
    category: "Features",
    title: "AI Classes Features",
    keywords: ["features", "class features", "what is included", "included", "what will i learn", "what can i learn"],
    answers: [
      "The AI Classes cover six learning areas: AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology. Together, they introduce core AI ideas, working with information, creative workflows, careful AI use, and practical business applications.",
      "The program includes AI basics and several practical technology subjects. You can explore how to work with and analyze data, how AI may support content creation, how to use AI responsibly, and how technology relates to business.",
      "Aarushi Infotech's AI Classes are organized around six topics: understanding AI, handling data, analyzing data, creating content, responsible AI, and business technology. Each topic offers a different way to understand and apply modern technology.",
      "Learners explore both foundational and applied subjects. The topics move from AI Fundamentals into data handling and analysis, then into content creation, responsible use, and the role of technology in business.",
      "The course topics include AI Fundamentals, Data Handling, Data Analysis, Content Creation, Responsible AI, and Business Technology. This gives learners a broad path through AI concepts, data skills, creative uses, safety awareness, and business workflows.",
      "You will find a mix of AI and practical technology areas in the classes: learning AI basics, organizing and understanding data, creating digital content, using AI thoughtfully, and exploring technology for business.",
    ],
  },
  {
    id: "tally-prime",
    category: "Tally Prime",
    title: "Tally Prime",
    keywords: ["tally", "tally prime", "learn tally", "tally classes", "tally license", "tally support"],
    answers: [
      "Aarushi Infotech provides Tally Prime learning and related services. Support areas include licensing, teaching, installation and setup, implementation, bug fixing, and ongoing assistance.",
      "If you need help with Tally Prime, Aarushi Infotech offers several kinds of support, from learning and licensing to installation, setup, implementation, bug fixing, and general support.",
      "Tally Prime is one of Aarushi Infotech's service areas. The listed support includes teaching, license services, installing and setting up the software, implementation, troubleshooting bugs, and support.",
      "Aarushi Infotech can help with both learning Tally Prime and related technical services. That includes licensing, installation and setup, implementation, bug fixing, and support for Tally-related needs.",
      "The Tally Prime offering covers learning as well as practical assistance. You can ask about classes, licensing, installation, configuration, implementation, bug fixes, or support.",
      "For Tally Prime, Aarushi Infotech lists services across the process: learning the software, getting a license, installation and setup, implementation, resolving bugs, and support. Contact the team to discuss which service fits your needs.",
    ],
  },
  {
    id: "security",
    category: "Security",
    title: "Tally Prime Security",
    keywords: ["security", "tally security", "security system", "tally prime security", "protect tally data"],
    answers: [
      "Aarushi Infotech provides Tally Prime security-related solutions and support. The focus is on security for the Tally environment and awareness of protecting business data; contact the team to discuss your setup.",
      "Tally Prime security is one of the support areas offered by Aarushi Infotech. The team can discuss security-focused assistance and business data protection awareness for your needs.",
      "If your question is about securing Tally Prime, Aarushi Infotech offers security-related solutions and support. Because requirements differ between businesses, the next step is to contact the team about your setup.",
      "Aarushi Infotech lists a Tally Prime Security System and security-focused support. You can speak with the team about the kind of protection and assistance you are looking for.",
      "The security offering relates to Tally Prime and business data protection. Aarushi Infotech can provide security-focused support; contact them with details about your Tally environment for relevant guidance.",
      "Security support is available for Tally Prime. Aarushi Infotech can discuss its Tally Prime security solutions and help you understand what support may suit your business setup.",
    ],
  },
  {
    id: "services",
    category: "Services",
    title: "Aarushi Infotech Services",
    keywords: ["services", "service", "custom solutions", "customization", "customisation", "data analysis services", "cloud storage"],
    answers: [
      "Aarushi Infotech offers technology-focused services for business needs. The listed areas include custom solutions and customization, data handling and analysis, cloud storage, and Tally-related services and support.",
      "The services span business technology and data work. You can ask Aarushi Infotech about custom solutions, customization, data handling, data analysis, cloud storage, or help with Tally.",
      "Aarushi Infotech supports businesses with a range of technology services, including tailored solutions, data-related work, cloud storage, and Tally services. Contact the team to explain your requirements and find the relevant option.",
      "If you are looking for technology support, Aarushi Infotech lists custom solutions, customization, data handling, data analysis, cloud storage, and Tally-related assistance among its services.",
      "The service offering is centered on practical technology needs. It includes support with data, cloud storage, customized solutions, and Tally, with the team available to discuss what your business needs.",
      "Aarushi Infotech's listed services include customizing solutions, working with data, cloud storage, and Tally-related support. If you tell the team what you are trying to do, they can point you toward the appropriate service.",
    ],
  },
  {
    id: "quick-book",
    category: "Website",
    title: "Quick Book",
    keywords: ["quick book", "quickbook", "digital book", "book", "website guide"],
    answers: [
      "Quick Book is an interactive guide on the Aarushi Infotech AI Classes website. It brings together information about the classes, technology topics, services, and other useful details in one place.",
      "You can use the website's Quick Book to explore Aarushi Infotech information. It includes material about the AI Classes, related technology subjects, services, and other helpful topics.",
      "The Quick Book is a digital, interactive resource built into the website. It helps visitors browse information about the classes, technology topics, and services without needing to search through every page.",
      "Looking for a quick overview? The website's Quick Book collects useful information about Aarushi Infotech AI Classes, technology topics, and services in an interactive format.",
      "Quick Book works as an on-site information guide. Visitors can explore class details, technology areas, services, and other useful information through the website.",
      "Aarushi Infotech's Quick Book is available on the website as an interactive resource. Open it to browse information about the AI Classes and the other topics and services offered.",
    ],
  },
  {
    id: "contact",
    category: "Contact",
    title: "Contact Aarushi Infotech",
    keywords: ["contact", "contact aarushi infotech", "phone", "whatsapp", "email", "location", "address"],
    answers: [
      "You can reach Aarushi Infotech using the contact options on the website. Available channels include email, phone, WhatsApp, and Google Maps for location information.",
      "To contact the team, visit the website's contact section and choose the channel that works for you. It provides email, phone, WhatsApp, and a Google Maps option.",
      "The website lists several ways to get in touch with Aarushi Infotech: email, phone, and WhatsApp. You can also use the Google Maps link to view the location information.",
      "For questions about classes or services, use the contact options provided on the site. The available links include email, phone, WhatsApp, and Google Maps.",
      "Aarushi Infotech's contact section has the available communication links, including email, phone, and WhatsApp. The site also provides a Google Maps link for location details.",
      "You can find the team's contact methods on the website, including email, phone, and WhatsApp. If you need directions, open the Google Maps option in the contact section.",
    ],
  },
];
