// Clues and answers
const clues = [
  {
    clue: "Clue 1: أيه هيا الحاجة الي من غيرها مكالمتنا متكملش وعنان بتموت فيها😂 ؟ (Hint: سووووووووووووف)",
    answer: "شاي بنعناع"
  },
  {
    clue: "Clue 2: 👸  اسم الحيوان المفضل بالنسبالي  (Hint: غيرك يعني )",
    answer: "الغزلان"
  },
  {
    clue: "Clue 3: اكتر واحد ف الدنيا بيسبنا براحتنا واحنا بنتكلم ومش ابضن اهل الارض اطلاقا🤬 ؟ (Hint: 😂هعلقه علي باب القاعه كمان كام شهر)",
    answer: "مراد"
  },
  {
    clue: "Clue 4: مبتغلطش مبتتقمصش بتذاكر 24 ساعه بتحب المذاكرة اد عينيها وبتكره الخروج والافراح ودايما شايفه انس غلطان وهوا السبب ف حرب اكتوبر والعدوان الثلاثي وان المايه متكونه من ذره هيدروجين واتنين اكسجين  (Hint: 😂مفيش لا)",
    answer: "تقي"
  },
  {
    clue: "Clue 5: بحبها اوي ونفسي تقضي ايامك كلها معاها وتبقي البيست بتاعك  (Hint: راسك هتتفصل عن جسمك)",
    answer: "روفيدا"
  },
  {
    clue: "Final Clue:  ♥اشيك اخف دم اجمد افجر واحد مؤدب محترم مش محترم بعدي صافي بيصلي ومبيصليش ميعرفش بنات ولويال واد اي حاجه ف الدنيا وحياتك من غيره واقفه  (Hint:King)",
    answer: "عمي انس"
  }
];

let currentClueIndex = 0;

// DOM elements
const clueText = document.getElementById("clue-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const backgroundMusic = document.getElementById("background-music");

// Array of wrong answer audio file paths
const wrongAnswerSounds = [
  "1.mp3",
  "2.mp3",
  "3.mp3",
  "4.m4a",
  "5.mp3",
  "6.mp3",
  "7.mp3",
  "8.mp3",
  "9.mp3"
];

// Function to play a random wrong answer sound
function playRandomWrongAnswerSound() {
  const randomIndex = Math.floor(Math.random() * wrongAnswerSounds.length);
  const randomAudioFile = wrongAnswerSounds[randomIndex];
  const audio = new Audio(randomAudioFile);
  audio.play().catch((error) => {
    console.error("Failed to play audio:", error);
  });
}

// Function to type out text letter by letter
function typeText(element, text, speed = 100) {
  let index = 0;
  element.innerHTML = "";
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Function to trigger confetti animation
function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff9a9e', '#fad0c4', '#e74c3c', '#c0392b'],
  });
}

// Handle submit button click
submitButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = clues[currentClueIndex].answer.toLowerCase();

  if (!userAnswer) {
    alert("Please enter an answer!");
    return;
  }

  if (userAnswer === correctAnswer) {
    currentClueIndex++;

    if (currentClueIndex < clues.length) {
      // Show the next clue
      clueText.textContent = clues[currentClueIndex].clue;
      answerInput.value = "";
    } else {
      // All clues solved, show the message and play the song
      document.getElementById("clue-container").classList.add("hidden");
      message.classList.remove("hidden");

      // Define the final message
      const finalMessage = `
        Congratulations you found the treasure and the treasure is Me  !
              خناقاتنا مفيدة ع المدي البعيد هيا لو اتكررت تاني همسح بيكي الارض اه انتي متخلفه زي منتي مش هنسي اكيد اقول كدا FOR BETTER OR WORSE

        يا دين امي علي العبقريه بجد انا مش مصدق انك عرفتي تجاوبي طول عمري بقول انك اذكي واحده ف الدنيا دي وعبقريه وبجد بجد صداااع من كتر النبغه الي انتي فيها لو ذكيه كدا ف الدراسه هتبقي الاولي ع الجمهورية ربنا يحميكي لمصر ويديم هبله وعبطك وتفضلي دايما متخلفه واهزق فيكي كدا كتير يارب
        My Toto✨,
          From the moment you came into my life, I knew I had found someone truly special. I need you to know, with every beat of my heart, that you are never alone. With my existence, you have nothing to fear—I will always be here to protect, support, and stand by your side.
          No matter what life throws our way, I promise to be your rock, your shield, and your safe place. When the world feels overwhelming, lean on me. When doubts creep in, let me remind you of your strength and worth. When you feel lost, I will hold your hand and guide you back to the warmth of love and comfort.
          You don’t have to carry your burdens alone, Your happiness, your dreams, and your peace mean everything to me. Through every storm, I will be your shelter. Through every challenge, I will be your strength. Through every joy, I will be the one celebrating with you.
          I know that You’ve always known I’m not the safest choice—the bad boy, the one who doesn’t play by the rules, but know that no matter my past , pesona, You will be safe, now and always.
          Forever Protector,
          [𝓪𝓷𝓪𝓼]
      `;

      // Clear the message container
      message.innerHTML = "";

      // Type out the final message
      typeText(message, finalMessage);

      // Play the background music
      backgroundMusic.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });

      // Trigger confetti animation
      if (typeof confetti === "function") {
        triggerConfetti();
      } else {
        console.warn("Confetti library not loaded.");
      }
    }
  } else {
    // Play a random wrong answer sound
    playRandomWrongAnswerSound();

    // Shake the input box
    answerInput.classList.add("shake");
    setTimeout(() => {
      answerInput.classList.remove("shake");
    }, 500);

    alert("يا غبييههههههه ركزيييييييييي");
  }
});
