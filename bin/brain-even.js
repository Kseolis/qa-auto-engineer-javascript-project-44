#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateEvenRound, description } from '../src/games/even-game.js'

runGame(generateEvenRound, description)
