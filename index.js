require('./style.scss');
import App from './app';	

const featuredSwitcher = new App({
	tabsContainer: document.querySelector('.featured-switcher'),
	tabsButtons: document.querySelectorAll('.featured-switch'),
	tabsWindow: document.querySelector('.featured-window'),
	tabs: document.querySelectorAll('.featured')
});

featuredSwitcher.init();