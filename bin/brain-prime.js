#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generatePrimeRound, description } from '../src/games/prime-game.js'

runGame(generatePrimeRound, description)
