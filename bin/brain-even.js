#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateEvenRound, RULES } from '../src/games/even-game.js'

runGame(generateEvenRound, RULES)
