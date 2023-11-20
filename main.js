const axios = require('axios');

async function findOpenGroups() {
  for (let i = 300000; i < 900000; i++) {
    try {
      const group = await axios.get(`https://groups.roproxy.com/v1/groups/${i}`);
      if (group.data.publicEntryAllowed === true && group.data.owner === null) {
        await axios.post('https://discord.com/api/webhooks/1176021355053994117/R1Wd9XlwMRbT1brG1C2Jx6P8oOx7DR3Qf54dAKtIK-Qhl8iYU8cWBdvNg7PHdOJF-j-U', {
          content: `Found an open group: https://www.roblox.com/groups/${i}`
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

findOpenGroups();
