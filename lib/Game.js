const inquirer = require("inquirer");
const Enemy = require('./Enemy');
const Player = require("./Player");

function Game () {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {

    // pushing enemies to the enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    // setting initial enemy
    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destructure name from the name prompt
        .then(({ name }) => {
            this.player = new Player(name);

            //starting a battle
            this.startNewBattle()
        });
};

module.exports = Game