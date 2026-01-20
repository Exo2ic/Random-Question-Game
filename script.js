const questions = {
  group1: [
    "شو الموقف اللي لين الحين إذا تذكرته تضحك؟",
    "لو سافرت بدون فلوس، وين تروح؟",
    "مين أكثر شخص يفهمك بدون كلام؟"
  ],
  group2: [
    "هل الصراحة دايمًا أفضل من المجاملة؟",
    "شو أكثر قرار ندمت عليه؟",
    "هل الناس تتغير ولا تتكشف؟"
  ],
  group3: [
    "متى حسيت إنك فخور بنفسك؟",
    "شو الشي اللي تخاف تخسره؟",
    "هل أنت راضي عن حياتك الحالية؟"
  ]
};

let currentGroup = [];

function selectGroup(group) {
  currentGroup = [...questions[group]];
  document.getElementById("groups").style.display = "none";
  document.getElementById("card").classList.remove("hidden");

  document.body.className = "";
  document.getElementById("card").className = "";

  if (group === "group1") {
    document.body.classList.add("bg-fun");
    card.classList.add("card-fun");
  }
  if (group === "group2") {
    document.body.classList.add("bg-deep");
    card.classList.add("card-deep");
  }
  if (group === "group3") {
    document.body.classList.add("bg-self");
    card.classList.add("card-self");
  }

  nextQuestion();
}

function nextQuestion() {
  if (currentGroup.length === 0) {
    document.getElementById("question").innerText = "خلصت الأسئلة ✨";
    return;
  }

  const index = Math.floor(Math.random() * currentGroup.length);
  document.getElementById("question").innerText =
    currentGroup.splice(index, 1)[0];
}

function resetGame() {
  document.getElementById("groups").style.display = "block";
  document.getElementById("card").classList.add("hidden");
  document.body.className = "";
}
