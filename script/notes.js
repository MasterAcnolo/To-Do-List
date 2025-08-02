

function drop(){
    const input = document.getElementById("text-input") // La valeur
    const output = document.getElementById("output")
    console.log(input.value) // Pour print le contenu
    input.value =""; // pour clear après coup

    output.textContent=
    `
    <p> ${input.value} </p> <p id="cross"> X </p>
    `

    output.appendChild(output)

}

function reset(){
    const input = document.getElementById("text-input")
    input.value =""; // Soft Reset car remise à 0
}