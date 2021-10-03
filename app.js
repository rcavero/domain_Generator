let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon','hornet','petrus'];
let dom = [".com",".es",".net",".us"];

const addDomain = (pron,ad,nou) => {
    for(let a=0;a<dom.length;a++){
        if(nou.endsWith("com")&&dom[a]==".com"){
            let nou2 = nou.replace("com","");
            console.log(pron+ad+nou2+dom[a]);
        }else if(nou.endsWith("es")&&dom[a]==".es"){
            let nou2 = nou.replace("es","");
            console.log(pron+ad+nou2+dom[a]);
        }else if(nou.endsWith("net")&&dom[a]==".net"){
            let nou2 = nou.replace("net","");
            console.log(pron+ad+nou2+dom[a]);
        }else if(nou.endsWith("us")&&dom[a]==".us"){
            let nou2 = nou.replace("us","");
            console.log(pron+ad+nou2+dom[a]);
        }else{
            console.log(pron+ad+nou+dom[a]);
        }
    }
}

for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
        for(let k=0;k<noun.length;k++){
            addDomain(pronoun[i],adj[j],noun[k])
        }
    }
}

