#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generatePrimeRound, RULES } from '../src/games/prime-game.js'

runGame(generatePrimeRound, RULES)
