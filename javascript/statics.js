class banner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
        <img src="images\\ncshslogo.png">
        <div id="header">
        <h1><a href="index.html" id=home>Naga City Science High School</a></h1>
        <h2>The Official School Portal of NCSHS</h2>
        <h3>Brought to you by The Matrix</h3>
        </div>
    <nav>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="clubs.html">Clubs</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="enrolment.html">Enroll</a></li>
    </nav>
    <div id="calendar">
    <span id="date">
        <h4 id="month"></h4>
        <h4 id="day"></h4>
    </span>
    <h5>School Year 2025-2026</h5>
    </div>
    </header>
    
    <style>

@font-face {
font-family: "Montserrat";
src: url(designs/fonts/Montserrat-VariableFont_wght.ttf);
font-weight: variable;
}

@font-face {
font-family: "Montserrat";
src: url(designs/fonts/Montserrat-Bold.ttf);
font-weight: bold;
}

@font-face {
font-family: "Montserrat";
src: url(designs/fonts/Montserrat-Medium.ttf);
font-weight: medium;
}


header{
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    border-style: solid none solid none;
    border-width: thin;
}

header > div > h1 {
    font-family: "Montserrat", serif;
    font-size: 30px;
    color: #2A5370;
}

header > div {
    margin: 20px 0px 20px 0px;
}

header > div > h2 {
    font-family: "Montserrat", serif;
    font-size: 10px;
    color: #2A5370;
    margin: 0;
    padding: 0;
}

header > div > h3 {
    font-family: "Montserrat", serif;
    font-size: 7px;
    color: #2A5370;
}

header > img {
    display: flex;
    flex-direction: row;
    height: 75px;
    width: 75px;
    object-fit: contain;
    margin-left: 20px;
    margin-right: 20px;
}

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Montserrat";
    font-weight: medium;
    font-size: 16px;
    list-style-type: none;
    margin-left: auto;
    border-style: none solid none none;
    border-width: thin;
    height: 70px;
    padding-right: 5px;
}

nav > li {
    margin: 10px;
}

#header {
    display: flex;
    flex-direction: column;
}

#date {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2A5370;
    margin: 10px;
}

header > div > h5 {
    font-family: "Montserrat";
    font-weight: normal;
    font-size: 10px;
}

header > div > span > h4 {
    font-family: "Montserrat";
    margin: 5px;
    font-weight: bold;
    font-size: 24px;
}

a, a:link, a:visited, a:hover, a:active {
    color: #2A5370;
    text-decoration: none;
}
    </style>
    
    `;
  }
}

customElements.define('template-banner', banner);