const videoPart1 = [
	{ src:"videos/Gather.mp4", caption: "Gather" },
	{ src:"videos/Choose.mp4", caption: "Choose" },
	{ src:"videos/Organize.mp4", caption: "Organize" },
	{ src:"videos/Plan.mp4", caption: "Plan" },
	{ src:"videos/Dig.mp4", caption: "Dig" },
	{ src:"videos/Recreate.mp4", caption: "Recreate"}
	];// JavaScript Document

const videoPart2 = [
	{ src:"videos/Mix.mp4", caption: "Mix" },
	{ src:"videos/Innovate.mp4", caption: "Innovate" },
	{ src:"videos/Push.mp4", caption: "Push" },
	{ src:"videos/Commit.mp4", caption: "Commit" },
	{ src:"videos/Nurture.mp4", caption: "Nurture" },
	{ src:"videos/Polish.mp4", caption: "Polish"}
];

const videoPart3 = [
	{ src:"videos/Share.mp4", caption: "Share" },
	{ src:"videos/Display.mp4", caption: "Display" },
	{ src:"videos/Benefit.mp4", caption: "Benefit" },
	{ src:"videos/Indulge.mp4", caption: "Indulge" },
	{ src:"videos/Live.mp4", caption: "Live" },
	{ src:"videos/Observe.mp4", caption: "Observe"}
];

	const titleOverlay = document.getElementById("titleOverlay");
	const player = document.getElementById("player");
	const titleText = document.getElementById("titleText"); // NEW
	const replayBtn = document.getElementById("replayBtn");



function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);
//replayBtn.style.display = "block";


function buildVideo() {
	 titleOverlay.classList.add("playing");
     player.classList.add("fullscreen");
	replayBtn.style.display = "none";


  playlist = [
    picker(videoPart1),
    picker(videoPart2),
    picker(videoPart3),
  ];
	
  currentIndex = 0;

  playCurrent();		
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
  	player.load();
  	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
  });
}

// Advance when a video ends
player.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex < playlist.length) {
    playCurrent();
  } else {
    console.log("All three parts finished.");
	replayBtn.style.display = "block";
 }
});