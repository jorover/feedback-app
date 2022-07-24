
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const generateId = () => {
    let id = ''
    for (let index = 1; index < num.length; index++) {
        id += Math.floor(Math.random() * index) 
    }

    return parseFloat(id);
    
}
