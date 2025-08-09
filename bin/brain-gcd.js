#!/usr/bin/env node
import { runGame } from '../src/engine.js'
import { generateGcdRound, RULES } from '../src/games/gcd-game.js'

runGame(generateGcdRound, RULES)
