import { siteConfig } from "../siteConfig";

const realEstateApis = {
  groups: [
    {
      title: "Authentication APIs",
      endpoints: [
        {
          method: "POST",
          endpoint: "/api/auth/register",
          auth: "Public",
          desc: "Register a user with profile image upload",
        },
        {
          method: "POST",
          endpoint: "/api/auth/login",
          auth: "Public",
          desc: "Login and receive a JWT",
        },
        {
          method: "POST",
          endpoint: "/api/auth/logout",
          auth: "JWT",
          desc: "Logout and invalidate the session token",
        },
        {
          method: "POST",
          endpoint: "/api/auth/forgot-password",
          auth: "Public",
          desc: "Start password recovery by sending an OTP",
        },
        {
          method: "POST",
          endpoint: "/api/auth/verify-otp",
          auth: "Public",
          desc: "Verify the emailed OTP",
        },
        {
          method: "POST",
          endpoint: "/api/auth/reset-password",
          auth: "OTP Validated",
          desc: "Reset the password after OTP verification",
        },
      ],
    },
    {
      title: "Property APIs",
      endpoints: [
        {
          method: "GET",
          endpoint: "/property/getAllProperties",
          auth: "Public",
          desc: "List all available properties",
        },
        {
          method: "GET",
          endpoint: "/property/getPropertyById/:id",
          auth: "Public",
          desc: "Get a single property by id",
        },
        {
          method: "GET",
          endpoint: "/property/getPaginatedProperties/:page/:limit",
          auth: "Public",
          desc: "Paginated property listing",
        },
        {
          method: "GET",
          endpoint: "/property/recentProperties",
          auth: "Public",
          desc: "Get recently added properties",
        },
        {
          method: "POST",
          endpoint: "/property/addProperty",
          auth: "JWT + RBAC (Admin / Agent / Customer)",
          desc: "Add a property with up to 10 Cloudinary images",
        },
        {
          method: "PUT",
          endpoint: "/property/updateProperty/:id",
          auth: "JWT + RBAC",
          desc: "Update a property and its images",
        },
        {
          method: "DELETE",
          endpoint: "/property/deleteProperty/:id",
          auth: "JWT + RBAC",
          desc: "Delete a property",
        },
        {
          method: "GET",
          endpoint: "/property/my-properties",
          auth: "JWT",
          desc: "List properties owned by the logged-in user",
        },
        {
          method: "GET",
          endpoint: "/property/my-properties/:id",
          auth: "JWT",
          desc: "Get a specific owned property",
        },
      ],
    },
    {
      title: "Booking APIs",
      endpoints: [
        {
          method: "POST",
          endpoint: "/booking/createBooking",
          auth: "JWT",
          desc: "Create a property visit booking",
        },
        {
          method: "GET",
          endpoint: "/booking/getMyBookings",
          auth: "JWT (Customer)",
          desc: "Get the logged-in customer's bookings",
        },
        {
          method: "GET",
          endpoint: "/booking/getAllBookings",
          auth: "JWT + RBAC (Admin / Agent)",
          desc: "Get all bookings",
        },
        {
          method: "PUT",
          endpoint: "/booking/updateBookingStatus/:id",
          auth: "JWT + RBAC (Admin / Agent)",
          desc: "Update booking status",
        },
        {
          method: "DELETE",
          endpoint: "/booking/deleteBooking/:id",
          auth: "JWT",
          desc: "Delete a booking",
        },
      ],
    },
    {
      title: "User & Admin APIs",
      endpoints: [
        {
          method: "GET",
          endpoint: "/user/getCurrentUser",
          auth: "JWT",
          desc: "Get the logged-in user's profile",
        },
        {
          method: "PUT",
          endpoint: "/user/updateProfile",
          auth: "JWT",
          desc: "Update own profile with optional image",
        },
        {
          method: "GET",
          endpoint: "/user/getAllUsers",
          auth: "JWT + RBAC (Admin / Agent)",
          desc: "List all users",
        },
        {
          method: "PUT",
          endpoint: "/user/updateRoleOrStatus/:id",
          auth: "JWT (Admin)",
          desc: "Change a user's role or status",
        },
        {
          method: "GET",
          endpoint: "/dashboard/viewDashboard",
          auth: "JWT + RBAC (Admin / Agent)",
          desc: "Dashboard statistics and metrics",
        },
        {
          method: "PUT",
          endpoint: "/property/admin/approve/:id",
          auth: "JWT (Admin)",
          desc: "Approve a pending property listing",
        },
        {
          method: "PUT",
          endpoint: "/property/admin/reject/:id",
          auth: "JWT (Admin)",
          desc: "Reject a pending property listing",
        },
      ],
    },
  ],
};

