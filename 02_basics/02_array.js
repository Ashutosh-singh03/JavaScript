const marvel_heros=["thor","ironman","loki"]
const dc_heros=["aquaman","superman","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// const hero=marvel_heros.concat(dc_heros)
// console.log(hero)

const all_heros=[...marvel_heros,...dc_heros]//its spread operator 
// console.log(all_heros)

const array=[1,2,[4,5,6],[7,8,[9,0],3]]
const new_array=array.flat(Infinity)//it gives array in single format
// console.log(new_array)


console.log(Array.isArray("Hitesh"))//check if it is array or not
console.log(Array.from("Hitesh"))// convert it to the array

my_obj={
    name:"ashu",
    age:20,
    roll:192,
    marks:85
}
console.log(my_obj)
console.log(Array.from({
    name:"ashu",
    age:20,
    roll:192,
    marks:85
}))//intresting
