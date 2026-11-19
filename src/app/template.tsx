import { type ReactNode, ViewTransition } from "react";

/**
 * M9 page transition. Templates remount on every navigation, so the old page
 * runs its exit and the new page its enter animation (CSS class "page-fade"
 * in globals.css: 160ms fade out, 300ms fade + 12px rise in). The header is
 * anchored separately (viewTransitionName "site-header"). Browsers without the
 * View Transitions API, and reduced-motion users, get an instant swap.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-fade" exit="page-fade" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
