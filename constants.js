// @flow
import * as d3 from "d3";

export type TrackId =
| "USER_RESEARCH"
| "PERSONAS"
| "USER_JOURNEYS"
| "SITE_VISITS"
| "USER_INTERVIEWS"
| "SHARE_FINDINGS"
| "ANALYTICS"
| "EVALUATE_RESEARCH"
| "USABILITY"
| "PREDICT"
| "TEST_PLANNING"
| "SHARE_RESULTS"
| "PRIORITISE"
| "MAPPING_IA"
| "DOMAIN_MAPPING"
| "IA_PATTERNS"
| "VOCABULARY"
| "IA_PLANNING"
| "FLOWS"
| "PATTERNS"
| "HCI"
| "MOTION"
| "IMPLEMENTATION"
| "DOCUMENTATION"
| "FUNDAMENTALS"
| "PRODUCTION"
| "ILLUSTRATION"
| "DESIGN_LANGUAGE"
| "WRITE"
| "GUIDE"
| "STYLE_GUIDE"
| "INTEGRATE"
| "FIDELITY"
| "FAST_ITERATION"
| "BREADTH"
| "PROTOTYPE"
| "SCHEDULING"
| "STAKEHOLDER_MANAGEMENT"
| "CRITIQUE"
| "PROFESSIONAL_DEVELOPMENT"
| "BOND"
| "CULTURE"
| "ADVOCATE"
| "EVANGELISE";

export type Milestone = 0  |1 | 2 | 3 | 4 | 5;

export type MilestoneMap = {
  "USER_RESEARCH": Milestone,
  "PERSONAS": Milestone,
  "USER_JOURNEYS": Milestone,
  "SITE_VISITS": Milestone,
  "USER_INTERVIEWS": Milestone,
  "SHARE_FINDINGS": Milestone,
  "ANALYTICS": Milestone,
  "EVALUATE_RESEARCH": Milestone,
  "USABILITY": Milestone,
  "PREDICT": Milestone,
  "TEST_PLANNING": Milestone,
  "SHARE_RESULTS": Milestone,
  "PRIORITISE": Milestone,
  "MAPPING_IA": Milestone,
  "DOMAIN_MAPPING": Milestone,
  "IA_PATTERNS": Milestone,
  "VOCABULARY": Milestone,
  "IA_PLANNING": Milestone,
  "FLOWS": Milestone,
  "PATTERNS": Milestone,
  "HCI": Milestone,
  "MOTION": Milestone,
  "IMPLEMENTATION": Milestone,
  "DOCUMENTATION": Milestone,
  "FUNDAMENTALS": Milestone,
  "PRODUCTION": Milestone,
  "ILLUSTRATION": Milestone,
  "DESIGN_LANGUAGE": Milestone,
  "WRITE": Milestone,
  "GUIDE": Milestone,
  "STYLE_GUIDE": Milestone,
  "INTEGRATE": Milestone,
  "FIDELITY": Milestone,
  "FAST_ITERATION": Milestone,
  "BREADTH": Milestone,
  "PROTOTYPE": Milestone,
  "SCHEDULING": Milestone,
  "STAKEHOLDER_MANAGEMENT": Milestone,
  "CRITIQUE": Milestone,
  "PROFESSIONAL_DEVELOPMENT": Milestone,
  "BOND": Milestone,
  "CULTURE": Milestone,
  "ADVOCATE": Milestone,
  "EVANGELISE": Milestone
};
export const milestones = [0, 1, 2, 3, 4, 5];

export const COMPETENCY = [
  "Has a basic understanding of this competency",
  "Demonstrates this competency under supervision or with encouragment",
  "Demonstrates this competency independently",
  "Can supervise other people in this competency, and encourages others to develop this competency",
  "Develops new ways of applying this competency"
  ];

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;
    case 4:
      return 12;
    case 5:
      return 20;
    default:
      return 0;
  }
};

export const pointsToLevels = {
  "0": "1.1",
  "5": "1.2",
  "11": "1.3",
  "17": "2.1",
  "23": "2.2",
  "29": "2.3",
  "36": "3.1",
  "43": "3.2",
  "50": "3.3",
  "58": "4.1",
  "66": "4.2",
  "74": "4.3",
  "90": "5.1",
  "110": "5.2",
  "135": "5.3"
};

export const maxLevel = 135;

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
};

