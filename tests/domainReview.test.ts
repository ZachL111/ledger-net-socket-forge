function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 60, slack: 28, drag: 17, confidence: 60 };
equal(domainReviewScore(item), 157);
equal(domainReviewLane(item), "ship");
