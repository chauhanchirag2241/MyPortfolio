// Sample Project Data
const projects = {
  "Amul (AMCS)": {
    overview: "An e-commerce platform with a modern UI and robust backend.",
    techStack: "React, Node.js, Express, MongoDB",
    demo: "https://ecommerce-app.demo",
    hidden: false,
  },
  "chat-app": {
    overview: "A real-time chat application with user authentication.",
    techStack: "Angular, Firebase",
    demo: "https://chat-app.demo",
    hidden: false,
  },
  "secret-project": {
    overview: "Hidden Easter Egg Project. This is a fun surprise!",
    techStack: "Classified",
    demo: "https://secret-project.demo",
    hidden: true,
  },
};

// Terminal Commands
const commands = {
  help: "Available commands: ls, cd [project-name], clear, demo, help.",
  ls: () =>
    Object.keys(projects)
      .filter((key) => !projects[key].hidden)
      .map((key) => key)
      .join("\n"),
  cd: (projectName) => {
    if (projects[projectName]) {
      return `
  <b>${projectName}</b>
  Overview: ${projects[projectName].overview}
  Tech Stack: ${projects[projectName].techStack}
  Type <span class="command">demo</span> to view the live demo.
  `;
    } else {
      return "Project not found. Type <span class='command'>ls</span> to list projects.";
    }
  },
  demo: (projectName) =>
    projects[projectName]
      ? `Opening demo: <a href="${projects[projectName].demo}" target="_blank">${projects[projectName].demo}</a>`
      : "Please select a project first with <span class='command'>cd [project-name]</span>.",
  clear: () => {
    document.getElementById("output").innerHTML = "";
    return "";
  },
  easteregg: () => "You found an easter egg! 🥚✨ Try more hidden commands!",
};

// Handle User Input Commands
let currentProject = "";

function handleCommand(event) {
  if (event.key === "Enter") {
    const input = event.target.value.trim();
    const [command, arg] = input.split(" ");

    // Append the command to output
    appendOutput(`<span class="command">$ ${input}</span>`);

    // Process the command
    let response = "";
    if (command in commands) {
      if (command === "cd") {
        currentProject = arg;
        response = commands[command](arg);
      } else if (command === "demo") {
        response = commands[command](currentProject);
      } else {
        response = typeof commands[command] === "function" ? commands[command]() : commands[command];
      }
    } else {
      response = "Command not found. Type <span class='command'>help</span> to see available commands.";
    }

    // Append the response to output
    appendOutput(response);

    // Clear the input field
    event.target.value = "";
  }
}

// Append Output to Terminal
function appendOutput(text) {
  const output = document.getElementById("output");
  const newLine = document.createElement("p");
  newLine.innerHTML = text;
  output.appendChild(newLine);
  output.scrollTop = output.scrollHeight;
}

