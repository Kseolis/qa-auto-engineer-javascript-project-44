#!/usr/bin/env node
import { EvenGame } from '../gamesLogic/EvenGame.js'
import { runGame } from '../index.js'

runGame(new EvenGame())
