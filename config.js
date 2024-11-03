const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_11_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicExEZlF3eEllVDJpOWdUaSsrWkZnUmFOaDYxR2grV1RNVjZ6YkkxL0tvYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNzk0NDcxOTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNEMUNDNUE1OTQ4Qzk4NUE0NDg0ODY2MUQyRDVFOUVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDY3MTg2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI3OTQ0NzE5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTMxOUJGNzgwRTk4OENFN0MyRjdBMTBEMDRDNUFCREZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjcxODcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlRUm0yXzYyUzBhS1pfMmVkSlo4WVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDZmYmY4YjgtNjdhYS00OTVkLTg2NjktYjgxODJjNjM5OGI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDEzOSxcbiAgICAgIDI4LFxuICAgICAgMTY4LFxuICAgICAgMTk1LFxuICAgICAgOTYsXG4gICAgICAxMzcsXG4gICAgICAxMjEsXG4gICAgICAxMTIsXG4gICAgICAxMjMsXG4gICAgICA4NCxcbiAgICAgIDE1MCxcbiAgICAgIDIwLFxuICAgICAgOTAsXG4gICAgICAzNyxcbiAgICAgIDEwNCxcbiAgICAgIDE1NyxcbiAgICAgIDU0LFxuICAgICAgMTcxLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE2MixcbiAgICAgIDE4MixcbiAgICAgIDMxLFxuICAgICAgMTU1LFxuICAgICAgMTIzLFxuICAgICAgMjIzLFxuICAgICAgNjIsXG4gICAgICAxMTAsXG4gICAgICA0NixcbiAgICAgIDI0NyxcbiAgICAgIDEzMCxcbiAgICAgIDE3MCxcbiAgICAgIDE0MyxcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgMTAzLFxuICAgICAgMjA3LFxuICAgICAgMTc5LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1pONkNKMVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI3OTQ0NzE5NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDcwNTQxNzkzNzA3MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCShpzhup7wnZaJ4oGeVEFDSEnjgrdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZUIzcE1CRVBqcG43a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFYUXFmT3ZpR1RIbXd3cnh1Z0lvNk5MeHRPR1BVbTF4U0xRQm9rVHM4WDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMVNqVURXYmMrbWgzK0RqVHYrMzBhbmJOZWRIbEFlVHlZSVFjcUNBY0FtZ3F2M3dURGdjMC83Y0pnQzNDWXY4K2F6VlNZOUJNdlJxcjAwRGtSSHQ2QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGZSaDU5ZXVmZUg0eTBOMHNGSVdNRzd6M2NRNnl3TGFmaDBNaENudmh0UWh2TXMwVE9WdHJzekVleUJMa3hRZTRXbVYveU5Yb0NqWmxKV1laYlpsQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjc5NDQ3MTk3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2NzE4NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKak1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpqTS5qc29uIjogIntcImtleURhdGFcIjpcInFjQ2UrSjZ2djhzQjNUdnhlVWNqUUxlcFNCSmJpZi9hdHlHSFdQQmVQc1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA5ODIxNjg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2MzQ4ODg5NTJcIn0iCn0=" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
