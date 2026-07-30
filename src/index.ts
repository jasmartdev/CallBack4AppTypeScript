export interface Env {
}

export default {
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(this.sendPostRequest());
  },

  async sendPostRequest(): Promise<void> {
    try {
      await fetch("https://api.containers.back4app.com/", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"150\", \"Google Chrome\";v=\"150\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "cookie": "connect.sid=s%3ASf7q5RPagFCF-85NjW_KmbLOxmaIbjJG.8wEO%2Bz5CgH2VCIv0kq1pxlVRKoq5JAJtOX4zADyYtJQ; __zlcmid=1Yeog6z8M8M44nK; _gcl_au=1.1.1297939086.1784727406; landingPage=%7B%22origin%22%3A%22https%3A%2F%2Fwww.back4app.com%22%2C%22host%22%3A%22www.back4app.com%22%2C%22pathname%22%3A%22%2Flogin%22%7D; _ga=GA1.1.313362512.1784727406; b4a_amplitude_device_id=4GKfOtJtIcryxsDorjQ7kb; mp_c6a824c901de2d494f8f060d6753e1ae_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Ab690342b-ad7e-4ce5-88de-6e06f49b931a%22%2C%22%24device_id%22%3A%22b690342b-ad7e-4ce5-88de-6e06f49b931a%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; ab-XjkrUHOQKm=G4ntuiCDg1!1; __gtm_referrer=https%3A%2F%2Fdashboard.back4app.com%2F; amp_bf3379=UI5U9nGi8kB1BIzghw4yFi...1jucio9qh.1jucio9qk.0.2.2; _rdt_uuid=1784727405832.806f8767-6c7d-4ba8-8124-e59c58007d1a; _rdt_em=:f142c843ea11979b69ceb44397f8ef2a818f818080d728a6232bc807b5904002; _ga_FJK5KX97E0=GS2.1.s1784980233$o2$g1$t1784981235$j20$l0$h966426654; amp_bf3379_back4app.com=4GKfOtJtIcryxsDorjQ7kb.bmhhcGhhbnBob2lkb2NxdXllbnRvYW5xdW9jQGdtYWlsLmNvbQ==..1juchpo0l.1jucioap7.5.2.7; AMP_bf3379918c=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjI0R0tmT3RKdEljcnl4c0RvcmpRN2tiJTIyJTJDJTIydXNlcklkJTIyJTNBJTIybmhhcGhhbnBob2lkb2NxdXllbnRvYW5xdW9jJTQwZ21haWwuY29tJTIyJTJDJTIyc2Vzc2lvbklkJTIyJTNBMTc4NDk4MDI0NTgyOCUyQyUyMm9wdE91dCUyMiUzQWZhbHNlJTJDJTIybGFzdEV2ZW50VGltZSUyMiUzQTE3ODQ5ODEyNDk0ODElN0Q=",
          "Referer": "https://containers.back4app.com/"
        },
        "body": "{\"operationName\":\"triggerManualDeployment\",\"variables\":{\"serviceEnvironmentId\":\"d6abc15d-c096-432f-8f60-1eb84ff5bf53\"},\"query\":\"mutation triggerManualDeployment($serviceEnvironmentId: String!) {\\n  triggerManualDeployment(serviceEnvironmentId: $serviceEnvironmentId) {\\n    id\\n    status\\n    result\\n    error {\\n      message\\n      code\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}",
        "method": "POST"
      });
    } catch (error) {
      console.error("Lỗi gửi request:", error);
    }
  }
};
