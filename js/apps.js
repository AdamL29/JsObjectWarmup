let myCity = {
    name : `St. Louis`,
    population : 300000,
    iscapital : true
}

if (myCity[`iscapital`]) {
    console.log(`City name: ${myCity[`name`]}, Population:  ${myCity.name}`);
} else {
    console.log(`Not important enough`);
}

//Puting an object inside the key value array
myCity.communities = [
                            {
                                name : `Bowness`,
                                population: 100
                            }
                    ];

console.log(myCity.communities);

//Push further into key-values
myCity.communities.push({
    name : `Downtown`,
    population: 1000
});
myCity.communities.push({
    name : `McKenzie Towne`,
    population: 50
});
myCity.communities.push(`Forest Lawn`);
myCity.communities.push(`Fish Creek`);
myCity.communities.push('Varsity');

let i = 0;
console.log(`Large communities:`);
while (i < myCity.communities.length){
    if (myCity.communities[i].population >= 100) {
        console.log(myCity.communities[i].name);        
    }
    // console.log(myCity.communities[i]);
    i++;
}

