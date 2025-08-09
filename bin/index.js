#!/usr/bin/env node
import { printWelcome, askUserName, printHello } from '../src/greeting.js'

printWelcome()
const name = askUserName()
printHello(name)
