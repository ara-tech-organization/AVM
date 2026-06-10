/**
 * Centralised image URLs (Unsplash CDN). Swap these for licensed brand
 * photography before launch. SmartImage falls back to a branded block if any
 * URL fails to resolve, so the layout is always safe.
 */
const u = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  // Hero
  heroPatient: u('1588776814546-1ffcf47267a5', 1200), // smiling patient in chair
  heroBackground: u('1629909613654-28e377c37b09', 1900), // modern clinic interior

  // About / bento
  aboutCare: u('1576091160550-2173dba999ef', 1100), // dentist with patient
  aboutTech: u('1631549916768-4119b2e5f926', 900), // dental equipment
  aboutTeam: u('1582750433449-648ed127bb54', 900), // medical team
  aboutClinic: u('1629909615184-74f495363b67', 1000), // clinic room

  // Why choose
  whyEnvironment: u('1684607631635-5b1a9c0d7d50', 1000),

  // Services (generic)
  serviceWide: u('1606811841689-23dfddce3e95', 1200),

  // Per-service imagery (cycled in the Services index). Order matches data/services.js
  serviceImages: [
    u('1609840114035-3c981b782dfe', 1000), // tooth extraction
    u('1588776814546-1ffcf47267a5', 1000), // crowns & bridges
    u('1629909615184-74f495363b67', 1000), // dentures
    u('1606811971618-4486d14f3f99', 1000), // root canal
    u('1607990281513-2c110a25bd8c', 1000), // teeth whitening
    u('1606811841689-23dfddce3e95', 1000), // scaling & polishing
    u('1581585504231-2b7e3b8cda1e', 1000), // invisible aligners
    u('1598256989800-fe5f95da9787', 1000), // braces
    u('1571772996211-2f02c9727629', 1000), // veneers
    u('1631549916768-4119b2e5f926', 1000), // dental implants
  ],

  // Doctor
  doctorPortrait: u('1612349317150-e413f6a5b16d', 1000), // professional doctor portrait

  // Before / after — patient smiles
  smile1: u('1571772996211-2f02c9727629', 800),
  smile2: u('1607990281513-2c110a25bd8c', 800),
  smile3: u('1601260628136-6a3b5e2d3b4e', 800),
  smile4: u('1588776813952-9b1c1c5c0a3b', 800),

  // CTA
  ctaBackground: u('1609840114035-3c981b782dfe', 1900),

  // Gallery (before/after pairs use generic portraits)
  gallery: [
    u('1581585504231-2b7e3b8cda1e', 800),
    u('1606811971618-4486d14f3f99', 800),
    u('1612349317150-e413f6a5b16d', 800),
    u('1559839734-2b71ea197ec2', 800),
    u('1622253692010-333f2da6031d', 800),
    u('1598256989800-fe5f95da9787', 800),
  ],
}

export default images
