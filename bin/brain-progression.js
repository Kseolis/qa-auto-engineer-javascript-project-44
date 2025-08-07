#!/usr/bin/env node
import { runGame } from './index.js'
import { generateProgressionRound } from '../src/games/progression-game.js'

runGame(generateProgressionRound)
