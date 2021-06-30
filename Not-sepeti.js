/*   const yenigorev = document.querySelectorAll(".gorev-tamamlandi");
const item2=document.getElementsByClassName("gorev-tamamlandi");
const item3=document.getElementsByTagName('div')
const item4=document.querySelector(".gorev-tamamlandi")
console.log(item4);
*/
const yenigorev=document.querySelector('.input-gorev');
const btnyeniGorevEkle=document.querySelector('.btn-gorev-ekle');
const gorevListesi=document.querySelector('.gorev-listesi');

const gorevitemOlustur=gorev =>{
  const gorevDiv=document.createElement('div');
  gorevDiv.classList.add("gorev-item");
  console.log(gorev);
  console.log(gorevDiv);
  const gorevLi=document.createElement('li');
  gorevLi.classList.add("gorev-tanim");
  gorevLi.innerText=gorev;
  console.log(gorevLi);
  //li yi div e ekledik
  gorevDiv.appendChild(gorevLi);


  //div i ul ye ekledik.
  gorevListesi.appendChild(gorevDiv);

  //tamamlandı butonu

  const gorevTamamlandiBtn=document.createElement("button");
  gorevTamamlandiBtn.classList.add("gorev-btn");
  gorevTamamlandiBtn.classList.add("gorev-tamamlandi");

// kolaylık olması ıcın böyle yapabılırız
  gorevTamamlandiBtn.innerHTML=`<i class="far fa-calendar-check"></i>`;
  console.log(gorevTamamlandiBtn);

  //oluşturulan div içerisite gorev tamamlandı btn atıldı
  gorevDiv.appendChild(gorevTamamlandiBtn);

  // gorev sil butonu olusturuldu
  const gorevSilBtn=document.createElement("button");

  //gorev sil butonu için classlar eklendi.
  gorevSilBtn.classList.add("gorev-btn");
  gorevSilBtn.classList.add("gorev-btn-sil"); 

  // gorev sil butonu için i elementi eklendi
  gorevSilBtn.innerHTML=`<i class="fas fa-trash-alt"></i>`;
  
  //oluşturulan Div in içerisine gorevSilBtn atıldı.
  gorevDiv.appendChild(gorevSilBtn);

  //div i ul ye ekledık

  gorevListesi.appendChild(gorevDiv);


  yenigorev.value=``;





}
const gorevLocalStorageSave=gorev=>{
   let gorevler;
   if(localStorage.getItem("gorevler")==null){
     localStorage.setItem("1","index");
     

   }else{
     localStorage.setItem();
     //gorevler=JSON.parse(localStorage.getItem("gorevler"));
   }
   gorevler.push(gorev);
}




const gorevEkle= e =>{
    gorevitemOlustur(yenigorev.value);
    gorevLocalStorageSave(yenigorev.value);
e.preventDefault();

    
};
const gorevSilTamamla= e =>{
  const tiklanilanEleman=e.target;
  console.log(tiklanilanEleman);
  if(tiklanilanEleman.classList.contains("gorev-tamamlandi")){
    tiklanilanEleman.parentElement.classList.toggle("gorev-tamamlandi");

  }
  if(tiklanilanEleman.classList.contains("gorev-btn-sil")){
    console.log("silme butonu calıstı")
    tiklanilanEleman.parentElement.classList.toggle("yavasca-kaybol");
    tiklanilanEleman.parentElement.addEventListener("transitionend",()=>{
      tiklanilanEleman.parentElement.remove();
      /*transitionend yavasca kaybolmasını saglıor */
    })
  }
}
gorevListesi.addEventListener("click",gorevSilTamamla);
btnyeniGorevEkle.addEventListener("click",gorevEkle); 
console.log(gorevListesi);