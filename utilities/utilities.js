document.getElementById("blog").addEventListener('click', function() {
    window.location.href = "blog.html";
} )

function getDate() {
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let dates = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let setDate =  month + ' ' + dates + ' ' + year;

    let dayTo = days[date.getDay()];
    let day = dayTo.slice(0, 3);

    document.getElementById('day-name').innerText = day + ' ,';

    document.getElementById('date-name').innerText = setDate;
}
getDate();

document.getElementById("complate-btn-1").addEventListener('click', function() {
    
    let alerts = document.getElementById("complate-alert-1");
    alert("Board Updated Successfully");
    alerts.classList.remove("hidden");
    alerts.classList.add("flex");
    setTimeout(() => {
        alerts.classList.remove("flex");
        alerts.classList.add("hidden");
    }, 2000);

    document.getElementById("complate-btn-1").setAttribute('disabled', true);

    let taskNumber = document.getElementById("task-number");
    taskNumber.innerText = taskNumber.innerText - 1;
    let totalTask = document.getElementById("total-task");
    totalTask.innerText = parseFloat(totalTask.innerText) + 1;

    let history = document.getElementById("add-history");
    let addHistory = document.createElement("div");
    addHistory.innerHTML = ` <p class="text-sm bg-base-300 p-3 rounded-lg shadow-md m-4">You have Complete The Task <span class="font-semibold">Fix Mobile Button Issue</span> at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(addHistory);
})

document.getElementById("complate-btn-2").addEventListener('click', function() {

    let alerts = document.getElementById("complate-alert-1");
    alert("Board Updated Successfully");
    alerts.classList.remove("hidden");
    alerts.classList.add("flex");
    setTimeout(() => {
        alerts.classList.remove("flex");
        alerts.classList.add("hidden");
    }, 2000);

    document.getElementById("complate-btn-2").setAttribute('disabled', true);

    let taskNumber = document.getElementById("task-number");
    taskNumber.innerText = taskNumber.innerText - 1;
    let totalTask = document.getElementById("total-task");
    totalTask.innerText = parseFloat(totalTask.innerText) + 1;

    let history = document.getElementById("add-history");
    let addHistory = document.createElement("div");
    addHistory.innerHTML = ` <p class="text-sm bg-base-300 p-3 rounded-lg shadow-md m-4">You have Complete The Task <span class="font-semibold">Add Dark Mode</span> at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(addHistory);
})

document.getElementById("complate-btn-3").addEventListener('click', function() {
    
    let alerts = document.getElementById("complate-alert-1");
    alert("Board Updated Successfully");
    alerts.classList.remove("hidden");
    alerts.classList.add("flex");
    setTimeout(() => {
        alerts.classList.remove("flex");
        alerts.classList.add("hidden");
    }, 2000);

    document.getElementById("complate-btn-3").setAttribute('disabled', true);

    let taskNumber = document.getElementById("task-number");
    taskNumber.innerText = taskNumber.innerText - 1;
    let totalTask = document.getElementById("total-task");
    totalTask.innerText = parseFloat(totalTask.innerText) + 1;

    let history = document.getElementById("add-history");
    let addHistory = document.createElement("div");
    addHistory.innerHTML = ` <p class="text-sm bg-base-300 p-3 rounded-lg shadow-md m-4">You have Complete The Task <span class="font-semibold">Optimize Home page </span> at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(addHistory);
})

document.getElementById("complate-btn-4").addEventListener('click', function() {
    
    let alerts = document.getElementById("complate-alert-1");
    alert("Board Updated Successfully");
    alerts.classList.remove("hidden");
    alerts.classList.add("flex");
    setTimeout(() => {
        alerts.classList.remove("flex");
        alerts.classList.add("hidden");
    }, 2000);

    document.getElementById("complate-btn-4").setAttribute('disabled', true);

    let taskNumber = document.getElementById("task-number");
    taskNumber.innerText = taskNumber.innerText - 1;
    let totalTask = document.getElementById("total-task");
    totalTask.innerText = parseFloat(totalTask.innerText) + 1;

    let history = document.getElementById("add-history");
    let addHistory = document.createElement("div");
    addHistory.innerHTML = ` <p class="text-sm bg-base-300 p-3 rounded-lg shadow-md m-4">You have Complete The Task <span class="font-semibold">Add new emoji 😎</span> at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(addHistory);
})

document.getElementById("complate-btn-5").addEventListener('click', function() {
    
    let alerts = document.getElementById("complate-alert-1");
    alert("Board Updated Successfully");
    alerts.classList.remove("hidden");
    alerts.classList.add("flex");
    setTimeout(() => {
        alerts.classList.remove("flex");
        alerts.classList.add("hidden");
    }, 2000);
 
    document.getElementById("complate-btn-5").setAttribute('disabled', true);

    let taskNumber = document.getElementById("task-number");
    taskNumber.innerText = taskNumber.innerText - 1;
    let totalTask = document.getElementById("total-task");
    totalTask.innerText = parseFloat(totalTask.innerText) + 1;

    let history = document.getElementById("add-history");
    let addHistory = document.createElement("div");
    addHistory.innerHTML = ` <p class="text-sm bg-base-300 p-3 rounded-lg shadow-md m-4">You have Complete The Task <span class="font-semibold">Integrate OpenAI API</span> at ${new Date().toLocaleTimeString()}</p>
    `;
    history.appendChild(addHistory);
})

document.getElementById("complate-btn-6").addEventListener('click', function() {
    
    let alerts = document.getElementById("complate-alert-1");
    alert("Board Updated Successfully");
    alerts.classList.remove("hidden");
    alerts.classList.add("flex");
    setTimeout(() => {
        alerts.classList.remove("flex");
        alerts.classList.add("hidden");
    }, 2000);

    document.getElementById("complate-btn-6").setAttribute('disabled', true);

    let taskNumber = document.getElementById("task-number");
    taskNumber.innerText = taskNumber.innerText - 1;
    let totalTask = document.getElementById("total-task");
    totalTask.innerText = parseFloat(totalTask.innerText) + 1;

    let history = document.getElementById("add-history");
    let addHistory = document.createElement("div");
    addHistory.innerHTML = ` <p class="text-sm bg-base-300 p-3 rounded-lg shadow-md m-4">You have Complete The Task <span class="font-semibold">Improve Job searching</span> at ${new Date().toLocaleTimeString()}</p>
    `;
    
    history.appendChild(addHistory);

})


document.getElementById("clear-btn").addEventListener('click', function() {
    let alert = document.getElementById("complate-alert-2");
    alert.classList.remove("hidden");
    alert.classList.add("flex");
    let timeOut = setInterval(() => {
        alert.classList.remove("flex");
        alert.classList.add("hidden");
        
    }, 2000);
    
    let history = document.getElementById("add-history");
    history.innerHTML = "";
})  

document.getElementById('theme-change').addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
})