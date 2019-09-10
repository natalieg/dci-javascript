let animalList = [
    {"race": "a Dog", "color":"brown", "name": "Bruno"},
    {"race": "a Cat", "color":"black", "name": "Luna"},
    {"race": "a Bird", "color":"blue", "name": "Nat"},
    {"race": "an Iguana", "color":"green", "name": "Lucien"},
    {"race": "a Horse", "color":"beige", "name": "Lilly"},
    {"race": "a Buttefly", "color":"violet", "name": "Margarine"},
]

function animaInfo(arr){
    let text = "";
    arr.forEach(element => {
        text += `<p><b>${element.name}</b> is 
        <b>${element.race}</b> 
        and their color is <span style="font-weight:bold;color:${element.color}">
        ${element.color}</span>.</p>`;
    });
    return text;
}

export {animalList, animaInfo};