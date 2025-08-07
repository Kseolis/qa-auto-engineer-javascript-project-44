#!/usr/bin/env node
import { runGame } from './index.js'
import { generateGcdRound } from '../src/games/gcd-game.js'

runGame(generateGcdRound)
