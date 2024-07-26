const changeBtn1 = document.getElementById('btn-1')
const changeBtn2 = document.getElementById('btn-2')
const changeBtn3 = document.getElementById('btn-3')

const redSImage = document.querySelector('.red-s')

function redBtn() {
	redSImage.src = 'images/jordan_red.png'
	const changeCols = document.querySelectorAll('.ChangeCol')
	changeCols.forEach((element) => {
		element.style.backgroundColor = '#d11d29'
	})
}

function blueBtn() {
	redSImage.src = 'images/blue.png'
	const changeCols = document.querySelectorAll('.ChangeCol')
	changeCols.forEach((element) => {
		element.style.backgroundColor = 'blue'
	})
}

function greenBtn() {
	redSImage.src = 'images/green.png'
	const changeCols = document.querySelectorAll('.ChangeCol')
	changeCols.forEach((element) => {
		element.style.backgroundColor = 'green'
	})
}

changeBtn1.addEventListener('click', blueBtn)
changeBtn2.addEventListener('click', greenBtn)
changeBtn3.addEventListener('click', redBtn)
