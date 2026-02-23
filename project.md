# PEP-001: Titan Peptidos Premium
**Company:** Titan Peptidos  
**Domain:** TBD (to purchase)  
**Type:** Telehealth Peptide Company  
**Location:** Santa Cruz, Bolivia  
**References:** 
- https://www.forhims.com (primary inspiration)
- https://www.forhers.com (secondary inspiration)  
- https://www.getroman.com (testimonial style)
- https://transcendcompany.com (model/flow)
- https://peptidescience.com (product lineup)
**Status:** Requirements Locked → Build Phase  
**Priority:** HIGH

---

## Executive Summary

Premium peptide telehealth company serving **both men and women** in Latin America. Inspired by Hims/Hers design language but unified for all genders. Features bold "TITAN" typography, dark luxury aesthetic with 1-click theme switching, and a stupid-easy admin backend.

**Key Differentiators:**
- **Gender-neutral** (Hims + Hers mashup)
- **1-Click Theme Switcher** (3-4 palettes, monthly refresh)
- **Stupid-Easy Admin** (toggle peptides, inventory, media, stories)
- **Self-Hosted WhatsApp** (Evolution API/Chatwoot, no Meta API)
- **Multi-Payment** (Stripe + Bolivian networks + Crypto)
- **Dual Certification** (Janoshik + Bolivia local)

---

## Design Direction

