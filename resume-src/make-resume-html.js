const fs = require("fs");
const path = require("path");
const R = require("./resume-data.js");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dwight Banks – Resume</title>
<meta name="description" content="Resume of Dwight Banks, Senior Systems & Platform Engineer in Houston, TX.">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<style>
  :root { --ink:#1a1a1a; --muted:#5c5c5c; --rule:#c9c9c9; --link:#1f4e79; }
  * { box-sizing: border-box; }
  html { font-size: 10.5pt; }
  body { margin:0; font-family: Calibri, "Helvetica Neue", Arial, sans-serif; color:var(--ink); background:#ececec; line-height:1.32; }
  .page { max-width: 8.5in; margin: 24px auto; background:#fff; padding: 0.55in 0.6in; box-shadow: 0 2px 16px rgba(0,0,0,.12); }
  a { color: var(--link); text-decoration: none; }
  a:hover, a:focus { text-decoration: underline; }
  header h1 { font-size: 22pt; margin:0; letter-spacing: -0.01em; }
  header .title { font-size: 12pt; color: var(--muted); margin: 2px 0 4px; }
  header .contact { font-size: 9.5pt; color: var(--muted); margin: 0 0 2px; }
  header .contact span + span::before { content: "·"; margin: 0 .55em; }
  header { border-bottom: 1.5px solid var(--ink); padding-bottom: 7px; margin-bottom: 8px; }
  h2 { font-size: 10pt; letter-spacing: .08em; text-transform: uppercase; margin: 14px 0 5px; padding-bottom: 2px; border-bottom: 1px solid var(--rule); }
  p { margin: 0 0 5px; }
  ul { margin: 0 0 4px; padding-left: 1.05em; }
  li { margin: 0 0 3px; }
  .job { display:flex; justify-content: space-between; align-items: baseline; gap: 12px; margin: 8px 0 3px; }
  .job b { font-size: 10.5pt; }
  .job .dates { color: var(--muted); white-space: nowrap; font-size: 9.5pt; }
  .skills p b, .edu p b { font-weight: 600; }
  .bar { display:flex; justify-content:space-between; align-items:center; max-width: 8.5in; margin: 20px auto 0; padding: 0 4px; font-family: system-ui, sans-serif; font-size: 14px; }
  .bar a { background:#1a1a1a; color:#fff; padding: 8px 14px; border-radius: 6px; }
  @media print {
    html { font-size: 10pt; }
    body { background:#fff; }
    .page { max-width:none; margin:0; padding:0; box-shadow:none; }
    .bar { display:none; }
    @page { size: letter; margin: 0.5in 0.55in; }
    a { color: inherit; }
    h2, .job { break-after: avoid; }
    li { break-inside: avoid; }
  }
  @media (max-width: 640px) { .page { padding: 20px 16px; margin: 0; } .job { flex-direction: column; gap: 0; } }
</style>
</head>
<body>
<div class="bar"><a href="/">← aboutdbanks.com</a><a href="../Dwight_Banks_Resume.pdf" download>Download PDF</a></div>
<main class="page">
<header>
  <h1>${esc(R.name)}</h1>
  <p class="title">${esc(R.title)}</p>
  <p class="contact"><span>${esc(R.location)}</span><span>${esc(R.phone)}</span><span><a href="mailto:${R.email}">${R.email}</a></span></p>
  <p class="contact"><span><a href="https://${R.site}">${R.site}</a></span><span><a href="https://${R.github}">${R.github}</a></span><span><a href="https://${R.linkedin}">${R.linkedin}</a></span></p>
</header>

<h2>Summary</h2>
<p>${esc(R.summary)}</p>
<ul>${R.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>

<h2>Experience</h2>
${R.experience.map((j) => `
<div class="job"><span><b>${esc(j.title)}</b> &nbsp;|&nbsp; ${esc(j.company)}</span><span class="dates">${esc(j.dates)}</span></div>
<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`).join("")}

<h2>Open source</h2>
<ul>${R.openSource.map((p) => `<li><a href="${p.url}">${esc(p.name)}</a> (${esc(p.meta)}): ${esc(p.desc)}</li>`).join("")}</ul>

<h2>Skills</h2>
<div class="skills">${R.skills.map((s) => `<p><b>${esc(s.group)}:</b> ${esc(s.items)}</p>`).join("")}</div>

<h2>Certifications &amp; education</h2>
<div class="edu">
<p><b>Certifications:</b> ${R.certifications.map(esc).join(", ")}</p>
<p><b>Education:</b> ${esc(R.education.degree)}, ${esc(R.education.school)}, ${R.education.year}</p>
</div>
</main>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "resume.html"), html);
console.log("wrote resume.html");
