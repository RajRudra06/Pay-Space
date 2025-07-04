import { PrismaClient } from "./src/generated/prisma";
import dotenv from "dotenv";
import fs from 'fs';  // Add this import

// Add the debugging code here
console.log('=== DEBUGGING ENV FILE LOCATION ===');
console.log('Current working directory:', process.cwd());
console.log('Files in current directory:', fs.readdirSync('.'));
console.log('Looking for .env in:', process.cwd() + '/.env');
console.log('.env exists in cwd:', fs.existsSync('.env'));
console.log('.env exists in packages/db:', fs.existsSync('./packages/db/.env'));

dotenv.config({ path: '../../.env' });

const url = process.env.DATABASE_URL;

const prisma = new PrismaClient({datasourceUrl: url});

export default prisma;

// # Turborepo Environment Variable Issue - Summary

// ## The Issue

// **Problem:** Your Prisma client couldn't find the `DATABASE_URL` environment variable, causing a "PrismaClientConstructorValidationError".

// **Root Cause:** Mismatched paths between where your app runs and where your `.env` file is located.

// ## What Was Happening

// ### Your Setup:
// - **Project Structure:** Turborepo with `.env` in `packages/db/.env`
// - **Running Command:** From project root (e.g., `turbo dev`)
// - **App Location:** `apps/docs`
// - **Prisma Client:** In `packages/db` but imported by `apps/docs`

// ### The Path Problem:
// ```
// /paytm/                           ← You run commands here
// ├── apps/docs/                    ← But your app runs here (working directory)
// └── packages/db/.env              ← Your .env is here
// ```

// When you called `dotenv.config()`, it looked in `apps/docs/.env` (not found) instead of `packages/db/.env`.

// ## How Turborepo Works

// ### Key Behaviors:
// 1. **Isolated Execution:** Each app/package runs in its own working directory
// 2. **Process Spawning:** Even when you run from root, each app gets its own process context
// 3. **Working Directory:** `apps/docs` becomes the current working directory for the docs app
// 4. **Environment Isolation:** Each package needs its own environment configuration

// ### Normal Turborepo Flow:
// ```bash
// # You run this from root:
// turbo dev

// # But internally, Turbo does this:
// cd apps/docs && npm run dev    # Working dir: apps/docs
// cd apps/web && npm run dev     # Working dir: apps/web
// ```

// ## The Solutions

// ### Option 1: Fix the Path (What you did)
// ```javascript
// // From apps/docs, navigate to packages/db/.env
// dotenv.config({ path: '../../packages/db/.env' });
// ```

// ### Option 2: Turborepo Best Practice (Recommended)
// 1. **Move `.env` to project root:**
//    ```
//    /paytm/.env  ← Here instead of packages/db/.env
//    ```

// 2. **Configure `turbo.json`:**
//    ```json
//    {
//      "pipeline": {
//        "dev": {
//          "env": ["DATABASE_URL"]
//        }
//      }
//    }
//    ```

// 3. **Simplify Prisma client:**
//    ```javascript
//    dotenv.config({ path: '../../.env' });  // Root .env
//    const prisma = new PrismaClient();      // Let Prisma handle it
//    ```

// ## Key Takeaways

// - **Current Working Directory ≠ File Location** in Turborepo
// - **Each app runs in isolation** with its own working directory
// - **Environment variables** should typically be managed at the root level
// - **Relative paths** must account for where the process actually runs, not where files are stored
// - **Turborepo's design** promotes sharing packages while isolating app execution contexts

// This is **normal Turborepo behavior** - it's designed this way to ensure clean separation between different apps and packages while allowing them to share common dependencies.