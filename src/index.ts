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
    "cookie": "_ga=GA1.1.297086740.1784678688; __zlcmid=1Yeog1fh33pXB5A; _gcl_au=1.1.451592038.1784678725; landingPage=%7B%22origin%22%3A%22https%3A%2F%2Fwww.back4app.com%22%2C%22host%22%3A%22www.back4app.com%22%2C%22pathname%22%3A%22%2Flogin%22%7D; b4a_amplitude_device_id=yYml3l5mc9lUlUxrF83j9O; ab-XjkrUHOQKm=zDxr7CzuTJ!1; mp_c6a824c901de2d494f8f060d6753e1ae_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Aa623dbe5-ee42-4be8-b9ff-16d0ec94b4f7%22%2C%22%24device_id%22%3A%22a623dbe5-ee42-4be8-b9ff-16d0ec94b4f7%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; _twpid=tw.1784689987224.718368382490245585; _fbp=fb.1.1784689987975.957439148805855609; cf_clearance=.d6eAp.iskh5zj.Ljw9QwDzUDgIVW73ugZkoO6yXvjc-1784786227-1.2.1.1-SJy6fOT11FzHh6aoY8sJqIRBMpyd8LLRAQCwnchJHRJwz7C19jwNC8rAbXyaW9OtNj2.Uy87Ds5Gnd_2iTy3mGuYzTNXVrohseFYKZJJn4DTO1081YIi1L5ZAwaDy9adtStpuQi4Y0do_CQFfsXR4Fr.gg6CdXlpz2kntjNleOngKDn4Iok6XQIZERS0ZQcNV_IPQN0yRVDSwilku48DORGkkvkO_DDB.Dgx.I9F1uEsFgi7fc0gGFlfFPEiv.AQPQoRn9T4ltY_6Y44uSivpzydo98GHxrQG6JVd7GLGzg_HsQc7GoaFTnrSN2MSC1uSAX525FSRj9ha6VnccoOIptJ7sN9iJ2eHI_noFNRS1sFHy81ympscjNMM7brD3RKRgcZVf2a7_WfSF2h4Lqlra9Z8xvazCvXEW17k.nv2iqQWNqqKvOqmiuf6BLNDHGNmL0Zn08AUT7yDHw1qzokRzNv87vrC4olb4NJscRVhRuy67_g4P3hrIuRpfwhn73DJE_1kJ01fJ.cdGInDtqVJgHZavfN7SPIqfKvJ33Y4nmWXBX5Ww_VwlYZtGrQUpSozvWnB8k6zZaENyIvyF85qw; connect.sid=s%3AXeCYVUodds_YE_BYqNODixyZXSch3ZG9.ns13SGzBkzilJsPNVAJPfeoKtkqNXsvb1WGsOndZt64; b4a_attr=%7B%22first%22%3A%7B%22gclid%22%3A%22CjwKCAjwsfzSBhB5EiwAOGyqSRt1qyNGJxHmZi6acdD_HZzHsC9H19FtWF0eH_caT91l5kLR7dXHfxoC3REQAvD_BwE%22%2C%22gbraid%22%3A%220AAAAADP9tF_H_8-vqlx0FBmj0CzIKS3lp%22%7D%2C%22last%22%3A%7B%22utm_source%22%3A%22google%22%2C%22utm_medium%22%3A%22cpc%22%2C%22utm_campaign%22%3A%22deploy_backend_tier3_4%22%2C%22utm_term%22%3A%22free%20backend%20deployment%22%2C%22gclid%22%3A%22CjwKCAjwyabTBhBFEiwAM3mNUAS68OIkyjFoPn5Iehtb5BsuWV9AItOHU765935rrLuVI3mrgr4iBxoCOhkQAvD_BwE%22%2C%22gbraid%22%3A%220AAAAADP9tF803Kgh9XyAgllFM5POadsEM%22%7D%7D; _gcl_aw=GCL.1785333757.CjwKCAjwyabTBhBFEiwAM3mNUAS68OIkyjFoPn5Iehtb5BsuWV9AItOHU765935rrLuVI3mrgr4iBxoCOhkQAvD_BwE; _gcl_gs=2.1.k1$i1785333750$u226207753; __gtm_campaign_url=https%3A%2F%2Fwww.back4app.com%2Fmongodb-backend%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Ddeploy_backend_tier3_4%26utm_term%3Dfree%2520backend%2520deployment%26gad_source%3D1%26gad_campaignid%3D23930869593%26gbraid%3D0AAAAADP9tF803Kgh9XyAgllFM5POadsEM%26gclid%3DCjwKCAjwyabTBhBFEiwAM3mNUAS68OIkyjFoPn5Iehtb5BsuWV9AItOHU765935rrLuVI3mrgr4iBxoCOhkQAvD_BwE; AMP_MKTG_bf3379918c=JTdCJTdE; __gtm_referrer=https%3A%2F%2Fgithub.com%2F; _rdt_uuid=1784678725268.da8abe97-acc3-46aa-96cd-8799850f0514; _rdt_em=:8f658d1cda45c4b3c840466ac470120bd21ab27bc0194d8166259caf2c2f8f04,839df8f328832e6dc3970227f5ef6b94cf70b7d309ad83fbdf6381e85f41d17d,f142c843ea11979b69ceb44397f8ef2a818f818080d728a6232bc807b5904002,fa0d6f03c5934e21d8dd65e6a3f8c9978b358bf91a77445ab7c5c8384636ae3f,fa0d6f03c5934e21d8dd65e6a3f8c9978b358bf91a77445ab7c5c8384636ae3f; _rdt_pn=:175~1b1cc3118cae58fccafb9f103bd0e13ad013d34a5edb76f134547b3ef42774db|125~857f3d4f407a4d943c5a919685ce077b3f89186acbf9a6a59ea1ad2e527e40c6|125~0a433919373204b5506622d1357ebc11993beeea8480f04fcbb8bc4bfaf3f396|125~909502c8a241216c3d2ad500977cae3e635e6efd01494f9c2b6516dd1dd5eff4|125~a8c9e6c199ae06704e587258cb3a4908058e74b40c25f3669e1eb8559b65bcf6; amp_bf3379=w4cVmfVaQQ284F2EnSVf3k...1jur6h7s2.1jur6h7s5.0.2.2; amp_bf3379_back4app.com=yYml3l5mc9lUlUxrF83j9O...1jur6clq3.1jur6ibdj.6n.2.6p; _ga_FJK5KX97E0=GS2.1.s1785471587$o43$g1$t1785471775$j57$l0$h237768712; AMP_bf3379918c=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjJ5WW1sM2w1bWM5bFVsVXhyRjgzajlPJTIyJTJDJTIydXNlcklkJTIyJTNBJTIyamFzbWFydGRldnJlZ2lzdHJ5JTQwZ21haWwuY29tJTIyJTJDJTIyc2Vzc2lvbklkJTIyJTNBMTc4NTQ3MTU4NjIwNCUyQyUyMm9wdE91dCUyMiUzQWZhbHNlJTJDJTIybGFzdEV2ZW50VGltZSUyMiUzQTE3ODU0NzE5NjM3MDglN0Q=",
    "Referer": "https://containers.back4app.com/"
  },
  "body": "{\"operationName\":\"triggerManualDeployment\",\"variables\":{\"serviceEnvironmentId\":\"fc12654c-5e6c-4e14-bb77-3caa504d70d0\"},\"query\":\"mutation triggerManualDeployment($serviceEnvironmentId: String!) {\\n  triggerManualDeployment(serviceEnvironmentId: $serviceEnvironmentId) {\\n    id\\n    status\\n    result\\n    error {\\n      message\\n      code\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}",
  "method": "POST"
});
    } catch (error) {
      console.error("Lỗi gửi request:", error);
    }
  }
};
