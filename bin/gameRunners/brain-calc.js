#!/usr/bin/env node
import { runGame } from '../index.js'
import { calcGameLogic } from '../src/games/calc-game.js'

runGame(calcGameLogic)
