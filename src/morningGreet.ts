const monarchCats = ['Garfield', 'Whiskers', 'Grumpy'];
export const morningGreet = (name: string): string => {
    if(monarchCats.includes(name)) {
        return `Good morning, your majesty ${name}!`;
    }
   return `Good morning, ${name}!`
};
