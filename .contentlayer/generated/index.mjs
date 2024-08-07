// NOTE This file is auto-generated by Contentlayer

export { isType } from "contentlayer/client";

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import { allPages } from "./Page/_index.mjs";
import { allProjects } from "./Project/_index.mjs";

export { allPages, allProjects };

export const allDocuments = [...allPages, ...allProjects];
