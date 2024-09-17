// Sample Project Data
const projects = {
    "ecommerce-app": {
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
  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  


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
  