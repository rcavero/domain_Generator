let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
// Tenemos que crear todos los dominios posibles con la combinación de estos tres conjuntos de elementos

for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
        for(let k=0;k<noun.length;k++){
            console.log(pronoun[i]+adj[j]+noun[k]+".com")
        }
    }
}