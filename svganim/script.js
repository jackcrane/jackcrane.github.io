const BORDER_SIZE = 4;
const right_panel = document.getElementById("right_panel");

let right_m_pos;
function resize(e){
  const dx = right_m_pos - e.x;
  right_m_pos = e.x;
  right_panel.style.width = (parseInt(getComputedStyle(right_panel, '').width) + dx) + "px";
}

right_panel.addEventListener("mousedown", function(e){
  if (e.offsetX < BORDER_SIZE) {
    right_m_pos = e.x;
    document.addEventListener("mousemove", resize, false);
  }
}, false);

document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", resize, false);
}, false);