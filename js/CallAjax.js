GetDatos();

/*llamada*/
function GetDatos() {
    var ubicacion = document.getElementById("cmbUbicacion");
    
    // if (ubicacion.value != null) {
    //     url = "https://censopoblacion.gt/indicadores/2/"+ubicacion.value+"";
    // }
    // else {
        url = "https://censopoblacion.gt/indicadores/2/999";
    // }

    var cantidadH = document.getElementById('cantidadH');
    // const cantidadM = document.getElementById("cantidadM");
    // const porcentajeH = document.getElementById("porcentajeH");
    // const porcentajeM = document.getElementById("porcentajeM");
    let index = 0
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data[0].total_sexo_hombre);

        const div = document.createElement('div');
        div.className = "row";

        const div1 = document.createElement('div');
        div1.className = "col";
        
        const div2 = document.createElement('div');
        div2.className = "col";

        const div3 = document.createElement('div');
        div3.className = "col";

        const divh = document.createElement('div');
        divh.className = "mt-5";
        divh.innerText = "Hombres";

        const divhc = document.createElement('div');
        divhc.className = "mt-5";
        divhc.innerText = data[0].total_sexo_hombre;

        const divhp = document.createElement('div');
        divhp.className = "mt-5";
        divhp.innerText = data[0].proc_sexo_hombre;

        const divm = document.createElement('div');
        divm.className = "mt-5";
        divm.innerText = "Mujeres";

        const divmc = document.createElement('div');
        divmc.className = "mt-5";
        divmc.innerText = data[0].total_sexo_mujeres;

        const divmp = document.createElement('div');
        divmp.className = "mt-5";
        divmp.innerText = data[0].porc_sexo_mujeres;

        var divp = document.getElementById('principal');
        divp.appendChild(div);
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div1.appendChild(divh);
        div1.appendChild(divm);
        div2.appendChild(divhc)
        div2.appendChild(divmc);
        div3.appendChild(divhp);
        div3.appendChild(divmp);
        // cantidadH.innerText = data[0].total_sexo_hombre;
        // cantidadM.innerText = data[index].total_sexo_mujer;
        // porcentajeH.innerText = data[index].total_sexo_hombre;
        // porcentajeM.innerText = data[index].total_sexo_hombre;
    });

}


// [
//     {
//         "id": 20,
//         "depto_id": 2,
//         "municipio_id": 999,
//         "nombre": "El Progreso",
//         "tipo_lugar": 2,
//         "total_lugares": 8,
//         "capital": "Guastatoya",
//         "ext_territorial": 1835,
//         "pob_total": 176632,
//         "indice_masculinidad": 97.44,
//         "prom_hijos_mujer": 3.66,
//         "edad_promedio": 28.38,
//         "indice_dependencia": 59.99,
//         "anios_prom_estudio": 6.62,
//         "alfabetismo": 86.56,
//         "viviendas_part": 54109,
//         "total_hogares": 44213,
//         "prom_personas_hogar": 4,
//         "total_jefas_hogar": 25.26,
//         "total_sexo_hombre": 87172,
//         "porc_sexo_hombre": 49.352325739,
//         "total_sexo_mujeres": 89460,
//         "porc_sexo_mujeres": 50.64767426,
//         "total_sector_urbano": 91416,
//         "porc_sector_urbano": 51.75506137,
//         "total_sector_rural": 85216,
//         "porc_sector_rural": 48.244938629,
//         "pob_edad_014": 53929,
//         "porc_edad_014": 30.53184021,
//         "pob_edad_1564": 110404,
//         "porc_edad_1564": 62.505095339,
//         "pob_edad_65": 12299,
//         "porc_edad_65": 6.96306445,
//         "pob_pueblo_maya": 2627,
//         "porc_pueblo_maya": 1.487272974,
//         "pob_pueblo_garifuna": 184,
//         "porc_pueblo_garifuna": 0.104171384,
//         "pob_pueblo_xinca": 46,
//         "porc_pueblo_xinca": 0.026042846,
//         "pob_pueblo_afrodescendiente": 86,
//         "porc_pueblo_afrodescendiente": 0.048688799,
//         "pob_pueblo_ladino": 173441,
//         "porc_pueblo_ladino": 98.193419086,
//         "pob_pueblo_extranjero": 248,
//         "porc_pueblo_extranjero": 0.140404909
//     }
// ]