class banner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
        <img src="images\\logo.png">
        <h1><a href="index.html" id=home>NCSHS</a></h1>
    <nav>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="clubs.html">Clubs</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="enrolment.html">Enroll</a></li>
    </nav>
    </header>
    <style>
        @font-face {
    font-family: "Montserrat";
    src: url(fonts/Montserrat-VariableFont_wght.ttf);
}

@font-face {
    font-family: "Jost";
    src: url(fonts/Jost-VariableFont_wght.ttf);
}

header{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #0b315a;
    font-family: "Montserrat", serif;
    font-size: 30px;
    color: azure;
    padding: 20px;
    letter-spacing: 3-x;
}

header > img {
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    height: 75px;
    width: 75px;
    object-fit: contain;
    margin-left: 20px
}

nav {
    display: flex;
    flex-direction: row;
    font-family: "Jost";
    font-size: 16px;
    list-style-type: none;
    margin-right: 40px;
    margin-left: auto;
}

nav > li {
    margin: 10px;
}

a, a:link, a:visited, a:hover, a:active {
    color: azure;
    text-decoration: none;
}
    </style>    `;
  }
}
    
customElements.define('template-banner', banner);