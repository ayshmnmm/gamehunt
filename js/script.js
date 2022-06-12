let searchQuery = new URLSearchParams(window.location.search).get("q").toLowerCase();

let index = {
    "GTA V": {"id" : "GTA - V", "desc" : "Grand Theft Auto V", "img" : "https://images7.alphacoders.com/439/thumbbig-439636.webp", "url" : "/pc#game1", "tags" : "GTA-V race" },
    "minecraft": {"id" : "minecraft", "desc" : "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds.", "img" : "https://images7.alphacoders.com/370/thumbbig-370408.webp", "url" : "/pc#game2", "tags" : "minecraft survival" },
    "valorant": {"id" : "valorant", "desc" : "Valorant is a free-to-play battle royale game in which players fight each other in a battle royale style game.", "img" : "https://images6.alphacoders.com/107/thumbbig-1072679.webp", "url" : "/pc#game3", "tags" : "valorant battle royale" }
};

let res = `<h1 class="text-3xl font-bold overflow-hidden" id="search-query"> Results for ${searchQuery}</h1>` ;

let found = false;

for (let game in index)
{
    if (index[game]["id"].toLowerCase().search(searchQuery) != -1 || index[game]["desc"].toLowerCase().search(searchQuery) != -1 || index[game]["tags"].toLowerCase().search(searchQuery) != -1)
    {
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

if (!found)
{
    res =`<h1 class="text-3xl font-bold overflow-hidden" id="search-query"> No results for ${searchQuery}</h1>`;
}
document.getElementById("search-results").innerHTML = res;