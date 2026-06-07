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
let handler = async (m, { zassbtz, command }) => {
    const defaultMenu = `Klik nih ngab`;
    zassbtz.sendMessage(m.chat, {
        location: {
            degreesLatitude: -6.2088, // Ganti dengan latitude lokasi
            degreesLongitude: 106.8456 // Ganti dengan longitude lokasi
        },
        caption: defaultMenu,
        footer: foother,
        buttons: [
                {
                buttonId: `huu`,
                buttonText: {
                    displayText: '\nSaya pedo:v'
                },
                type: 1
            }
        ],
        headerType: 6,
        viewOnce: true
    }, { quoted: m });
};

handler.command = ["loli"]
export default handler 