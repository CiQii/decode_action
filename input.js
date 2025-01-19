const $ = new Env("GOGOGOGO");
let url = $request.url,
  headers = $request.headers;
if (headers.hasOwnProperty("X-Playback-Session-Id") || headers.hasOwnProperty("x-playback-session-id")) try {
  const notify = $.getdata("m3u8");
  if (!notify || notify != url) {
    $.setdata(url, "m3u8");
    const senPlayerUrl = "SenPlayer://x-callback-url/play?url=" + encodeURIComponent(url),
      mediaUrl = "https://raw.githubusercontent.com/Yu9191/-/main/dingdangmao.jpg";
    $.msg("获取成功", "请安装SenPlayer播放器", "已安装请忽略", {
      "open-url": senPlayerUrl,
      "media-url": mediaUrl
    });
  }
} catch (lliiII1I) {
  console.error("An error occurred:", lliiII1I);
}
$.done({});