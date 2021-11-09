
function TableRow({orderData}) {
    
    return (
        <tr>
            <td className="tdBid">{orderData.bidq}</td>
            <td className="tdBid price">{orderData.bidp}</td>
            <td className="tdAsk">{orderData.askp}</td>
            <td className="tdAsk">{orderData.askq}</td>
        </tr>
    );
  }
  
  export default TableRow;
  