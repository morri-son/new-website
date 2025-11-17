---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Open Component Model"
  text: "Deliver and deploy your software securely."
  tagline: "Anywhere, at any scale."
  image:
    light: "/ocm-logo-black-text.svg"
    dark: "/ocm-logo-white-text.svg"
    alt: "Open Component Model"
  actions:
    - theme: brand
      text: Get Started
      link: /documentation/getting-started/
    - theme: alt
      text: GitHub
      link: https://github.com/open-component-model
  features:
    - title: "Describe"
      icon: "📝"
      details: "Define components in code with powerful lifecycle metadata."
      link: /documentation/concepts/
    - title: "Sign"
      icon: "🔐"
      details: "Add cryptographic signatures. End-to-end trust from source to deployment."
      link: /documentation/concepts/coordinates
    - title: "Transport"
      icon: "🚚"
      details: "Works across boundaries — public cloud, on-prem, air-gapped. Tamper-proof."
      link: /documentation/tutorials/ocm-and-gitops/air-gapped-gitops-with-ocm-and-flux
    - title: "Deploy"
      icon: "🚀"
      details: "Automate Deployments with OCM Controllers and Flux. Seamless GitOps."
      link: /documentation/tutorials/ocm-and-gitops/deploying-applications-with-ocm-and-gitops
---

The Open Component Model (OCM) is your one-stop open-source **Software Bill of Delivery (SBoD)** for packaging, signing, transporting and deploying your artifacts – preserving end-to-end security, integrity and provenance.

<div class="home-sections">

## How OCM Works

<div class="ocm-tiles-grid">
  <VPFeature
    icon="📝"
    title="Describe"
    details="Define components in code with powerful lifecycle metadata."
    link="/documentation/concepts/"
  />
  <VPFeature
    icon="🔐"
    title="Sign"
    details="Add cryptographic signatures. End-to-end trust from source to deployment."
    link="/documentation/concepts/coordinates"
  />
  <VPFeature
    icon="🚚"
    title="Transport"
    details="Works across boundaries — public cloud, on-prem, air-gapped. Tamper-proof."
    link="/documentation/tutorials/ocm-and-gitops/air-gapped-gitops-with-ocm-and-flux"
  />
  <VPFeature
    icon="🚀"
    title="Deploy"
    details="Automate deployments with OCM Controllers and Flux. Seamless GitOps."
    link="/documentation/tutorials/ocm-and-gitops/deploying-applications-with-ocm-and-gitops"
  />
</div>

## Why choose OCM?

<div class="ocm-tiles-grid">
  <VPFeature
    icon="📦"
    title="One Model for All Artifacts"
    details="A unified, machine-readable format for everything you deliver."
    link="/documentation/overview/benefits"
  />
  <VPFeature
    icon="🔒"
    title="Security & Integrity"
    details="Component-level signatures that verify everything. Ironclad provenance at every step."
    link="/documentation/tutorials/creds-in-ocmconfig"
  />
  <VPFeature
    icon="🌐"
    title="Universal Delivery"
    details="Deploy anywhere: public, on-prem, air-gapped. Cross-boundary transfers without compromise."
    link="/documentation/overview/"
  />
  <VPFeature
    icon="🔗"
    title="End-to-End Traceability"
    details="OCM Coordinates connect all lifecycle phases. One global view for visibility from build to deployment."
    link="/documentation/concepts/coordinates"
  />
  <VPFeature
    icon="⚙️"
    title="GitOps-Ready Automation"
    details="Integrate your pipelines through OCM tooling. Zero custom code needed — just plug and play."
    link="/documentation/tutorials/ocm-and-gitops/"
  />
  <VPFeature
    icon="🤝"
    title="Open Governance & Ecosystem"
    details="Community-driven, vendor-neutral standard with rich tooling and integrations."
    link="/documentation/overview/project"
  />
</div>

</div>
