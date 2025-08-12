#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateProgressionRound, description } from '../src/games/progression-game.js'

runGame(generateProgressionRound, description)
