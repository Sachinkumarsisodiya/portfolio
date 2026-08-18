const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.jsx')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/#101010/g, 'var(--card)')
    .replace(/#0a0a0a/g, 'var(--background-secondary)')
    .replace(/#242424/g, 'var(--border)')
    .replace(/#050505/g, 'var(--background)')
    .replace(/bg-\[var\(--card\)\]/g, 'bg-card')
    .replace(/bg-\[var\(--background-secondary\)\]/g, 'bg-background-secondary')
    .replace(/border-\[var\(--border\)\]/g, 'border-border')
    .replace(/bg-\[var\(--background\)\]/g, 'bg-background')
    .replace(/#F5F5F5/g, 'var(--text-primary)')
    .replace(/text-\[var\(--text-primary\)\]/g, 'text-text-primary')
    .replace(/#A1A1AA/g, 'var(--text-secondary)')
    .replace(/text-\[var\(--text-secondary\)\]/g, 'text-text-secondary')
    .replace(/#A3E635/g, 'var(--accent)')
    .replace(/text-\[var\(--accent\)\]/g, 'text-accent');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
});
