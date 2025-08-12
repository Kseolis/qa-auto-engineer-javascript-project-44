#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateCalculationRound, description } from '../src/games/calc-game.js'

runGame(generateCalculationRound, description)
