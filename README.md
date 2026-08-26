# Universal ACE - Community Savings Management System

![Universal ACE](https://img.shields.io/badge/Project-Universal%20ACE-green)
![Next.js](https://img.shields.io/badge/Framework-Next.js-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black)


## Live Application

🌐 **Live Demo:**  
https://universal-ace.vercel.app/


## Source Code

💻 **GitHub Repository:**  
https://github.com/Lewis-123/Universal-ACE.git


---

# Project Overview

Universal ACE is a full-stack community savings management application developed to help savings groups efficiently manage group information, member records, savings information, and related activities.

The application provides a simple and user-friendly platform where administrators can create savings groups, register members, maintain group-member relationships, and monitor key statistics through an interactive dashboard.

The project demonstrates the implementation of CRUD operations, related MongoDB data models, API integration, and cloud deployment using modern web development technologies.


---

# Features

## Group Management

The system allows users to:

- Create new savings groups
- View all registered groups
- View individual group information
- Update group details
- Delete groups


## Member Management

The system supports:

- Adding members to groups
- Viewing members associated with each group
- Managing member information
- Maintaining group-member relationships


## Dashboard Analytics

The dashboard provides:

- Total number of groups
- Total number of members
- Total savings amount
- Number of active groups


## User Interface

The application includes:

- Responsive design
- Custom navigation system
- Clean dashboard layout
- User-friendly forms
- Mobile-friendly interface


---

# Technologies Used


## Frontend

- Next.js 16
- React
- JavaScript
- Tailwind CSS


## Backend / API

- Next.js API Routes
- RESTful API architecture


## Database

- MongoDB Atlas
- Mongoose ODM


## Development Tools

- Visual Studio Code
- GitHub Desktop
- Git


## Deployment

- Vercel
- GitHub


---

# Application Architecture


```
Universal ACE

        User

         |

         |

   Next.js Application

         |

         |

   Next.js API Routes

         |

         |

     MongoDB Atlas

```


The application uses a single Vercel deployment where both the frontend and backend API functionality are handled through Next.js.


---

# Project Structure


```
Universal-ACE

└── client

    ├── src

    │
    ├── app

    │   ├── api

    │   │   ├── groups

    │   │   ├── members

    │   │   └── dashboard

    │   │
    │   ├── dashboard

    │   ├── groups

    │   ├── add-group

    │   └── add-member


    ├── components


    ├── models

    │   ├── Group.js

    │   └── Member.js


    ├── lib

    │   └── mongodb.js


    └── utils

        └── api.js

```


---

# Database Design


The application uses MongoDB with two related collections.


## Groups Collection

Stores:

- Group name
- Location
- Meeting day
- Status
- Creation date


## Members Collection

Stores:

- Member name
- Phone number
- Gender
- Occupation
- Savings balance
- Group reference


## Relationship


```
Groups

   |

   |

   └── Members

```


Each member is linked to a specific group using MongoDB ObjectId references.


---

# CRUD Operations


## Groups CRUD


| Operation | Implementation |
|---|---|
| Create | Add new group |
| Read All | View groups list |
| Read One | View group details |
| Update | Edit group information |
| Delete | Remove group |


## Members CRUD


| Operation | Implementation |
|---|---|
| Create | Add new member |
| Read | View members |
| Update | Modify member details |
| Delete | Remove member |


---

# API Endpoints


## Groups API

```
GET      /api/groups

POST     /api/groups


GET      /api/groups/:id

PUT      /api/groups/:id

DELETE   /api/groups/:id
```


## Members API

```
GET      /api/members

POST     /api/members


GET      /api/members/:id

PUT      /api/members/:id

DELETE   /api/members/:id
```


## Dashboard API

```
GET /api/dashboard
```


---

# Installation Guide


## Clone Repository


```bash
git clone https://github.com/Lewis-123/Universal-ACE.git
```


Navigate to the client folder:


```bash
cd Universal-ACE/client
```


Install dependencies:


```bash
npm install
```


Create an environment file:


```
.env.local
```


Add MongoDB connection details:


```env
NEXT_PUBLIC_API_URL=/api

MONGO_URI=your_mongodb_connection_string
```


Run the development server:


```bash
npm run dev
```


Open:


```
http://localhost:3000
```


---

# Deployment


The application is deployed using Vercel.


Deployment process:

1. Repository connected with GitHub
2. Project imported into Vercel
3. Environment variables configured
4. Next.js application built and deployed


Live URL:


https://universal-ace.vercel.app/


---

# Assignment Requirements Completed


✅ Next.js React client setup  
✅ Shared navigation bar  
✅ Home page with repository link  
✅ Resource listing page  
✅ Create resource page  
✅ CRUD API implementation  
✅ Related MongoDB data models  
✅ API utility layer using Axios  
✅ Environment variable configuration  
✅ MongoDB integration  
✅ Vercel deployment  


---

# Future Improvements

Possible future enhancements:

- User authentication
- Role-based access control
- Financial transaction tracking
- Export reports
- Advanced analytics dashboard


---

# Author

**Lewis**

MERN Stack Web Application Assignment
