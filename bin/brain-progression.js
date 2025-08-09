#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateProgressionRound, RULES } from '../src/games/progression-game.js'

runGame(generateProgressionRound, RULES)
