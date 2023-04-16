#!/usr/bin/env node

import { rules, generateRound } from '../src/games/prime.js';
import { startGame } from '../src/index.js';

startGame(rules, generateRound);
