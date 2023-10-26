const solder = {
    name: 'MrPrice',
    health: 10,
    weapon: {
        name: 'Ak.Alfa',
        cartridges: 30,
    },
    supplies: 3,
    fire: function () {
        if (this.cartridges--) {
            return 'бах-бах'
        } else {
            this.cartridges === 0
            return 'Обойма пуста. Перезаредитесь'
        }
    },
    recharge: function () {
        if (this.cartridges === 30 && this.supplies--) {
            return 'перезарядка...'
        } else {
            this.supplies === 0
            return 'Не осталось припасов'
        }
    },
    injure: function () {
        if (this.health === 0) {
            return 'Ты проиграл'
        } else {
            this.health--
        }
    }
}




