/*Сделать класс врага у которого есть здоровье, и метод получения урона*/
class Enemy{
    constructor(health){
        this.health = health;
    }
    takeDamage(amount){
        this.health -= amount;
        if(this.health < 0){
            this.health = 0;
        }
        console.log(`Enemy health ${this.health}`);
    }
}
/*Сделать класс светого мяча, который имеет урон(сила) и метод нанесения урона*/
class LightSaber{
    constructor(dmg){
        this.dmg = dmg;
    }
    attack(enemy){
        enemy.takeDamage(this.dmg);
    }
}
/*Сделать класс рыцаря, который в 60% случаев не получает*/
class Knight extends Enemy {
    constructor(health) {
        super(health);

    }
    takeDamage(amount){
        const chance = Math.random();
        if (chance < 0.6){
            console.log("Knight blocks the incoming damage")
            return;
        }
        this.health -= amount;
        if(this.health < 0){
            this.health = 0;
        }
        console.log(`Knight health ${this.health}`);
    }
}

const enemy = new Enemy(100);
const knight = new Knight(100);
const saber = new LightSaber(20);

console.log("Враг атакует!");
saber.attack(enemy);

console.log("Рыцарь атакует!");
saber.attack(knight);