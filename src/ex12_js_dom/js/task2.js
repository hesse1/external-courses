let blockUser = document.getElementById('user-block');

let isTrue = true;

blockUser.addEventListener('click', function () {
  let ul = document.createElement('ul');
  if (isTrue) {
    blockUser.classList.add('active');
    let arr = [];
    ul.className = "dropdawn"

    for (let i = 0; i < 3; i++) {
      let li = document.createElement('li');
      li.className = "drop__item"
      arr.push(li)
    }
    arr[0].innerHTML = "<a href='#' class='drop__item-link'>My Profile</a>"
    arr[1].innerHTML = "<a href='#' class='drop__item-link'>My Tasks</a>"
    arr[2].innerHTML = "<a href='http://google.com/' class='drop__item-link'>Log out</a>"

    for (let j = 0; j < arr.length; j++) {
      ul.appendChild(arr[j])
    }
    blockUser.appendChild(ul)
    isTrue = false;
  } else {
    blockUser.classList.remove('active')
    blockUser.querySelector('.dropdawn').remove()
    isTrue = true;
  }

})