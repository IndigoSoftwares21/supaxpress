#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let targetDir = process.argv[2] || "supaxpress-api";
const templateDir = path.join(__dirname, "../template");

if (targetDir === ".") {
  targetDir = process.cwd();
} else {
  targetDir = path.join(process.cwd(), targetDir);
}

if (!fs.existsSync(templateDir)) {
  console.error(`Template directory ${templateDir} does not exist.`);
  process.exit(1);
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function createProject() {
  copyRecursiveSync(templateDir, targetDir);
  console.log(`Project created successfully in ${targetDir}!`);
  console.log("We are taking over, happy coding!");
  console.log("Don't forget to run 'npm install' to install the dependencies and create a .env file.");
  process.exit(0);
}

function validateTargetDir(targetDir) {
  try {
    fs.accessSync(targetDir, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

function handleExistingDirectory(targetDir) {
  rl.question(
    `Directory ${targetDir} already exists. Overwrite? (y/N): `,
    (answer) => {
      if (answer.toLowerCase() === "y") {
        fs.rmdirSync(targetDir, { recursive: true, force: true });
        createProject();
      } else {
        console.log("Operation cancelled.");
        process.exit(0);
      }
      rl.close();
    }
  );
}

if (!validateTargetDir(targetDir)) {
  console.error(`Invalid target directory: ${targetDir}`);
  process.exit(1);
}

if (fs.existsSync(targetDir) && targetDir !== process.cwd()) {
  handleExistingDirectory(targetDir);
} else if (fs.existsSync(targetDir) && targetDir === process.cwd()) {
  rl.question(
    `Current directory is not empty. Overwrite? (y/N): `,
    (answer) => {
      if (answer.toLowerCase() === "y") {
        fs.readdirSync(targetDir).forEach((file) => {
          const curPath = path.join(targetDir, file);
          if (fs.lstatSync(curPath).isDirectory()) {
            fs.rmdirSync(curPath, { recursive: true, force: true});
          } else {
            fs.unlinkSync(curPath);
          }
        });
        createProject();
      } else {
        console.log("Operation cancelled.");
        process.exit(0);
      }
      rl.close();
    }
  );
} else {
  createProject();
}
