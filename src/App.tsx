import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Download,
  ExternalLink,
  GraduationCap,
  Headphones,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

const EMAIL = "staanleyeke@gmail.com";
const PHONE = "+44 7737 916000";
const PHONE_HREF = "+447737916000";
const LINKEDIN = "https://www.linkedin.com/in/stanley-eke-862892356";

const stats = [
  { value: "2,000+", label: "Tickets & incidents resolved" },
  { value: "95%", label: "SLA adherence" },
  { value: "97%", label: "Customer satisfaction" },
  { value: "100+", label: "Five-star reviews" },
];

const strengths: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Headphones,
    title: "Enterprise IT Support",
    text: "1st and 2nd line deskside and remote support in regulated, high-volume environments.",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 & Identity",
    text: "Exchange Online, Teams, SharePoint, OneDrive, Entra ID, Active Directory and lifecycle administration.",
  },
  {
    icon: Laptop,
    title: "Endpoint Management",
    text: "Windows 11, macOS, Intune, Autopilot, Jamf Pro and mobile device management across mixed estates.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    text: "Endpoint compliance, patching, MFA, Zscaler troubleshooting, ITAM and audit-ready operational practices.",
  },
  {
    icon: Network,
    title: "Networking",
    text: "TCP/IP, DNS, DHCP, LAN/WAN, VPN, Wi-Fi, VLANs, printers and networked MFD support.",
  },
  {
    icon: ServerCog,
    title: "ITSM & Automation",
    text: "ServiceNow, Jira, PowerShell, Bash, knowledge articles, runbooks and structured incident ownership.",
  },
];

const skillGroups = [
  {
    title: "Microsoft & Cloud",
    items: ["Microsoft 365", "Exchange Online", "Teams", "SharePoint", "OneDrive", "Entra ID", "Intune", "Autopilot"],
  },
  {
    title: "Endpoint & Mobility",
    items: ["Windows 11", "macOS", "Jamf Pro", "iOS", "Android", "MDM", "Device Build", "Decommissioning"],
  },
  {
    title: "Identity & Security",
    items: ["Active Directory", "Group Policy", "SSO/SAML", "MFA", "Zscaler", "Access Control", "OneTrust", "Compliance"],
  },
  {
    title: "Service & Networking",
    items: ["ServiceNow", "Jira", "Nexthink", "TCP/IP", "DNS", "DHCP", "VPN", "Wi-Fi", "VLANs"],
  },
];

const roles = [
  {
    title: "IT Tech Hub Engineer",
    company: "GSK Headquarters (Contract)",
    period: "Jan 2026 — Present",
    location: "London, UK",
    summary:
      "Providing 1st and 2nd line deskside and remote support across GSK's mixed Mac and Windows enterprise estate in a regulated environment.",
    highlights: [
      "Resolved 2,000+ ServiceNow tickets and incidents while maintaining 95% SLA adherence and 97% customer satisfaction.",
      "Earned 100+ five-star reviews within four months through responsive, ownership-driven support.",
      "Administer Microsoft 365, Exchange Online, Teams, Entra ID, Intune, licensing and provisioning.",
      "Build, deploy and decommission Windows 11 and macOS devices using Intune, Autopilot and Jamf Pro.",
      "Support joiner-mover-leaver processes, IT asset lifecycle, CMDB accuracy, Zscaler and Nexthink diagnostics.",
      "Provide AV and Microsoft Teams Rooms support across 10+ meeting rooms including executive events.",
    ],
  },
  {
    title: "IT Support Analyst",
    company: "Teknite Ltd. (MSP)",
    period: "Jun 2025 — Nov 2025",
    location: "UK",
    summary: "Multi-client Microsoft 365, Active Directory, Windows Server and hardware deployment support.",
    highlights: [
      "Managed Microsoft 365 tenants for 300+ users across provisioning, licensing, Exchange Online, SharePoint and Teams.",
      "Resolved 200+ incidents and managed 500+ tickets against SLAs.",
      "Supported 400+ PC/laptop builds, 180+ resets and 150+ RAM upgrades.",
      "Authored 20+ SOPs, knowledge articles and technical runbooks.",
    ],
  },
  {
    title: "Freelance IT Support Analyst",
    company: "Beta-Tech",
    period: "Mar 2025 — May 2025",
    location: "UK",
    summary: "Delivered hands-on support for Windows and macOS users across several client sites.",
    highlights: [
      "Supported 50+ users via Intune, TeamViewer and AnyDesk.",
      "Configured switches, wireless access points and Active Directory for three client sites.",
      "Managed 40+ AD account changes and commissioned 30+ new workstations.",
    ],
  },
  {
    title: "IT Virtual Projects",
    company: "Home Lab",
    period: "Nov 2023 — Feb 2025",
    location: "London, UK",
    summary: "Practical lab work focused on identity, networking, scripting and Azure administration fundamentals.",
    highlights: [
      "Built a virtualised Active Directory environment with DNS, DHCP and Group Policy.",
      "Practised full joiner-mover-leaver account lifecycle management.",
      "Created PowerShell and Bash automation while developing AZ-104 skills.",
    ],
  },
  {
    title: "Prison Officer — IT Support Exposure",
    company: "UK Government Secure Facility",
    period: "Feb 2024 — Nov 2024",
    location: "UK",
    summary: "Worked with secure government systems under strict access-control and data-protection requirements.",
    highlights: ["Supported staff using secure systems in a high-security, high-pressure environment."],
  },
  {
    title: "Tech & Systems Oversight (COO)",
    company: "Zeecrest Vantage Ltd.",
    period: "Jan 2021 — Feb 2024",
    location: "International",
    summary: "Combined operational leadership with CRM, cloud migration, onboarding and vendor coordination.",
    highlights: [
      "Led CRM integration and cloud migration of 200+ client records.",
      "Managed IT onboarding and access provisioning for 30+ staff.",
      "Coordinated 10+ vendors and improved process efficiency by 15%.",
    ],
  },
];

