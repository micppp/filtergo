# Grabbing egg data

https://www.serebii.net/pokemongo/pokemon.shtml

```js
const eggs = [];

document.querySelectorAll(".pokemon-list > tbody > tr").forEach(p => {
	const obj = {
    name: p.querySelector("td:nth-of-type(3) > a").textContent,
    inEggs: p.querySelector("td:nth-of-type(6)").textContent.trim() 
  }
  
  eggs.push(obj)
})
```

# Grabbing shiny Pokémon

https://www.serebii.net/pokemongo/shiny.shtml

```js
document.querySelectorAll(".dextable > tbody > tr").map(p => p.querySelector("td:nth-of-type(3) > a").textContent)
```