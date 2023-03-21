const
    allServicesItem = document.querySelectorAll(".service-item"),
    totalItems = allServicesItem.length,
    modal_container = document.querySelector('#modalservice-content');
contentService = [
    {
        title: "",
        content: `<b>UI(User Interface Design), Concerned with the aesthetics of the website or app.<br> Color palettes, fontss, images, forms, menus, hover-triggered animations, buttons and more. 
        <br> Designs focus in trends and research, in order to create an interface and interactions that users are confortable and confident with using.
        <br><br>UX(User Experience) Concerned about how the users feel about the website/app. UX depend on research and testing in order what their audience needs. Valuating the pain points to design a solution around it.
        The UX main goal is to create an app/website that the user finds to be usable, useful and valuable.<br></b>`
    },
    {
        title: "",
        content: `<b>The visual designer are based to ensuring that the interface is both aesthetically pleasing and easy to use; helped by mocukps and models to test throught the development process.
        <br>Knowledge in HTML, CSS, Responsive and interaction design, Conversion Rate Optimization, User Journey mapping, wireframing and prototyping, Branding, color theory, and typography, designs tools and software. </b>`
    },
    {
        title: "",
        content: `<b>Gathering, benchmarking, recordering and analysis of the qualitative and quantitative data about company services.</b>`
    },
    {
        title: "",
        content: `<b>Create visual concepts to communicate information. Creation of posters, packaging, logos, branding, typhography and marketing materials.</b>`
    },
    {
        title: "",
        content: `<b>Web developer is in charge to build and maintain the core structure of a website. Coding and configuring from client server</b>`
    },
    {
        title: "",
        content: `<b>Planning, development and creation of visual content for social media platforms, that help to create fidelity with the target audence.<br><img src="./static/imagenes/redesdiseño.png" width="250px" height="200px" alt="" /></b>`
    }
];
document.querySelector('.btn-close').addEventListener('click', () => {
     closeModal();
});
document.querySelector('.modal-overlay').addEventListener('click', () => {
     closeModal();
});
document.addEventListener('keydown', (e) => {
    const modal=document.querySelector('.modal-service');
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
for (let i = 0; i < totalItems; i++) {
    allServicesItem[i].addEventListener("click", () => {
        serviceModal(i);
    })
}
function serviceModal(i) {
    const title = allServicesItem[i].querySelector('h4');
    contentService[i]['title'] = title.textContent;
    modal_container.innerHTML = `
        <h4>${contentService[i]['title']}</h4>
        <p>${contentService[i]['content']}</p>
    `;
     closeModal();

}

function closeModal(){
    document.querySelector('.modal-service').classList.toggle('hidden');
    document.querySelector('.modal-overlay').classList.toggle('hidden');
}