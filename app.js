let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let dom = [".com",".es"];

// Tenemos que crear todos los dominios posibles con la combinación de estos tres conjuntos de elementos

const addDomain = (pron,ad,nou) => {
    for(let a=0;a<dom.length;a++){
        console.log(pron+ad+nou+dom[a]);
    }
}

for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
        for(let k=0;k<noun.length;k++){
            
            //for(let w=0;w<dom.length;w++){
                addDomain(pronoun[i],adj[j],noun[k])
                //console.log(pronoun[i]+adj[j]+noun[k]+dom[w])
            //}
        }
    }
}
// Now we are going to try to solve it by functions

