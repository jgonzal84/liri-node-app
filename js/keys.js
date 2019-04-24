// Add the code required to import the `keys.js` file and store it in a variable.
  
// * You should then be able to access your keys information like so

  ```js
  var spotify = new Spotify(keys.spotify);
  ```

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};



// dotenv to be run as early as possible in app
require('dotenv').config()
// Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
// process.env now has the keys and values you defined in your .env file.

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
// Preload
// You can use the --require (-r) command line option to preload dotenv. By doing this, you do not need to require and load dotenv in your application code. This is the preferred approach when using import instead of require.

$ node -r dotenv/config your_script.js
// The configuration options below are supported as command line arguments in the format dotenv_config_<option>=value

$ node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars