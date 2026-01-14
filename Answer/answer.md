# Understanding Project Management in NodeJS

---

## a. Package Managers

### What is a package manager?
A package manager is a tool that helps developers install, update, and manage external libraries (packages) needed for a project.

---

### Why do we need package managers in backend development?
Package managers are needed to:
- Easily install required libraries
- Manage project dependencies
- Maintain correct versions of packages
- Save development time and effort

---

### Problems faced if package managers are not used
- Manual installation of libraries
- Version conflicts between dependencies
- Difficult collaboration in teams
- Increased chances of errors

---

## b. NPM (Node Package Manager)

### What is NPM?
NPM is the default package manager for Node.js used to manage JavaScript packages and dependencies.

---

### Why is NPM important for Node.js applications?
NPM is important because it:
- Manages project dependencies
- Maintains library versions
- Provides access to thousands of reusable packages
- Simplifies project setup

---

### How NPM helps in managing dependencies
NPM:
- Installs required packages
- Stores dependency details in `package.json`
- Ensures consistent versions using `package-lock.json`

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?
The command used is:npm init

---

### Explain what `npm init` and `npm init -y` do
- `npm init`  
  Initializes a project by asking the user for project details.

- `npm init -y`  
  Initializes a project with default values without asking questions.

Both commands create a `package.json` file.

---

## d. Files and Folders Created After Project Initialization

### package.json
- Contains project information
- Lists dependencies and scripts
- Helps manage and run the project

---

### node_modules
- Stores all installed dependencies
- Automatically created by NPM
- Can be regenerated using `npm install`

---

### package-lock.json
- Locks exact versions of dependencies
- Ensures consistency across different systems
- Improves application stability

---

## GitHub Best Practices

### Files/Folders that should NOT be pushed to GitHub
- `node_modules/`  
  Reason: Large in size and can be recreated using `npm install`

---

### Files that MUST be committed to GitHub
- `package.json`
- `package-lock.json`

Reason: These files define dependencies and help others run the project correctly.
