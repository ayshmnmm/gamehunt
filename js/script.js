let searchQuery = new URLSearchParams(window.location.search).get("q").toLowerCase();

let index = {
    "GTA V": { "id": "GTA - V", "desc": "Grand Theft Auto V", "img": "https://images7.alphacoders.com/439/thumbbig-439636.webp", "url": "/pc#game1", "tags": "GTA-V race" },
    "minecraft": { "id": "minecraft", "desc": "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds.", "img": "https://images7.alphacoders.com/370/thumbbig-370408.webp", "url": "/pc#game2", "tags": "minecraft survival" },
    "valorant": { "id": "valorant", "desc": "Valorant is a free-to-play battle royale game in which players fight each other in a battle royale style game.", "img": "https://images.alphacoders.com/128/thumb-350-1282982.webp", "url": "/pc#game3", "tags": "valorant battle royale" },
    "GTA San Andreas": { "id": "GTA San Andreas", "desc": "Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fifth main entry in the Grand Theft Auto series.", "img": "https://images4.alphacoders.com/596/596253.jpg", "url": "/pc#game4", "tags": "GTA San Andreas open world" },
    "Fortnite": { "id": "Fortnite", "desc": "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions", "img": "https://images8.alphacoders.com/877/thumbbig-877849.webp", "url": "/pc#game5", "tags": "Fortnite Shooting" },
    "BGMI": { "id": "BGMI", "desc": "Battlegrounds Mobile India (BGMI, previously known as PUBG Mobile India) is the Indian version of PUBG Mobile, exclusively for players in India.", "img": "https://images3.alphacoders.com/816/816720.jpg", "url": "/mobile#game1", "tags": "BGMI shooter" },
    "Pokemon Go": { "id": "Pokemon Go", "desc": "Pokémon Go is a free smartphone app that combines gaming with the real world. The game uses location tracking and mapping technology to create an 'augmented reality' where players catch and train Pokémon characters in real locations.", "img": "https://images6.alphacoders.com/638/638835.jpg", "url": "/mobile#game2", "tags": "Pokemon Go VR" },
    "Call Of Duty Mobile": { "id": "Call Of Duty Mobile", "desc": "Call of Duty: Mobile is a free-to-play shooter game developed by TiMi Studio Group and published by Activision for Android and iOS. It was released on October 1, 2019, where it was one of the largest mobile game launches in history", "img": "https://images4.alphacoders.com/112/1123054.jpg", "url": "/mobile#game3", "tags": "COD Mobile shooter" },
    "Clash of clans": { "id": "Clash of clans", "desc": "Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by Finnish game developer Supercell.", "img": "https://images8.alphacoders.com/782/782650.png", "url": "/mobile#game4", "tags": "COC arcade" },
    "Among Us": { "id": "Among Us", "desc": "Among Us is a multiplayer game where 10 players get dropped into an alien spaceship, sky headquarters or planet base, where each player is designated with a private role of either a “crewmate” and an “impostor.”", "img": "https://images4.alphacoders.com/110/thumbbig-1104860.webp", "url": "/mobile#game5", "tags": "AMong Us teamwork" },
    "WWE SmackDown Here Comes The Pain": { "id": "WWE SmackDown Here Comes The Pain", "desc": "Here Comes the Pain (known as Exciting Pro Wrestling 5 in Japan) is a professional wrestling video game developed by Yuke's and published by THQ for PlayStation 2 in North America on October 27, 2003.", "img": "https://images6.alphacoders.com/518/thumbbig-518172.webp", "url": "/console#game1", "tags": "WWE wrestling" },
    "Wii Sports": { "id": "Wii Sports", "desc": "Wii Sports includes golf, bowling, boxing, baseball, and tennis games. Players use the Wii's wireless motion-sensitive remote to mimic the actions used when playing real-life games.", "img": "https://images7.alphacoders.com/696/thumbbig-696523.webp", "url": "/console#game2", "tags": "WII Sports" },
    "The Witcher 3": { "id": "The Witcher 3", "desc": "The Witcher 3: Wild Hunt is an action role-playing video game developed by Polish developer CD Projekt Red, and first published in 2015. It is the sequel to the 2011 game The Witcher 2", "img": "https://images4.alphacoders.com/587/thumbbig-587508.webp", "url": "/console#game3", "tags": "Witcher3 survival" },
    "Super Mario": { "id": "Super Mario", "desc": "Super Mario is a 2D and 3D platform game series created by Nintendo based on and starring the fictional plumber Mario. ", "img": "https://images3.alphacoders.com/116/thumbbig-1168335.webp", "url": "/console#game4", "tags": "Super Mario arcade game" },
    "God of War": { "id": "God Of War", "desc": "In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war ", "img": "https://images4.alphacoders.com/289/thumbbig-2898.webp", "url": "/console#game5", "tags": "God Of War Survival game" }
};

let res = `<h1 class="text-3xl font-bold overflow-hidden" id="search-query"> Results for ${searchQuery}</h1>`;

let found = false;

for (let game in index) {
    if (index[game]["id"].toLowerCase().search(searchQuery) != -1 || index[game]["desc"].toLowerCase().search(searchQuery) != -1 || index[game]["tags"].toLowerCase().search(searchQuery) != -1) {
        res = res + `<div style="max-width:400px;" class="card max-w-[400px] text-center bg-base-100 shadow-xl my-6">
        <a href="${index[game]['url']}">
            <div class="card-body">
          <h2 class="card-title justify-center">${index[game]['id']}</h2>
          <p class="">${index[game]['desc']}</p>
        </div>
        <img src="${index[game]['img']}" class="w-[400px]" alt="game" />
        </a>
    </div>`;
        found = true;
    }
}

if (!found) {
    res = `<h1 class="text-3xl font-bold overflow-hidden" id="search-query"> No results for ${searchQuery}</h1>`;
}
document.getElementById("search-results").innerHTML = res;
