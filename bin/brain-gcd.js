#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateGcdRound, description } from '../src/games/gcd-game.js'

runGame(generateGcdRound, description)
