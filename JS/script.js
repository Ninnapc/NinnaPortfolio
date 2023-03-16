/* ============================ typing animation ========================*/
var typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})
/* ============================ aside ========================*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
               removeBackSection();
               for(let j=0; j<totalNavList; j++)
               {
                   if(navList[j].querySelector("a").classList.contains("active"))
                   {
                      addBackSection(j);
                      // allSection[j].classList.add("back-section");
                   }
                   navList[j].querySelector("a").classList.remove("active");
               }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionToggleBtn();
            }
        })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }
    
      function updateNav(element)
      {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
               navList[i].querySelector("a").classList.add("active"); 
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      })
      const navToggleBtn = document.querySelector(".nav-toggle"),
           aside = document.querySelector(".aside");
           navToggleBtn.addEventListener("click", () => 
           {
            asideSectionToggleBtn();
           })
           function asideSectionToggleBtn()
           {
                aside.classList.toggle("open");
                navToggleBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
           }

/* ======================== form action ========================*/
const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event)
{
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        alert('gracias por contactarme, te respondere pronto')
    }
}
  