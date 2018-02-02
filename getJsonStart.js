let retter;

    document.addEventListener("DOMContentLoaded", loadJson);
    let modtager = document.querySelector(".templateModtager");
    let template = document.querySelector(".mytemplate");
    


async function loadJson() {
    
    let minliste = await fetch("menu.json");
    retter = await minliste.json();
    console.log(retter);
 
    //find og filtrer retter efter kategori og gem dem i ny arrey.

    let alle = retter.filter(ret => ret.kategori == "alle");
    let forretter = retter.filter(ret => ret.kategori == "forretter");
    let hovedretter = retter.filter(ret => ret.kategori == "hovedretter");
    let desserter = retter.filter(ret => ret.kategori == "desserter");
    let drikkevarer = retter.filter(ret => ret.kategori == "drikkevarer");

    document.querySelector("#filter-forretter").addEventListener("click", () => {
        visRetter(forretter, "Forretter")
    });
     document.querySelector("#filter-alle").addEventListener("click", () => {
        visRetter(retter, "Menu")
    });
     document.querySelector("#filter-hovedretter").addEventListener("click", () => {
        visRetter(hovedretter, "Hovedretter")
    });
     document.querySelector("#filter-desserter").addEventListener("click", () => {
        visRetter(desserter, "Desserter")
    });
     document.querySelector("#filter-drikkevarer").addEventListener("click", () => {
        visRetter(drikkevarer, "Drikkevarer")
    });

 
    visRetter(retter, "Menu");
}

function visRetter(retter, overskrift) {
    document.querySelector("#overskrift").textContent = overskrift;
    
    document.querySelector(".templateModtager").innerHTML = "";

    retter.forEach(hverRet => {
        let klon = template.cloneNode(true).content;
        klon.querySelector(".title").textContent = hverRet.navn;
        console.log(hverRet.billede);
        klon.querySelector(".photo").src = "babushka assets/imgs/small/" + hverRet.billede + "-sm.jpg";
        klon.querySelector(".description").textContent = hverRet.kortbeskrivelse;
        klon.querySelector(".price").textContent = hverRet.pris;
        modtager.appendChild(klon);
    })

}
