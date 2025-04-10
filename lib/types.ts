import * as Yup from "yup";
import {
  answerOptionSchema,
  collectionSchema,
  contentSchema,
  examSchema,
  optionSchema,
  questionDetailSchema,
  questionSchema,
  timingSchema,
} from "./schemas";

export type Exam = Yup.InferType<typeof examSchema>;
export type Question = Yup.InferType<typeof questionSchema>;
export type QuestionDetailType = Yup.InferType<typeof questionDetailSchema>;
export type OptionType = Yup.InferType<typeof optionSchema>;
export type AnswerOptionType = Yup.InferType<typeof answerOptionSchema>;
export type Content = Yup.InferType<typeof contentSchema>;
export type CollectionType = Yup.InferType<typeof collectionSchema>;
export type Timing = Yup.InferType<typeof timingSchema>;

export type ContentTypes =
  | "YOUTUBE"
  | "TEXT"
  | "LINK"
  | "IMAGE"
  | "VIDEO"
  | "AUDIO"
  | "FILE";

export type ThemeSetting =
  | "WHITEBOARD"
  | "INDUSTRIAL_EDGE"
  | "EARTHY_TONES"
  | "VIBRANT_ORCHID";

export type UserPlan = "BASIC" | "PRO" | "PREMIUM";

export interface ExamCreationContextType {
  userPlan: UserPlan;
  canSellExams: boolean;
  validatePathname: (pathname: string) => Promise<boolean>;
}

export enum ExamCategory {
  // Science & Math
  MATHEMATICS = "MATHEMATICS",
  ALGEBRA = "ALGEBRA",
  GEOMETRY = "GEOMETRY",
  CALCULUS = "CALCULUS",
  STATISTICS = "STATISTICS",
  PHYSICS = "PHYSICS",
  CHEMISTRY = "CHEMISTRY",
  BIOLOGY = "BIOLOGY",
  ANATOMY = "ANATOMY",
  ENVIRONMENTAL_SCIENCE = "ENVIRONMENTAL_SCIENCE",

  // Languages & Literature
  ENGLISH = "ENGLISH",
  SPANISH = "SPANISH",
  FRENCH = "FRENCH",
  GERMAN = "GERMAN",
  LITERATURE = "LITERATURE",
  GRAMMAR = "GRAMMAR",

  // Social Sciences
  HISTORY = "HISTORY",
  WORLD_HISTORY = "WORLD_HISTORY",
  GEOGRAPHY = "GEOGRAPHY",
  ECONOMICS = "ECONOMICS",
  PSYCHOLOGY = "PSYCHOLOGY",
  SOCIOLOGY = "SOCIOLOGY",
  POLITICAL_SCIENCE = "POLITICAL_SCIENCE",

  // Technology & Engineering
  COMPUTER_SCIENCE = "COMPUTER_SCIENCE",
  PROGRAMMING = "PROGRAMMING",
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT",
  DATA_SCIENCE = "DATA_SCIENCE",
  ENGINEERING = "ENGINEERING",
  ROBOTICS = "ROBOTICS",

  // Business & Finance
  BUSINESS = "BUSINESS",
  ACCOUNTING = "ACCOUNTING",
  FINANCE = "FINANCE",
  MARKETING = "MARKETING",
  MANAGEMENT = "MANAGEMENT",

  // Arts & Humanities
  ART = "ART",
  MUSIC = "MUSIC",
  PHILOSOPHY = "PHILOSOPHY",
  RELIGION = "RELIGION",

  // Health & Physical Education
  PHYSICAL_EDUCATION = "PHYSICAL_EDUCATION",
  HEALTH = "HEALTH",
  NUTRITION = "NUTRITION",
  SPORTS_SCIENCE = "SPORTS_SCIENCE",

  // Test Preparation
  SAT = "SAT",
  ACT = "ACT",
  GRE = "GRE",
  GMAT = "GMAT",
  TOEFL = "TOEFL",
  IELTS = "IELTS",

  OTHER = "OTHER",
}

interface CategoryMetadata {
  icon: string;
  displayName: string;
  description?: string;
}

