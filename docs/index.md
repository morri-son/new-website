---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Open Component Model"
  text: "Deliver and deploy your software securely."
  tagline: "Anywhere, at any scale."
  image:
    light: "/ocm-logo-black.svg"
    dark: "/ocm-logo-white.svg"
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

<div class="custom-footer">
  <div class="footer-content">
    <div class="footer-top">
      <div class="footer-funding">
        <img src="/ord-footer-bmwe.png" alt="EU Funding" class="footer-logo-eu" />
        <div class="footer-funding-text">
          <p class="funding-title"><strong>Funded by the European Union – NextGenerationEU.</strong></p>
          <p class="funding-disclaimer">The views and opinions expressed are solely those of the author(s) and do not necessarily reflect the views of the European Union or the European Commission. Neither the European Union nor the European Commission can be held responsible for them.</p>
        </div>
      </div>
      <div class="footer-neonephos">
        <a href="https://neonephos.org/" target="_blank" rel="noopener">
          <img src="/ord-footer-neonephos.svg" alt="Neonephos" class="footer-logo-neonephos" />
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright"><strong>Copyright © Linux Foundation Europe.</strong></p>
      <p class="legal-text">Open Component Model is a project of the Open Component Model Community. For applicable policies including privacy policy, terms of use and trademark usage guidelines, please see <a href="https://linuxfoundation.eu" target="_blank" rel="noopener">https://linuxfoundation.eu</a>. Linux is a registered trademark of Linus Torvalds.</p>
    </div>
  </div>
</div>

<style scoped>
.custom-footer {
  margin-top: 4rem;
  padding: 3rem 1.5rem 2rem;
  border-top: 1px solid var(--vp-c-divider);
  background: transparent;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
}

.footer-funding {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  flex: 1;
}

.footer-logo-eu {
  height: 80px;
  width: auto;
  flex-shrink: 0;
}

.footer-funding-text {
  flex: 1;
}

.funding-title {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem 0;
}

.funding-disclaimer {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.footer-neonephos {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo-neonephos {
  height: 50px;
  width: auto;
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}

.copyright {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.5rem 0;
}

.legal-text {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.legal-text a {
  color: var(--vp-c-text-3);
  text-decoration: none;
}

.legal-text a:hover {
  color: var(--vp-c-brand);
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .footer-bottom {
    text-align: left;
  }
}
</style>
