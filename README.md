# Bids Quantify Frontend

React + Vite frontend for the Bids Quantify estimation website. The app includes marketing pages, service details, sample PDFs, contact form, and plan upload flow connected to a backend API.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- Lucide React
- React Hot Toast

## Requirements

- Node.js 18 or newer
- npm
- Backend API running on the configured API URL

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Bids Quantify Estimation
VITE_APP_PHONE=+18382058444
VITE_APP_EMAIL=info.bidsquantify@gmail.com
```

Start the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the Vite development server.

```bash
npm run build
```

Builds the production app into the `dist` folder.

```bash
npm run preview
```

Serves the production build locally for preview.

## Environment Variables

| Variable | Description | Example |
| --- | --- | --- |
| `VITE_API_URL` | Backend API base URL. Keep `/api` here if backend routes are under `/api`. | `http://localhost:5000/api` |
| `VITE_APP_NAME` | Public app/site name. | `Bids Quantify Estimation` |
| `VITE_APP_PHONE` | Public business phone number. | `+18382058444` |
| `VITE_APP_EMAIL` | Public business email address. | `info.bidsquantify@gmail.com` |

## API Integration

The API client is defined in:

```text
src/services/api.js
```

Current frontend API methods:

- `contactAPI.submit(data)` -> `POST /contact`
- `uploadAPI.submitPlans(formData, onProgress)` -> `POST /upload-plans`
- `samplesAPI.getAll()` -> `GET /samples`
- `samplesAPI.getById(id)` -> `GET /samples/:id`
- `samplesAPI.download(id)` -> `GET /samples/:id/download`
- `quoteAPI.requestQuote(data)` -> `POST /request-quote`

With this `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

The upload endpoint becomes:

```text
http://localhost:5000/api/upload-plans
```

## App Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/services/:slug` | Service detail |
| `/work-samples` | Work samples |
| `/pricing` | Pricing |
| `/sample-pdfs` | Sample PDFs |
| `/upload-plans` | Upload plans |
| `/contact` | Contact |

## Folder Structure

```text
BidsQuantify_frontend/
├── public/
│   ├── samples/
│   │   ├── commercial-sample.pdf
│   │   ├── electrical-sample.pdf
│   │   └── residential-sample.pdf
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── hero-bg.jpg
│   │   └── logo.svg
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── CTASection.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── index.js
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navbar.jsx
│   │   ├── PDFModal.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── TopBar.jsx
│   │   └── UploadForm.jsx
│   ├── data/
│   │   ├── faqs.js
│   │   ├── samples.js
│   │   ├── services.js
│   │   └── testimonials.js
│   ├── layouts/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Pricing.jsx
│   │   ├── SamplePDFs.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Services.jsx
│   │   ├── UploadPlans.jsx
│   │   └── WorkSamples.jsx
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── validators.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Important Files

- `src/App.jsx`: Application routes.
- `src/layouts/Layout.jsx`: Shared page layout.
- `src/services/api.js`: Central Axios API client.
- `src/components/UploadForm.jsx`: Reusable plan upload form.
- `src/pages/UploadPlans.jsx`: Upload plans page.
- `src/components/ContactForm.jsx`: Contact form connected to backend.
- `src/data/services.js`: Service content used by service pages.
- `src/data/samples.js`: Sample PDF metadata.
- `tailwind.config.js`: Tailwind theme and design tokens.

## Backend Notes

The frontend expects a backend API with these routes:

```text
POST /api/contact
POST /api/upload-plans
GET  /api/samples
GET  /api/samples/:id
GET  /api/samples/:id/download
POST /api/request-quote
```

For file uploads, the frontend sends `multipart/form-data` with:

```text
name
email
phone
projectType
trade
message
plans
```

The `plans` field contains the uploaded PDF or image file.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Troubleshooting

If the upload request shows `/api/api/upload-plans`, check `VITE_API_URL`. It should normally be:

```env
VITE_API_URL=http://localhost:5000/api
```

Then frontend code should call API paths like:

```text
/upload-plans
/contact
```

If the frontend cannot reach the backend, confirm:

- Backend server is running.
- Backend port matches `VITE_API_URL`.
- CORS is enabled on the backend.
- Upload route accepts `multipart/form-data`.

## Deployment

1. Set production environment variables.
2. Run `npm run build`.
3. Deploy the generated `dist` folder to your hosting provider.
4. Configure the backend API URL in the deployed environment.

## Project Status

This is the frontend application for Bids Quantify. It is ready for local development, production builds, and backend API integration.