const garageGoApis = {
  groups: [
    {
      title: "Authentication APIs",
      endpoints: [
        {
          method: "POST",
          endpoint: "/api/auth/register",
          auth: "Public",
          desc: "Register a customer account",
        },
        {
          method: "POST",
          endpoint: "/api/auth/login",
          auth: "Public",
          desc: "Login and receive a JWT",
        },
        {
          method: "POST",
          endpoint: "/api/auth/admin/login",
          auth: "Public",
          desc: "Login as administrator",
        },
        {
          method: "GET",
          endpoint: "/api/auth/me",
          auth: "JWT",
          desc: "Get the current authenticated user",
        },
      ],
    },
    {
      title: "Garage APIs",
      endpoints: [
        {
          method: "GET",
          endpoint: "/api/garages",
          auth: "Public",
          desc: "List garages with filtering and nearby search",
        },
        {
          method: "GET",
          endpoint: "/api/garages/:id",
          auth: "Public",
          desc: "Get garage details with map data",
        },
        {
          method: "POST",
          endpoint: "/api/garages",
          auth: "JWT (Admin)",
          desc: "Create a garage listing",
        },
        {
          method: "PUT",
          endpoint: "/api/garages/:id",
          auth: "JWT (Admin)",
          desc: "Update a garage",
        },
        {
          method: "DELETE",
          endpoint: "/api/garages/:id",
          auth: "JWT (Admin)",
          desc: "Delete a garage",
        },
      ],
    },
    {
      title: "Booking APIs",
      endpoints: [
        {
          method: "POST",
          endpoint: "/api/bookings",
          auth: "JWT / Public",
          desc: "Create a garage booking",
        },
        {
          method: "GET",
          endpoint: "/api/bookings",
          auth: "JWT",
          desc: "Get the logged-in user's bookings",
        },
        {
          method: "PATCH",
          endpoint: "/api/bookings/:id",
          auth: "JWT",
          desc: "Update a booking",
        },
        {
          method: "DELETE",
          endpoint: "/api/bookings/:id",
          auth: "JWT (Admin)",
          desc: "Delete a booking",
        },
      ],
    },
    {
      title: "Admin & Misc APIs",
      endpoints: [
        {
          method: "GET",
          endpoint: "/api/admin/stats",
          auth: "JWT (Admin)",
          desc: "Dashboard statistics and charts data",
        },
        {
          method: "GET",
          endpoint: "/api/users",
          auth: "JWT (Admin)",
          desc: "List all users",
        },
        {
          method: "POST",
          endpoint: "/api/contact",
          auth: "Public",
          desc: "Send a contact message (Nodemailer)",
        },
        {
          method: "POST",
          endpoint: "/api/upload",
          auth: "JWT (Admin)",
          desc: "Upload a garage image to Cloudinary",
        },
        {
          method: "DELETE",
          endpoint: "/api/upload",
          auth: "JWT (Admin)",
          desc: "Delete an uploaded Cloudinary image",
        },
      ],
    },
  ],
};

