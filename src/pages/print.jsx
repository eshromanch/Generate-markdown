import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';

function printpage() {
    //Get the print button and put it into a variable
    var printButton = document.getElementById("printpagebutton");
    //Set the print button visibility to 'hidden' 
    printButton.style.visibility = 'hidden';
    //Print the page content
    window.print()
    printButton.style.visibility = 'visible';
}
function Print() {
    const router = useRouter()
    console.log(router.query);
    const data = router.query.data
  return (

  <>
{/* <Link href={"/"}><button id='back'>Back</button></Link> */}
    <div dangerouslySetInnerHTML={{ __html: data }}>

</div>
<button id='printpagebutton' onClick={printpage} >Print</button>
{/* <button id='printpagebutton' onClick={window.print()} >Print</button> */}
  </>
  )
}

export default Print