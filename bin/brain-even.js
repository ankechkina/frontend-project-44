#!/usr/bin/env node
import { rules, generateRound } from '../src/games/isEven.js';
import { startGame } from '../src/index.js';

startGame(rules, generateRound);
