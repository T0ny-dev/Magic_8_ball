const ball = document.getElementsByClassName("ball");
const message = document.getElementById("respondMessage");

// function mouseover and mouseout in ball
const moveBall = (ballMagic) => {
	ballMagic[0].addEventListener('mouseover', () => {
		ballMagic[0].classList.toggle("ball__Animation");
	})
}

const noMoveBall = (ballMagic) => {
	ballMagic[0].addEventListener('mouseout', () => {
		ballMagic[0].classList.remove("ball__Animation");
		ballMagic[0].classList.toggle("ball__nomove");
	})
}

// this function is the logical of the ball
const magicBall = (ballMagic, ballMessage) => {
	ballMagic[0].addEventListener("click", () => {
		ballMagic[0].classList.toggle("respond")
		const numberMagic = Math.floor(Math.random() * 10)
		ballMagic[0].addEventListener("click", () => {
			ballMessage.classList.toggle("hide")
		})
		if (numberMagic >= 0 && numberMagic < 2) {
			ballMessage.innerHTML = `NO`
			ballMessage.classList.remove("hide")
			ballMessage.classList.add("message__ball")
		} else if (numberMagic >= 2 && numberMagic < 4) {
			ballMessage.innerHTML = `It's not possible`
			ballMessage.classList.remove("hide")
			ballMessage.classList.add("message__ball")
		} else if (numberMagic >= 4 && numberMagic < 6) {
			ballMessage.innerHTML = `Definitely not`
			ballMessage.classList.remove("hide")
			ballMessage.classList.add("message__ball")
		} else if (numberMagic >= 6 && numberMagic < 8) {
			ballMessage.innerHTML = `It's possible`
			ballMessage.classList.remove("hide")
			ballMessage.classList.add("message__ball")
		} else if (numberMagic >= 8 && numberMagic < 10) {
			ballMessage.innerHTML = `YES`
			ballMessage.classList.remove("hide")
			ballMessage.classList.add("message__ball")
		} else {
			ballMessage.innerHTML = `I don't understand`
			ballMessage.classList.remove("hide")
			ballMessage.classList.add("message__ball")
		}
	})

}

moveBall(ball);
noMoveBall(ball);
magicBall(ball, message);