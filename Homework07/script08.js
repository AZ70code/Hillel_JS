const listArr = [
    {
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    }
]


let list = document.createElement('ul');
document.body.append(list);

listArr.forEach( (item, index, array) => {
  item = document.createElement('li');
  item.classList.add('list-item');
  let title = document.createElement('h2');
  let text = document.createElement('p');
  title.textContent = array[index].title;
  text.textContent = array[index].text;
  list.append(item);
  item.append(title);
  item.append(text);
});

let listItem = document.querySelectorAll('.list-item');
for (item of listItem ) {
  item.style = `${randomColor()}`;
}


function randomColor() {
  let color = 'color: ' + '#' + (Math.random().toString(16)).substring(2,8);
  return color;
}
