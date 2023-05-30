import '../assets/scss/index.scss';
import Swiper from 'swiper/bundle';

import Logo from '../assets/image/logo.svg';
import facebook from '../assets/image/facebook.svg';
import twitter from '../assets/image/twitter.svg';
import instagram from '../assets/image/instagram.svg';
import bgcImage from '../assets/image/bgc-image.png';
import comerceCenterImg from '../assets/image/comerce-center.png';
import tradeCenterImg from '../assets/image/trade-center.png';
import newsFirst from '../assets/image/first-news.png'; 
import newsSecond from '../assets/image/second-news.png'; 
import newsThird from '../assets/image/third-news.png'; 
import aljaImage from '../assets/image/alja.png';
import dominikImage from '../assets/image/dominik.png';
import aliceImage from '../assets/image/alice.png';
import galeryFirstPhoto from '../assets/image/galeryImage1.png';
import galerySomeSecondPhoto from '../assets/image/galeryImage2.png';
import galeryThirdPhoto from '../assets/image/galeryImage3.png';
import galeryFourthPhoto from '../assets/image/galeryImage4.png';
import galeryFifthPhoto from '../assets/image/galeryImage5.png';
import footerBgc from '../assets/image/footer-bgc.png';


const newsFirstImage = document.querySelector('.news-swiper-slide-image-first');
newsFirstImage.src = 'first-news.png';
const newsSecondImage = document.querySelector('.news-swiper-slide-image-second');
newsSecondImage.src = 'second-news.png'
const newsThirdImage = document.querySelectorAll('.news-swiper-slide-image-third');
newsThirdImage.forEach(item => item.src ='third-news.png')
const imagecomerceCenter = document.querySelector('.projects__image-item-block-second');
imagecomerceCenter.src = 'comerce-center.png';
const imagetradeCenter = document.querySelector('.projects__image-item-block-first');
imagetradeCenter.src = 'trade-center.png';
const aljaImageAuthor = document.querySelector('.news-author-image-alja');
aljaImageAuthor.src = 'alja.png';
const dominikImageAuthor = document.querySelector('.news-author-image-dominik');
dominikImageAuthor.src = 'dominik.png';
const aliceImageAuthor = document.querySelectorAll('.news-author-image-alice');
aliceImageAuthor.forEach(item => item.src = 'alice.png');

const galeryFirstPhotos = document.querySelector('.galery__main-photo-first')
const galerySecondPhotos = document.querySelector('.galery__main-photo-second')
const galeryThirdPhotos = document.querySelector('.galery__main-photo-third')
const galeryFourthPhotos = document.querySelector('.galery__main-photo-fourth')
const galeryFifthPhotos = document.querySelector('.galery__main-photo-fifth')
galeryFirstPhotos.src = 'galeryImage1.png'
galerySecondPhotos.src = 'galeryImage2.png'
galeryThirdPhotos.src = 'galeryImage3.png'
galeryFourthPhotos.src = 'galeryImage4.png'
galeryFifthPhotos.src = 'galeryImage5.png'


const swiper = new Swiper('.swiper', {
  loop: true,
	direction: "vertical", 
	// pagination: "true", 
	// clickable: "true",
  pagination: {
    el: '.swiper-pagination',
		clickable: "true",
  },
});


const otherSwiper = new Swiper('.swiper-news', {
  loop: true,
	// pagination: "true", 
	// clickable: "true",
	slidesPerView: 3,
	spaceBetween: 35,
	navigation: {
    nextEl: '.news-swiper-button-next',
    prevEl: '.news-swiper-button-prev',
  },
  pagination: {
    el: '.news-swiper-pagination',
		clickable: "true",
  },
});

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.674922, lng: -73.935490 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "67d650c6513bd9c2",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

const navItems = document.querySelectorAll('a[href*="#"]');
console.log(navItems)
const someValue = navItems.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const pathItemNav = item.getAttribute('href')
		document.querySelector(pathItemNav).scrollIntoView({ behavior: 'smooth', block: 'end'})
	})
})

const arrowIntoProject = document.querySelector('.header__arrow-icon')
arrowIntoProject.addEventListener('click', e => {
	e.preventDefault()
	const projectSection = document.querySelector('#project')
	arrowIntoProject.scrollIntoView(projectSection, {behavior: 'smooth', block: 'start'})
})

const scalePhoto = document.querySelectorAll('.galery__main-photo');
scalePhoto.forEach(item => {
	item.addEventListener('mouseover', () => {
		item.style.transform = 'scale(1.5)'
		item.style.opacity = '1'
	})
	item.addEventListener('mouseout', () => {
		item.style.transform = ''
		item.style.opacity = ''
	})
})

const submitForm = document.querySelector('.footer__form');
submitForm.addEventListener('submit', e => {
	e.preventDefault();
	const userName = document.querySelector('.footer__form-input-name').value ;
	const userEmail = document.querySelector('.footer__form-input-email').value ;
	
})