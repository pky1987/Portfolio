// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create optimized versions of images
const optimizeImages = async () => {
  const imagesDir = path.join(__dirname, '../public/images');
  const projectsDir = path.join(imagesDir, 'projects');
  
  // Create directories if they don't exist
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
  if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });
  
  // Create project subdirectories
  const projectDirs = ['nexus-core', 'amm-xyk', 'promptopia'];
  projectDirs.forEach(dir => {
    const dirPath = path.join(projectsDir, dir);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  });
  
  console.log('Image directories created. Add your images to:');
  console.log('- public/images/avatar.jpg');
  console.log('- public/images/projects/nexus-core/');
  console.log('- public/images/projects/amm-xyk/');
  console.log('- public/images/projects/promptopia/');
  
  // This is a placeholder script. In a real implementation, you would:
  // 1. Check if original images exist
  // 2. Resize and optimize them
  // 3. Save them in WebP format for better performance
};

optimizeImages();