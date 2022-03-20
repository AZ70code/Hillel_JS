

const scene = document.querySelector(".scene");
const ball = document.querySelector(".ball");
const sceneRect = scene.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const BORDER_WIDTH = 50;

let ballActive = false;

scene.addEventListener("mousemove", function (e) {
	if (!ballActive) return;

	const { clientX, clientY } = e;
	let left = clientX - sceneRect.left - BORDER_WIDTH - ballRect.width / 2;// обьявляем переменную
	let top = clientY - sceneRect.top - BORDER_WIDTH - ballRect.height / 2;// let вместо const

//============ homework ===========================================
	if(left < 0) left = 0;
	if(top < 0) top = 0;
	if(left > scene.clientWidth - BORDER_WIDTH * 2 - ballRect.width) {
		left = scene.clientWidth - BORDER_WIDTH * 2 - ballRect.width;
	}
	if(top > scene.clientHeight - BORDER_WIDTH * 2 - ballRect.height) {
		top = scene.clientHeight - BORDER_WIDTH * 2 - ballRect.height;
	}
//=======================================================================
	ball.style.transform = `translate(${left}px, ${top}px)`;
});

ball.addEventListener("click", () => {
	ballActive = !ballActive;
});
