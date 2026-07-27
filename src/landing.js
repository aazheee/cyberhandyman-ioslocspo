export function getLandingHtml() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101114" media="(prefers-color-scheme: dark)">
<title>WZ 定位服务</title>
<link rel="apple-touch-icon" href="/icon-180.png">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<style>
:root{
  color-scheme:light dark;
  --bg:#fafafa; --surface:#ffffff; --surface-soft:#f6f7f9; --line:#dfe3e8;
  --text:#111827; --muted:#6b7280; --blue:#176cf2; --blue-deep:#125dde;
  --shadow:0 16px 44px rgba(18,33,60,.08);
}
@media (prefers-color-scheme:dark){
  :root{
    --bg:#101114; --surface:#191b20; --surface-soft:#202329; --line:#343841;
    --text:#f4f7fb; --muted:#aab2c0; --blue:#4b8cff; --blue-deep:#2d73f5;
    --shadow:0 16px 44px rgba(0,0,0,.3);
  }
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","PingFang SC","Microsoft YaHei",sans-serif}
.wrap{width:min(100%,720px);margin:0 auto;padding:clamp(72px,13vh,150px) 28px 62px}
.hero{text-align:center}
.logo{width:76px;height:76px;border-radius:20px;vertical-align:middle;box-shadow:0 10px 28px rgba(23,108,242,.24)}
.brand{display:flex;align-items:center;justify-content:center;gap:22px}
.brand h1{margin:0;font-size:clamp(31px,6vw,44px);line-height:1.2;letter-spacing:.02em;font-weight:800}
.tagline{margin:27px 0 0;color:var(--muted);font-size:clamp(18px,3.8vw,24px);letter-spacing:.06em}
.enter{display:flex;align-items:center;justify-content:center;width:100%;margin:62px 0 0;min-height:108px;border-radius:15px;background:linear-gradient(135deg,var(--blue),var(--blue-deep));color:#fff;text-decoration:none;font-size:clamp(22px,4.5vw,29px);font-weight:800;box-shadow:0 14px 30px rgba(23,108,242,.22);transition:transform .15s,filter .15s}
.enter:active{transform:scale(.985);filter:brightness(.96)}
.section{margin-top:clamp(150px,22vh,235px)}
.section h2{margin:0;font-size:clamp(29px,5.3vw,38px);line-height:1.2;letter-spacing:.02em}
.section .sub{margin:21px 0 0;color:var(--muted);font-size:clamp(17px,3.5vw,22px);line-height:1.65}
.plat{margin-top:31px;border:1px solid var(--line);border-radius:16px;background:var(--surface);box-shadow:var(--shadow);overflow:hidden}
.plat .big{display:flex;align-items:center;gap:20px;min-height:106px;padding:20px 28px;color:var(--text);font-size:clamp(18px,4vw,25px);font-weight:650;text-decoration:none}
.plat .big::before{content:"→";display:grid;place-items:center;width:38px;height:38px;border:3px solid var(--blue);border-radius:50%;color:var(--blue);font-size:30px;line-height:1;font-weight:400;flex:none}
.plat .line{display:flex;align-items:center;border-top:1px solid var(--line);min-height:58px}
.plat .url{flex:1;min-width:0;padding:12px 22px;color:var(--muted);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.plat .copy{align-self:stretch;padding:0 26px;border:0;border-left:1px solid var(--line);background:transparent;color:var(--blue);font-size:clamp(17px,3.7vw,23px);font-weight:650;cursor:pointer}
.plat .copy.ok{color:#16803c}
.mitm{margin-top:clamp(110px,17vh,175px)}
.mitm h2{margin:0;font-size:clamp(29px,5.3vw,38px);line-height:1.2;letter-spacing:.02em}
.hosts{margin-top:30px;padding:30px;border:1px solid var(--line);border-radius:16px;background:var(--surface);box-shadow:var(--shadow)}
.hosts code{display:block;color:var(--text);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:clamp(15px,3.35vw,20px);line-height:3.1;overflow-wrap:anywhere}
footer{margin-top:clamp(120px,18vh,190px);text-align:center;color:var(--muted);font-size:clamp(15px,3vw,20px);line-height:1.7}
@media(max-width:480px){
  .wrap{padding:96px 24px 42px}
  .brand{gap:17px}.logo{width:64px;height:64px;border-radius:17px}
  .enter{margin-top:56px;min-height:96px}.plat .big{min-height:92px;padding:18px 22px}.plat .line{display:none}
  .hosts{padding:23px 22px}.hosts code{line-height:3}
}
</style>
</head>
<body>
<main class="wrap">
  <section class="hero">
    <div class="brand">
      <img class="logo" src="/icon.svg" alt="WZ 定位服务">
      <h1>WZ 定位服务</h1>
    </div>
    <p class="tagline">安全、简单、本地完成</p>
    <a class="enter" href="/picker">进入选点网页</a>
  </section>

  <section class="section">
    <h2>安装模块</h2>
    <p class="sub">选择代理客户端，可一键导入或复制链接手动添加。</p>
    <div id="plats"></div>
  </section>

  <section class="mitm">
    <h2>MITM 主机名</h2>
    <div class="hosts"><code>gs-loc.apple.com<br>gs-loc-cn.apple.com<br>bluedot.is.autonavi.com<br>bluedot.is.autonavi.com.gds.alibabadns.com</code></div>
  </section>

  <footer>坐标仅保存在当前设备，服务端不留存记录。</footer>
</main>
<script>

var origin = location.origin;
function u(file){ return origin + '/' + file; }
var PLATS = [
  { name:'Shadowrocket', file:'ios-location-spoofer.sgmodule', scheme:function(x){ return 'shadowrocket://install?module=' + encodeURIComponent(x); } }
];

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function toast(m){ var t=document.getElementById('toast'); t.textContent=m; t.classList.add('show'); setTimeout(function(){ t.classList.remove('show'); }, 1800); }
function copyText(s){
  if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(s);
  return new Promise(function(res,rej){ try{ var ta=document.createElement('textarea'); ta.value=s; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); var ok=document.execCommand('copy'); document.body.removeChild(ta); ok?res():rej(); }catch(e){ rej(e); } });
}
function doCopy(s, btn){ copyText(s).then(function(){ toast('已复制模块链接'); var o=btn.textContent; btn.classList.add('ok'); btn.textContent='✓'; setTimeout(function(){ btn.textContent=o; btn.classList.remove('ok'); }, 1200); }).catch(function(){ toast('复制失败，请手动选择'); }); }

var html = '';
for (var i=0; i<PLATS.length; i++){
  var p = PLATS[i];
  var url = u(p.file);
  html += '<div class="plat">' +
    '<a class="big" href="' + esc(p.scheme(url)) + '">一键导入 ' + esc(p.name) + '</a>' +
    '<div class="line"><span class="url">' + esc(url) + '</span>' +
    '<button class="copy" data-url="' + esc(url) + '">复制</button></div>' +
    (p.note ? '<div class="pnote">' + esc(p.note) + '</div>' : '') +
    '</div>';
}
document.getElementById('plats').innerHTML = html;
var btns = document.querySelectorAll('.copy');
for (var j=0; j<btns.length; j++){ (function(b){ b.addEventListener('click', function(){ doCopy(b.getAttribute('data-url'), b); }); })(btns[j]); }
<\/script>
</body>
</html>`;
}
