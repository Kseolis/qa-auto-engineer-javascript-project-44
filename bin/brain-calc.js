#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateCalculationRound, RULES } from '../src/games/calc-game.js'

runGame(generateCalculationRound, RULES)
