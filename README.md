# Attention

**This is fork of `jaredpalmer/react-production-starter`,
where I wanted to try to switch `markdalgleish/redial` package to my package `reasync`**

## React Production Starter

This is an example react application (master-detail feed) with isomorphic rendering, async react-router routes, async redux reducers, async data fetching, and code-splitting.

#### Under the Hood
 - Node.js
 - Express
 - React
 - Redux
 - React Router 2.0
 - Aphrodite for CSS
 - React Helmet for meta tags
 - Redial for data fetching
 - Webpack with multiple entry points and common chunks + React Hot Loader

#### Inspiration
https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes


#### Folder Structure:
```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /components/            # Global React components
│   ├── /middleware/            # Redux middleware (comes with callAPIMiddileware)
│   ├── /routes/                # React-router routes
│   |   ├── /PostList/          # PostList page
│   |   ├── /Edit/              # Edit page (stub)
│   |   ├── /Post/              # Post (async)
│   |   |   ├── /components/    # Post components (async)
│   |   |   ├── actions.js      # Post actions (async)
│   |   |   ├── reducer.js      # Post reducer (async)
│   |   |   ├── index.js        # Post Route (async)
│   |   ├── /root.js            # React-router root
│   ├── /client.js              # Client-side entry point
│   ├── /store.js               # Async store configuration
│   ├── /constants.js           # Global constants (Action types, Aphrodite layout/style vars)
│   ├── /createReducer.js       # Like rootReducer, but async
│   ├── /server/                # Server
│   |   ├── /api/               # API endpoints
│   |   |   ├── /posts.js       # Posts endpoint
│   |   |   ├── /post.js        # Single Post endpoint
│   |   ├── /fakeDB.js          # Database Stub
│   |   ├── /server.js          # Express app
│   |   ├── /index.js           # Server entry point (with babel-register)
├── /test/                      # Mocha tests (e.g. xxx_spec.js)
├── /coverage/                  # Code coverage data
│── .env                        # **Server-side configuration variables**
│── Procfile                    # Heroku startup commands
│── package.json                # The list of 3rd party libraries and utilities and NPM scripts
│── webpack.config.dev.js       # Webpack Development Configuration File
└── webpack.config.prod.js      # Webpack Production Configuration File
```

### Getting started
```bash
git clone https://github.com/jaredpalmer/react-production-starter MyApp
cd MyApp
npm install
npm start

# Open localhost:5000
```

More docs soon. PRs welcome!
