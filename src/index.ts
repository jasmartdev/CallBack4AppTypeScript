export interface Env {
}

export default {
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(this.sendPostRequest());
  },

  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return new Response("Worker is running via Cron!");
  },

  async sendPostRequest(): Promise<void> {
    try {
      /*
      await fetch("https://defense-wall-production.up.railway.app/api/player/12bcf994-e0fc-4cd6-92b5-a4b03a15a2e6/complete-mission", {
        method: "POST",
        headers: {'sec-ch-ua-platform': '"Windows"', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjEyYmNmOTk0LWUwZmMtNGNkNi05MmI1LWE0YjAzYTE1YTJlNiIsImlhdCI6MTc4NDY0MzEzOCwiZXhwIjoxNzkyNDE5MTM4fQ.9G2rOtWmRXgLrHUEgs5eM6N3bdRH5wrbvWrgb1QqsMM', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not;A=Brand";v="8", "Chromium";v="150", "Google Chrome";v="150"', 'content-type': 'application/json', 'sec-ch-ua-mobile': '?0', 'accept': '*/*', 'origin': 'https://wall-wars.game-files.crazygames.com', 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty', 'referer': 'https://wall-wars.game-files.crazygames.com/', 'accept-encoding': 'gzip, deflate, br, zstd', 'accept-language': 'en-US,en;q=0.9', 'priority': 'u=1, i'},
        body: JSON.stringify({"missionId":150,"victory":false,"monstersKilled":433,"antiCheat":{"version":1,"team":[1,11,4,5,12],"waves":[]}})
      });
      await fetch("https://defense-wall-production.up.railway.app/api/player/12bcf994-e0fc-4cd6-92b5-a4b03a15a2e6/start-mission", {
        method: "POST",
        headers: {'sec-ch-ua-platform': '"Windows"', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjEyYmNmOTk0LWUwZmMtNGNkNi05MmI1LWE0YjAzYTE1YTJlNiIsImlhdCI6MTc4NDY0MzEzOCwiZXhwIjoxNzkyNDE5MTM4fQ.9G2rOtWmRXgLrHUEgs5eM6N3bdRH5wrbvWrgb1QqsMM', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not;A=Brand";v="8", "Chromium";v="150", "Google Chrome";v="150"', 'content-type': 'application/json', 'sec-ch-ua-mobile': '?0', 'accept': '*/*', 'origin': 'https://wall-wars.game-files.crazygames.com', 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty', 'referer': 'https://wall-wars.game-files.crazygames.com/', 'accept-encoding': 'gzip, deflate, br, zstd', 'accept-language': 'en-US,en;q=0.9', 'priority': 'u=1, i'},
        body: JSON.stringify({"missionId":150})
        */
      await fetch("https://api.containers.back4app.com/", {
        method: "POST",
        headers: {"accept": '*/*', "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7", "content-type": "application/json", "priority": "u=1, i", "sec-ch-ua": "\"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"150\", \"Google Chrome\";v=\"150\"", "sec-ch-ua-mobile": "?1", "sec-ch-ua-platform": "\"Android\"", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-site", "cookie": "_ga=GA1.1.297086740.1784678688; __zlcmid=1Yeog1fh33pXB5A; _gcl_au=1.1.451592038.1784678725; landingPage=%7B%22origin%22%3A%22https%3A%2F%2Fwww.back4app.com%22%2C%22host%22%3A%22www.back4app.com%22%2C%22pathname%22%3A%22%2Flogin%22%7D; b4a_amplitude_device_id=yYml3l5mc9lUlUxrF83j9O; ab-XjkrUHOQKm=zDxr7CzuTJ!1; mp_c6a824c901de2d494f8f060d6753e1ae_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Aa623dbe5-ee42-4be8-b9ff-16d0ec94b4f7%22%2C%22%24device_id%22%3A%22a623dbe5-ee42-4be8-b9ff-16d0ec94b4f7%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; _twpid=tw.1784689987224.718368382490245585; _fbp=fb.1.1784689987975.957439148805855609; b4a_attr=%7B%22first%22%3A%7B%22gclid%22%3A%22CjwKCAjwsfzSBhB5EiwAOGyqSRt1qyNGJxHmZi6acdD_HZzHsC9H19FtWF0eH_caT91l5kLR7dXHfxoC3REQAvD_BwE%22%2C%22gbraid%22%3A%220AAAAADP9tF_H_8-vqlx0FBmj0CzIKS3lp%22%7D%2C%22last%22%3A%7B%22gclid%22%3A%22CjwKCAjwsfzSBhB5EiwAOGyqSaH4kF8jG2DO72ZXdcEHSpHg8ZaGFh-RA3g-8noILPggtvxAwrR8WRoCUo0QAvD_BwE%22%2C%22gbraid%22%3A%220AAAAADP9tF_H_8-vqlx0FBmj0CzIKS3lp%22%7D%7D; __gtm_campaign_url=https%3A%2F%2Fwww.back4app.com%2Fdocs-containers%2Fhow-to-create-a-dockerfile%3Fgad_source%3D1%26gad_campaignid%3D21648680552%26gbraid%3D0AAAAADP9tF_H_8-vqlx0FBmj0CzIKS3lp%26gclid%3DCjwKCAjwsfzSBhB5EiwAOGyqSaH4kF8jG2DO72ZXdcEHSpHg8ZaGFh-RA3g-8noILPggtvxAwrR8WRoCUo0QAvD_BwE; cf_clearance=.d6eAp.iskh5zj.Ljw9QwDzUDgIVW73ugZkoO6yXvjc-1784786227-1.2.1.1-SJy6fOT11FzHh6aoY8sJqIRBMpyd8LLRAQCwnchJHRJwz7C19jwNC8rAbXyaW9OtNj2.Uy87Ds5Gnd_2iTy3mGuYzTNXVrohseFYKZJJn4DTO1081YIi1L5ZAwaDy9adtStpuQi4Y0do_CQFfsXR4Fr.gg6CdXlpz2kntjNleOngKDn4Iok6XQIZERS0ZQcNV_IPQN0yRVDSwilku48DORGkkvkO_DDB.Dgx.I9F1uEsFgi7fc0gGFlfFPEiv.AQPQoRn9T4ltY_6Y44uSivpzydo98GHxrQG6JVd7GLGzg_HsQc7GoaFTnrSN2MSC1uSAX525FSRj9ha6VnccoOIptJ7sN9iJ2eHI_noFNRS1sFHy81ympscjNMM7brD3RKRgcZVf2a7_WfSF
        body: JSON.stringify({"operationName":"triggerManualDeployment","variables":{"serviceEnvironmentId":"0ddc4dd8-3dea-40c7-9e9b-dd80012f5f0b"},"query":"mutation triggerManualDeployment($serviceEnvironmentId: String!) {\\n  triggerManualDeployment(serviceEnvironmentId: $serviceEnvironmentId) {\\n    id\\n    status\\n    result\\n    error {\\n      message\\n      code\\n      __typename\\n    }\\n    __typename\\n  }\\n}"})
      });
      });
    } catch (error) {
      console.error("Lỗi gửi request:", error);
    }
  }
};
