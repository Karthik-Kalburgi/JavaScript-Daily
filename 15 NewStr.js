const addNew = (str) => (
    str.indexOf('New!') === 0 ? str : `New!! ${str}`
);

console.log(addNew(` secound New! Offers`));
