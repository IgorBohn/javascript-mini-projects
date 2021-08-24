'use strict';

const images = [
    { 'id': '1', 'url': './img/pomba1.jpg'},
    { 'id': '2', 'url': './img/pomba2.jpg'},
    { 'id': '3', 'url': './img/pomba3.jpg'},
    { 'id': '4', 'url': './img/pomba4.jpg'},
    { 'id': '5', 'url': './img/pomba5.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previus = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);