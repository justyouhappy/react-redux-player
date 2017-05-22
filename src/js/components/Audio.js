class MyAudio {
	constructor(datalist, setProgress) {
		this.datalist = datalist;
		this.index = 0;
		this.len = datalist.length;
		this.music = new Audio();
		this.music.src = this.datalist[0].audio;
		this.music.preload = 'auto';
		this.autoplay = false;
		this.duration = this.datalist[0].duration;
		this.setProgress = setProgress;
	}
	play() {
		this.autoplay = true;
		this.setProgress();
		this.music.play();
	}
	setAudio() {
		this.music.src = this.datalist[this.index].audio;
		this.music.load();
		this.autoplay && this.play();
	}
	playNext() {
		this.index < this.len - 1 ? this.index++ : this.index = 0;
		this.setAudio();
	}
	playPre() {
		this.index > 0 ? this.index-- : this.index = this.len - 1;
		this.setAudio();
	}
	playIndex(index) {
		this.autoplay = true;
		this.index = index;
		this.setAudio();
	}
	pause() {
		this.autoplay = false;
		this.setProgress(true);
		this.music.pause();
	}
}
export default MyAudio;