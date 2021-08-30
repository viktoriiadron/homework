const allThings = "кусок дерева, Ненужная скромность, Очки Элвиса,  ненужные сомнения, Цветное стекло, Амулет от артрита, Лошадиные скачки,  Книга, Ненужное мороженое, Ваза, ненужный желудь, бейсбольная карточка";
const needfulThings = allThings

function reduceThings(string) {
    return string
        .split(',')
        .filter(elem => !(elem.toLowerCase().trim().startsWith('ненужн')))
        .toString()
}

let result = reduceThings(needfulThings);
console.log(result);

console.log(needfulThings);