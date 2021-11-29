/*-- for responsive --*/
const RES_ICON = document.getElementById('res_icon');

function res() {
  document.getElementById('nav_links').classList.toggle('active')
}
RES_ICON.addEventListener('click', res);

/*-- Give the section that occupies the largest area of ​​the screen a special style --*/

/*- get the position of elements on the page -*/
const CHILDREN = [...document.body.children];
const APPEARANCE_ON_PAGE = [];
const DISAPPEARED_FROM_PAGE = [];

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

let prevSection = mostViewed();
document.getElementById('nav_links').children[mostViewed() - 1].classList.toggle('active');

window.onscroll = () => {
  if (prevSection !== mostViewed()) {
    document.getElementById('nav_links').children[prevSection - 1].classList.remove('active');
    document.getElementById('nav_links').children[mostViewed() - 1].classList.toggle('active');
    prevSection = mostViewed();
  }
  if (document.body.scrollTop  >= 100 || document.documentElement.scrollTop >= 100) {
    document.querySelector('nav').classList.add('scroll')
  }else {
    document.querySelector('nav').classList.remove('scroll')
  }
}

/*----------------------------------------------------------------------------------------------*/
