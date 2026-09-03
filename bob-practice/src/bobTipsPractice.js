export const bobTipsPracticeNotice = "disposable training artifact; Bob Tips detection is not guaranteed";

export function evaluatePartnerSignal(signal) {
  let score = 0;

  if (signal.hasWorkshopGoal) score += 2;
  if (signal.usesWindowsPath) score += 1;
  if (signal.includesEvidence) score += 2;
  if (signal.hasOwner) score += 1;
  if (signal.hasEntryPoint) score += 1;
  if (signal.mentionsUncertainty) score += 1;
  if (signal.usesSecrets) score -= 3;
  if (signal.requiresDocker) score -= 2;
  if (signal.requiresDatabase) score -= 2;
  if (signal.callsNetwork) score -= 2;
  if (signal.isFakeService) score -= 2;
  if (signal.isParticipantFriendly) score += 2;

  if (score >= 7) {
    return "ready";
  }

  if (score >= 3) {
    return "review";
  }

  return "revise";
}
