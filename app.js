export default function App(options) {
	//set variables
	this.winWidth = window.innerWidth;
	this.tabsContainer = options.tabsContainer;
	this.tabsWindow = options.tabsWindow;
	this.tabs = options.tabs;
	this.tabsButtons = options.tabsButtons;
}

App.prototype.init = function() {
	// set width to tabs so they are off the screen
	for (let i = 0; i < this.tabs.length; i++) {
		this.tabs[i].style.left = `${this.winWidth * (i + 1)}px`;	
	}
	this.addListener();
}

App.prototype.addListener = function() {
	this.tabsContainer.addEventListener('click', this.handleClick.bind(this));
}

App.prototype.handleClick = function(e) {
	// get the tabIndex from the clicked button
	const tabIndex = e.target.getAttribute('data-tab');
	if (!tabIndex && tabIndex !== 0) return;

	// remove active class from the previous active button and add it to the clicked one
	for (let i = 0; i < this.tabsButtons.length; i++) {
		let btnClasslist = this.tabsButtons[i].classList;
		if (btnClasslist.contains('active')) {
			btnClasslist.remove('active');
		}
	}
	e.target.classList.add('active');

	// transform tab into view
	this.tabsWindow.style.transform = `translateX(-${this.winWidth * tabIndex}px)`;
}