type Tracks = {|
  "USER_RESEARCH": Track,
  "PERSONAS": Track,
  "USER_JOURNEYS": Track,
  "SITE_VISITS": Track,
  "USER_INTERVIEWS": Track,
  "SHARE_FINDINGS": Track,
  "ANALYTICS": Track,
  "EVALUATE_RESEARCH": Track,
  "USABILITY": Track,
  "PREDICT": Track,
  "TEST_PLANNING": Track,
  "SHARE_RESULTS": Track,
  "PRIORITISE": Track,
  "MAPPING_IA": Track,
  "DOMAIN_MAPPING": Track,
  "IA_PATTERNS": Track,
  "VOCABULARY": Track,
  "IA_PLANNING": Track,
  "FLOWS": Track,
  "PATTERNS": Track,
  "HCI": Track,
  "MOTION": Track,
  "IMPLEMENTATION": Track,
  "DOCUMENTATION": Track,
  "FUNDAMENTALS": Track,
  "PRODUCTION": Track,
  "ILLUSTRATION": Track,
  "DESIGN_LANGUAGE": Track,
  "WRITE": Track,
  "GUIDE": Track,
  "STYLE_GUIDE": Track,
  "INTEGRATE": Track,
  "FIDELITY": Track,
  "FAST_ITERATION": Track,
  "BREADTH": Track,
  "PROTOTYPE": Track,
  "SCHEDULING": Track,
  "STAKEHOLDER_MANAGEMENT": Track,
  "CRITIQUE": Track,
  "PROFESSIONAL_DEVELOPMENT": Track,
  "BOND": Track,
  "CULTURE": Track,
  "ADVOCATE": Track,
  "EVANGELISE": Track
|};

export const MILESTONES_SHARED = [
      {
        summary: COMPETENCY[0],
        signals: [
          "Delivers features requiring simple local modifications",
          "Adds simple actions that call server endpoints",
          "Reuses existing components appropriately"
        ],
        examples: [
          "Added existing button to a different iOS surface",
          "Add follow button for publications on Android",
          "Fetched and displayed a new stream, using existing stream item styles"
        ]
      },
      {
        summary: COMPETENCY[1],
        signals: [
          "Defines new useful and appropriate proto-generated objects",
          "Creates simple new activities on Android",
          "Migrates code from old patterns to new patterns"
        ],
        examples: [
          "Upgraded SDWebImage to a new major version",
          "Added support for rendering a new type of stream item",
          "Prototyped a simple new feature quickly"
        ]
      },
      {
        summary: COMPETENCY[2],
        signals: [
          "Implements complex features with a large product surface area",
          "Works effectively with  Android reactive programming framework",
          "Adds support for new iOS features after a major iOS version upgrade"
        ],
        examples: [
          "Designed iOS caching strategy for offline reading",
          "Built series reader on Android",
          "Informed the team about recent best practice changes and deprecations"
        ]
      },
      {
        summary: COMPETENCY[3],
        signals: [
          "Pioneers architecture migration strategies that reduce programmer burden",
          "Fixes subtle memory management issues",
          "Implements interactive dismissals that bring delight"
        ],
        examples: [
          "Upgraded CocoaPods to a new major version",
          "Designed architecture for fetching and rendering stream items",
          "Migrated Android persistance layer to reactive programming"
        ]
      },
      {
        summary: COMPETENCY[4],
        signals: [
          "Defines long-term goals and ensures active projects are in service of them",
          "Designs and builds innovative, industry-leading UI interactions",
          "Invents new techniques to responsibly stretch limits of the Android platform"
        ],
        examples: [
          "Defined and drove complete migration plan to Swift or Kotlin",
          "Implemented Android recycler views before platform support existed",
          "Pioneered application-level abstractions for multi-app environment"
        ]
      }
    ];

