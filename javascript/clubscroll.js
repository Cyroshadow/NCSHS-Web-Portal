const increase = document.getElementById("club-next");
const decrease = document.getElementById("club-previous");
const logos = ["https://picsum/photos/400"]
const clubinfo = ["lorem ipspum"]
const clubnames = ["name"]
const groupsize = 4;
let club_index = 0;

function renderContent() {
let name = clubnames.slice(index, index + groupsize)
let image = logos.slice(index, index + groupsize)
let info = clubinfo.slice(index, index + groupsize)

clubnames.forEach(text => {
const tile = document.createElement("div");
tile.setAttribute("class", "clubs")
tile.innerHTML = `
<img class="club-logo" src="${image}">
    <div>
        <h2>${name}</h2>
        <p>${info}</p>
    </div>
`;

document.getElementById("club-group").append(tile)});
}

renderContent()

increase.addEventListener("click", () => {
    index = (index + groupsize) % clubnames.length;
    renderContent
});


function makeClubTIile(image, info, name) {
}

