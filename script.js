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
        FOR BETTER OR WORSE Yo, you found the treasure. Surprise—it’s me. Yeah, I know, I’m kind of a big deal. 🖤 Now, let’s get one thing straight: our fights? They’re not fights. They’re sparring sessions. You throw punches, I throw sarcasm, and somehow, we both come out stronger. But if you ever push me too far, I’ll wipe the floor with you—metaphorically, of course. (Okay, maybe a little literally if you keep leaving your shoes in the middle of the hallway.)

And let’s talk about you for a second. You’re a genius, but like, the kind of genius who forgets where they put their phone while holding it. You’re smart enough to run the world but still can’t figure out how to close a bag of chips properly. It’s adorable, really. Keep being you—just maybe don’t try to outsmart me. I’ve got a reputation to uphold. My Toto✨,
From the moment you stumbled into my life (probably tripping over your own feet, let’s be honest), I knew you were special. Like, “I should probably write this down in my diary” special. And here’s the deal: you’re never alone. Why? Because I’m here, and I’m basically a human Swiss Army knife—I’ve got a tool for every problem.  Fear? Doubt? Weakness? Not on my watch. I’ll burn it all down before I let anything touch you. life’s a battlefield, but I’m your weapon. When the world tries to break you, I’ll be the one handing you the hammer to smash it back. When you’re lost, I’ll be your compass—pointing you straight toward trouble, because let’s be real, that’s where the fun is. And when you’re winning? I’ll be right there, stealing the spotlight but making sure you shine brighter.

Now, let’s get one thing straight: I’m not the “safe choice.” I’m the “let’s ride a motorcycle off a cliff and see what happens” choice. I’m the guy your mom warned you about, the one who doesn’t follow rules, doesn’t apologize, and doesn’t back down. But for you? I’ll Try .
Forever your bad boy,
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
