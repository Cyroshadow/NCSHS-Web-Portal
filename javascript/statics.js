class banner extends HTMLElement {
  connectedCallback() {
    const date = new Date().toDateString().substring(4, 11).toUpperCase();
    this.innerHTML = 
    `<header>
        <img src="images\\ncshslogo.png">
        <div id="name">
        <h1><a href="index.html">Naga City Science High School</a></h1>
        <h2>The Official School Portal of NCSHS</h2>
        <h3>Brought to you by The Matrix</h3>
        </div>
    <nav>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="clubs.html">Clubs</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="enrolment.html">Enroll</a></li>
    </nav>
    <div id="calendar">
    <span id="date">
        ${date}
    </span>
    <h5 id="schoolyr">School Year 2025-2026</h5>
    </div>
    </header>`;
  }
}

customElements.define('template-banner', banner);