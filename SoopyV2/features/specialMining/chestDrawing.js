// import { testConnection } from '../waypoints/gcw.js';
// import { drawCoolWaypoint, drawLine, drawBoxAtBlock, drawBoxAtBlock2, drawBoxAtEntity } from "../../utils/renderUtils.js";
// const { default: RenderLib2D } = require("../../utils/renderLib2d");
// entityNames = new Set();

// whitelistedEntities = ["Chest", "chest"]



// register("chat", (event) => {
    


//     ChatLib.chat("found chest message");
    
//     // get the current chunk
//     // let chunk = World.getChunk(Player.getX(), Player.getY(), Player.getZ());
    
//     // ChatLib.chat("found chunk");


//     // // get the entities in the chunk
//     // var entities = World.getAllTileEntities();
//     // ChatLib.chat("found entities: " + entities.length);

//     // // // for each entity
//     // entities.forEach(element => {
//     //     var block = element.getBlock();
//     //     var blockId = element.getBlockType().getID();

//     //     if (blockId == 54) {
//     //         ChatLib.chat("found chest");

//     //         // draw a line to the chest's position
//     //         var chestX = block.x;
//     //         var chestY = block.y;
//     //         var chestZ = block.z;

//     //         ChatLib.chat("attempting to draw line to block at " + chestX + ", " + chestY + ", " + chestZ);
//     //         // drawLineWithDepth(Player.getX(), Player.getY(), Player.getZ(), chestX, chestY, chestZ, 255, 0, 0, 1);
//     //         // drawBoxAtBlock2(chestX, chestY, chestZ, 255, 0, 0);
//     //         // drawLine(Player.getX(), Player.getY(), Player.getZ(), chestX + 0.5, chestY, chestZ + 0.5, 0, 255, 0)
//     //         // RenderLib2D.drawLine(Player.getX(), Player.getY(), Player.getZ(), chestX, chestY, chestZ, 50);

//     //         // stop drawing on the player when the player interacts with the chest

//     //         drawCoolWaypoint(Player.getX(), Player.getY(), Player.getZ(), 0, 255, 0, { name: "TEST", phase: true });
//     //         ChatLib.chat("waypoint drawn");
//     //     }
//     // });



// }).setCriteria("You uncovered a treasure chest!");



// // var GL11=Java.type("org.lwjgl.opengl.GL11")
// // var GlStateManager=Java.type("net.minecraft.client.renderer.GlStateManager")


// // function drawLine (x1, y1, z1, x2, y2, z2, red, green, blue, lineWidth = 1)
// // {
// //     GL11.glBlendFunc(770,771)
// //     GL11.glEnable(GL11.GL_BLEND)
// //     GL11.glLineWidth(lineWidth)
// //     GL11.glDisable(GL11.GL_TEXTURE_2D)
// //     GL11.glDisable(GL11.GL_DEPTH_TEST)
// //     GL11.glDepthMask(false)
// //     GlStateManager.func_179094_E()

// //     Tessellator.begin(GL11.GL_LINE_STRIP).colorize(red, green, blue)
// //     Tessellator.pos(x1, y1, z1)
// //     Tessellator.pos(x2, y2, z2)
// //     Tessellator.draw()

// //     GlStateManager.func_179121_F()
// //     GL11.glEnable(GL11.GL_TEXTURE_2D)
// //     GL11.glEnable(GL11.GL_DEPTH_TEST)
// //     GL11.glDepthMask(true)
// //     GL11.glDisable(GL11.GL_BLEND)
// // }


// // add command /entityshow
// register("command", () => {
    
//     ChatLib.chat("Entity names:");

//     // for each entity
//     for (let entityName of entityNames) {

//         // display it
//         ChatLib.chat(entityName);
//     }
    
// }).setName("entityshow");

// ChatLib.chat("Loaded chest drawing feature!");