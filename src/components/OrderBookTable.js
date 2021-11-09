import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";


let message = JSON.stringify({
    "event": "bts:subscribe",
    "data": {
        "channel": "order_book_btcusd"
    }
});

const socket = new WebSocket("wss://ws.bitstamp.net");

function OrderBookTable() {

    const [orderData, setOrderData] = useState([]);
    
    useEffect(() => {
        socket.onopen = function(e) {
            console.log("connection established");
            socket.send(message);
          };

        socket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            try {
                if (data.event === "data") {
                    let bids = data.data.bids?.slice(0,5);
                    let asks = data.data.asks?.slice(0,5);
                    setOrderData([
                        {bidq: bids[0][1], bidp: bids[0][0], askq: asks[0][1], askp: asks[0][0]},
                        {bidq: bids[1][1], bidp: bids[1][0], askq: asks[1][1], askp: asks[1][0]},
                        {bidq: bids[2][1], bidp: bids[2][0], askq: asks[2][1], askp: asks[2][0]},
                        {bidq: bids[3][1], bidp: bids[3][0], askq: asks[3][1], askp: asks[3][0]},
                        {bidq: bids[4][1], bidp: bids[4][0], askq: asks[4][1], askp: asks[4][0]}
                    ]);
                      };
            }catch (err) {
                console.log(err.message);
            }
                
        };

        socket.onclose = function(event) {
            if (event.wasClean) {
              console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                console.log('onnection died');
            }
          };
    
        }, []);

    return (
      <div className="tableContainer">
        <table className="table">
                <TableHeaders />
                <tbody>
                    {orderData.length > 0 && orderData.map((row, i) =>
                        <TableRow 
                        key={`tr${i}`}
                        orderData={orderData[i]}/>
                        )}
                </tbody>
                
        </table>
      </div>
    );
  }
  
  export default OrderBookTable;