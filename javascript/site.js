

/*-- responsive behavior for navigation bar --*/
const NAV_LINKS = document.getElementById('nav_links');
const TOGGLE_NAV_BTN = document.getElementById('toggle_nav');

function toggleNav() {
  let text = TOGGLE_NAV_BTN.firstElementChild 
  text.innerHTML = text.innerHTML === '⌯' ? '×' : '⌯';
  NAV_LINKS.classList.toggle('toggle');
}
TOGGLE_NAV_BTN.addEventListener('click', toggleNav);
NAV_LINKS.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    NAV_LINKS.classList.toggle('toggle');
    TOGGLE_NAV_BTN.firstElementChild.innerHTML = TOGGLE_NAV_BTN.firstElementChild.innerHTML === '⌯' ? '×' : '⌯';
  }
})

/*-- Give the section that occupies the largest area of ​​the screen a special style --*/
/*- get the position of elements on the page -*/
const MAIN = document.getElementById('page_content')
const CHILDREN = [...MAIN.children];
const APPEARANCE_ON_PAGE = [];
const DISAPPEARED_FROM_PAGE = [];

// loading behavior
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loading_page').classList.add('close');
  setTimeout(() => {
    document.getElementById('loading_page').style.display = 'none';
  }, 2000);

  CHILDREN.forEach((i) => {
  APPEARANCE_ON_PAGE.push(i.offsetTop - window.innerHeight)
  DISAPPEARED_FROM_PAGE.push(i.offsetTop + i.offsetHeight);
});


const HTML = document.documentElement;
function mostViewed() {
  const ELE = [];
  const VISIBILE_AREA = [];

  APPEARANCE_ON_PAGE.forEach((i, x) => {
    if (APPEARANCE_ON_PAGE[x] <= HTML.scrollTop && DISAPPEARED_FROM_PAGE[x] >= HTML.scrollTop) {
      let ele_height = Math.abs((APPEARANCE_ON_PAGE[x] + window.innerHeight)-DISAPPEARED_FROM_PAGE[x]);
      
      if (HTML.scrollTop - APPEARANCE_ON_PAGE[x] <= ele_height) {
        VISIBILE_AREA.push(HTML.scrollTop - APPEARANCE_ON_PAGE[x])
      }else if (DISAPPEARED_FROM_PAGE[x] - HTML.scrollTop <= ele_height ) {
        VISIBILE_AREA.push(Math.abs(HTML.scrollTop - DISAPPEARED_FROM_PAGE[x]))
      }else {
        VISIBILE_AREA.push(ele_height)
      }
      ELE.push(x)
    }
  })
  
  return ELE[VISIBILE_AREA.indexOf(Math.max(...VISIBILE_AREA))];
}
console.log('start')
let prevSection = mostViewed();


window.onscroll = () => {
  NAV_LINKS.children[prevSection].classList.remove('active');
  NAV_LINKS.children[mostViewed()].classList.toggle('active');
  prevSection = mostViewed();
}
})
/*----------------------------------------------------------------------------------------------*/
