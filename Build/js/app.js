function createNode(element){
        return document.createElement(element);
}

function append(parent, ev){
    return parent.appendChild(ev);
}

const ul = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
    
    let posts= data;
    
    return posts.map(function(num){
        let li = createNode('li')
         span = createNode('span');
        
        li.innerHTML = num.title;
        span.innerHTML = num.body;
        
        append(li, span);   
        append(ul, li);
    })
})
