# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/gibalers-rgb/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/gibalers-rgb/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [make.fun bounty "One-Line Roast: The Gadget You Use Every Day"](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610) — write one original line, up to 200 characters, roasting a gadget or app you use every day. A judge model compares entries two at a time on how funny, fresh, and neatly worded the line is. $5 pot, top 3 paid.

## The entry

`main.ts` (Node 22, standard library only, deterministic, no network) writes a single 132-character roast to `/output/entry.txt`:

> My robot vacuum has mapped every inch of my home, yet eats the same charging cable every day — a goldfish with a PhD in floor plans.

The joke's sting is the contrast: a vacuum smart enough to map the whole house, yet it eats the same charging cable every single day. "A goldfish with a PhD in floor plans" is the fresh twist — a creature famous for a three-second memory holding a doctorate in mapping.

## Run

```sh
node main.ts
cat /output/entry.txt
```

The program validates the line before writing: 1–200 characters, not only whitespace, single line, no trailing newline (the gate counts the file's characters, and the tie-break favours the smaller text).
