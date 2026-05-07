const url = "https://openapi.programming-hero.com/api/levels/all"
const lessonBtnShow = ()=>{
  fetch(url)
  .then(res => res.json())
  .then(data => displayButton(data.data))
}

const displayButton=(buttons)=>{
    const lessonBtn = document.getElementById("lessonBtn")
    for(const button of buttons){
        const buttonCreate = document.createElement('button')
        buttonCreate.innerHTML = `
        <button
            class="border border-[#422AD5] text-[#422AD5] px-4 py-2 rounded hover:bg-[#422AD5] hover:text-white transition"
          >
            📘 Lesson- ${button.level_no}
          </button>
        `
        lessonBtn.appendChild(buttonCreate)
        
    }
    
}

lessonBtnShow()