/**
 * Available hook categories
 */
export type HookCategory =
  | "formatting"    // Code formatting (Prettier, Black, etc.)
  | "testing"       // Test execution automation
  | "git"          // Git operations and workflows
  | "linting"      // Code linting (ESLint, etc.)
  | "automation"   // General workflow automation
  | "logging"      // Logging and analytics
  | "notification" // Notification triggers
  | "workflow"     // Custom workflow steps
  | "other";       // Uncategorized

/**
 * Represents a single Claude Code hook
 */
export interface Hook {
  /** Unique identifier (UUID or slug) */
  id: string;

  /** Display name of the hook */
  name: string;

  /** Category classification */
  category: HookCategory;

  /** 2-3 sentence description of functionality */
  description: string;

  /** Full GitHub repository URL */
  githubUrl: string;
}
