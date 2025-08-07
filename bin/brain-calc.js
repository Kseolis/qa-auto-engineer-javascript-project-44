#!/usr/bin/env node
import { runGame } from '../index.js'
import { generateCalculationRound } from '../src/games/calc-game.js'

runGame(generateCalculationRound)
