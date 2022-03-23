let funWords = []
let userArray = [];
function funnyScript(){
//let funnyWords = ['lollygag','mittens','bamboozled','hullaballoo','bumfuzzle']
for ( let i=0; i<5; i++ ){
userArray.push(prompt("Enter a word to see if it's a funny word, you'll get 5 tries. Good Luck!"))
if(userArray.includes('lollygag')||userArray.includes('mittens')||userArray.includes('bamboozled')
  ||userArray.includes('hullaballoo')||userArray.includes('bumfuzzle') ){
    alert('Thats Hilarious!')
    funWords.push(prompt)
    userArray.pop()   
}else{
    alert("Hmm...thats pretty good! But that's not the funny word I was thinking of...")
  }
 }
}
funnyScript();
alert(`You got ${funWords.length}/5 funny words!`);
