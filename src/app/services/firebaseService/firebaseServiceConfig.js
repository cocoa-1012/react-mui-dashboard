const prodConfig = {
	// apiKey           : "YOUR_API_KEY",
	// authDomain       : "your-app.firebaseapp.com",
	// databaseURL      : "https://your-app.firebaseio.com",
	// projectId        : "your-app",
	// storageBucket    : "your-app.appspot.com",
	// messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
	apiKey: "AIzaSyDhLTA7oy9depCO6lYJVCrbRFBG0IA3rPY",
	authDomain: "adam-eve-test.firebaseapp.com",
	databaseURL: "https://adam-eve-test.firebaseio.com",
	projectId: "adam-eve-test",
	storageBucket: "adam-eve-test.appspot.com",
	messagingSenderId: "665584250603",
	appId: "1:665584250603:web:5270f26549561ad95818ae",
	measurementId: "G-MJG6SV33KG"
};

// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
const config = devConfig;

export default config;
