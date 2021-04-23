// searchBox

document.querySelector('#main').onsubmit = function(e){
    e.preventDefault();
    var search = document.querySelector('.search').value;
    console.log(document.querySelector('.search').value);
    window.location.href = 'https://www.google.com/search?q=' + search;
}

// voiceRecognition

