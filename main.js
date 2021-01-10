var x = document.getElementsByClassName('quickView');

for (var i = x.length - 1; i >= 0; i--) {
    x[i].innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-binoculars' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z'/></svg><small>Read content</small>";
    // x[i].style.color = 'black';
}

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// for changing the course when a dete is selected
function changeCourses() {
    document.getElementById('course1time').innerHTML = "8:30AM<h6>To 18:00PM</h6>";
    document.getElementById('course1name').innerHTML = "Software Architecture";
    document.getElementById('course1professor').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n' +
        '\t\t\t\t\t\t  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n' +
        '\t\t\t\t\t\t</svg> Dr Nhiem Lu<h6>Blocked day</h6>';
    document.getElementById('course2').style.display = 'none';
    document.getElementById('course3').style.display = 'none';

    let date = new Date(document.getElementById('current_date').value);
    document.getElementById('date').innerHTML = days[date.getDay()].concat(' ',date.toLocaleDateString());


}

let today =new Date();
document.getElementById('date').innerHTML = 'Today '.concat(days[today.getDay()],' ',today.toLocaleDateString());


function changeTitle(val) {
        document.getElementById('staticBackdropLabel').innerHTML = val;
}