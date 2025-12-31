// 1. Find the empty grid in your HTML
const grid = document.getElementById('listings-container');

// 2. Look at your 'properties' array from data.js
properties.forEach((house) => {
    
    // 3. Create the HTML for ONE card using the house data
    const cardHTML = `
    <div class="group relative flex flex-col overflow-hidden rounded-xl bg-surface-dark shadow-md">
        <div class="relative aspect-[4/3] w-full overflow-hidden">
            <img src="${house.image}" class="h-full w-full object-cover">
        </div>
        <div class="flex flex-1 flex-col p-4">
            <h3 class="text-lg font-bold text-white">${house.name}</h3>
            <p class="mb-2 text-sm text-[#92c992]">${house.landmark}</p>
            <div class="mt-auto flex items-end justify-between border-t border-surface-border pt-4">
                <p class="text-lg font-bold text-primary">${house.price.toLocaleString()} FCFA <span class="text-sm font-normal text-white/60">/ night</span></p>
                <button class="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-background-dark">View</button>
            </div>
        </div>
    </div>
    `;

    // 4. Push this card into the grid
    grid.innerHTML += cardHTML;
});