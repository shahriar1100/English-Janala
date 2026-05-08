const url = "https://openapi.programming-hero.com/api/levels/all"
const lessonBtnShow = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayButton(data.data))
}

const removeActive= ()=>{
  const bgRemove = document.querySelectorAll(".activeButton")
  bgRemove.forEach(btn=>btn.classList.remove("active"))
}


const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
          removeActive()
          const clickBtn = document.getElementById(`lesson-btn-${id}`)
          clickBtn.classList.add("active")
          displayLoadWord(data.data)
        })
}
const displayLoadWord = (words) => {
    const wordCardShow = document.getElementById("wordCardShow")
    wordCardShow.innerHTML = ""
    const emtyLessonText = document.getElementById("emtyLessonText")
    emtyLessonText.innerHTML = ""
    if (words.length == 0) {
        emtyLessonText.innerHTML = `
        <div class="max-w-6xl mx-auto">
            <div
              class="bg-[#f3f3f3] rounded-2xl py-14 px-6 text-center border border-gray-200"
            >
              <!-- Warning Icon -->
              <div class="flex justify-center mb-6">
                <div
                  class="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2L1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V9h2v4z"
                    />
                  </svg>
                </div>
              </div>

              <!-- Small Text -->
              <p class="text-gray-500 text-xs sm:text-sm mb-4">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি
              </p>

              <!-- Main Text -->
              <h2
                class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222] leading-relaxed"
              >
                নেক্সট Lesson এ যান
              </h2>
            </div>
          </div>
        `
    }
    const defultCardText = document.getElementById("defultCardText")
    defultCardText.innerHTML = ""
    words.forEach(word => {
        const wordCard = document.createElement("div")
        wordCard.innerHTML = `
        <div
                class="bg-gradient-to-br from-white via-[#fffdf7] to-[#f8f4e8] 
                border-2 border-[#d4af37] 
                rounded-2xl 
                p-5 sm:p-6 lg:p-8 
                min-h-[260px] 
                flex flex-col justify-between 
                shadow-lg hover:shadow-2xl 
                hover:-translate-y-1 
                transition-all duration-300"
              >
                <!-- Top Content -->
                <div class="text-center">
                  <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] mb-3">
                    ${word.word ? word.word : "শব্দ পাওয়া যায়নি" }
                  </h2>

                  <p class="text-xs sm:text-sm lg:text-base text-[#555] font-medium mb-5">
                    Meaning /Pronunciation
                  </p>

                  <h3 class="text-lg sm:text-2xl lg:text-3xl font-semibold text-[#444] leading-relaxed">
                    "${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি "} / ${word.pronunciation ? word.pronunciation : "প্রোনাউনসেশন পাওয়া যায়নি "}"
                  </h3>
                </div>

                <!-- Buttons -->
                <div class="flex items-center justify-between mt-10">
                  <!-- Info Button -->
                  <button
                  onclick="my_modal_5.showModal()"
                    class="w-10 h-10 sm:w-12 sm:h-12 
                    rounded-xl 
                    bg-[#eef5ff] 
                    hover:bg-[#dbeafe] 
                    shadow-md 
                    hover:scale-110 
                    transition-all duration-300 
                    flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 sm:w-5 sm:h-5 text-[#374151]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 6zm1.5 12h-3v-1.5h1V11h-1V9.5h2.5V16h.5V18z"
                      />
                    </svg>
                  </button>

                  <!-- Volume Button -->
                  <button
                    class="w-10 h-10 sm:w-12 sm:h-12 
                    rounded-xl 
                    bg-[#eef5ff] 
                    hover:bg-[#dbeafe] 
                    shadow-md 
                    hover:scale-110 
                    transition-all duration-300 
                    flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 sm:w-5 sm:h-5 text-[#374151]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 00-2.5-4.03v8.06A4.5 4.5 0 0016.5 12zm0-9v2.06a9 9 0 010 17.88V21a7 7 0 000-14z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
        `
        wordCardShow.appendChild(wordCard)
    })
}

const displayButton = (buttons) => {
    const lessonBtn = document.getElementById("lessonBtn")
    lessonBtn.innerHTML = ""
    for (const button of buttons) {
        const buttonCreate = document.createElement('div')
        buttonCreate.innerHTML = `
        <button 
        id="lesson-btn-${button.level_no}" 
        onclick="loadLevelWord(${button.level_no})"
        class="border activeButton border-[#422AD5] text-[#422AD5] px-4 py-2 rounded hover:bg-[#422AD5] hover:text-white transition"
          >
            📘 Lesson- ${button.level_no}
          </button>
        `
        lessonBtn.appendChild(buttonCreate)

    }

}

