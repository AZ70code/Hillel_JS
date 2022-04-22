
const form = document.getElementById('form');
const button = document.querySelector('button');

const pathAvatar = createPath();
const preView = changePreView();

//изменяем превью при изменении в полях формы
function changePreView(){
  return form.onchange = ()=>{
    return pathAvatar();
  }
}

//получаем картинку при клике на кнопку
button.onclick = () => {
  getAvatar();
}

function createPath() {
  return () => {
    const avatar = document.getElementById('avatar');
    const sprite = document.getElementById('sprite').value;
    const color = document.getElementById('color').value;
    const seed = document.getElementById('seed').value;
    avatar.setAttribute('src', 'https://avatars.dicebear.com/api/'+`${sprite}`+'/'+`${seed}`+'.svg?background=%23'+ `${color.slice(1)}`);
    let src = avatar.getAttribute('src');
    return src;
  }
}
async function getAvatar() {
  const url = preView();
  const response = await fetch(url);
  const blob = await response.blob();
  const avatar = document.createElement('a');
  avatar.href = window.URL.createObjectURL(blob);
  avatar.download = "Avatar";
  avatar.click();
}
