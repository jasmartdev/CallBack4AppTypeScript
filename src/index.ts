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
      await fetch("https://defense-wall-production.up.railway.app/api/player/12bcf994-e0fc-4cd6-92b5-a4b03a15a2e6/start-mission", {
        method: "POST",
        headers: {'content-length': '16', 'sec-ch-ua-platform': '"Windows"', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjEyYmNmOTk0LWUwZmMtNGNkNi05MmI1LWE0YjAzYTE1YTJlNiIsImlhdCI6MTc4NDY0MzEzOCwiZXhwIjoxNzkyNDE5MTM4fQ.9G2rOtWmRXgLrHUEgs5eM6N3bdRH5wrbvWrgb1QqsMM', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not;A=Brand";v="8", "Chromium";v="150", "Google Chrome";v="150"', 'content-type': 'application/json', 'sec-ch-ua-mobile': '?0', 'accept': '*/*', 'origin': 'https://wall-wars.game-files.crazygames.com', 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty', 'referer': 'https://wall-wars.game-files.crazygames.com/', 'accept-encoding': 'gzip, deflate, br, zstd', 'accept-language': 'en-US,en;q=0.9', 'priority': 'u=1, i'},
        body: JSON.stringify({"missionId":102})
      });
      await sleep(50000);
      await fetch("https://defense-wall-production.up.railway.app/api/player/12bcf994-e0fc-4cd6-92b5-a4b03a15a2e6/complete-mission", {
        method: "POST",
        headers: {'content-length': '16', 'sec-ch-ua-platform': '"Windows"', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6IjEyYmNmOTk0LWUwZmMtNGNkNi05MmI1LWE0YjAzYTE1YTJlNiIsImlhdCI6MTc4NDY0MzEzOCwiZXhwIjoxNzkyNDE5MTM4fQ.9G2rOtWmRXgLrHUEgs5eM6N3bdRH5wrbvWrgb1QqsMM', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', 'sec-ch-ua': '"Not;A=Brand";v="8", "Chromium";v="150", "Google Chrome";v="150"', 'content-type': 'application/json', 'sec-ch-ua-mobile': '?0', 'accept': '*/*', 'origin': 'https://wall-wars.game-files.crazygames.com', 'sec-fetch-site': 'cross-site', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty', 'referer': 'https://wall-wars.game-files.crazygames.com/', 'accept-encoding': 'gzip, deflate, br, zstd', 'accept-language': 'en-US,en;q=0.9', 'priority': 'u=1, i'},
        body: JSON.stringify({"missionId":102,"victory":false,"monstersKilled":109,"antiCheat":{"version":1,"team":[1,11,4,5,12],"waves":[]}})
      });
      await sleep(500);
    } catch (error) {
      console.error("Lỗi gửi request:", error);
    }
  }
};