export const CategoryMetadata: Record<ExamCategory, CategoryMetadata> = {
  // Science & Math
  [ExamCategory.MATHEMATICS]: { icon: "calculate", displayName: "Mathematics" },
  [ExamCategory.ALGEBRA]: { icon: "functions", displayName: "Algebra" },
  [ExamCategory.GEOMETRY]: { icon: "shape_line", displayName: "Geometry" },
  [ExamCategory.CALCULUS]: { icon: "function", displayName: "Calculus" },
  [ExamCategory.STATISTICS]: { icon: "monitoring", displayName: "Statistics" },
  [ExamCategory.PHYSICS]: { icon: "rocket_launch", displayName: "Physics" },
  [ExamCategory.CHEMISTRY]: { icon: "science", displayName: "Chemistry" },
  [ExamCategory.BIOLOGY]: { icon: "genetics", displayName: "Biology" },
  [ExamCategory.ANATOMY]: { icon: "skeleton", displayName: "Anatomy" },
  [ExamCategory.ENVIRONMENTAL_SCIENCE]: {
    icon: "eco",
    displayName: "Environmental Science",
  },

  // Languages & Literature
  [ExamCategory.ENGLISH]: { icon: "spellcheck", displayName: "English" },
  [ExamCategory.SPANISH]: { icon: "translate", displayName: "Spanish" },
  [ExamCategory.FRENCH]: { icon: "translate", displayName: "French" },
  [ExamCategory.GERMAN]: { icon: "translate", displayName: "German" },
  [ExamCategory.LITERATURE]: {
    icon: "auto_stories",
    displayName: "Literature",
  },
  [ExamCategory.GRAMMAR]: { icon: "text_fields", displayName: "Grammar" },

  // Social Sciences
  [ExamCategory.HISTORY]: { icon: "history_edu", displayName: "History" },
  [ExamCategory.WORLD_HISTORY]: {
    icon: "public",
    displayName: "World History",
  },
  [ExamCategory.GEOGRAPHY]: { icon: "globe", displayName: "Geography" },
  [ExamCategory.ECONOMICS]: { icon: "trending_up", displayName: "Economics" },
  [ExamCategory.PSYCHOLOGY]: { icon: "psychology", displayName: "Psychology" },
  [ExamCategory.SOCIOLOGY]: { icon: "groups", displayName: "Sociology" },
  [ExamCategory.POLITICAL_SCIENCE]: {
    icon: "policy",
    displayName: "Political Science",
  },

  // Technology & Engineering
  [ExamCategory.COMPUTER_SCIENCE]: {
    icon: "computer",
    displayName: "Computer Science",
  },
  [ExamCategory.PROGRAMMING]: { icon: "code", displayName: "Programming" },
  [ExamCategory.WEB_DEVELOPMENT]: {
    icon: "web",
    displayName: "Web Development",
  },
  [ExamCategory.DATA_SCIENCE]: {
    icon: "data_object",
    displayName: "Data Science",
  },
  [ExamCategory.ENGINEERING]: {
    icon: "engineering",
    displayName: "Engineering",
  },
  [ExamCategory.ROBOTICS]: { icon: "smart_toy", displayName: "Robotics" },

  // Business & Finance
  [ExamCategory.BUSINESS]: { icon: "business", displayName: "Business" },
  [ExamCategory.ACCOUNTING]: {
    icon: "account_balance",
    displayName: "Accounting",
  },
  [ExamCategory.FINANCE]: { icon: "payments", displayName: "Finance" },
  [ExamCategory.MARKETING]: { icon: "campaign", displayName: "Marketing" },
  [ExamCategory.MANAGEMENT]: {
    icon: "manage_accounts",
    displayName: "Management",
  },

  // Arts & Humanities
  [ExamCategory.ART]: { icon: "palette", displayName: "Art" },
  [ExamCategory.MUSIC]: { icon: "music_note", displayName: "Music" },
  [ExamCategory.PHILOSOPHY]: {
    icon: "psychology_alt",
    displayName: "Philosophy",
  },
  [ExamCategory.RELIGION]: { icon: "church", displayName: "Religion" },

  // Health & Physical Education
  [ExamCategory.PHYSICAL_EDUCATION]: {
    icon: "fitness_center",
    displayName: "Physical Education",
  },
  [ExamCategory.HEALTH]: { icon: "health_and_safety", displayName: "Health" },
  [ExamCategory.NUTRITION]: { icon: "restaurant", displayName: "Nutrition" },
  [ExamCategory.SPORTS_SCIENCE]: {
    icon: "sports",
    displayName: "Sports Science",
  },

  // Test Preparation
  [ExamCategory.SAT]: { icon: "quiz", displayName: "SAT" },
  [ExamCategory.ACT]: { icon: "quiz", displayName: "ACT" },
  [ExamCategory.GRE]: { icon: "quiz", displayName: "GRE" },
  [ExamCategory.GMAT]: { icon: "quiz", displayName: "GMAT" },
  [ExamCategory.TOEFL]: { icon: "language", displayName: "TOEFL" },
  [ExamCategory.IELTS]: { icon: "language", displayName: "IELTS" },

  [ExamCategory.OTHER]: { icon: "more_horiz", displayName: "Other" },
};
