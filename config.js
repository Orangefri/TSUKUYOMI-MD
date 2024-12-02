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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_49_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0ZSNUQvZ3QwYWVtWTNvVktETUgxTGpzZTZiWjIzN1djdGxGNmdDS25kWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzcxMDIwMDIyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDAyQTQ1RTZCQTRCMDU5RkIzM0NCODMwOEU2NTQ1N0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMTMyOTc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJxWm9qb29KUUVxV2dxbk9zNFhycWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTA4YWRkZGQtOTYwOC00ZjYwLTljNTctMjQ0MzZkMGM3NzczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICAwLFxuICAgICAgMTI4LFxuICAgICAgMjA4LFxuICAgICAgMTUwLFxuICAgICAgODEsXG4gICAgICAxOTgsXG4gICAgICAxLFxuICAgICAgMTksXG4gICAgICAyMTQsXG4gICAgICAyMjEsXG4gICAgICA3MCxcbiAgICAgIDI1MixcbiAgICAgIDE4MCxcbiAgICAgIDU2LFxuICAgICAgOTAsXG4gICAgICAxNjgsXG4gICAgICAyMjksXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDk5LFxuICAgICAgMTIzLFxuICAgICAgMjEyLFxuICAgICAgMjEyLFxuICAgICAgMTM1LFxuICAgICAgMjE5LFxuICAgICAgMjAwLFxuICAgICAgMCxcbiAgICAgIDI1NCxcbiAgICAgIDkwLFxuICAgICAgMjM1LFxuICAgICAgMTc5LFxuICAgICAgMjA2LFxuICAgICAgMTM3LFxuICAgICAgMTYxLFxuICAgICAgMTE2LFxuICAgICAgMjI2LFxuICAgICAgMTM5LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJSUjFWNE5BXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzcxMDIwMDIyODoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5OTczNDUzOTk2MjIxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wrdjRQVUdFS1dGdHJvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiclVTcElUNk1Nckp3T1NSVkZ6TXZJUGxBVGczSHcxRUw4d2o5VHBIWWhGdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFS2c5bkJzcUR0empWOERTODdaRHhzdFdwTUV1a01rajhCT2FJU3ptZkptdzhHQk1kL3dvem1ncGhuWlBTZlM4cVZDelpBTnpEdUM0QklaY0tkQnpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlU3praUo1eGVjY3VyUlRHczRJQzQrS3p3YzVzSE0vbVZwaER6L2tuWmY0K3ovNnJxMWJkVDBwcjVJcXc4a2QrejlIZGVvejNWaVRMUG8wdTJLOFhpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzcxMDIwMDIyODoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxMzI5NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNai5qc29uIjogIntcImtleURhdGFcIjpcInJScnhENXYyaEY2WEhOTGtBYThsU2lnTWl1dXFWK05MR292NnVUekxnUms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NzU1ODQ2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
