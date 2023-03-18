const
    allServicesItem = document.querySelectorAll(".service-item"),
    totalItems = allServicesItem.length,
    modal_container = document.querySelector('#modalservice-content');
contentService = [
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
    },
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
    },
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
    },
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
    },
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
    },
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
    },
    {
        title: "",
        content: `<b>Web service design and developer content</b>`
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