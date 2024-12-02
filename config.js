const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="luthermikasa@gmail.com"
global.location="KONOHA ,HIDDEN LEAF VILLAGE."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Orangefri/TSUKUYOMI-MD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p";
global.website=process.env.GURL || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/qf4ipv.jpg" || "https://files.catbox.moe/qf4ipv.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝑻𝑺𝑼𝑲𝑼𝒀𝑶𝑴𝑰 𝑴𝑫" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27710200228";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/2aovw3.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,27710209228";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27710200228";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27710200228,27634624586";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://tsukuyomi-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5TV0xEeXgzQm5uNHlLMnJseFFVa2FTV3hGN2lIUys3NnZ4dnM2dW0zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlhnU2hKdmNWNGFuU3ZuUHFtTVRnYjJhR0htUUVVV1ZSR21WS1NxeHhVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTG4vN1kzNWpPNDlJUCtYa3NLbCt1UzV1RTVuU0pPWTV4SWNMWk9pdEdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsai9kbTA0U3cyYm1vQWhsTW5Sb0dqNWJmOUtFZkczNGVkRXFNdVY5MUhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGY1ZNTkZMczNpOEdDdjhpMWYxQzZLMmRjeGk2cWptS3VVcW5qdjE2MUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xK2poT0E1WmtZUlFYNWFwQlhzR1FybHVjV0FiQjRpU2RyOVBqWEhJa3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdCSWVnd1pqdWtFSTNYMERsRFBJdFhzUjdzek5HNEVhVEJ3ZGRuVmhWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFphTU1YTnErZWpycEZMTzlUVzExMVRqYXdBeUo2QUFnUklJVThadExtUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpPZ1JwTFpCRXRZTG85RXN1NHF4SlVOVlk2OVhXZkovbWZqMjJ5Y1lESTdrZGlrYlZ5VXVyU09tSEdwNkcvb2Y0T3JXT2w4ZDJPMW1VWEQvM3cxVGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6InlRNG5vTm1nU3JsakVkZWhGSmNQTkIwek9aRG56UTJnNlZkNk8yS3ZzaGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imx1aGt6WnZCUllPWUJTMG5LZGxRc2ciLCJwaG9uZUlkIjoiYTljMGFhNDItYzljYS00NWYwLWI2ZDMtMjQwOThiMGM1YmFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8yR0UySmQxaG8xakcvazM0SHBiWVlxT2NyMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJScWdqZktucHpabk81d0dyd0pLSUtUT0hrV0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1RBUk5KNzYiLCJtZSI6eyJpZCI6IjI3NzEwMjAwMjI4OjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMK3Y0UFVHRUlpMXQ3b0dHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyVVNwSVQ2TU1ySndPU1JWRnpNdklQbEFUZzNIdzFFTDh3ajlUcEhZaEZ3PSIsImFjY291bnRTaWduYXR1cmUiOiIrVlY2Zng5ck5nUG0zNFI1cGFvdmZ0RlhEZnZIYk83SU5uT2dJdkk4bzRKVWlEODh4dDVCUTBwQ2pFL1d6VDlvYWdsVldsdHFtbHVFa2RtbjJQcmFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFZoOVNZYW5pLzFVRU5nSlZXaVRmeTJKTmdEMEFFQU9YM1U4eEpDeXgwQ1VxSkMxZnZrMjVhL3ZuaDNLRHB1YVREMGJ6eU9VL2pWd2s0eWswekpJZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzcxMDIwMDIyODoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhMUVxU0UrakRLeWNEa2tWUmN6THlENVFFNE54OE5SQy9NSS9VNlIySVJjIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMTU1NDc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlNaiJ9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Baby_Md, 2: A17_Md, 3: Tsukuyomi-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑻𝑺𝑼𝑲𝑼𝒀𝑶𝑴𝑰-𝑴𝑫 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝑻𝑺𝑼𝑲𝑼𝒀𝑶𝑴𝑰』*\n youtube.com/@buffbaby"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑰𝑻𝑨𝑪𝑯𝑰",
  ownername:process.env.OWNER_NAME|| "JOOTSU",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLOOD RED MOON"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
