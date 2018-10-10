new Vue({
    el: '#app', // https://vuejs.org/v2/api/#el
    template: '', // https://vuejs.org/v2/api/#template
    data: {
        gameOver: true,
        player: {
            health: 100,
            wins: 0,
        },
        monster: {
            health: 100,
            wins: 0,
        },
        logs: [],
        turns: [],
    }, // https://vuejs.org/v2/api/#data

    // for timestamps: 
    // see https://forum.vuejs.org/t/how-to-format-date-for-display/3586/24

    computed: { // https://vuejs.org/v2/api/#computed
        attackValue: {
            get() {
                return 25;
            },
            set(value) {} // https://vuejs.org/v2/guide/computed.html#Computed-Setter
        }
    },

    // https://vuejs.org/v2/api/#methods
    methods: {
        startGame: function (event) {
            this.gameOver = false;
            this.player.health = 100;
            this.monster.health = 100;
            this.logs = [];
            this.logs.unshift('new game started');
            this.turns = [];
        },
        giveUp: function (event) {
            this.gameOver = true;
            this.player.health = 0;
            this.monster.wins++;
            this.logs.unshift('player gave up');
            this.confirmMessage('Why did You give up? New game? ');
        },
        attack: function (event) {
            if (this.playerAttack(3, 10)) {
                return;
            };
            if (this.monsterAttack(5, 12)) {
                return;
            };
        },
        specialAttack: function (event) {
            if (this.playerAttack(10, 20)) {
                return;
            };
            if (this.monsterAttack(5, 12)) {
                return;
            };
        },
        healMe: function (event) {
            healValue = this.calculateRandom(5, 10);
            this.player.health += healValue;
            this.logs.unshift('player was healed by ' + healValue);
            if (this.player.health > 100) {
                this.player.health = 100;
                this.logs.unshift('health limited to 100.');
            }
            this.turns.unshift({
                isPlayer: true,
                timestamp: Date(),
                damage: damage,
                text: 'player attacked with ',
            });

        },
        calculateRandom: function (min, max) {
            return (Math.max(Math.floor(Math.random() * max) + 1, min));
        },

        monsterAttack: function (min, max) {
            var damage = this.calculateRandom(min, max);
            this.player.health -= damage;
            this.logs.unshift('monster attacked with ' + damage);
            this.turns.unshift({
                isPlayer: false,
                timestamp: Date(),
                damage: damage,
                text: 'monster attacked with ',
            });
            if (this.checkWin()) {
                return (true);
            };
            return (false);
        },
        playerAttack: function (min, max) {
            var damage = this.calculateRandom(min, max);
            this.monster.health -= damage;
            this.logs.unshift('player attacked with ' + damage);
            this.turns.unshift({
                isPlayer: true,
                timestamp: Date(),
                damage: damage,
                text: 'player attacked with ',
            });
            if (this.checkWin()) {
                return (true);
            };
            return (false);
        },
        checkWin: function () {
            if (this.monster.health <= 0) {
                this.monster.health = 0;
                this.player.wins++;
                this.logs.unshift('player won: ' + this.player.health + ':' + this.monster.health);
                this.confirmMessage('You won the game! New game? ');
                return true;
            }
            if (this.player.health <= 0) {
                this.player.health = 0;
                this.monster.wins++;
                this.logs.unshift('monster won: ' + this.player.health + ':' + this.monster.health);
                this.confirmMessage('You lost the game! New game? ');
                return true;
            }
            return false;
        },
        confirmMessage: function (message) {
            if (confirm(message)) {
                this.startGame();
            } else {
                this.gameOver = true;
            }
        },
    }
});
