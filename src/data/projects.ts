export type ProjectScreenshot = {
  src: string
  alt: string
}

export type ProjectCaseStudy = {
  problem: string
  solution: string
  features: string[]
  screenshots: ProjectScreenshot[]
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl: string | null
  featured: boolean
  status: string
  caseStudy: ProjectCaseStudy
}

export const projects: Project[] = [
  {
    id: 'crime-mapping-tool',
    title: 'Crime Mapping Tool',
    description:
      'An interactive mapping tool to visualize and explore crime-related data by location, built with a responsive UI and a backend API.',
    image: '/images/crime-homepage.png',
    techStack: ['Laravel', 'NestJS', 'MySQL', 'Tailwind CSS', 'Leaflet JS'],
    githubUrl: 'https://github.com/Chivorn99/crime-mappingtool-project.git',
    liveUrl: null,
    featured: true,
    status: 'Completed',
    caseStudy: {
      problem:
        'Crime datasets can be difficult to understand as raw tables. The goal was to make location-based patterns easier to explore and communicate.',
      solution:
        'Built a web-based dashboard with an interactive map UI and a backend API for storing and serving incident records, focusing on clarity and usability.',
      features: [
        'Interactive map visualization with incident markers',
        'Search and filtering to explore incidents by common attributes',
        'Create/read/update/delete workflow for managing records',
        'Responsive UI built with Tailwind CSS',
      ],
      screenshots: [
        {
          src: '/images/crime-homepage.png',
          alt: 'Crime Mapping Tool dashboard screenshot',
        },
      ],
    },
  },
  {
    id: 'clinex-application',
    title: 'Clinex Application',
    description:
      "A full-stack web application designed to automate data extraction from medical reports for lab technicians. It leverages Google's Document AI to process bulk PDF uploads, significantly increasing workflow efficiency and reducing manual errors.",
    image: '/images/clinex-homepage.png',
    techStack: [
      'Next JS',
      'Laravel',
      'MySQL',
      'Google Document AI',
      'Redis',
      'Tailwind CSS',
      'Laravel Reverb',
    ],
    githubUrl: 'https://github.com/Chivorn99/clinex-fyp-full-application.git',
    liveUrl: null,
    featured: true,
    status: 'In Progress',
    caseStudy: {
      problem:
        'Manually extracting structured fields from medical reports is time-consuming and error-prone, especially when handling PDFs in bulk.',
      solution:
        "Created an app that ingests PDFs in batches and uses Google's Document AI to extract structured data, with a review step before exporting results.",
      features: [
        'Bulk PDF upload and batch processing workflow',
        'Automated extraction pipeline powered by Document AI',
        'Review/edit step for validating extracted data',
        'Export-friendly structured output for downstream use',
      ],
      screenshots: [
        {
          src: '/images/clinex-homepage.png',
          alt: 'Clinex application screenshot',
        },
      ],
    },
  },
  {
    id: 'ecommerce-application',
    title: 'E-commerce Application',
    description:
      'A full-stack e-commerce solution with React.js, Laravel, and MySQL. Features include user authentication, payment processing, and admin dashboard.',
    image: '/images/ecommerce-app.png',
    techStack: [
      'React JS',
      'React Native',
      'Laravel',
      'MySQL',
      'Google Auth',
      'Tailwind CSS',
      'Laravel Reverb',
    ],
    githubUrl: '#',
    liveUrl: null,
    featured: true,
    status: 'In Progress',
    caseStudy: {
      problem:
        'Building a reliable e-commerce experience requires solid core flows (catalog, auth, admin) and a backend that can support web and mobile clients.',
      solution:
        'Implemented a full-stack application with a Laravel/MySQL backend and React-based clients, focusing first on the foundational commerce workflows.',
      features: [
        'Product catalog browsing and core storefront UI',
        'Authentication flow (including Google sign-in)',
        'Admin dashboard foundations for managing data',
        'Responsive UI styling with Tailwind CSS',
      ],
      screenshots: [
        {
          src: '/images/ecommerce-app.png',
          alt: 'E-commerce application screenshot',
        },
      ],
    },
  },
]

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id)
}
