import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 60, slack: 28, drag: 17, confidence: 60 };
assert.equal(domainReviewScore(item), 157);
assert.equal(domainReviewLane(item), "ship");
