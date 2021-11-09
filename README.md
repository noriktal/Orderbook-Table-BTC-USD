

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Several Considerations

- This is my first attempt at working with WebSockets. I have used the WebSocket methods inside a useEffect hook (in the OrderBookTable component). I am not entirely sure this is the right place for them (a deeper understaning of how this connection works would be helpful here).

- Generally, it is probably better to place all the WebSocket code in a custom hook- that would have been my next sep.

- I have intentionally left several "console.log"s indicating the status of the connection to the WebSocket.

