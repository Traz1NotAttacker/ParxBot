/*═══════════════════════════════════════════════════════
 *  ⌬  YT NeoShiroko Labs
 *═══════════════════════════════════════════════════════
 *  🌐  Website     : https://www.neolabsofficial.my.id
 *  ⌨︎  Developer   : https://zass.cloud
 *  ▶︎  YouTube     : https://www.youtube.com/@shirokode
 *  ⚙︎  Panel Murah : pterokudesu.web.id
 *
 *  ⚠︎  Mohon untuk tidak menghapus watermark ini
 *═══════════════════ © 2025 Zass Desuta ─════════════════════
 */
import fs from 'fs';
import chalk from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';
import moment from "moment-timezone";

//——————————[ Config Owner ]——————————//
global.ownernumber = '62882007404991' // Ganti nomer mu
global.lidownernumber = null;
global.ownername = 'ann'

//——————————[ Config Bot ]——————————//
global.namabot = "ParxBot"
global.nomorbot = '62882007404991' // Ganti no botmu
global.pair = "KUROKOKU"
global.version = '6.0.0'
global.botMode = true
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————————[ Config Sosmed ]——————————//
global.web = "-"
global.linkSaluran = "-"
global.idSaluran = "-"
global.nameSaluran = "-"

//——————————[ Config Wm ]——————————//
global.packname = `Dibuat Oleh ParxBot
⏰ ${moment.tz("Asia/Makassar").format("HH:mm:ss")}
Sєωα вσт ρυѕнкσитαк? Cнαт: ${ownernumber}`
global.author = `jarr`
global.foother = '© JarxBot'

//——————————[ Config Payment ]——————————//
//Note : Kalau gada isi aja jadi false
global.dana = "0882007404991"
global.ovo = false
global.gopay = "0882007404991"
global.qris = false
global.an = {
    dana: "p*****r",
    ovo: "N*****l",
    gopay: "p*****r ***"
}

//——————————[ Config Media ]——————————//
global.img = "https://files.cloudkuimages.guru/images/aDTzWN7n.jpg"
global.thumbxm = "https://files.catbox.moe/q57r0k.jpg"
global.thumbbc = "https://files.catbox.moe/lrfpvb.jpg"
global.thumb = "https://files.catbox.moe/l9m68m.jpg"

//——————————[ Config Broadcast ]——————————//
// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 15000
global.delayPushkontak = 15000
global.namakontak = "AutoSave Jarr"

//——————————[ Config Message ]——————————//
global.mess = {
  success: 'Sєℓєѕαι. Bєянαѕιℓ ∂ιєкѕєкυѕι.',
  wait: 'Tυиɢɢυ ѕєвєитαя. Aкυ ѕє∂αиɢ вєкєяנα...',
  admin: 'Kαмυ вυкαи A∂мιи ∂ι ѕιиι.',
  botAdmin: 'Aкυ вєℓυм мєиנα∂ι A∂мιи ∂ι Gяσυρ ιиι.',
  creator: 'Kαмυ ѕιαρα? Pєяιитαн ιиι нαиуα υитυк Oωиєякυ.',
  group: 'Nɢɢαк вιѕα ∂ι ѕιиι. Pαкαι ∂ι Gяσυρ.',
  private: 'Pαкαι ∂ι Cнαт Pяιвαт αנα.',
  error: 'Tєяנα∂ι Eяяσя. Cσвα ℓαɢι.',
  limit: 'Lιмιтмυ нαвιѕ. Iѕтιяαнαт ∂υℓυ уα.',
}


// *** message *** 
global.closeMsgInterval = 30; // 30 menit. maksimal 60 menit, minimal 1 menit
global.backMsgInterval = 2; // 2 jam. maksimal 24 jam, minimal 1 jam


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let file = __filename;
fs.watchFile(file, async () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${file}`));
    try {
        const module = await import(`${file}?update=${Date.now()}`); 
    } catch (err) {
        console.error(err);
    }
});