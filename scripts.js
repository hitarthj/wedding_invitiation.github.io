function positionLevel2() {
  const arch = document.getElementById("arch");
  const level2 = document.getElementById("level2");

  if (!arch || !level2) return;

  const archHeight = arch.getBoundingClientRect().height;

  // how far down the arch image the semicircle ends
  const overlapFactor = 0.72;

  level2.style.top = `${Math.round(archHeight * overlapFactor)}px`;
}

window.addEventListener("load", positionLevel2);
window.addEventListener("resize", positionLevel2);
