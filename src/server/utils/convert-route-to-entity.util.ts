const mapping: Record<string, string> = {
  companies: 'company',
  feedbacks: 'feedback',
  manuals: 'manual',
  'problem-fixes': 'problem_fix',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
