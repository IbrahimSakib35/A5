const date = new Date();
const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }) + ',';  
const formattedDate = `<br><span class="font-semibold text-gray-800">${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getDate()} ${date.getFullYear()}</span>`;

document.getElementById('currentDate').innerHTML = weekday + formattedDate;

let taskCount = 6;
let completedCount = 23;

document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function () {
        if (!this.disabled) {
            taskCount--;
            completedCount++;
            document.getElementById('taskAssigned').textContent = taskCount;
            document.getElementById('completedCount').textContent = completedCount;
            
            let taskName = this.closest('.task').querySelector('h3').textContent;
            let log = document.createElement('p');
            log.innerHTML = `<span class="p-2 rounded-lg text-gray-600 bg-blue-50">You have Complete The Task ${taskName} at ${new Date().toLocaleTimeString()}</span>`;
            document.getElementById('activityLog').appendChild(log);
            
            this.disabled = true;
            this.classList.add('bg-gray-400');
            this.classList.remove('btn-primary');

            alert(`Board updated successfully!`);
            if (taskCount === 0) {
                alert("Congratz! You have completed all the current tasks");
            }
        }
    });
});

document.getElementById('discoverButton').addEventListener('click', function() {
    window.location.href = 'index2.html';
});

const colors = ['bg-gray-100', 'bg-gray-900', 'bg-blue-500', 'bg-green-500', 'bg-purple-500'];
let currentIndex = 0;
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.remove(colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.classList.add(colors[currentIndex]);
});

document.getElementById('clearHistory').addEventListener('click', function() {
    document.getElementById('activityLog').innerHTML = '';
});