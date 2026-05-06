function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
