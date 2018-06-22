const app = document.getElementById('app');
const ul = document.createElement('ul');
let list = [];

console.log(fact(7));

for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    const n = Math.floor(Math.random()*100) + 1;
    li.innerHTML = n;
    li.style.listStyle = 'none';
    ul.appendChild(li);
}

function getRandomList() {
    const input = document.getElementById('listSize');
    const size = parseInt(input.value, 10) || 10;
    list = [];
    for (let i = 1; i <= size; i++) {
        const n = Math.floor(Math.random()*100) + 1;
        list.push(n);
    }
    renderList();
}

function renderList() {
    const ul = document.createElement('ul');
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = list[i];
        li.style.listStyle = 'none';
        ul.appendChild(li);    
    }
    app.innerHTML = ul.outerHTML;
}

function sortList() {
    sort(list);
    renderList();
}

function sort(list) {
    for (let i = 0; i < list.length; i++) {
        const minIndex = findMinIndex(list, i);
        swap(list, i, minIndex);
    }
}

function findMinIndex(list, i) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++){
        if (list[j] < list[minIndex]) {
            minIndex = j;
        }
    }
    return minIndex;
}

function swap(list, i, j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function fact(n) {
    if (n === 0)
        return 1;
    else 
        return n * fact(n-1);
}