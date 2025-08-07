#!/usr/bin/env node
import { runGame } from './index.js'
import { generatePrimeRound } from '../src/games/prime-game.js'

runGame(generatePrimeRound)
