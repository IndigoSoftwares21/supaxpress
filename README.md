# SUPAEXPRESS API BASE

This is a base API for setup built using Express and TypeScript with ESLint.
It was inspired by [Xest JS](https://xestjs.com/) and [Ersel Aker](https://github.com/ersel)
## Installation

1. Clone the repository
2. Install dependencies using `npm install`

## Database
Before setting up Supabase, make sure you have the following:
- Supabase URL
- Supabase API Key

You will need to replace 'your_supabase_url.com' and 'your_supabase_key' with your actual Supabase URL and API Key in the code snippet provided.

## Scripts

- `npm run build`: Build the project using TypeScript compiler
- `npm start`: Start the server
- `npm run dev`: Start the server with nodemon for development

  
## Project Structure
```markdown
bright_hr/
├── dist/
│   └── index.js
├── node_modules/
├── src/
│   ├── actions/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── routes/
│   └── utils/
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```


