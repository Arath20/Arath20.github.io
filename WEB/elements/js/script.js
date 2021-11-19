window.onload =()=>{
    //CARGAR JSON
    let arrayElem=[];
    let txtElemento = document.getElementById('txtElemento');
    let txtSimbolo = document.getElementById ('txtSimbolo');
    let txtDescripcion = document.getElementById ('txtDescripcion');
    let xobj= new XMLHttpRequest();
    let periodic = document.getElementsByClassName("tabla-periodica");
    let data = document.getElementById('data');
    document.body.addEventListener('click', ()=>{
    }, true);
    xobj.overrideMimeType('application/json');
    xobj.open('GET','./js/PeriodicTableJSON.json',true);
    xobj.onreadystatechange = () =>{
        if(xobj.readyState == 4 && xobj.status== 200){
            let json=JSON.parse(xobj.responseText);
            arrayElem= json.elements;
            let todo= "";
            arrayElem.forEach(element => {
                let ce = "";
                let ei = "";
                switch (element.category) {
                    case 'noble gas':
                        ce = 'noble-gas';
                        break;
                    case 'metalloid':
                        ce = 'metalloid';
                        break;
                    case 'alkali metal':
                        ce = 'alkali';
                        break;
                    case 'alkaline earth metal':
                        ce = 'alkaline';
                        break;
                    case 'actinide':
                        ce = 'actinide';
                        break;
                    case 'lanthanide':
                        ce = 'lanthanide';
                        break;
                    case 'polyatomic nonmetal':
                        ce = 'polyatomic-non-metal';
                        break;
                    case 'transition metal':
                        ce = 'post-transition metal';
                        break;
                    case 'diatomic nonmetal':
                    case 'diatomic-nonmetal':
                        break;
                    default:
                        ce = 'unknown';
                        break;
                }
                switch (element.name){
                    case 'Helium':
                        ce = 'helium';
                        break;
                    case 'Hydrogen':
                    case 'Boron':
                    case 'Aluminium':
                    case 'Thorium':
                    case 'Cerium':
                        ei = element.name.toLowerCase();
                        break;
                }
                todo += `<li id="${ei}" class="${ce}" data-id="${element.number}" data-sym="${element.symbol}" data-name="${element.name}" data-desc="${element.summary}">
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`;
            });

    //CREAR EVENTOS
    periodic[0].innerHTML = todo;
let elem = document.getElementsByTagName('li');
for(let x=0;x<elem.length;x++){
    elem[x].addEventListener ('click',(e)=>{
    let name = elem[x].dataset.name;
    let sym = elem[x].dataset.sym;
    let desc = elem[x].dataset.desc;
    txtElemento.innerHTML = name;
    txtSimbolo.innerHTML = sym;
    txtDescripcion.innerHTML = desc;
    });
        }
}       
};
xobj.send(null);
}