export const tracks: Tracks = {
  USER_RESEARCH: {
    displayName: "User Research",
    category: "A",
    description: "Explain the importance of user research, not just before the software is designed but also during design and after deployment.",
    milestones: MILESTONES_SHARED
  },

  PERSONAS: {
    displayName: "Personas",
    category: "A",
    description: "Identify the potential users of the software and create personas for them. This includes understanding their needs and goals.",
    milestones: MILESTONES_SHARED
  },

  USER_JOURNEYS: {
    displayName: "User Journeys",
    category: "A",
    description: "Map the journey that each persona takes to meet their goals, including actions taken outside the software. Identify areas of improvement, and communicate the journey to the rest of the company so they can understand where they can add value to it.",
    milestones: MILESTONES_SHARED
  },

  SITE_VISITS: {
    displayName: "Site Visits",
    category: "A",
    description: "Help plan site visits with end users to make sure we sample based upon what we want to learn, and make sure that we aren't missing out on learning from key personas.",
    milestones: MILESTONES_SHARED
  },

  USER_INTERVIEWS: {
    displayName: "User Interviews",
    category: "A",
    description: "Structure an effective interview that gets beyond the surface opinions (what users say) to reveal user goals (what users want).",
    milestones: MILESTONES_SHARED
  },

  SHARE_FINDINGS: {
    displayName: "Share Findings",
    category: "A",
    description: "Record, analyse and present the data from a site visit to the wider team.",
    milestones: MILESTONES_SHARED
  },

  ANALYTICS: {
    displayName: "Analytics",
    category: "A",
    description: "Understand how to measure effectively and the limitations of existing analytics. Analyse and interpret data from analytics, user surveys and customer support records.",
    milestones: MILESTONES_SHARED
  },

  EVALUATE_RESEARCH: {
    displayName: "Evaluate Research",
    category: "A",
    description: "Critically evaluate past research and provide guidance for upcoming research.",
    milestones: MILESTONES_SHARED
  },

  USABILITY: {
    displayName: "Usability Evaluation",
    category: "B",
    description: "Use established usability principles and guidelines to predict likely problems in user interfaces before testing.",
    milestones: MILESTONES_SHARED
  },

  PREDICT: {
    displayName: "Predicting Problems",
    category: "B",
    description: "Understand how to write a hypothesis and how to control and measure variables.",
    milestones: MILESTONES_SHARED
  },

  SHARE_RESULTS: {
    displayName: "Share Results",
    category: "B",
    description: "Record, analyse and present the data from usability tests to the wider team.",
    milestones: MILESTONES_SHARED
  },

  TEST_PLANNING: {
    displayName: "Plan and Test",
    category: "B",
    description: "Plan and administer the appropriate type of usability evaluation (e.g. moderated vs. unmoderated test, lab vs. remote test, usability testing vs. expert review, usability testing vs. A/B test, usability testing vs. survey).",
    milestones: MILESTONES_SHARED
  },

  PRIORITISE: {
    displayName: "Prioritise Action",
    category: "B",
    description: "Prioritise usability problems based upon evidence.",
    milestones: MILESTONES_SHARED
  },

  MAPPING_IA: {
    displayName: "Information Architecture",
    category: "C",
    description: "Analyse a journey map to identify and construct an information architecture.",
    milestones: MILESTONES_SHARED
  },

  DOMAIN_MAPPING: {
    displayName: "Domain Mapping",
    category: "C",
    description: "Uncover and describe relevant retail processes, jargon and best practises.",
    milestones: MILESTONES_SHARED
  },

  IA_PATTERNS: {
    displayName: "Layout",
    category: "C",
    description: "Organise, structure and label content, functions and features using appropriate design patterns.",
    milestones: MILESTONES_SHARED
  },

  VOCABULARY: {
    displayName: "Vocabulary",
    category: "C",
    description: "Develop, use and maintain a controlled app vocabulary.",
    milestones: MILESTONES_SHARED
  },

  IA_PLANNING: {
    displayName: "Delivery Strategy",
    category: "C",
    description: "Breakdown large IA changes into small and comprehensible deliverables, based upon resource constraints.",
    milestones: MILESTONES_SHARED
  },

  FLOWS: {
    displayName: "Flows",
    category: "D",
    description: "Understand the benefits of different user interface models and use them appropriately (for example: knowing when to force a user down a guided path with a wizard or modal, or when we can let them go their own way).",
    milestones: MILESTONES_SHARED
  },

  PATTERNS: {
    displayName: "Patterns",
    category: "D",
    description: "Use the correct component from the pattern library to provide affordances and shape the user experience e.g., choosing the correct control for an interface, such as segment controller instead of a radio button.",
    milestones: MILESTONES_SHARED
  },

  HCI: {
    displayName: "Best Practise",
    category: "D",
    description: "Understand established and evolving standards, as well as best-practises for human-computer interactions, and be able to express them in our design language.",
    milestones: MILESTONES_SHARED
  },

  MOTION: {
    displayName: "Motion",
    category: "D",
    description: "Simplify the user interface by using animations where appropriate.",
    milestones: MILESTONES_SHARED
  },

  IMPLEMENTATION: {
    displayName: "Medium",
    category: "D",
    description: "Understand the opportunities and limitations of the technology that the design solution will be expressed in, and work with developers to determine its implementation.",
    milestones: MILESTONES_SHARED
  },

  DOCUMENTATION: {
    displayName: "Documentation",
    category: "D",
    description: "Document requirements and explain the expectations around an interaction.",
    milestones: MILESTONES_SHARED
  },

  FUNDAMENTALS: {
    displayName: "Visual Design",
    category: "E",
    description: "Use fundamental principles of visual design (like contrast, alignment, repetition and proximity) to de-clutter user interfaces.",
    milestones: MILESTONES_SHARED
  },

  PRODUCTION: {
    displayName: "Production",
    category: "E",
    description: "Understand and use our typography, icon, grid and colour systems to lay out pages.",
    milestones: MILESTONES_SHARED
  },

  ILLUSTRATION: {
    displayName: "Illustration",
    category: "E",
    description: "Create illustrations that fit within our guidelines to reinforce and extend our messaging.",
    milestones: MILESTONES_SHARED
  },

  DESIGN_LANGUAGE: {
    displayName: "Design Language",
    category: "E",
    description: "Understand, use and evolve the common brand and design language and explain why it is important.",
    milestones: MILESTONES_SHARED
  },

  WRITE: {
    displayName: "Copy Writing",
    category: "F",
    description: "Create and edit macro and micro copy.",
    milestones: MILESTONES_SHARED
  },

  GUIDE: {
    displayName: "Guiding",
    category: "F",
    description: "Choose the right kind of help for the situation: for example, decide between a tutorial, manual, contextual help or micro-copy.",
    milestones: MILESTONES_SHARED
  },

  STYLE_GUIDE: {
    displayName: "Style",
    category: "F",
    description: "Understand, use and evolve the common content and writing style, and explain why it is important.",
    milestones: MILESTONES_SHARED
  },

  INTEGRATE: {
    displayName: "Harmony",
    category: "F",
    description: "Establish harmony between written and visual communication.",
    milestones: MILESTONES_SHARED
  },

  FIDELITY: {
    displayName: "Fidelity",
    category: "G",
    description: "Choose the appropriate fidelity of prototype to match that of the hypothesis.",
    milestones: MILESTONES_SHARED
  },

  FAST_ITERATION: {
    displayName: "Speed",
    category: "G",
    description: "Explain the benefits of fast iteration in the discovery phase.",
    milestones: MILESTONES_SHARED
  },

  BREADTH: {
    displayName: "Explore",
    category: "G",
    description: "Explore multiple approaches to a problem before deciding on a solution.",
    milestones: MILESTONES_SHARED
  },

  PROTOTYPE: {
    displayName: "Prototype",
    category: "G",
    description: "Create interactive, shareable prototypes to demonstrate and test a design solution.",
    milestones: MILESTONES_SHARED
  },

  SCHEDULING: {
    displayName: "Scheduling",
    category: "H",
    description: "Plan and schedule work to prioritise and maximise the efficiency of delivery.",
    milestones: MILESTONES_SHARED
  },

  STAKEHOLDER_MANAGEMENT: {
    displayName: "Stakeholder Management",
    category: "H",
    description: "Engage and maintain communication with stakeholders, and manage their expectations.",
    milestones: MILESTONES_SHARED
  },

  CRITIQUE: {
    displayName: "Critique",
    category: "H",
    description: "Constructively critique the work of team members.",
    milestones: MILESTONES_SHARED
  },

  PROFESSIONAL_DEVELOPMENT: {
    displayName: "Professional Development",
    category: "H",
    description: "Promote and support the ongoing professional development of the team.",
    milestones: MILESTONES_SHARED
  },

  BOND: {
    displayName: "Belonging",
    category: "H",
    description: "Cultivate a team with strong interpersonal relationships.",
    milestones: MILESTONES_SHARED
  },

  CULTURE: {
    displayName: "Design Culture",
    category: "H",
    description: "Grow and sustain a world-class and inclusive design culture.",
    milestones: MILESTONES_SHARED
  },

  ADVOCATE: {
    displayName: "Advocate",
    category: "H",
    description: "Argue the cost-benefit of user experience and design activities to the business, and measure and monitor their effects on the company's success.",
    milestones: MILESTONES_SHARED
  },

  EVANGELISE: {
    displayName: "Evangelise",
    category: "H",
    description: "Promote the value of design thinking, and grow the user-experience competency of every person in the company.",
    milestones: MILESTONES_SHARED
  }

};

export const trackIds: TrackId[] = Object.keys(tracks);

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map();
  trackIds.forEach(trackId => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    );
  });
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId);
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 };
  });
};

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#D77173", "#F49B8C", "#F2C17B", "#678E98", "#99C8D4", "#AA88B5", "#62676F", "#446A81"]);

export const titles = [
  { label: "Engineer I", minPoints: 0, maxPoints: 16 },
  { label: "Engineer II", minPoints: 17, maxPoints: 35 },
  { label: "Senior Engineer", minPoints: 36, maxPoints: 57 },
  { label: "Group Lead", minPoints: 36, maxPoints: 57 },
  { label: "Staff Engineer", minPoints: 58, maxPoints: 89 },
  { label: "Senior Group Lead", minPoints: 58, maxPoints: 89 },
  { label: "Principal Engineer", minPoints: 90 },
  { label: "Director of Engineering", minPoints: 90 }
];

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label);
};
