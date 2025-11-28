const cityMap = new Map();
cityMap.set('London', 9 );
cityMap.set('New York', 21);
cityMap.set('Paris', 2);
console.log(cityMap.get('New York'));

cityMap.delete('Paris');

progMap = new Map()
    .set('JS', 'JavaScript')
    .set('TS', 'TypeScript')
    .set('HTML', 'HyperText');
console.log(progMap);

const key = [1,2];

const mapKey = new Map ()
    .set(key, 2);
console.log(mapKey);
mapKey.set([1,2], "value");
console.log(mapKey.get([1,2]));
console.log((mapKey.has(key)));