const certifications = [
  "CompTIA A+ — Certified 2025",
  "CompTIA Network+ — Certified 2025",
  "AZ-104 Azure Administrator — In progress",
  "Cyber Security Programme — ITonlinelearning, 2025",
  "OneTrust Compliance — Tech & Risk, Privacy Management, Third-Party Risk",
  "ITIL Framework awareness",
];

const education = [
  {
    degree: "MSc Information Security and Digital Forensics",
    school: "University of East London",
    detail: "Commenced 2026",
  },
  {
    degree: "BSc (Hons) Psychology",
    school: "University of Ibadan",
    detail: "2018",
  },
];

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Stanley Eke home">
          <span className="brand-mark">SE</span>
          <span>Stanley Eke</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="/Stanley-Eke-CV.md" download>
          <Download size={16} /> CV
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="status-pill">
                <span className="pulse-dot" /> 2nd Line IT Support Engineer
              </div>
              <h1>
                Enterprise IT support built around <span>reliability, security and people.</span>
              </h1>
              <p className="hero-lead">
                London-based IT professional supporting regulated enterprise environments across Microsoft 365,
                Entra ID, Intune, Jamf, ServiceNow, endpoint management and user support.
              </p>
              <div className="hero-meta">
                <span><MapPin size={17} /> London, UK</span>
                <span><CheckCircle2 size={17} /> Open to IT opportunities</span>
              </div>
              <div className="hero-actions">
                <a className="button" href="#experience">View Experience <ArrowRight size={18} /></a>
                <a className="button button-secondary" href="/Stanley-Eke-CV.md" download><Download size={18} /> Download CV</a>
                <a className="text-link" href="#contact">Let's connect</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="system-core">
                <Laptop size={42} />
                <strong>Enterprise Endpoint</strong>
                <span>Managed • Secure • Supported</span>
              </div>
              <div className="system-chip chip-one"><Cloud size={15} /> Microsoft 365</div>
              <div className="system-chip chip-two"><ShieldCheck size={15} /> Security</div>
              <div className="system-chip chip-three"><Network size={15} /> Network</div>
              <div className="system-chip chip-four"><ServerCog size={15} /> Identity</div>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <SectionTitle
            eyebrow="Profile"
            title="Support that combines technical depth with customer experience"
            intro="A hands-on support engineer comfortable taking ownership from first contact through resolution, escalation, documentation and service improvement."
          />
          <div className="about-grid">
            <article className="glass-card about-copy">
              <p>
                Stanley Eke is a 2nd Line IT Support Engineer experienced in resolving escalated incidents and service requests across Windows, macOS, iOS and Android environments.
              </p>
              <p>
                At GSK's London headquarters, he supports a regulated enterprise environment using ServiceNow, Microsoft 365, Entra ID, Intune, Autopilot, Jamf Pro, Nexthink and Zscaler.
              </p>
              <p>
                His approach combines structured ITIL-aligned ticket ownership with endpoint lifecycle management, identity administration, documentation, asset control and clear stakeholder communication.
              </p>
            </article>
            <div className="strength-grid">
              {strengths.map(({ icon: Icon, title, text }) => (
                <article className="mini-card" key={title}>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <SectionTitle
            eyebrow="Career"
            title="Professional Experience"
            intro="Enterprise support, MSP delivery, hands-on client work and practical lab development."
          />
          <div className="timeline">
            {roles.map((role, index) => (
              <article className="experience-card" key={`${role.title}-${role.period}`}>
                <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="experience-head">
                  <div>
                    <h3>{role.title}</h3>
                    <p className="company"><BriefcaseBusiness size={16} /> {role.company}</p>
                  </div>
                  <div className="role-meta">
                    <span>{role.period}</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <p className="role-summary">{role.summary}</p>
                <ul className="highlight-list">
                  {role.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionTitle
            eyebrow="Technical Toolkit"
            title="Skills across endpoint, identity, cloud and service operations"
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-cloud">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="credentials">
          <SectionTitle eyebrow="Credentials" title="Education & Certifications" />
          <div className="credentials-grid">
            <article className="glass-card credential-panel">
              <div className="panel-title"><Award size={22} /> Certifications</div>
              <ul className="credential-list">
                {certifications.map((item) => <li key={item}><Star size={15} /> {item}</li>)}
              </ul>
            </article>
            <article className="glass-card credential-panel">
              <div className="panel-title"><GraduationCap size={22} /> Education</div>
              <div className="education-list">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                    <span>{item.detail}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's build dependable IT experiences.</h2>
              <p>
                For 2nd line support, EUC, endpoint, Microsoft 365 or enterprise IT opportunities, get in touch directly.
              </p>
              <div className="contact-actions">
                <a className="button" href={`mailto:${EMAIL}`}><Mail size={18} /> Email Stanley</a>
                <a className="button button-secondary" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="contact-details">
              <a href={`mailto:${EMAIL}`}><Mail size={19} /><span><small>Email</small>{EMAIL}</span></a>
              <a href={`tel:${PHONE_HREF}`}><Phone size={19} /><span><small>Phone</small>{PHONE}</span></a>
              <div><MapPin size={19} /><span><small>Location</small>London, UK</span></div>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>stanley-eke-862892356</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>
            <div className="brand"><span className="brand-mark">SE</span><span>Stanley Eke</span></div>
            <p>2nd Line IT Support Engineer • London, UK</p>
          </div>
          <div className="footer-note"><Users size={16} /> Enterprise support • Endpoint • Identity • Microsoft 365</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
