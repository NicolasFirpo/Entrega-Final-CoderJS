console.log("\"Entrega Final\" pidiendo datos");

let personaje='';
const Personajes=[];
const Jugadores=[];
const mobs=[];



let nickname='';

class Personaje{
    constructor(nombre){
        //propiedades
        this.nombre=nombre;
        this.poder=0;
        this.danio=0;
        this.nivel=1;
        this.vida=0;
        this.mana=0;
        this.armadura=0;
        this.resistencia=0;
    }


        class(Class){
            this.clase=Class;
                switch(Class){
                    case 'mago': 
                        this.poder=30;
                        this.danio=10;
                        this.vida=100;
                        this.mana=150;
                        this.armadura=5;
                        this.resistencia=25;
                        Jugadores.push({nombre:`${nickname}`,clase:`${Class}`,nivel:`${this.nivel}`,poder:`${this.poder}`,danio:`${this.danio}`,
                        vida:`${this.vida}`,mana:`${this.mana}`,armadura:`${this.armadura}`,resistencia:`${this.resistencia}`});


                        break;
                    case 'paladin':
                        this.poder=10;
                        this.danio=30;
                        this.vida=170;
                        this.mana=80;
                        this.armadura=25;
                        this.resistencia=5;
                        Jugadores.push({nombre:`${nickname}`,clase:`${Class}`,nivel:`${this.nivel}`,poder:`${this.poder}`,danio:`${this.danio}`,
                        vida:`${this.vida}`,mana:`${this.mana}`,armadura:`${this.armadura}`,resistencia:`${this.resistencia}`});

                        break;
                    case 'monje':
                        this.poder=20;
                        this.danio=20;
                        this.vida=125;
                        this.mana=125;
                        this.armadura=15;
                        this.resistencia=15;
                        Jugadores.push({nombre:`${nickname}`,clase:`${Class}`,nivel:`${this.nivel}`,poder:`${this.poder}`,danio:`${this.danio}`,
                        vida:`${this.vida}`,mana:`${this.mana}`,armadura:`${this.armadura}`,resistencia:`${this.resistencia}`});

                        break;
                }
            }
        recibirDanio(valor){
            switch(this.clase){
                case 'mago':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'paladin':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'monje':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
            }
            this.vida=this.vida-(valor-this.buff);
        
        }
        atacar(valor){
            switch(this.clase){
                case 'mago':
                    this.attak=(valor+(danio*0.2));
                    return parseInt(this.attak);
                case 'paladin':
                    this.attak=(valor+(danio*0.5));
                    return parseInt(this.attak);
                case 'monje':
                    this.attak=(valor+(danio*0.3));
                    return parseInt(this.attak);
                default:
                    this.attak=(valor+(danio*0.3));
                    return parseInt(this.attak);
            }
        }
        lanzarHechizo(valor){
            this.spell=valor;
            switch(this.clase){
                case 'mago':
                    this.spell=(valor+(poder*0.5));
                    return parseInt(this.spell);
                case 'paladin':
                    this.spell=(valor+(poder*0.2));
                    return parseInt(this.spel);
                case 'monje':
                    this.spell=(valor+(poder*0.3));
                    return parseInt(this.spell);
                default:
                    this.spell=(valor+(poder*0.3));
                    return parseInt(this.spell);
            }
        }
        recibirCura(valor){
            this.vida+=valor
        }
        resistenciaFisica(valor){
            switch(this.clase){
                case 'mago':
                    this.buff=(valor-(armadura*0.2));
                    return (this.buff);
                case 'paladin':
                    this.buff=(valor-(armadura*0.5));
                    return (this.buff);
                case 'monje':
                    this.buff=(valor-(armadura*0.3));
                    return (this.buff);
                default:
                    this.buff=(valor-(armadura*0.3));
                    return (this.buff);
            }
            
        }
        resistenciaMagica(valor){
            switch(this.clase){
                case 'mago':
                    this.buff=(valor-(resistencia*0.5));
                    return parseInt(this.buff2);
                case 'paladin':
                    this.buff=(valor-(resistencia*0.2));
                    return parseInt(this.buff2);
                case 'monje':
                    this.buff=(valor-(resistencia*0.3));
                    return parseInt(this.buff2);
                default:
                    this.buff=(valor-(resistencia*0.3));
                    return parseInt(this.buff2);
            }
        }
        lanzarCura(valor){
            switch(this.clase){
                case 'mago':
                    this.heal=(valor+(poder*0.2));
                    return parseInt(this.heal);
                case 'paladin':
                    this.heal=(valor+(poder*0.3));
                    return parseInt(this.heal);
                case 'monje':
                    this.heal=(valor+(poder*0.5));
                    return parseInt(this.heal);
                default:
                    this.heal=(valor+(poder*0.3));
                    return parseInt(this.heal);
            }
        }
        subirNivel(){
            this.nivel++;
            
            switch(this.clase){
                case 'mago':
                    this.vida=vida+(parseInt(vida*0.2));
                    this.mana=mana+(parseInt(mana*0.4));
                    this.armadura+=5;
                    this.resistencia+=15;
                    this.poder+=15;
                    this.danio+=5;
                    break;
                case 'paladin':
                    this.vida=vida+(parseInt(vida*0.4));
                    this.mana=mana+(parseInt(mana*0.2));
                    this.armadura+=15;
                    this.resistencia+=5;
                    this.poder+=5;
                    this.danio+=15;  
                    break;
                case 'monje':
                    this.vida=vida+(parseInt(vida*0.3));
                    this.mana=mana+(parseInt(mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
                    break;
                default: 
                    this.vida=vida+(parseInt(vida*0.3));
                    this.mana=mana+(parseInt(mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
                       
                }
            
        }


};

class MOBS{
    constructor(nombre){
        //propiedades
        this.nombre=nombre;
        this.poder=0;
        this.danio=0;
        this.nivel=0;
        this.vida=0;
        this.mana=0;
        this.armadura=0;
        this.resistencia=0;
    }


        class(Class){
            this.clase=Class;
                switch(Class){
                    case 'brujo': 
                        this.poder=15;
                        this.danio=5;
                        this.vida=30;
                        this.mana=50;
                        this.armadura=5;
                        this.resistencia=10;
                        mobs.push({nombre:`${nickname}`,clase:`${Class}`,nivel:`${this.nivel}`,poder:`${this.poder}`,danio:`${this.danio}`,
                        vida:`${this.vida}`,mana:`${this.mana}`,armadura:`${this.armadura}`,resistencia:`${this.resistencia}`});


                        break;
                    case 'esqueleto':
                        this.poder=5;
                        this.danio=15;
                        this.vida=50;
                        this.mana=30;
                        this.armadura=10;
                        this.resistencia=5;
                        mobs.push({nombre:`${nickname}`,clase:`${Class}`,nivel:`${this.nivel}`,poder:`${this.poder}`,danio:`${this.danio}`,
                        vida:`${this.vida}`,mana:`${this.mana}`,armadura:`${this.armadura}`,resistencia:`${this.resistencia}`});

                        break;
                    case 'nigromante':
                        this.poder=10;
                        this.danio=10;
                        this.vida=40;
                        this.mana=40;
                        this.armadura=8;
                        this.resistencia=8;
                        mobs.push({nombre:`${nickname}`,clase:`${Class}`,nivel:`${this.nivel}`,poder:`${this.poder}`,danio:`${this.danio}`,
                        vida:`${this.vida}`,mana:`${this.mana}`,armadura:`${this.armadura}`,resistencia:`${this.resistencia}`});

                        break;
                }
            }
        recibirDanio(valor){
            switch(this.clase){
                case 'brujo':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'esqueleto':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'nigromante':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
            }
            this.vida=this.vida-(valor-this.buff);
        
        }
        atacar(valor){
            switch(this.clase){
                case 'brujo':
                    this.attak=(valor+(danio*0.2));
                    return parseInt(this.attak);
                case 'esqueleto':
                    this.attak=(valor+(danio*0.5));
                    return parseInt(this.attak);
                case 'nigromante':
                    this.attak=(valor+(danio*0.3));
                    return parseInt(this.attak);
                default:
                    this.attak=(valor+(danio*0.3));
                    return parseInt(this.attak);
            }
        }
        lanzarHechizo(valor){
            this.spell=valor;
            switch(this.clase){
                case 'brujo':
                    this.spell=(valor+(poder*0.5));
                    return parseInt(this.spell);
                case 'esqueleto':
                    this.spell=(valor+(poder*0.2));
                    return parseInt(this.spel);
                case 'nigromante':
                    this.spell=(valor+(poder*0.3));
                    return parseInt(this.spell);
                default:
                    this.spell=(valor+(poder*0.3));
                    return parseInt(this.spell);
            }
        }
        recibirCura(valor){
            this.vida+=valor
        }
        resistenciaFisica(valor){
            switch(this.clase){
                case 'brujo':
                    this.buff=(valor-(armadura*0.2));
                    return (this.buff);
                case 'esqueleto':
                    this.buff=(valor-(armadura*0.5));
                    return (this.buff);
                case 'nigromante':
                    this.buff=(valor-(armadura*0.3));
                    return (this.buff);
                default:
                    this.buff=(valor-(armadura*0.3));
                    return (this.buff);
            }
            
        }
        resistenciaMagica(valor){
            switch(this.clase){
                case 'brujo':
                    this.buff=(valor-(resistencia*0.5));
                    return parseInt(this.buff2);
                case 'esqueleto':
                    this.buff=(valor-(resistencia*0.2));
                    return parseInt(this.buff2);
                case 'nigromante':
                    this.buff=(valor-(resistencia*0.3));
                    return parseInt(this.buff2);
                default:
                    this.buff=(valor-(resistencia*0.3));
                    return parseInt(this.buff2);
            }
        }
        lanzarCura(valor){
            switch(this.clase){
                case 'brujo':
                    this.heal=(valor+(poder*0.2));
                    return parseInt(this.heal);
                case 'esqueleto':
                    this.heal=(valor+(poder*0.3));
                    return parseInt(this.heal);
                case 'nigromante':
                    this.heal=(valor+(poder*0.5));
                    return parseInt(this.heal);
                default:
                    this.heal=(valor+(poder*0.3));
                    return parseInt(this.heal);
            }
        }
        subirNivel(){
            this.nivel++;
            
            switch(this.clase){
                case 'brujo':
                    this.vida=vida+(parseInt(vida*0.2));
                    this.mana=mana+(parseInt(mana*0.4));
                    this.armadura+=3;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=3;
                    break;
                case 'esqueleto':
                    this.vida=vida+(parseInt(vida*0.4));
                    this.mana=mana+(parseInt(mana*0.2));
                    this.armadura+=10;
                    this.resistencia+=3;
                    this.poder+=3;
                    this.danio+=10;  
                    break;
                case 'nigromante':
                    this.vida=vida+(parseInt(vida*0.3));
                    this.mana=mana+(parseInt(mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
                    break;
                default: 
                    this.vida=vida+(parseInt(vida*0.3));
                    this.mana=mana+(parseInt(mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
                       
                }
            
        }


};

loadFromLocalStorage()

function loadFromLocalStorage() {
    const PJ=localStorage.getItem('Jugadores')?localStorage.getItem('Jugadores'):false;
    PJ?PJaceptado():volver();
    const PJparse=JSON.parse(PJ);
    Jugadores.push(PJparse);
    //console.log(PJ);
    //console.log(PJparse);
    
    //console.log(PJ);
    //console.log(personaje);
 
}
    

const crearPJ=document.getElementById('crearPJ') ? document.getElementById('crearPJ').addEventListener('click', creacionPersonaje):[];


function creacionPersonaje(){
    console.log('creandoPJ');
    clearUI()
    pantallaCreacion()
};
const options=document.getElementById('options') ? document.getElementById('options').addEventListener('click', opciones):[];




function clearUI() {
    const welcome=document.getElementById('welcome')
    welcome.innerHTML=''
}

function pantallaCreacion() {
    const creacionpj=document.getElementById('welcome')
    creacionpj.innerHTML=`<h1>Creacion de Personaje</h3>
    <div id="root">Elegir Nombre: <input type="text" id='name'/><div id=elegirclase></div></div>`

    const nameInput=document.getElementById("name");
    nameInput.addEventListener('change', createClassPJ);

    function createClassPJ() {
        console.log('Eligiendo Clase Para '+ this.value);
        nickname=this.value;
        var claseSeleccionada=''
        const clase=document.getElementById('elegirclase')
        clase.innerHTML=`<li>Elegir Clase: </li>
        <button id="ClaseMago">Mago</button><div id="mago"></div></br>
    
        <button id="ClasePaladin">Paladin</button><div id="paladin"></div></br>
    
        <button id="ClaseMonje">Monje</button></br><div id="monje"></div>
    
        <button id="acceptPJ">ACEPTAR</button><button id="back">VOLVER</button>`;
    
        const magoButton=document.getElementById("ClaseMago")
        const mago=document.getElementById("mago")
        magoButton.addEventListener('click', elegirClaseMago)
        
        function elegirClaseMago() {
            Personajes.length=0;
            Jugadores.length=0;
            claseSeleccionada='Mago'
            Personajes.push(personaje=new Personaje(nickname));
            personaje.class('mago')
            console.log(Jugadores);
            paladin.innerHTML='';
            monje.innerHTML='';
            mago.innerHTML=`Atributos: <div id="atributosMago"></div>`;
            const atributos=document.getElementById('atributosMago');
            atributos.innerHTML=`<li>poder: ${personaje.poder}</li> <li>danio: ${personaje.danio}</li> <li>vida: ${personaje.vida}</li>  
            <li>mana: ${personaje.mana}</li> <li>armadura:${personaje.armadura}</li> <li>resistencia:${personaje.resistencia}</li>`;
            
            
        }
        const paladinButton=document.getElementById("ClasePaladin")
        const paladin=document.getElementById("paladin")
        paladinButton.addEventListener('click', elegirClasePaladin)
      
        function elegirClasePaladin() {
            Personajes.length=0;
            Jugadores.length=0;
            claseSeleccionada='Paladin'
            Personajes.push(personaje=new Personaje(nickname));
            personaje.class('paladin')
            console.log(Jugadores);
            mago.innerHTML='';
            monje.innerHTML='';
            paladin.innerHTML=`Atributos: <div id="atributosPaladin"></div>`;
            const atributos=document.getElementById('atributosPaladin');
            atributos.innerHTML=`<li>poder: ${personaje.poder}</li> <li>danio: ${personaje.danio}</li> <li>vida: ${personaje.vida}</li>  
            <li>mana: ${personaje.mana}</li> <li>armadura:${personaje.armadura}</li> <li>resistencia:${personaje.resistencia}</li>`;
        }
        const monjeButton=document.getElementById("ClaseMonje")
        const monje=document.getElementById("monje")
        monjeButton.addEventListener('click', elegirClaseMonje)

        function elegirClaseMonje() {
            Personajes.length=0;
            Jugadores.length=0;
            claseSeleccionada='Monje'
            Personajes.push(personaje=new Personaje(nickname));
            personaje.class('monje')
            console.log(Jugadores);
            paladin.innerHTML='';
            mago.innerHTML='';
            monje.innerHTML=`Atributos: <div id="atributosMonje"></div>`;
            const atributos=document.getElementById('atributosMonje');
            atributos.innerHTML=`<li>poder: ${personaje.poder}</li> <li>danio: ${personaje.danio}</li> <li>vida: ${personaje.vida}</li>  
            <li>mana: ${personaje.mana}</li> <li>armadura:${personaje.armadura}</li> <li>resistencia:${personaje.resistencia}</li>`;
            
        }
        
        const accept=document.getElementById("acceptPJ")
        accept.addEventListener('click', aceptar)
        const back = document.getElementById("back");
        back.addEventListener('click', volver);
        function aceptar() {
            const aceptarpj=claseSeleccionada;
            aceptarpj?Swal.fire({
                title: 'Desea Confirmar el Personaje?',
                text: `Se creara un ${claseSeleccionada} con el nombre ${nickname}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
            }).then((result) => {
                if (result.isConfirmed) {
                    saveToLocalStorage();
                    clearUI()
                    PJaceptado()
        
                Swal.fire(
                    'Personaje Creado!',
                    'Se podra borrar desde el menu opciones',
                    'info'
                )
                }
            }):Swal.fire({
                title: 'NO HA SELECCIONADO NINGUNA CLASE',
                text: `Debe seleccionar una clase para continuar`,
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Volver'
            }).then((result) => {
                if (result.isConfirmed) {
                    pantallaCreacion()
                }
                })
            }
        }
        
       
    }
   

function volver() {
    Personajes.length=0;
    Jugadores.length=0;
    
    const back=document.getElementById('welcome')
    back.innerHTML=`
        <h1>Bienvenido Aventurero!</h1>
        <div id="opciones">
            <li><button id="crearPJ">Crear Personaje</button></li>
            <li><button id="options">Opciones</button></li>
            <li><button id="credits">Creditos</button></li>
        </div>`;
    const crearPJ=document.getElementById('crearPJ');
    crearPJ.addEventListener('click', creacionPersonaje);
    const credits=document.getElementById('credits');
    credits.addEventListener('click', creditos)
    const options=document.getElementById('options');
    options.addEventListener('click', opciones)
}
function opciones() {
    console.log('options');
    clearUI
    const opciones=document.getElementById('welcome')
    opciones.innerHTML=`
        <h1>Opciones</h1>
        <div id="opciones">
            <li><button id="deletePJ">Borrar Personaje</button></li>
            <li><button id="volver">Volver</button></li>
        </div>`;
    const vuelta = document.getElementById("volver");
    const PJ=localStorage.getItem('Jugadores') ? vuelta.addEventListener('click', PJaceptado) : vuelta.addEventListener('click', volver);
    const borrarpj=document.getElementById('deletePJ')
    const existencia=localStorage.getItem('Jugadores')?borrarpj.addEventListener('click', eliminarPersonaje):borrarpj.addEventListener('click', PJinexistente)
    function PJinexistente() {
        Swal.fire({
            title: 'NO HAY UN PERSONAJE PARA ELMINIAR',
            text: `Intente creando un personaje`,
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Confirmar'
        }).then((result) => {
            if (result.isConfirmed) {
                opciones()
            }
        })
    }
    function eliminarPersonaje() {
        Swal.fire({
            title: 'Desea Eliminar el Personaje?',
            text: `De aceptar se habilitara la creacion para un nuevo personaje`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('Jugadores');
                volver()
    
            Swal.fire(
                'Personaje eliminado!',
                '',
                'info'
            )
            }
        })
        


    }
}
function creditos() {
    clearUI();
    const cred = document.getElementById('welcome');
    cred.innerHTML=`
        <h1>CREDITOS</h1>
        <div id="credits">
            <strong>Creado por Nicolas Firpo en el curso de JS de CODERHOUSE</strong>
            <li><button id="volver">Volver</button></li>
        </div>`;
        const vuelta = document.getElementById("volver");
        const PJ=localStorage.getItem('Jugadores') ? vuelta.addEventListener('click', PJaceptado) : vuelta.addEventListener('click', volver);
}


function PJaceptado() {
    clearUI()
    const PJCreated=document.getElementById('welcome')
    PJCreated.innerHTML=`
            <h1>Bienvenido Aventurero!</h1>
            <div id="opciones">
                <li><button id="startGame">Comenzar Juego</button></li>
                <li><button id="options">Opciones</button></li>
                <li><button id="credits">Creditos</button></li>
            </div>`;
    
    const options=document.getElementById('options');
    options.addEventListener('click', opciones)
    const credits=document.getElementById('credits');
    credits.addEventListener('click', creditos)
    const startGame=document.getElementById('startGame')
    startGame.addEventListener('click', comenzarJuego)
}


function comenzarJuego() {
    clearUI()
    const PJ=localStorage.getItem('Jugadores')?localStorage.getItem('Jugadores'):false;
    const PJparse=JSON.parse(PJ);
    Jugadores.push(PJparse);
    console.log(PJ);
    console.log(PJparse);
    switch(PJparse[0].clase){
        case 'mago': 
        const imagenMago=document.createElement('img')
        imagenMago.src="img/mago.jpg"
        imagenMago.id='imgMago'
        const clasemago=document.getElementById('welcome')
        const datosmago=document.createElement('p')
        datosmago.innerHTML=`Personaje: ${PJparse[0].nombre} Nivel: ${PJparse[0].nivel}`
        clasemago.appendChild(datosmago)
        clasemago.appendChild(imagenMago)
        const statsmago=document.createElement('div')
        statsmago.innerHTML=`Vida:${PJparse[0].vida} Mana:${PJparse[0].mana} Poder:${PJparse[0].poder} 
        Daño:${PJparse[0].danio} Armadura:${PJparse[0].armadura} Resistencia:${PJparse[0].resistencia}`
        clasemago.appendChild(statsmago)
        const accionesmago=document.createElement('div')
        accionesmago.innerHTML=`<button id="attack">Atacar<button/> <button id="Spell">Lanzar Hechizo<button/> <button id="Heal">Curar<button/>`
        clasemago.appendChild(accionesmago)
        break;
        case 'paladin': 
        const imagenPaladin=document.createElement('img')
        imagenPaladin.src="img/pala.jpg"
        imagenPaladin.id="imgPaladin"
        const clasepaladin=document.getElementById('welcome')
        const datospaladin=document.createElement('p')
        datospaladin.innerHTML=`Personaje: ${PJparse[0].nombre} Nivel: ${PJparse[0].nivel}`
        clasepaladin.appendChild(datospaladin)
        clasepaladin.appendChild(imagenPaladin)
        const statspaladin=document.createElement('div')
        statspaladin.innerHTML=`Vida:${PJparse[0].vida} Mana:${PJparse[0].mana} Poder:${PJparse[0].poder} 
        Daño:${PJparse[0].danio} Armadura:${PJparse[0].armadura} Resistencia:${PJparse[0].resistencia}`
        clasepaladin.appendChild(statspaladin)
        const accionespaladin=document.createElement('div')
        accionespaladin.innerHTML=`<button id="attack">Atacar<button/> <button id="Spell">Lanzar Hechizo<button/> <button id="Heal">Curar<button/>`
        clasepaladin.appendChild(accionespaladin)
        break;
        case 'monje': 
        const imagenMonje=document.createElement('img')
        imagenMonje.src="img/monje.jpg"
        imagenMonje.id="imgMonje"
        const clasemonje=document.getElementById('welcome')
        const datosmonje=document.createElement('p')
        datosmonje.innerHTML=`Personaje: ${PJparse[0].nombre} Nivel: ${PJparse[0].nivel}`
        clasemonje.appendChild(datosmonje)
        clasemonje.appendChild(imagenMonje)
        const statsmonje=document.createElement('div')
        statsmonje.innerHTML=`Vida:${PJparse[0].vida} Mana:${PJparse[0].mana} Poder:${PJparse[0].poder} 
        Daño:${PJparse[0].danio} Armadura:${PJparse[0].armadura} Resistencia:${PJparse[0].resistencia}`
        clasemonje.appendChild(statsmonje)
        const accionesmonje=document.createElement('div')
        accionesmonje.innerHTML=`<button id="attack">Atacar<button/> <button id="Spell">Lanzar Hechizo<button/> <button id="Heal">Curar<button/>`
        clasemonje.appendChild(accionesmonje)
        break;
    }
    fetch('EntregaFinal.json')
    .then(result=>result.json())
    .then(data=>{
        const enemigo=document.getElementById('welcome')
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        const enemigoRandom=getRandomArbitrary(1,4)
          switch (parseInt(enemigoRandom)) {
            case 1:
                const imagenDemonio=document.createElement('img')
                imagenDemonio.src="img/demon.jpg"
                const datosDemonio=document.createElement('p')
                datosDemonio.innerHTML=`Enemigo: ${data[0].nombre} Nivel: ${data[0].nivel}`
                enemigo.appendChild(datosDemonio)
                enemigo.appendChild(imagenDemonio)
                const statsDemonio=document.createElement('div')
                statsDemonio.innerHTML=`Vida:${data[0].vida} Mana:${data[0].mana} Poder:${data[0].poder} 
                Daño:${data[0].danio} Armadura:${data[0].armadura} Resistencia:${data[0].resistencia}`
                enemigo.appendChild(statsDemonio)
                break;
            case 2:
                const imagenEsqueleto=document.createElement('img')
                imagenEsqueleto.src="img/esqueleto.jpg"
                const datosEsqueleto=document.createElement('p')
                datosEsqueleto.innerHTML=`Enemigo: ${data[1].nombre} Nivel: ${data[1].nivel}`
                enemigo.appendChild(datosEsqueleto)
                enemigo.appendChild(imagenEsqueleto)
                const statsEsqueleto=document.createElement('div')
                statsEsqueleto.innerHTML=`Vida:${data[1].vida} Mana:${data[1].mana} Poder:${data[1].poder} 
                Daño:${data[1].danio} Armadura:${data[1].armadura} Resistencia:${data[1].resistencia}`
                enemigo.appendChild(statsEsqueleto)
                break;
            case 3:
                const imagenNigromante=document.createElement('img')
                imagenNigromante.src="img/necromancer.jpg"
                const datosNigromante=document.createElement('p')
                datosNigromante.innerHTML=`Enemigo: ${data[2].nombre} Nivel: ${data[2].nivel}`
                enemigo.appendChild(datosNigromante)
                enemigo.appendChild(imagenNigromante)
                const statsNigromante=document.createElement('div')
                statsNigromante.innerHTML=`Vida:${data[2].vida} Mana:${data[2].mana} Poder:${data[2].poder} 
                Daño:${data[2].danio} Armadura:${data[2].armadura} Resistencia:${data[2].resistencia}`
                enemigo.appendChild(statsNigromante)
                break;
            }
            console.log(data)
    })
}

function saveToLocalStorage() {
    const PJ=JSON.stringify(Jugadores);
    localStorage.setItem('Jugadores', PJ);
    
}