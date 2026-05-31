# DocNexus Outreach Platform MVP

Full Stack Engineer Internship Assignment – Summer 2026

## Overview

This project is a simplified physician outreach platform inspired by the DocNexus ecosystem. The application enables healthcare organizations, pharmaceutical companies, and medical outreach teams to discover physicians, enroll them into campaigns, create personalized outreach sequences, and monitor campaign activity.

The application follows the workflow:

Physician Discovery → Campaign Builder → Campaign Dashboard

---
## Assignment Highlights

✅ Physician Discovery with filtering

✅ Campaign Builder with multi-step sequences

✅ MongoDB persistence

✅ Campaign Dashboard and analytics

✅ AI-powered email generation using Groq Llama 3.3 70B

✅ Personalized outreach template generation

✅ Dynamic physician preview

✅ Responsive Next.js + Flask architecture
---

## Features

### Module 1 – Physician Discovery

* View physician profiles from seeded physician data
* Filter physicians by:

  * Specialty
  * State
  * Affiliation
  * NPI Registration Year
* Select physicians using checkboxes
* Running count of selected physicians
* Save & Add to Campaign workflow

### Module 2 – Campaign Builder

* Create outreach campaigns
* Campaign types:

  * Cold Outreach
  * Re-engagement
  * Conference Follow-up
* Two-step outreach sequence:

  * Initial Email
  * Follow-up Email
* Template variables:

  * {{doctor_name}}
  * {{specialty}}
  * {{affiliation}}
* Real-time email preview
* Save Draft functionality
* Launch Campaign functionality

### Module 3 – Campaign Dashboard

* Campaign listing page
* Campaign details page
* Campaign status tracking:

  * Draft
  * Active
  * Completed
* Mock outreach metrics:

  * Physicians Enrolled
  * Messages Sent
  * Open Rate
  * Replies
  * Meetings Booked
* Enrolled physician tracking table

---

## Bonus Feature – AI Personalization

Implemented AI-powered email generation using Groq Llama 3.3 70B.

Features:

* Generate outreach emails using AI
* Campaign-aware prompt generation
* Personalized email templates
* Dynamic placeholder support
* One-click "Generate with AI" workflow
* Personalized physician preview

Example placeholders:

{{doctor_name}}
{{specialty}}
{{affiliation}}

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Flask
* Python

### Database

* MongoDB

### AI

* Groq API
* Llama 3.3 70B Versatile

---

## Architecture

### Core Application Flow

```text
Frontend (Next.js)
        │
        ▼
REST API (Flask)
        │
        ▼
MongoDB
```

### AI Email Generation Flow

```text
Frontend
    │
    ▼
Flask AI Endpoint
    │
    ▼
Groq API (Llama 3.3 70B)
    │
    ▼
Generated Outreach Template
```

---
## Project Structure

```text
docnexus_assignment/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   └── app.py
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── public/
│
└── README.md
```
---
## API Endpoints

### Physicians

GET /physicians

Returns physician list with filter support.

### Campaigns

POST /campaigns

Create a campaign.

GET /campaigns

Get all campaigns.

GET /campaigns/:id

Get campaign details.

PATCH /campaigns/:id/launch

Launch a campaign and change status to Active.

### AI

POST /ai/generate-email

Generate campaign-aware outreach email templates.

---

## Local Setup

### Backend

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create .env file:

```env
GROQ_API_KEY=your_key
MONGO_URI=your_connection_string
```

Run backend:

```bash
python app.py
```

---

### Frontend

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Application:

```text
http://localhost:3000
```

---

## Design Decisions

* MongoDB was selected for simple document-based campaign storage.
* Flask was chosen for lightweight REST API development.
* Next.js provides routing and component-based UI architecture.
* Tailwind CSS enables rapid UI iteration and consistent styling.
* Campaign metrics are mocked to focus on workflow completion.
* AI-generated templates use placeholders instead of hardcoded physician names to support reusable outreach sequences.

---

## Future Improvements

Given additional time, I would implement:

* Real email delivery (SendGrid / Resend)
* Advanced campaign analytics and historical trend tracking
* Physician segmentation and saved audiences
* Campaign analytics charts
* Open/click tracking
* Role-based authentication
* AI-generated follow-up sequences
* Multi-channel outreach (email + LinkedIn + SMS)

---

## Demo Video

Watch the complete walkthrough here:

[DOCNEXUS ASSIGNMENT DEMO](https://drive.google.com/drive/folders/1_yuByKH8DPZnzKOJGSg3X_C1Frf76ARp?usp=sharing)

---

## Author

Shaikh Saniya Ali

DocNexus Full Stack Engineer Internship Assignment
