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
const wrongAnswerSound = document.getElementById("wrong-answer-sound");

// Enable audio on user interaction (click anywhere on the page)
document.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play().then(() => {
      backgroundMusic.pause(); // Pause immediately after enabling
      backgroundMusic.currentTime = 0; // Reset to start
    });
  }
});

// Display the first clue
clueText.textContent = clues[currentClueIndex].clue;

// Function to type out text letter by letter
function typeText(element, text, speed = 100) {
  let index = 0;
  element.innerHTML = ""; // Clear the element's content
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index); // Add the next character
      index++;
    } else {
      clearInterval(typingInterval); // Stop the interval when done
    }
  }, speed); // Adjust speed (in milliseconds) for typing effect
}

// Function to trigger confetti animation
function triggerConfetti() {
  confetti({
    particleCount: 150, // Number of confetti particles
    spread: 70, // How far the confetti spreads
    origin: { y: 0.6 }, // Start from the bottom of the screen
    colors: ['#ff9a9e', '#fad0c4', '#e74c3c', '#c0392b'], // Romantic colors
  });
}

// Handle submit button click
submitButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = clues[currentClueIndex].answer;

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
      backgroundMusic.play();

      // Trigger confetti animation
      triggerConfetti();
    }
  } else {
    // Play the wrong answer sound effect
    wrongAnswerSound.play();

    // Shake the input box
    answerInput.classList.add("shake");
    setTimeout(() => {
      answerInput.classList.remove("shake");
    }, 500);

    alert("يا غبييههههههه ركزيييييييييي");
  }
});
/*
const clues = [
  {
    clue: "Clue 1: أيه هوا إسم اكتر حد فالعالم بيختار فديوهات معفنه واحنا بناكل😂 ؟ (Hint: مش محتاجه حاجه يعني.)",
    answer: "تقي"
  },
  {
    clue: "Clue 2: 👸إسم واحده عينيها احلا من عينيكي  (Hint: ركزي )",
    answer: "مفيش"
  },
  {
    clue: "Clue 3: إسم افشخ  حد بيعرف يصور ف العالم🤬 ؟ (Hint: 😂حسبي الله ونعم الوكيل)",
    answer: "ميرنا"
  },
  {
    clue: "Final Clue:  ♥إسم الشخص المفضل في حياتك واجمد واحد في الحياه كدا كدا? (Hint: 😎ثواني بعدل لياقة)",
    answer: "انس"
  }
];
*/
