const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find((g) => g.id === +id);
    },
    addGood: function (good) {
        const stored = this.findGoodById(good.id);
        if (!stored) {
            this.goods.push(good);
        }
    },
    getWeightKg: function () {
        return this.goods.reduce(
            (acc, g) => (g?.weight?.kg ? acc + g?.weight?.kg : acc),
            0
        );
    },
};

/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000,
    },
    brand: 'Ford',
};

const chair = {
    id: 2,
    weight: {
        kg: 2,
    },
};

const paper = {
    id: 3,
    color: 'red',
};

const anotherPaper = {
    id: 3,
    color: 'white',
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(anotherPaper);

console.log(warehouse.goods);

console.log(warehouse.getWeightKg());
