#!/usr/bin/env node
import { runGame } from './index.js'
import { generateEvenRound } from '../src/games/even-game.js'

runGame(generateEvenRound)
