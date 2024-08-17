let res = document.getElementById('resault');
let det = document.getElementById('details');
let opt = ['rock', 'scissors', 'paper'];
let markuser = 0; 
let markcomputer = 0; 

function playgame(option) {
    let computerIndex = Math.floor(Math.random() * 3);
    let computerChoice = opt[computerIndex]; 

    if (option === 'rock' && computerChoice === 'scissors' || 
        option === 'paper' && computerChoice === 'rock' || 
        option === 'scissors' && computerChoice === 'paper') {
        markcomputer=markcomputer;
        markuser += 1; 
        det.innerHTML=`You win because the computer selected ${computerChoice} `;
        res.innerHTML = `You win! Your score: ${markuser}, Computer score: ${markcomputer}`;
    } else if (option === computerChoice) {
        det.innerHTML=`It's a tie because the computer selected ${computerChoice}`;
        res.innerHTML = `Tie! Your score: ${markuser}, Computer score: ${markcomputer}`;
    } else {
        markcomputer += 1; 
        det.innerHTML=`You lose because the computer selected ${computerChoice}`;
        res.innerHTML = `You lose! Your score: ${markuser}, Computer score: ${markcomputer}`;
    }
}
function reset(){
    markuser=0;
    markcomputer=0;
    det.innerHTML = "";
    res.innerHTML = `your score: ${markuser}, Computer score: ${markcomputer}`;

}