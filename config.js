const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_20_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhXMy90d1ZSczBUdUt1cFNGMUVBWnR4enhUb0VnYTRJczQ3OGlVNHYxR0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldicFRaWmFtUVlLUVNVZ2RkNnZoTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjRiOTczMTEtNzAzOC00Y2IwLWI2OWQtNTkyYjcyN2JkMzFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMjI3LFxuICAgICAgMjE1LFxuICAgICAgMTUzLFxuICAgICAgNTAsXG4gICAgICAxNzksXG4gICAgICAxNCxcbiAgICAgIDIyOCxcbiAgICAgIDI0NyxcbiAgICAgIDE1NixcbiAgICAgIDE2NyxcbiAgICAgIDI1LFxuICAgICAgMjI4LFxuICAgICAgNDcsXG4gICAgICAyOCxcbiAgICAgIDIzOCxcbiAgICAgIDE5MixcbiAgICAgIDIwMSxcbiAgICAgIDcyLFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxMSxcbiAgICAgIDIxNixcbiAgICAgIDE2MixcbiAgICAgIDEyMyxcbiAgICAgIDgyLFxuICAgICAgMTUsXG4gICAgICAxMjQsXG4gICAgICAxNTgsXG4gICAgICAyMzAsXG4gICAgICAxOCxcbiAgICAgIDE3NyxcbiAgICAgIDE4MCxcbiAgICAgIDc5LFxuICAgICAgMTg4LFxuICAgICAgMTY4LFxuICAgICAgMixcbiAgICAgIDI0MSxcbiAgICAgIDQ2LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5IN2U4RkVNQ1pqN1VHR0JvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPUXBaUmk0aVlJYmtFamVoWmlvUjY0R2M0dlNrN3FwWGo2ditDU2hNQmdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllwMXo3TjBHS3puL2xVOWFibko4ZEpJMU5HN0dZUVhXNXpqK0Z6K09IelFMNWZwQThmQXVBUHRmRm1TS3RaZHlhMGZ2ZG5icTNVZTlGTncza005REF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdKa0RkYjRrZjZlU2tLZW12QzJOQTFnRlIzUlVERmlITkZrTnpkLzdseW94bnR3bVdaeldpSjNyT2hNZElJZ1Y2WmE4d1UyTjI5Z3lNTTRKOGlHWkFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NjY3NTcxMzI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2Njc3ODEwOTk1MjYxOjI3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NjY3NTcxMzI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDEwODQzXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
