

function drop(){
    const input = document.getElementById("text-input")
    console.log(input.value) // Pour print le contenu
    input.value =""; // pour clear après coup

}

function reset(){
    const input = document.getElementById("text-input")
    input.value =""; // Soft Reset car remise à 0
}