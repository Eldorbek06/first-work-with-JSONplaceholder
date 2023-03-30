let data = []
let to_25 = document.querySelector('.users_lists .to_25 .list')
let to_50 = document.querySelector('.users_lists .to_50 .list')
let rest_users = document.querySelector('.users_lists .rest .list')
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => reload(res.users, to_25, to_50, rest_users));

function reload(arr, place1, place2, place3) {
    place1.innerHTML = ''
    place2.innerHTML = ''
    place3.innerHTML = ''
    for (let item of arr) {
        let user = document.createElement('div')
        let user_top = document.createElement('div')
        let user_bottom = document.createElement('div')
        let user_top_h1 = document.createElement('h1')
        let user_top_img = document.createElement('img')
        let user_bottom_age = document.createElement('div')
        let user_bottom_age_num = document.createElement('div')

        user.classList.add('user')
        user_top.classList.add('top', 'item')
        user_bottom.classList.add('bottom', 'item')
        user_bottom_age.classList.add('age')
        user_bottom_age_num.classList.add('age_num')

        user_top_img.src = item.image
        user_top_img.alt = 'image'

        user_top_h1.innerHTML = item.firstName + ' ' + item.lastName
        user_bottom_age.innerHTML = 'Age'
        user_bottom_age_num.innerHTML = item.age

        user.append(user_top, user_bottom)
        user_top.append(user_top_h1, user_top_img)
        user_bottom.append(user_bottom_age, user_bottom_age_num)
        if (item.age <= 25) {
            place1.append(user)
        } else if (item.age <= 50) {
            place2.append(user)
        } else {
            place3.append(user)
        }
    }
    setTimeout(() => {
        if(place1.lastElementChild){
            place1.lastElementChild.classList.add('MB')
        }
        if(place2.lastElementChild){
            place2.lastElementChild.classList.add('MB')
        }
        if(place3.lastElementChild){
            place3.lastElementChild.classList.add('MB') 
        }
    });
}