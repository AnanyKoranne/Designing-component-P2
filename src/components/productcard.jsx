// write product card here
import Button from "./button";
export default function Productcard() {
    let prodImg = 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmGoUh3I3_QNWEJY7L5LwRg06ZAxMbd1D_kv8h6JqhA45TT2-Nt0_ifjCspm0KPJBhzIz1tYBoIK1GUzNvSgW_WKSAxO2wcygMOqNVfeq5tSH6TyV_Dl9Npw&usqp=CAE'
    let prodName = 'Boat Nirvana 751 ANC'
    let price = 5900
    const handleViewProduct = () => {
        alert("Redirecting to product details...");
      };
    return(
        <div style={{border : "1px solid white"}}>
            <img src={prodImg} alt="" height={300} width={300}/>
            <h2>{prodName}</h2>
            <h3 style={{color: 'green'}}>Price : {price}</h3>
            <Button text="View Product" onClick={handleViewProduct} />
        </div>

    );
}