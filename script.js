// Automatically set the current year in the footer safely
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Interactive IT Terminal Logic
const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');

if (terminalInput) {
    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            
            // Print user command
            const userLine = document.createElement('div');
            userLine.innerHTML = `<span style="color: #58a6ff;">guest@it-portfolio:~$</span> ${escapeHtml(terminalInput.value)}`;
            terminalBody.appendChild(userLine);
            
            // Process command
            const responseLine = document.createElement('div');
            responseLine.style.color = '#7ee787';
            
            switch(command) {
                case 'help':
                    responseLine.innerHTML = `Available commands:<br>
                    &nbsp;&nbsp;<strong>about</strong>    - Learn about Ntandoyenkosi<br>
                    &nbsp;&nbsp;<strong>skills</strong>   - View core technical abilities<br>
                    &nbsp;&nbsp;<strong>projects</strong> - View recent IT projects<br>
                    &nbsp;&nbsp;<strong>contact</strong>  - Get email & GitHub links<br>
                    &nbsp;&nbsp;<strong>clear</strong>    - Clear terminal screen`;
                    break;
                case 'about':
                    responseLine.textContent = "I'm Ntandoyenkosi Mthembu, an IT student at Elangeni TVET College specializing in hardware, networking, and systems support.";
                    break;
                case 'skills':
                    responseLine.textContent = "Skills: PC Hardware Assembly, Windows/Linux OS, Cisco Packet Tracer, VMware, Network Configuration, Git & GitHub.";
                    break;
                case 'projects':
                    responseLine.textContent = "Projects: Personal IT Portfolio website, Cisco Network Topologies, and VMware Virtual Machine Labs.";
                    break;
                case 'contact':
                    responseLine.innerHTML = `Email: <a href="mailto:Owethumkhwanazi9@gmail.com" style="color: #58a6ff;">Owethumkhwanazi9@gmail.com</a><br>GitHub: <a href="https://github.com/thestudenttech" target="_blank" style="color: #58a6ff;">github.com/thestudenttech</a>`;
                    break;
                case 'clear':
                    terminalBody.innerHTML = '';
                    terminalInput.value = '';
                    return;
                case '':
                    responseLine.textContent = '';
                    break;
                default:
                    responseLine.innerHTML = `Command not recognized: "${escapeHtml(command)}". Type <span style="color: #58a6ff;">help</span> for options.`;
                    responseLine.style.color = '#ff7b72';
            }
            
            terminalBody.appendChild(responseLine);
            terminalInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
