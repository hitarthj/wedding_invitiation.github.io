function positionLevel2() {
  const arch = document.getElementById("arch");
  const level2 = document.getElementById("level2");

  if (!arch || !level2) return;

  // Height of arch image rendered in browser
  const archHeight = arch.getBoundingClientRect().height;

  // Place Level 2 just below arch curve end with overlap
  // 0.72 means: put it around 72% down the arch height
  const overlapFactor = 0.72;

  const topValue = Math.round(archHeight * overlapFactor);

  level2.style.top = `${topValue}px`;
}

window.addEventListener("load", positionLevel2);
window.addEventListener("resize", positionLevel2);
