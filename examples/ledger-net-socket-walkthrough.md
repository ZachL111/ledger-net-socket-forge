# Ledger Net Socket Forge Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 157 | ship |
| stress | retry pressure | 201 | ship |
| edge | route drift | 171 | ship |
| recovery | socket risk | 174 | ship |
| stale | packet span | 233 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `baseline` becomes less cautious without a clear reason, I would inspect the drag input first.
