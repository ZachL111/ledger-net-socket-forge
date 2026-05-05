import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 57,
    "capacity": 80,
    "latency": 21,
    "risk": 5,
    "weight": 9,
    "score": 120,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 98,
    "capacity": 72,
    "latency": 20,
    "risk": 20,
    "weight": 11,
    "score": 103,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 78,
    "capacity": 82,
    "latency": 13,
    "risk": 24,
    "weight": 8,
    "score": 58,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
