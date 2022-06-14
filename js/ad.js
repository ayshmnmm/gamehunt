let ads = [
    { "title": "Chiguru", "img": "/img/chiguru.jpg", "url": "https://chigurucitech.com/" },
    { "title": "Sbk Homes", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPIl9E07DQ76UUSATkIwT476RZVg5OO8vLg&usqp=CAU", "url": "https://www.worldsbk.com/" },
];

let r = Math.floor(Math.random() * ads.length);
let adtitle = ads[r]["title"];
let adimg = ads[r]["img"];
let adurl = ads[r]["url"];

let rad = `<div class="modal-box flex flex-col w-80 lg:w-90 justify-center" >
<h3 class="font-bold text-lg" >AD: ${adtitle}</h3>
<a href="${adurl}">
<img src="${adimg}" class="w-full" alt="advert" i/>
</a>
<div class="modal-action">
 <a class="btn" id="close-ad">close</a>
</div>
</div>`

document.getElementById("ad-pop").innerHTML = rad;


setTimeout(function () {
    let ad = document.getElementById('ad-pop');
    ad.classList.add('modal-open');
    document.getElementById('close-ad').addEventListener('click', function () {
        ad.classList.remove('modal-open');
    });
}, Math.floor(Math.random() * 10000 + 3000));

