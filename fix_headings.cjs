const fs = require('fs');

const replaces = [
  { f: 'src/pages/Home.jsx', from: 'title="Featured Work"', to: 'title="Featured" highlight="Work"' },
  { f: 'src/components/WhatIBuild.jsx', from: 'title="What I Build"', to: 'title="What I" highlight="Build"' },
  { f: 'src/components/Skills.jsx', from: 'title="Technical Arsenal"', to: 'title="Technical" highlight="Arsenal"' },
  { f: 'src/components/Projects.jsx', from: 'title="Featured Projects"', to: 'title="Featured" highlight="Projects"' },
  { f: 'src/components/HowIWork.jsx', from: 'title="Development Process"', to: 'title="Development" highlight="Process"' },
  { f: 'src/components/GithubSection.jsx', from: 'title="Open Source Contributions"', to: 'title="Open Source" highlight="Contributions"' },
  { f: 'src/components/Experience.jsx', from: 'title="Professional Experience"', to: 'title="Professional" highlight="Experience"' },
  { f: 'src/components/Education.jsx', from: 'title="Academic Background"', to: 'title="Academic" highlight="Background"' },
  { f: 'src/components/Contact.jsx', from: 'title="Let\'s Connect"', to: 'title="Let\'s" highlight="Connect"' },
  { f: 'src/components/BentoGrid.jsx', from: 'title="Explore My Work"', to: 'title="Explore My" highlight="Work"' },
  { f: 'src/components/About.jsx', from: 'title="About Me"', to: 'title="About" highlight="Me"' },
];

for (let r of replaces) {
  try {
    let c = fs.readFileSync(r.f, 'utf8');
    c = c.replace(r.from, r.to);
    fs.writeFileSync(r.f, c);
    console.log(`Updated ${r.f}`);
  } catch (e) {
    console.log(`Failed ${r.f}`);
  }
}
