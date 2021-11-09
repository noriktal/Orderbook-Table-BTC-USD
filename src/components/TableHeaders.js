function TableHeaders() {
    return (
        <thead>
            <tr >
                <th colSpan="4">BTC-USD</th>
            </tr>
            <tr>
                <th className="thBid">Bid Qty</th>
                <th className="thBid price">Bid Price</th>
                <th className="thAsk">Ask Price</th>
                <th className="thAsk">Ask Qty</th>
            </tr>
        </thead>
    );
  }
  
  export default TableHeaders;
  