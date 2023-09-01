export default function Portfolio() {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
		 
      <div className="card" style={{ width: '18rem' }}>
        <img src="public\images\Reel-Reviews.png" className="card-img-top" alt="Reel Reviews" />
        <div className="card-body">
          <h5 className="card-title">Reel Reviews</h5>
          <p className="card-text">Fetching data from the OMDB API, search for your favorite movies and create reviews with an authorized account!</p>
          <a href="https://cinemaserver-7dafae9cd971.herokuapp.com/" className="card-link">Website</a>
          <a href="https://github.com/mattschneble/ReelReviews.git" className="card-link">GitHub</a>
        </div>
    </div>
		<div className="card" style={{ width: '18rem' }}>
		<img src="public\images\Index.html-ss.png" className="card-img-top" alt="Server Side API Project" />
		  <div className="card-body">
			<h5 className="card-title">Server Side API Project</h5>
			<p className="card-text">Using Art institute of Chicagos API with New York Times API to showcase the art of doomscrolling. Track how long you spend getting informed on recent news or looking at cat photos! </p>
			<a href="https://popiuy.github.io/server-side-api-project/" className="card-link">Website</a>
			<a href="https://github.com/Popiuy/server-side-api-project" className="card-link">GitHub</a>
		  </div>
		</div>
		<div className="card" style={{ width: '18rem' }}>
		<img src="public\images\Weather-Dashboard.png" className="card-img-top" alt="Weather Forecast" />
		  <div className="card-body">
			<h5 className="card-title">Weather Forecast</h5>
			<p className="card-text">Using the OpenWeather API, search for a city to find out the current and 5 day forecast!</p>
			<a href="https://popiuy.github.io/weather-dashboard/" className="card-link">Website</a>
			<a href="https://github.com/Popiuy/weather-dashboard" className="card-link">GitHub</a>
		  </div>
		</div>
		<div className="card" style={{ width: '18rem' }}>
		<img src="public\images\Note-Taker.png" className="card-img-top" alt="Note Taker" />
		  <div className="card-body">
			<h5 className="card-title">Note Taker</h5>
			<p className="card-text">Using express.js for routes, users can have a place to write down thoughts, memos, to-dos that will be saved with a click of a button.</p>
			<a href="https://guarded-beach-27757-b07ca21eaa30.herokuapp.com/notes" className="card-link">Website</a>
			<a href="https://github.com/Popiuy/note-taker" className="card-link">GitHub</a>
		  </div>
		</div>
		<div className="card" style={{ width: '18rem' }}>
		<img src="public\images\Text-Editor.png" className="card-img-top" alt="PWA Text Editor" />
		  <div className="card-body">
			<h5 className="card-title">PWA Text Editor</h5>
			<p className="card-text">This app lets you take notes and saves them even on reload of the page, plus a manifest!</p>
			<a href="https://infinite-temple-80971-af01a9892533.herokuapp.com/" className="card-link">Website</a>
			<a href="https://github.com/Popiuy/PWA-Text-Editor" className="card-link">GitHub</a>
		  </div>
		</div>
		<div className="card" style={{ width: '18rem' }}>
		<img src="public\images\Schedule ss.png" className="card-img-top" alt="Work Day Scheduler" />
		  <div className="card-body">
			<h5 className="card-title">Work Day Scheduler</h5>
			<p className="card-text">This app lets you schedule your day according to the local time!</p>
			<a href="https://popiuy.github.io/work-day-scheduler/" className="card-link">Website</a>
			<a href="https://github.com/Popiuy/work-day-scheduler" className="card-link">GitHub</a>
		  </div>
		</div>
	  </div>
	);
  }
  