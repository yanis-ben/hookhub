import type { HookCategory } from "@/app/types/hook";

/**
 * Maps hook categories to their corresponding Tailwind color classes
 */
export const categoryColors: Record<HookCategory, {
  bg: string;
  text: string;
}> = {
  formatting: {
    bg: "bg-blue-100 dark:bg-blue-900",
    text: "text-blue-800 dark:text-blue-200"
  },
  testing: {
    bg: "bg-green-100 dark:bg-green-900",
    text: "text-green-800 dark:text-green-200"
  },
  git: {
    bg: "bg-purple-100 dark:bg-purple-900",
    text: "text-purple-800 dark:text-purple-200"
  },
  linting: {
    bg: "bg-yellow-100 dark:bg-yellow-900",
    text: "text-yellow-800 dark:text-yellow-200"
  },
  automation: {
    bg: "bg-orange-100 dark:bg-orange-900",
    text: "text-orange-800 dark:text-orange-200"
  },
  logging: {
    bg: "bg-gray-100 dark:bg-gray-800",
    text: "text-gray-800 dark:text-gray-200"
  },
  notification: {
    bg: "bg-red-100 dark:bg-red-900",
    text: "text-red-800 dark:text-red-200"
  },
  workflow: {
    bg: "bg-indigo-100 dark:bg-indigo-900",
    text: "text-indigo-800 dark:text-indigo-200"
  },
  other: {
    bg: "bg-slate-100 dark:bg-slate-800",
    text: "text-slate-800 dark:text-slate-200"
  }
};
