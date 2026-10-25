const fs = require("fs");
const path = require("path");
const R = require("./resume-data.js");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  BorderStyle, TabStopType, ExternalHyperlink,
} = require("docx");

const FONT = "Calibri";
const INK = "1A1A1A";
const MUTED = "555555";
const RULE = "B8B8B8";

const run = (text, opts = {}) => new TextRun({ text, font: FONT, size: 20, color: INK, ...opts });
const link = (text, url) => new ExternalHyperlink({
  children: [run(text, { color: "1F4E79", underline: {} })], link: url,
});

const sectionHeading = (text) => new Paragraph({
  spacing: { before: 220, after: 80 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 2 } },
  children: [run(text.toUpperCase(), { bold: true, size: 20, characterSpacing: 20 })],
});

const bullet = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 50, line: 264 },
  children: [run(text)],
});

const jobHeader = (title, company, dates) => new Paragraph({
  spacing: { before: 140, after: 40 },
  tabStops: [{ type: TabStopType.RIGHT, position: 10800 }],
  children: [
    run(title, { bold: true, size: 21 }),
    run("  |  " + company, { size: 21 }),
    run("\t" + dates, { color: MUTED, size: 20 }),
  ],
});

const children = [];

// Header
children.push(new Paragraph({
  spacing: { after: 20 },
  children: [run(R.name, { bold: true, size: 44 })],
}));
children.push(new Paragraph({
  spacing: { after: 40 },
  children: [run(R.title, { size: 24, color: MUTED })],
}));
children.push(new Paragraph({
  spacing: { after: 60 },
  children: [
    run(R.location + "   ·   " + R.phone + "   ·   ", { size: 19, color: MUTED }),
    link(R.email, "mailto:" + R.email),
  ],
}));
children.push(new Paragraph({
  spacing: { after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: INK, space: 6 } },
  children: [
    link(R.site, "https://" + R.site), run("   ·   ", { size: 19, color: MUTED }),
    link(R.github, "https://" + R.github), run("   ·   ", { size: 19, color: MUTED }),
    link(R.linkedin, "https://" + R.linkedin),
  ],
}));

// Summary
children.push(sectionHeading("Summary"));
children.push(new Paragraph({ spacing: { after: 80, line: 264 }, children: [run(R.summary)] }));
R.highlights.forEach((h) => children.push(bullet(h)));

// Experience
children.push(sectionHeading("Experience"));
R.experience.forEach((job) => {
  children.push(jobHeader(job.title, job.company, job.dates));
  job.bullets.forEach((b) => children.push(bullet(b)));
});

// Open source
children.push(sectionHeading("Open source"));
R.openSource.forEach((p) => children.push(new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 50, line: 264 },
  children: [link(p.name, p.url), run(" (" + p.meta + "): " + p.desc)],
})));

// Skills
children.push(sectionHeading("Skills"));
R.skills.forEach((s) => children.push(new Paragraph({
  spacing: { after: 50, line: 264 },
  children: [run(s.group + ": ", { bold: true }), run(s.items)],
})));

// Certifications & education
children.push(sectionHeading("Certifications & education"));
children.push(new Paragraph({
  spacing: { after: 50, line: 264 },
  children: [run("Certifications: ", { bold: true }), run(R.certifications.join(", "))],
}));
children.push(new Paragraph({
  spacing: { after: 50, line: 264 },
  children: [run("Education: ", { bold: true }), run(`${R.education.degree}, ${R.education.school}, ${R.education.year}`)],
}));

const doc = new Document({
  creator: R.name,
  title: R.name + " — Resume",
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 300, hanging: 200 } } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 760, bottom: 760, left: 820, right: 820 },
      },
    },
    children,
  }],
});

const out = path.join(__dirname, "Dwight_Banks_Resume.docx");
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log("wrote", out); });
