function jogar() {
  let personagem = ["", "", ""];
  let viloes = [];

  let forcapersonagem = 0;
  let forcaviloes = 0;

  for (let i = 0; i < 3; i++) {
    let escolhapersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
    personagem[i] = escolhapersonagem;

    forcapersonagem += Math.floor(Math.random() * 10) + 1;
  }

  alert("Os seus personagens " + personagem.join(", ") + " vão lutar com");
  console.log("Início vilões: " + viloes);

  let viloespossiveis = [
    "Malévola",
    "Cruella",
    "Scar",
    "Hades",
    "Yzma",
    "Ursula",
    "Capitão Gancho",
    "Jafar",
    "Lobo Mal",
    "Rainha Má"
  ];

  while (viloes.length < 3) {
    let indicealeatorio = Math.floor(Math.random() * viloespossiveis.length);
    let vilaoEscolhido = viloespossiveis[indicealeatorio];

    if (!viloes.includes(vilaoEscolhido)) {
      viloes.push(vilaoEscolhido);
 
      forcaviloes += Math.floor(Math.random() * 10) + 1;
    }
  }

  alert("Os vilões: " + viloes.join(", "));
  console.log("Força do seu time: " + forcapersonagem);
  console.log("Força dos vilões: " + forcaviloes);

  if (forcapersonagem > forcaviloes) {
    alert("Você GANHOU!! Com " + forcapersonagem + " pontos e os vilões com " + forcaviloes + " pontos! PARABÉNS!");
  } else 
    if (forcapersonagem < forcaviloes) {
    alert("Seu time PERDEU! Com " + forcaviloes + " pontos os vilões ganham! Seu time teve " + forcapersonagem + " pontos. Tente novamente.");
  } 
  else {
    alert("Vocês Empataram!");
  }
}