lessonBtnShow()















// const url = "https://openapi.programming-hero.com/api/levels/all";

// // ===============================
// // Load Lesson Buttons
// // ===============================
// const lessonBtnShow = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayButton(data.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // ===============================
// // Load Words By Lesson
// // ===============================
// const loadLevelWord = (id) => {
//   const url = `https://openapi.programming-hero.com/api/level/${id}`;

//   // remove active style from all buttons
//   document.querySelectorAll(".lesson-btn").forEach((btn) => {
//     btn.classList.remove("bg-violet-700", "text-white");

//     btn.classList.add("text-violet-700");
//   });

//   // active clicked button
//   const activeBtn = document.getElementById(`lesson-btn-${id}`);

//   activeBtn.classList.add("bg-violet-700", "text-white");

//   activeBtn.classList.remove("text-violet-700");

//   // fetch words
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayLoadWord(data.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // ===============================
// // Display Words
// // ===============================
// const displayLoadWord = (words) => {
//   const wordCardShow = document.getElementById("wordCardShow");

//   const emtyLessonText = document.getElementById("emtyLessonText");

//   const defultCardText = document.getElementById("defultCardText");

//   // clear old content
//   wordCardShow.innerHTML = "";
//   emtyLessonText.innerHTML = "";
//   defultCardText.innerHTML = "";

//   // empty lesson
//   if (words.length === 0) {
//     emtyLessonText.innerHTML = `
//       <div class="max-w-6xl mx-auto">
//         <div
//           class="bg-gray-100 rounded-2xl py-14 px-6 text-center border border-gray-200"
//         >

//           <div class="flex justify-center mb-6">
//             <div
//               class="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center shadow-md"
//             >
//               ⚠️
//             </div>
//           </div>

//           <p class="text-gray-500 text-sm mb-4">
//             এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি
//           </p>

//           <h2 class="text-3xl font-bold text-gray-800">
//             নেক্সট Lesson এ যান
//           </h2>

//         </div>
//       </div>
//     `;

//     return;
//   }

//   // display cards
//   words.forEach((word) => {
//     const wordCard = document.createElement("div");

//     wordCard.innerHTML = `
//       <div
//         class="bg-white border rounded-2xl p-6 min-h-[260px]
//         flex flex-col justify-between shadow-md hover:shadow-xl transition"
//       >

//         <!-- Top Content -->
//         <div class="text-center">

//           <h2 class="text-3xl font-bold text-black mb-3">
//             ${word.word ? word.word : "শব্দ পাওয়া যায়নি"}
//           </h2>

//           <p class="text-sm text-gray-500 mb-5">
//             Meaning / Pronunciation
//           </p>

//           <h3 class="text-2xl font-semibold text-gray-700 leading-relaxed">
//             "${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} /
//             ${word.pronunciation ? word.pronunciation : "প্রোনাউনসেশন পাওয়া যায়নি"}"
//           </h3>

//         </div>

//         <!-- Bottom Buttons -->
//         <div class="flex items-center justify-between mt-10">

//           <!-- Info -->
//           <button
//             class="w-12 h-12 rounded-xl bg-blue-100 hover:bg-blue-200
//             flex items-center justify-center transition"
//           >
//             ℹ️
//           </button>

//           <!-- Volume -->
//           <button
//             class="w-12 h-12 rounded-xl bg-blue-100 hover:bg-blue-200
//             flex items-center justify-center transition"
//           >
//             🔊
//           </button>

//         </div>

//       </div>
//     `;

//     wordCardShow.appendChild(wordCard);
//   });
// };

// // ===============================
// // Display Lesson Buttons
// // ===============================
// const displayButton = (buttons) => {
//   const lessonBtn = document.getElementById("lessonBtn");

//   lessonBtn.innerHTML = "";

//   buttons.forEach((button) => {
//     const buttonCreate = document.createElement("button");

//     buttonCreate.id = `lesson-btn-${button.level_no}`;

//     buttonCreate.className =
//       "lesson-btn border border-violet-700 text-violet-700 px-4 py-2 rounded hover:bg-violet-700 hover:text-white transition";

//     buttonCreate.innerText = `📘 Lesson - ${button.level_no}`;

//     buttonCreate.addEventListener("click", () => {
//       loadLevelWord(button.level_no);
//     });

//     lessonBtn.appendChild(buttonCreate);
//   });
// };

// // ===============================
// // Initial Call
// // ===============================
// lessonBtnShow();