export const projects = [
  {
    slug: "real-estate",
    title: "Real Estate Management Platform",
    tagline: "Full-stack property listing and booking platform",
    description:
      "A role-driven real estate platform where customers browse and submit properties, book visits, and admins review, approve, and manage listings through a dashboard.",
    category: "Full Stack",
    flagship: true,
    year: "2026",
    image: "/projects/real-estate/home.jpg",
    gallery: [
      "/projects/real-estate/home.jpg",
      "/projects/real-estate/properties.jpg",
      "/projects/real-estate/property-details.jpg",
      "/projects/real-estate/login.jpg",
      "/projects/real-estate/bookings.jpg",
      "/projects/real-estate/admin-dashboard.jpg",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React.js",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
      "Nodemailer",
      "Multer",
    ],
    demo: siteConfig.demos.realEstate,
    backendApi: siteConfig.backendApis.realEstate,
    github: siteConfig.repositories.realEstate,
    overview:
      "Roylos Real Estate is a full-stack management platform for property listings and visit bookings. Customers can register, browse properties, submit their own properties, book visits, and manage their listings. Agents can list and manage properties, while administrators review submitted properties, manage users, approve or reject listings, and oversee booking workflows.",
    problem:
      "Finding and managing property listings traditionally relies on scattered sources - individual posts, agents, and manual coordination. There is no single place to list a property, verify it, and book a visit. Property owners have no ownership model over their listings, and admins have no workflow to moderate what gets published. The platform solves this by centralizing the entire lifecycle - submission, moderation, listing, and booking - behind one API.",
    solution:
      "A client-server architecture. React (Vite) consumes a REST API built with Express. The backend is organized into routes, middleware, controllers, and models. Authentication uses JWT with role-based access control (Customer / Agent / Admin). Properties have an ownership model, submitted listings go through an approval workflow, images upload through Multer to Cloudinary, and bookings are managed per role. MongoDB with Mongoose handles schema design and relationships.",
    architecture: [
      { layer: "React Frontend", sub: "Customer / Admin UI", type: "client" },
      { layer: "Axios", sub: "HTTP client", type: "link" },
      { layer: "Express.js API", sub: "Node.js REST API", type: "server" },
      { layer: "Middleware", sub: "JWT protect, role authorize, Multer upload", type: "server" },
      { layer: "Controllers", sub: "Business logic", type: "server" },
      { layer: "Mongoose", sub: "MongoDB ODM", type: "server" },
      { layer: "MongoDB", sub: "Database", type: "db" },
    ],
    uploadFlow: [
      "React Form",
      "API Request (multer multipart)",
      "Multer Memory Storage",
      "Cloudinary Upload",
      "Image URL Returned",
      "URL Stored in MongoDB",
    ],
    authFlow: [
      "Login",
      "Credentials Validation",
      "bcrypt Password Verification",
      "JWT Generation",
      "Token Returned to Client",
      "Authorization Header (Bearer)",
      "Protect Middleware",
      "Role Authorization",
      "Controller Access",
    ],
    features: [
      "JWT authentication with bcrypt password hashing",
      "Role-based access control (Customer / Agent / Admin)",
      "Admin dashboard with moderation and user management",
      "Customer property submission and approval workflow",
      "Property CRUD with an ownership model",
      "Search, filtering, and paginated property listings",
      "Booking system with status management",
      "Cloudinary image uploads via Multer",
      "Feedback and contact email integration",
      "Protected APIs with environment-based config",
      "Deployed backend on Vercel",
    ],
    apiGroups: realEstateApis.groups,
  },
  {
    slug: "garagego",
    title: "GarageGo",
    tagline: "Garage rental and management platform",
    description:
      "Full-stack garage management and booking platform with RESTful APIs for authentication, garage management, users, bookings, and administrative workflows.",
    category: "Full Stack",
    flagship: false,
    year: "2026",
    image: "/projects/garagego/hero.jpg",
    gallery: ["/projects/garagego/hero.jpg"],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React.js",
      "JWT",
      "Cloudinary",
      "Nodemailer",
      "Recharts",
      "Tailwind CSS",
    ],
    demo: siteConfig.demos.garageGo,
    backendApi: siteConfig.backendApis.garageGo,
    github: siteConfig.repositories.garageGo,
    overview:
      "GarageGo is a garage renting / buying platform with a customer-facing app and an admin dashboard. Customers can browse garages, filter by type and amenities, find nearby garages using geolocation, view details with a map, book a garage, and manage their bookings. Admins get a dashboard with live stats and charts, manage garages and bookings, manage users, and receive contact messages.",
    problem:
      "Garage space is often found through word-of-mouth or local listings with no structured way to search, compare, or book. Owners have no tool to manage their listings, and admins have no overview of bookings or operations. GarageGo centralizes garage discovery, booking, and administration in a single platform.",
    solution:
      "A React (Vite) customer and admin application backed by an Express + Mongoose REST API. The backend supports JWT-based admin and customer accounts with bcrypt hashed passwords, nearby-geolocation search, booking CRUD, Cloudinary image uploads, Nodemailer-based contact email, and an admin stats/charts endpoint. Frontend uses React Router, Tailwind CSS, and Recharts for the admin dashboard.",
    architecture: [
      { layer: "React Frontend", sub: "Customer + Admin UI", type: "client" },
      { layer: "Axios", sub: "HTTP client", type: "link" },
      { layer: "Express.js API", sub: "Node.js REST API", type: "server" },
      { layer: "Middleware", sub: "requireAuth, requireAdmin", type: "server" },
      { layer: "Controllers", sub: "Business logic", type: "server" },
      { layer: "Mongoose", sub: "MongoDB ODM", type: "server" },
      { layer: "MongoDB", sub: "Database", type: "db" },
    ],
    authFlow: [
      "Registration / Login",
      "Credentials Validation",
      "bcrypt Password Verification",
      "JWT Generation",
      "Token Returned to Client",
      "Authorization Header (Bearer)",
      "Auth Middleware",
      "Role Check (Admin)",
      "Controller Access",
    ],
    features: [
      "Customer registration & JWT login with bcrypt",
      "Separate admin login flow",
      "Browse, filter, and nearby-search garages",
      "Garage details page with map integration",
      "Booking lifecycle for customers",
      "Admin dashboard with live stats and charts",
      "Admin garage, booking, and user management",
      "Cloudinary image uploads for garages",
      "Nodemailer contact-message emails",
      "RESTful API with role-protected routes",
    ],
    apiGroups: garageGoApis.groups,
  },
  {
    slug: "roylos",
    title: "Roylos Web Services",
    tagline: "Company website with services and contact",
    description:
      "A responsive full-stack company website featuring services, a project portfolio, and a contact inquiry flow backed by Node.js, Express, and MongoDB.",
    category: "Full Stack",
    flagship: false,
    year: "2026",
    image: "/roylos.png",
    gallery: [],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    demo: siteConfig.demos.roylos,
    backendApi: "",
    github: siteConfig.repositories.roylos,
    overview:
      "Roylos Web Services is a responsive company website that presents services and a project portfolio while collecting visitor inquiries. The public frontend is built with React, and a simple Express + MongoDB API stores and retrieves contact inquiries.",
    problem:
      "A services company needs a professional web presence that explains what it offers, shows past work, and gives visitors a reliable way to get in touch - without relying on mailto links that scatter requests.",
    solution:
      "A React frontend with a Node.js + Express + MongoDB backend. The services and portfolio sections are content-driven and fully responsive, and the contact form submits to a REST API that stores inquiries in MongoDB.",
    architecture: [
      { layer: "React Frontend", sub: "Responsive company UI", type: "client" },
      { layer: "Axios / Fetch", sub: "HTTP client", type: "link" },
      { layer: "Express.js API", sub: "Contact inquiry endpoints", type: "server" },
      { layer: "Controllers", sub: "Business logic", type: "server" },
      { layer: "Mongoose", sub: "MongoDB ODM", type: "server" },
      { layer: "MongoDB", sub: "Inquiry storage", type: "db" },
    ],
    features: [
      "Services and project portfolio sections",
      "Contact inquiry form with backend storage",
      "Node.js / Express REST API",
      "MongoDB persistence via Mongoose",
      "Responsive, mobile-first UI",
    ],
    apiGroups: null,
  },
  {
    slug: "dispatch-trucking",
    title: "Dispatch & Trucking Management System",
    tagline: "ASP.NET MVC dispatcher system",
    description:
      "Dispatch management application with route tracking and dynamic dashboards, built on ASP.NET MVC with Entity Framework and AJAX.",
    category: ".NET",
    flagship: false,
    year: "2024",
    image: "",
    gallery: [],
    tech: ["ASP.NET MVC", "Entity Framework", "AJAX", "C#"],
    demo: "",
    backendApi: "",
    github: "",
    overview:
      "A classic ASP.NET MVC application for managing dispatch operations. It tracks dispatches and routes and provides dynamic dashboards to monitor operations in real time using AJAX-driven updates.",
    problem:
      "Dispatch teams need a structured way to track trucks, routes, and assignments instead of relying on spreadsheets and phone calls, with no live view of ongoing operations.",
    solution:
      "An MVC application with controllers, views, and models. Entity Framework provides data access, and AJAX calls refresh dashboard data without full page reloads.",
    architecture: [
      { layer: "Browser", sub: "Razor Views", type: "client" },
      { layer: "ASP.NET MVC", sub: "Controllers & Actions", type: "server" },
      { layer: "Entity Framework", sub: "ORM", type: "server" },
      { layer: "SQL Server", sub: "Relational database", type: "db" },
    ],
    features: [
      "Dispatch and trucking management",
      "Route tracking",
      "Dynamic dashboards with AJAX updates",
      "Classic MVC architecture",
    ],
    apiGroups: null,
  },
  {
    slug: "immigration",
    title: "Immigration Management System",
    tagline: "Case and applicant tracking system",
    description:
      "Immigration case management application for tracking applicant records and documents, built with ASP.NET MVC, Entity Framework, and SQL Server.",
    category: ".NET",
    flagship: false,
    year: "2024",
    image: "",
    gallery: [],
    tech: ["ASP.NET MVC", "Entity Framework", "SQL Server", "C#"],
    demo: "",
    backendApi: "",
    github: "",
    overview:
      "An ASP.NET MVC application for managing immigration cases. It tracks applicant records, case status, and attached documents using a relational SQL Server database designed with Entity Framework.",
    problem:
      "Immigration consultants juggle applicant paperwork and case statuses across files and email, making it hard to track documents and case progress in one place.",
    solution:
      "An MVC application backed by a relational database. Entity Framework handles mapping between models and SQL Server, enabling structured case and document tracking.",
    architecture: [
      { layer: "Browser", sub: "Razor Views", type: "client" },
      { layer: "ASP.NET MVC", sub: "Controllers & Actions", type: "server" },
      { layer: "Entity Framework", sub: "ORM", type: "server" },
      { layer: "SQL Server", sub: "Relational database", type: "db" },
    ],
    features: [
      "Immigration case management",
      "Applicant records tracking",
      "Document tracking",
      "Relational database design",
    ],
    apiGroups: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.category !== ".NET");
export const dotnetProjects = projects.filter((p) => p.category === ".NET");
