function converttoLira()
{ const manat = parseFloat(document.querySelector("#az").value);
  const netice =(manat * 18.66).toFixed(2)
  console.log(netice)
  document.querySelector("#result").innerText = netice + " lireye beraberdir"
 
   

}






 const calcButtonu = document.querySelector("button")

 calcButtonu.addEventListener('click',converttoLira)




 

 



