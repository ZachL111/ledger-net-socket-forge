# ledger-net-socket-forge

`ledger-net-socket-forge` explores networking with a small TypeScript codebase and local fixtures. The technical goal is to design a TypeScript verification harness for socket systems, covering simulation kernel, seeded input scenarios, and failure-oriented tests.

## Reason For The Project

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Ledger Net Socket Forge Review Notes

The first comparison I would make is `packet span` against `packet span` because it shows where the rule is most opinionated.

## What It Does

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/ledger-net-socket-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The implementation keeps the scoring rule plain: reward signal and confidence, preserve slack, penalize drag, then classify the result into a review lane.

The TypeScript implementation avoids hidden state so fixture changes are easy to reason about.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The same command runs the local verification path. The highest-scoring domain case is `stale` at 233, which lands in `ship`. The most cautious case is `baseline` at 157, which lands in `ship`.

## Boundaries

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
