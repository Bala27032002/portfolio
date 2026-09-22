import {
  SiNodedotjs, SiExpress, SiNestjs, SiTypescript, SiSocketdotio, SiRedis,
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss,
  SiMongodb, SiMysql, SiJsonwebtokens,
  SiGithubactions,
  SiStripe, SiApple, SiGoogleplay,
  SiAnthropic,
  SiGit, SiBitbucket, SiGitlab, SiJira, SiPostman,
} from "react-icons/si";
import {
  Server, Monitor, Database, ShieldCheck, Cloud, CreditCard, Sparkles, Wrench,
  Clock, KeyRound, Lock, Gauge, Bot, Code2,
} from "lucide-react";

// icon: any React component (react-icons for brands, lucide for generic concepts)
export const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "REST APIs", icon: Server },
      { name: "WebSockets / Socket.IO", icon: SiSocketdotio },
      { name: "Redis", icon: SiRedis },
      { name: "Node-Cron", icon: Clock },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB (Mongoose)", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Auth & Security",
    icon: ShieldCheck,
    skills: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Social Login", icon: KeyRound },
      { name: "RBAC", icon: Lock },
      { name: "OTP flows", icon: ShieldCheck },
      { name: "Rate Limiting", icon: Gauge },
      { name: "Helmet / bcrypt", icon: Lock },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS — S3, SES, SNS, CloudFront, Rekognition", icon: Cloud },
      { name: "GitHub Actions CI/CD", icon: SiGithubactions },
    ],
  },
  {
    title: "Payments & IAP",
    icon: CreditCard,
    skills: [
      { name: "Stripe", icon: SiStripe },
      { name: "Mollie", icon: CreditCard },
      { name: "Apple IAP", icon: SiApple },
      { name: "Google Play IAP", icon: SiGoogleplay },
    ],
  },
  {
    title: "AI & LLM",
    icon: Sparkles,
    skills: [
      { name: "Azure OpenAI", icon: Bot },
      { name: "OpenAI API", icon: Sparkles },
      { name: "Anthropic Claude API", icon: SiAnthropic },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "GitLab", icon: SiGitlab },
      { name: "Jira", icon: SiJira },
      { name: "Cursor IDE", icon: Code2 },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