// Handle Modal Opening
function openProject(projectId) {
  document.getElementById('project-details').style.display = 'flex';
  // Set content based on projectId if needed
  var overview = document.getElementById('overview');
  var tech_stack = document.getElementById('tech-stack');
  var challenges = document.getElementById('challenges');
  if (projectId == 'AMCS') {
    overview.innerHTML = `<p> - The Amul Automatic Milk Collection System streamlines the daily operations of dairy
         farmers by automating the process of milk collection, integrating advanced hardware
         like Data Processing Units (DPU) to ensure accurate measurements and seamless data
         handling.</p><br><p>-  This system also supports mobile applications for on-site milk collection,
         ensuring real-time data capture and improving overall efficiency.</p><br><h3>Key Features:</h3><br>
     <P>(1) Daily Milk Collection: Automates and records milk collection from dairy farmers using integrated hardware systems (DPU).
     </P><p>(2)  Mobile Application: Facilitates on-the-go milk collection with real-time data synchronization between mobile devices and the server.
     </p> <p>(3)  Hardware Integration: Connects with DPUs to ensure precise measurement and automatic data logging, minimizing human error.
     </p> <p> (4)  Logistics Management: Tracks and manages the transportation and distribution of milk from collection points to processing units.
     </p> <p> (5) Accounting & Payment: Provides a comprehensive system for managing payments to farmers, loans, and other financial transactions.
     </p> <p>(6)  Reporting System: Generates detailed reports on daily milk collection, farmer payments, and logistical operations to provide insights and facilitate
         decision-making.</p>`;

    tech_stack.innerHTML = ` <br><p>* Backend: .NET MVC </p><br><p>* Frontend: AngularJS</p><br><p>* Database: Sql Server , Pg Sql</p>
                                <br><p>* Hardware: Data Processing Unit (DPU) Integration , Milk Analyzer ,Tankassure </p></p>` ;

    challenges.innerHTML = ` <br> <p>* Ensuring seamless hardware-software integration for accurate data collection.</p>
                    <br><p>* Managing real-time updates and syncing across mobile applications and server systems.</p>
                    <br><p>* Handling large-scale data efficiently to support daily operations.</p>
`;
  } else if (projectId == 'PRP') {
    overview.innerHTML = `<p>- The Route Planning Application is designed to optimize the collection of milk from various locations, ensuring efficient logistics for dairy operations.</p>
    <br><p>this application addresses key challenges in milk collection by leveraging advanced algorithms and real-time data analysis.</p>
    <br><h3>Key Features:</h3><br><p>(1) Dynamic Route Planning : Users can input a starting point for milk collection, allowing for customized route generation based on specific needs.</p>
    <br><p>(2) Vehicle Constraints : The application takes into account vehicle capacity and type, ensuring that the planned routes are suitable for the available resources.</p>
    <br><p>(3) Road Analysis : Provides detailed analysis of the chosen routes, including estimated duration, travel time, and distance, helping users make informed decisions.</p>
    <br><p>(4) Map Integration: An intuitive map view enables users to visualize routes, making it easier to understand the logistics and optimize collection strategies.</p>
    <br><p>(5) User-Friendly Interface : Designed with Angular 17, the UI is responsive and easy to navigate, enhancing the user experience during route planning.</p>
    `;
    tech_stack.innerHTML = `<br><p>* Backend: .NET 6 , .NET 8 </p><br><p>* Frontend: Angular 17</p><br><p>* Database: Sql Server</p> `;
    challenges.innerHTML = `<br><p>(1) Route Optimization: Aligning the optimized route with customer constraints.</p>
    <br><p>(2) User-friendly Map Configuration: Overcoming technical difficulties in making the map intuitive and easy to use for end-users.</p>`;
  } else if (projectId == 'RMRD') {
    overview.innerHTML = `<p>The RMRD Dashboard provides a comprehensive, real-time overview of daily milk collection operations, streamlining data analysis for dairy industry professionals.</p>
    <br><p> This dashboard allows users to filter data based on various parameters such as:</p>
    <br><p>(1) Society-wise Milk Collection: View and analyze milk collected from different societies across regions.</p>
    <br><p>(2) Farmer Participation: Track how many farmers contributed to daily milk collection.</p>
    <br><p>(1) Plant-specific Data: Monitor the amount of milk delivered to different plants in real-time.</p>
    `;
    tech_stack.innerHTML = `<br><p>* Backend: .NET 8 </p><br><p>* Frontend: Angular 17</p><br><p>* Database: Sql Server</p> `;
    challenges.innerHTML = `<br><p> We encountered challenges in integrating this dashboard with the main MVC application and managing user logins and session handling. Ensuring smooth communication 
    between systems and handling authentication consistently across applications required careful planning and coordination.</p>`;
  } else if (projectId == 'Logistics') {
    overview.innerHTML = `<p>- This project is designed to efficiently manage milk logistics, ensuring timely transportation within a few hours of milk collection.
     It includes the integration of multiple vehicle types, managing vehicle capacities, and monitoring logistics from milk collection points to various societies.
      A key feature of this system is the inclusion of a mobile application for drivers, which ensures secure transport and real-time updates on logistics.</p>
      <br><h3>Key Features:</h3><br><p>(1) Vehicle Management: Add and track various vehicle types and capacities for optimized logistics planning.</p>
      <br><p>(2) Logistics Coordination: Manage routes and logistics from plants to societies, ensuring timely and efficient milk delivery.</p>
      <br><p>(3) Mobile Application for Drivers: A mobile app provides real-time updates to drivers, helping them navigate routes securely and complete their logistics tasks efficiently.</p>
      <br><p>(4) Secure Transport: The system ensures safe and secure transportation of milk, providing transparency throughout the process.</p>
      `;
      tech_stack.innerHTML = `<br><p>* Backend: .NET 7 </p><br><p>* Frontend: Angular 15</p><br><p>* Database: Sql Server</p> `;
      challenges.innerHTML = `<br><p>We faced the critical challenge of ensuring the logistics are completed within the limited lifespan of milk</p>`;
  }
  else{
    overview.innerHTML = '<P>No Data Found!</p>'
    tech_stack.innerHTML = '<P>No Data Found!</p>'
    challenges.innerHTML = '<P>No Data Found!</p>'
  }

}

// Handle Modal Closing
function closeProject() {
  document.getElementById('project-details').style.display = 'none';
}

// Handle Tab Switching
function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.classList.remove('active'));
  document.querySelector(`button[onclick="openTab('${tabId}')"]`).classList.add('active');
}

// Handle Theme Toggle
// document.getElementById('dark-mode-toggle').addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });



// //skil section
document.querySelectorAll('.skills-node').forEach(node => {
  node.addEventListener('click', () => {
    const skillName = node.getAttribute('data-skill');
    const progress = node.querySelector('.progress-ring').getAttribute('data-progress');
    // Update the skill details section
    document.querySelector('.details-header').innerText = `Details for ${skillName}`;
    document.querySelector('.details-content').innerHTML = `
            <p>Proficiency Level: ${progress}%</p>
            <!-- Additional details such as related projects or achievements can be added here -->
        `;
    // Update the progress ring
    const circle = node.querySelector('.progress-ring-circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  });
});




//certificates section


document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.certification-item');
  const overlay = document.createElement('div');
  overlay.classList.add('zoom-overlay');
  document.body.appendChild(overlay);

  items.forEach(item => {
    item.addEventListener('click', function () {
      const imageSrc = this.querySelector('img').src;
      const overlayImage = document.createElement('img');
      overlayImage.src = imageSrc;
      overlay.innerHTML = ''; // Clear previous content
      overlay.appendChild(overlayImage);

      // Toggle zoom
      if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
      } else {
        overlay.classList.add('active');
      }
    });
  });

  overlay.addEventListener('click', function () {
    this.classList.remove('active');
  });
});

function toggleZoom(element) {
  const allItems = document.querySelectorAll('.certification-item');
  allItems.forEach(item => {
    if (item !== element) {
      item.classList.remove('zoomed');
    }
  });
  element.classList.toggle('zoomed');
}
