


##Prerequisites

- npm, node
- jspm
- babel-node


##Installation

    npm install
    jspm install

##Run

First, set Sens'it token to `token.js`:

    export default  {
      value : 'your_token'
    };

Then,

    babel-node app.js
    # or nodemon --exec babel-node --stage 0 -- app.js

Finally, open [http://localhost:8080](http://localhost:8080)