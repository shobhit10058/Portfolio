import {
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus,
  SiSpring, SiReact, SiNextdotjs, SiNodedotjs, SiFlask, SiExpress, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiElasticsearch,
  SiApachekafka, SiDocker, SiKubernetes,
  SiGit, SiGrafana, SiKibana, SiLangchain,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { FaDatabase, FaServer, FaCogs, FaNetworkWired, FaCloud } from "react-icons/fa";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: FaDatabase },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring", icon: SiSpring },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Flask", icon: SiFlask },
      { name: "Express.js", icon: SiExpress },
      { name: "LangChain", icon: SiLangchain },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "Databases & Search",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Pinecone", icon: FaDatabase },
    ],
  },
  {
    title: "Messaging, Cloud & Infra",
    skills: [
      { name: "Kafka", icon: SiApachekafka },
      { name: "SQS", icon: FaAws },
      { name: "WebSockets", icon: FaNetworkWired },
      { name: "WebRTC", icon: FaNetworkWired },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: FaCloud },
    ],
  },
  {
    title: "Engineering & Tools",
    skills: [
      { name: "REST APIs", icon: FaServer },
      { name: "Microservices", icon: FaCogs },
      { name: "Distributed Systems", icon: FaNetworkWired },
      { name: "Grafana", icon: SiGrafana },
      { name: "Kibana", icon: SiKibana },
      { name: "Git", icon: SiGit },
    ],
  },
];
