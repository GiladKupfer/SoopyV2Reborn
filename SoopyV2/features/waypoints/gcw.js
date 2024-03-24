
// Synced coords array 
// const syncedCoords = new Set();
const syncedCoords = new Map();

// Add new synced coord
function addSyncedCoord(name, x, y, z) {
    
    // coord doesnt exist already
    // if (!syncedCoords.has(name)) {

    //     // create the coord
    //     let coordText = `${name}: ${x} ${y} ${z}`;

    //     // add it to the map
    //     syncedCoords.add(coordText);
    // }

    if (!syncedCoords.has(name)) {
        ChatLib.chat("Got name: " + name);
        // create the coord
        let coordText = `${name}: ${Math.floor(x)} ${Math.floor(y)} ${Math.floor(z)}`;

        // add it to the map
        syncedCoords.set(name, coordText);
    }
}

// Display coords command
function registerGCWCommand() {

    register("command", () => {
        displaySyncedCoords();
    }).setName("gcw");

}

function registerGCWClearCommand() {
    register("command", () => {
        syncedCoords.clear();
    }).setName("gcwclear");
}

function displaySyncedCoords() {

    // Header 
    ChatLib.chat('Synced Coords:');

    // Display coords
    // for (let coord of syncedCoords) {
    //     ChatLib.chat(coord);
    // }


    for (let val of syncedCoords.values()) {
        ChatLib.chat(val);
    }

}

// Export functions
export {
    addSyncedCoord,
    registerGCWCommand,
    testConnection,
    gcwTest,
    registerGCWClearCommand
}

function testConnection(text) {

    ChatLib.chat("Got text: " + text);
}

function gcwTest() {
    ChatLib.chat("gcw loaded");
}
