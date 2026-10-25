// Single source of truth for the resume. Used by make-docx.js and resume.html.
module.exports = {
  name: "Dwight Banks",
  title: "Senior Systems & Platform Engineer",
  location: "Houston, TX · Remote",
  email: "dwight.banks@icloud.com",
  phone: "601-954-6201",
  site: "aboutdbanks.com",
  github: "github.com/dbankscard",
  linkedin: "linkedin.com/in/dwightbanks",

  summary:
    "Senior systems engineer with 10 years running corporate IT as production infrastructure: identity, endpoints, cloud and the automation that ties them together, all in code and reviewed in pull requests. Deep in Okta, Terraform, AWS, macOS and Python/TypeScript, with ownership from architecture to on-call. Recently building AI agent tooling on top of corporate identity, including self-hosted MCP servers and an LLM-assisted helpdesk. Known for cutting toil with automation that stays reliable after it ships.",

  highlights: [
    "Took a self-service EKS/Lambda deployment platform live in five days, then scaled it across four GitHub orgs.",
    "Moved an Okta tenant to deny-by-default device trust across 142 apps with zero users losing access.",
    "Removed standing super-admin access with just-in-time elevation, auto-revocation and a full audit trail.",
    "Cut 10+ hours of weekly IT toil at a 120-person company through lifecycle and workflow automation.",
    "Author of open-source MCP servers for Jamf Pro, Cisco Meraki and SkuVault used by other IT teams.",
  ],

  experience: [
    {
      company: "XBOW",
      title: "Senior IT Systems Engineer",
      dates: "Mar 2026 – Present",
      bullets: [
        "Built a self-service deployment platform that takes a GitHub repo to a running EKS or Lambda environment through reviewed Terraform and Helm pull requests, with Okta SSO, a GitHub App, a security-review gate and 1Password-to-AWS Secrets Manager sync. Live in five days, then extended across four GitHub orgs.",
        "Automated the identity lifecycle end to end on Okta: event hooks drive AWS Lambda pipelines for onboarding, offboarding (GitHub org removal as auditable Terraform PRs, mailbox handover tickets, Slack alerts) and a daily dormant-account scan across ~300 accounts.",
        "Eliminated standing Okta Super Admin with just-in-time elevation via a Slack command, EventBridge auto-revocation and a full audit trail.",
        "Moved Okta to deny-by-default device trust, migrating 142 apps to a policy that blocks unmanaged devices with no user losing access, and imported groups, rules, SAML/OIDC apps and authenticators into Terraform at zero diff.",
        "Built and operate a self-hosted Okta MCP server that lets IT query and change Okta from Claude, gated by Tailscale identity and Okta groups, scope-limited and audit-logged. Extended it to give an AI helpdesk agent read-only Okta context when drafting Front ticket responses.",
        "Run all IT automation as code on Terraform Cloud and AWS (Lambda, EventBridge, API Gateway, Secrets Manager, KMS, IAM) with GitHub Actions OIDC deploys: 165+ merged PRs across 14 repos.",
      ],
    },
    {
      company: "Global Healing",
      title: "Senior IT Systems Engineer",
      dates: "Aug 2021 – Feb 2026",
      bullets: [
        "Owned IT for a 120-person e-commerce company: 300+ macOS and Windows endpoints, 20+ SaaS applications, identity, network and AWS, as the sole senior engineer.",
        "Designed and operated AWS automation and ETL pipelines on Lambda, S3, RDS (SQL Server), Redshift, EventBridge and CloudWatch with structured logging, retries, alerting and audit trails. Replaced a 10-hour-per-week manual inventory process with an event-driven pipeline running in seconds at 99.9% uptime.",
        "Built a multi-source data warehouse on Redshift integrating Amazon, eBay and Shopify APIs, with QuickSight dashboards used for daily operating decisions.",
        "Deployed an AI-assisted support system across Zendesk, Slack and AWS Bedrock that auto-grades 26K+ tickets a month at 95% consistency, cutting ticket resolution cost by 33% and agent onboarding time by 50%.",
        "Automated the identity lifecycle across OneLogin, Google Workspace, Active Directory, Jamf Pro and Slack (HRIS → identity → access → notifications), enforcing least privilege and removing access drift. Saved 10+ hours of IT toil per week.",
        "Administered and secured the Mac fleet with Jamf Pro: OS updates, app deployment, patching and CIS-aligned baselines. Implemented Jamf Connect with Google Workspace and OneLogin for identity-first login, and Jamf Trust and Private Access for Zero Trust network access.",
        "Operated Jamf Protect with Security for detection, investigation and remediation. Senior escalation point for macOS, Windows, SaaS, identity and network issues, with a root-cause-first approach.",
        "Maintained authoritative inventories of endpoints, access and IT-owned systems. Authored SOPs and documentation that kept systems audit-ready.",
      ],
    },
    {
      company: "Global Healing",
      title: "Infrastructure Engineer / System Administrator",
      dates: "Aug 2018 – Aug 2021",
      bullets: [
        "Led the migration of on-premises Jamf Pro to a clustered AWS environment, defined in Terraform, and extended the corporate network into an AWS VPC with Cisco Meraki AutoVPN.",
        "Designed, deployed and operated Cisco Meraki network infrastructure with Cisco Umbrella for DNS-layer security, and Cisco Email Security Appliance integrated with Google Workspace for phishing and malware protection.",
        "Automated Jamf Pro builds and configuration changes with Git2JSS, GitHub Actions and Jenkins CI/CD pipelines.",
        "Administered Active Directory Domain Services in AWS supporting user lifecycle and legacy workloads, and managed macOS, Windows and Linux environments for business and operations teams.",
      ],
    },
    {
      company: "Global Healing",
      title: "Support Specialist",
      dates: "Dec 2016 – Aug 2018",
      bullets: [
        "Delivered enterprise macOS support and ran backup and recovery with Code42.",
        "Automated device administration with shell scripts and reduced downtime through proactive maintenance.",
      ],
    },
  ],

  openSource: [
    {
      name: "jamf-mcp-server",
      url: "https://github.com/dbankscard/jamf-mcp-server",
      meta: "TypeScript · 39 stars · 20 forks",
      desc: "MCP server that lets Claude and ChatGPT manage Jamf Pro: search devices, deploy policies, run scripts, manage profiles and produce compliance reports.",
    },
    {
      name: "cisco-meraki-mcp",
      url: "https://github.com/dbankscard/cisco-meraki-mcp",
      meta: "TypeScript",
      desc: "55+ Meraki Dashboard API tools for AI assistants, with rate limiting, 80–95% token reduction and configurable auto-approval.",
    },
    {
      name: "skuvault-mcp-server",
      url: "https://github.com/dbankscard/skuvault-mcp-server",
      meta: "Python",
      desc: "MCP server for SkuVault inventory management with caching, rate limiting and safety confirmations for write operations.",
    },
    {
      name: "claude-swarm",
      url: "https://github.com/dbankscard/claude-swarm",
      meta: "Python",
      desc: "Orchestrates multiple Claude Code agents with fan-out, pipeline, hierarchical and competitive patterns.",
    },
  ],

  skills: [
    { group: "Identity & access", items: "Okta (Workflows, event hooks, device trust, Terraform provider), OneLogin, Google Workspace, Active Directory, Jamf Connect, Tailscale, SAML/OIDC, Zero Trust, JIT access" },
    { group: "Cloud & infrastructure", items: "AWS (Lambda, EKS, EventBridge, API Gateway, IAM, KMS, Secrets Manager, S3, RDS, Redshift, CloudWatch, Bedrock), Terraform / Terraform Cloud, Helm, Docker, GitHub Actions (OIDC), Jenkins" },
    { group: "Endpoints & network", items: "macOS, Windows, Linux, Jamf Pro / Protect / Trust, Mosyle, CIS baselines, Cisco Meraki, Cisco Umbrella, Code42" },
    { group: "Languages & tooling", items: "Python, TypeScript / Node.js, Bash, SQL, Git, Zapier, REST APIs" },
    { group: "AI tooling", items: "Model Context Protocol (MCP) servers, LLM agents, Claude API, AWS Bedrock, LLM-assisted helpdesk automation" },
  ],

  certifications: [
    "Jamf Certified Expert",
    "Jamf Certified Admin",
    "Jamf Certified Tech",
    "Cisco Meraki Network Operator (CMNO)",
    "Lean Six Sigma Yellow Belt",
  ],

  education: {
    degree: "B.S. Computer Science",
    school: "Jackson State University",
    year: "2014",
  },
};