### Visual Style: "Dark Luxury × Bold Power"
- **Base:** Dark mode (#0a0a0a background, #1a1a1a cards)
- **Typography:** Bold, large, commanding "TITAN" presence
- **Accent Colors:** Mix masculine + feminine tones (teal/copper, purple/gold)
- **Texture:** Slight luxury texture, not fully grunge but bold
- **Trust:** Clean medical elements (cert badges, clean lines)

### Reference Mashup
| Element | Source | Implementation |
|:---|:---|:---|
| Hero layout | forhims.com | Full-width, bold headline, single CTA |
| Color balance | forhers.com | Softer accents mixed with power tones |
| Testimonials | getroman.com | "Meet those who transformed" grid |
| Medical trust | transcendcompany.com | Lab certifications, doctor profiles |
| Product depth | peptidescience.com | Detailed peptide info, research-backed |

### 1-Click Theme Switcher
**3-4 Preinstalled Palettes:**
1. **"Midnight"** (Default) — Deep black, electric blue accents
2. **"Titan Gold"** — Black background, gold/copper luxury
3. **"Bio Teal"** — Dark gray, teal/green medical tech
4. **"Royal Purple"** — Black, purple/pink gradient accents

---

## Peptide Lineup (From Both Sources)

### Weight Loss & Metabolic
- **Semaglutide (GLP-1)** — Appetite suppression, weight loss
- **Tirzepatide** — Dual GIP/GLP-1, superior weight loss
- **Tesamorelin** — Visceral fat reduction
- **AOD-9604** — Fat metabolism, no blood sugar impact
- **5-Amino-1MQ** — Metabolic acceleration

### Performance & Muscle
- **CJC-1295 + Ipamorelin** — Growth hormone release
- **Sermorelin** — GH stimulation, recovery
- **Ibutamoren (MK-677)** — GH secretagogue
- **BPC-157** — Tissue repair, gut healing
- **TB-500** — Wound healing, flexibility

### Recovery & Healing
- **BPC-157** (also listed above)
- **TB-500** (also listed above)
- **GHK-Cu** — Skin repair, anti-aging, wound healing
- **Thymosin Alpha-1** — Immune modulation

### Cognitive & Neuro
- **Semax** — Cognitive enhancement, focus
- **Selank** — Anxiety reduction, calm focus
- **Dihexa** — Memory, neuroprotection
- **Cerebrolysin** — Neurotrophic, brain repair

### Sexual Health (Men + Women)
- **PT-141 (Bremelanotide)** — Libido for both genders
- **Oxytocin** — Connection, mood, sexual response
- **Melanotan II** — Tanning + libido (market carefully)

### Longevity & Anti-Aging
- **Epitalon** — Telomerase activation
- **NAD+ / NMN** — Cellular energy, longevity
- **GHK-Cu** — Collagen, skin, repair

### Skin & Hair
- **GHK-Cu** — Collagen synthesis
- **Setmelanotide** — Pigmentation
- **Hair peptides** — Growth, density

---

## Patient Journey

```
1. LANDING PAGE
   └── Hero: "Transform Your Potential" (bold TITAN)
   └── CTA: "Start Your Assessment"

2. AI CHAT / INTAKE FORM
   └── Goals, health history, contraindications
   └── AI pre-qualification

3. NURSE CONSULTATION (Video)
   └── Triage, vitals review
   └── Lab order generated

4. LAB WORK
   └── Local Bolivia lab partner
   └── Results uploaded to portal

5. DOCTOR REVIEW (Video)
   └── Prescription if approved
   └── Protocol designed

6. FULFILLMENT
   └── Medication shipped
   └── Janoshik + Bolivia certs included
   └── Injection guides provided

7. ONGOING SUPPORT
   └── Monthly check-ins
   └── Protocol adjustments
   └── WhatsApp support
```

---

## Admin Backend Requirements

### "Stupid Easy" Admin Panel
**One-Click Operations:**

| Feature | Function |
|:---|:---|
| **Peptide Toggle** | ON/OFF any peptide instantly |
| **Stock Status** | "In Stock" / "Out of Stock" / "Backorder" |
| **Media Manager** | Upload images, videos, reorder gallery |
| **Story Manager** | Add/edit success stories, before/after |
| **Specials/Banners** | Change homepage promo, sale pricing |
| **Theme Switcher** | 1-click change entire site color palette |
| **Content Editor** | WYSIWYG for peptide descriptions |
| **Order Management** | View, update, track shipments |
| **Patient Portal** | View patient data, notes, protocols |

### Tech Stack for Admin
- **Payload CMS** or **Strapi** (headless, stupid easy)
- **Next.js Admin Routes** (custom if needed)
- **Secure Auth** — 2FA required

---

## Technical Architecture

### Frontend
- **Next.js 14** (App Router)
- **Tailwind CSS** with CSS variables for theme switching
- **Framer Motion** (scroll animations)
- **GSAP** (ScrollTrigger for parallax)
- **Shadcn/ui** (base components)

### Backend
- **Next.js API Routes** + **Payload CMS** (for admin)
- **PostgreSQL** (encrypted patient data)
- **Prisma** ORM
- **Redis** (sessions, caching)

### Payments
- **Stripe** (international cards)
- **MercadoPago** (Latin America)
- **PayPal** (alternative)
- **Coinbase Commerce** or **BTCPay** (crypto)
- **Local Bolivian** — integration needed

### Telehealth
- **Daily.co** or **Agora.io** (video consultations)
- **Scheduling** — Calendly API or custom

### WhatsApp (Self-Hosted)
- **Evolution API** — WhatsApp Web multi-device
- **Chatwoot** — Agent dashboard
- **No Meta Business API** — keeps costs down, more control

### AI Chat
- **OpenAI GPT-4** (peptide knowledge base)
- **Vector DB** (Pinecone) for RAG
- **Initial:** Basic FAQ, expand later

### Hosting
- **Frontend:** Vercel
- **Backend/CMS:** Coolify on Hostinger VPS (your stack)
- **WhatsApp:** Same VPS (Evolution API + Chatwoot)

---

## Page Structure

### 1. Home (Hero)
- Full-width hero with bold "TITAN" typography
- Single strong CTA: "Start Your Assessment"
- Trust badges (Janoshik, Bolivia certs, doctors)
- Featured peptides carousel

### 2. How It Works
- 4-step animated process
- Visual timeline with icons
- "Roman-style" testimonial section: "Meet Those Who Transformed"
- Categories: Weight Loss | Performance | Recovery | Cognitive | Sexual Health

### 3. Peptides (Shop)
- Category filters
- Product cards with glassmorphism
- Quick-add to cart
- "Learn More" → Detailed science page

### 4. Science (Per Peptide)
- Research summary
- Mechanism of action
- Dosage guidelines
- Clinical studies
- Safety profile

### 5. Transformations (Testimonials)
- Before/After (with consent)
- Success stories by category
- Video testimonials

### 6. Medical Team
- Doctor profile (once hired)
- Nurse team (once hired)
- Certifications display

### 7. Certifications
- Janoshik lab results
- Bolivia Ministry of Health
- GMP manufacturing
- Cold chain verification

### 8. FAQ
- Accordion by category
- Search functionality

### 9. Contact
- WhatsApp chat widget
- AI chatbot
- Email form

---

## Marketing & Tracking

### Pixels & Analytics
- **Meta Pixel** (Facebook/Instagram)
- **TikTok Pixel**
- **Google Analytics 4**
- **Hotjar** (heatmaps, recordings)

### Social Strategy
- **TikTok:** Short educational videos, transformation stories
- **YouTube:** Deep dive education, injection guides, protocols
- **Instagram:** Lifestyle, results, behind-the-scenes
- **WhatsApp:** Direct marketing, support, re-engagement

### Influencer Strategy
- Fitness influencers (Bolivia/Colombia/Peru)
- Biohacking creators
- Medical professionals (credibility)

---

## Legal & Compliance

### Required Pages
- Terms of Service
- Privacy Policy (LGPD/GDPR compliant for LATAM)
- Medical Disclaimer
- Refund/Return Policy
- Telehealth Informed Consent
- Peptide Information & Safety

### Certifications to Display
- **Janoshik Lab Testing** — Independent HPLC/MS verification
- **Bolivia Ministry of Health Registration**
- **GMP Certification** — Manufacturing
- **Cold Chain Verified** — Shipping documentation

---

## Build Phases (MVP Roadmap)

### Phase 1: Foundation (Week 1) ✅ COMPLETED
- [x] Design system (Tailwind config, theme switcher) - 4 themes live
- [x] Homepage hero (Hims/Hers mashup) - Bold TITAN typography
- [x] Trust signals section - Certifications, shipping, support
- [x] How it works - 4-step process
- [x] Product showcase - 6 peptide categories
- [x] Transformations (Roman-style testimonials)
- [x] CTA section - Conversion optimized
- [x] Navbar + Footer - Full navigation
- [x] Mobile responsive - All breakpoints

### Phase 2: Commerce (Week 2)
- [ ] Stripe integration
- [ ] Cart/checkout flow
- [ ] Admin panel (Payload CMS setup)
- [ ] Peptide toggle/inventory

### Phase 2: Commerce (Week 2)
- [ ] Stripe integration
- [ ] Cart/checkout flow
- [ ] Admin panel (Payload CMS setup)
- [ ] Peptide toggle/inventory

### Phase 3: Telehealth (Week 3-4)
- [ ] Intake forms
- [ ] Video consultation booking
- [ ] Patient portal (basic)
- [ ] Doctor/nurse dashboards

### Phase 4: Scale (Week 5+)
- [ ] WhatsApp integration
- [ ] AI chat
- [ ] Full peptide catalog
- [ ] Marketing automation

---

## Open Questions

1. **Domain** — What will you buy? (titanpeptidos.com? titandosis.com?)
2. **Logo** — Need me to design or have assets?
3. **Lab Partner** — Which lab in Bolivia for bloodwork?
4. **Doctor/Nurse** — Timeline for hiring?
5. **Supplier** — Sourcing from? (Need to verify Janoshik relationship)

---

## File Structure (Proposed)

```
titan-peptidos/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   ├── lib/                 # Utilities
│   └── styles/              # Tailwind + themes
├── admin/                   # Payload CMS
├── public/                  # Static assets
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   └── HANDOFF.md
└── deploy/
    ├── coolify.yaml
    └── docker-compose.yml
```

---

*Requirements locked by Amaru*  
*Date: 2026-02-23*  
*Status: Ready to build*
