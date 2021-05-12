class test_PO{
    visitHome(t){
        let tiempo=t
        
      
        //Cypress.config("defaultCommandTimeout",15000)      
        before(()=>{    
          cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
          cy.title().should('eq','Frontend')
          cy.wait(tiempo)
          
          //Login
          cy.get('#username').should('be.visible').type('estela.flores')
          cy.wait(tiempo)
          cy.get('#password').should('be.visible').type('SENA2020')
          cy.wait(tiempo)
          cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
          cy.wait(tiempo)

          //Registro solicitud menu
          cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
          cy.wait(tiempo)
          cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
          cy.wait(tiempo)     
          cy.get('#id_clave_unidad').should('be.visible').clear().type('320571043072')
          cy.wait(tiempo)
          cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
          cy.wait(tiempo)
        })
    }

    
    Antirrabica(t,ani,np){
        let tiempo=t
        let folios
        let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            //Login

            cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
            cy.title().should('eq','Frontend')
            cy.wait(tiempo)
            
            cy.get('#username').should('be.visible').type('estela.flores')
            cy.wait(tiempo)
            cy.get('#password').should('be.visible').type('SENA2020')
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Registro solicitud menu
            cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)     
            cy.get('#id_clave_unidad').should('be.visible').clear().type('320571043072')
            cy.wait(tiempo)
            cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Login


            cy.get('#id_tipo_solicitud').select('1CONSTANCIA', { force: true }).should('have.value','1CONSTANCIA')
            cy.wait(tiempo)
            cy.get('#id_especie').select('4').should('have.value','4')
            cy.wait(tiempo)
            cy.get('#id_funcion_zootecnica').select('6').should('have.value','6')
            cy.wait(tiempo)
            let fecha=new Date()
            let dia  = (fecha.getDate() + 0).toString().padStart(2, "0");
            let mes  = (fecha.getMonth() + 1).toString().padStart(2, "0");
            //let anio = fecha.getFullYear()+20;
            let anio = fecha.getFullYear();
            //let anio = fecha.setFullYear(2025);
            let fechaOk=(anio+"-"+mes+"-"+dia )
        
            cy.get('#fechaInicio').should('be.visible').type(fechaOk)
            cy.wait(4000)
            cy.get('#id_numero_animales').should('be.visible').clear().type(animales)
            cy.wait(tiempo)
            cy.get('#id_datos_correctos').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_registrar_solicitud').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //confirmar
            cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
            cy.wait(2000)
            //Obtener valor
            cy.get(".alert").should('be.visible').then((val)=>{
                folios=val.text()
                folios=folios.substr(-14)
                cy.log("dentro: "+folios)
            
            }).then(()=>{
                cy.wait(tiempo)

                //Inicia segunda parte
                cy.xpath("//a[@aria-expanded='false'][contains(.,'Programación de actividades')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//a[contains(@id,'solicitud')][contains(.,'Mis solicitudes')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.log("fuera folio" +folios)
                cy.get("#id_folio_solicitud").should('be.visible').type(folios)
                cy.wait(tiempo)
                cy.get('#id_buscar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_detalle_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_ir_registro_solicitud').should('be.visible').click({force: true})
                cy.wait(8000)
                cy.get('#id_tipo_vacuna').select('4').should('have.value','4')
                cy.wait(tiempo)
                let lab=Math.floor(Math.random() * 90000); 
                cy.get('#id_laboratorio').should('be.visible').type('Laboratorio de prueba-' + lab)
                cy.wait(tiempo)
                cy.get('#id_lote').should('be.visible').type('Lote-'+lab)
                cy.wait(tiempo)
                let anio = fecha.getFullYear()+10;
                //let anio = fecha.setFullYear(2025);
                let fechaOk2=(anio+"-"+mes+"-"+dia )
                cy.get('#id_fecha_caducidad').should('be.visible').type(fechaOk2)
                cy.wait(3000)
                cy.get('#id_agregar_vacuna').should('be.visible').click({force: true})
                cy.wait(5000)

                //tabla
                for(let x=0;x<=animales-1;x++){
                    cy.get('#id_check_tablaAntirrabica__'+x+'').should('be.visible').click({force: true})
                    cy.wait(50)
                    cy.get('#id_raza_tablaAntirrabica__'+x+'').select('2').should('have.value','2')
                    cy.wait(50)
                    cy.get('#id_vacuna_tablaAntirrabica__'+x+'').select('0').should('have.value','0')
                    cy.wait(50)
                }

                //Registro nuevo
                cy.get('#choice-1').should('be.visible').click({force: true})
                cy.wait(tiempo)
                for(let i=1;i<=2;i++)
                {   
                    cy.wait(1500)
                    
                    cy.get('#id_adefoc_animal_nuevo').should('be.visible').clear().type('nuevo animal--'+ lab)
                    cy.wait(1500)
                    let especie_Arr = ["b", "o",];
                    let randomEspecie = especie_Arr[Math.floor(Math.random()*especie_Arr.length)]; 
                    cy.get('#id_especie_animal_nuevo').select(randomEspecie).should('have.value',randomEspecie)
                    cy.wait(1500)
                    let lab2=Math.floor(Math.random() * 50);
                    cy.get('#id_edad_animal_nuevo').should('be.visible').clear().type(lab2)
                    cy.wait(1500)
                        if(randomEspecie=="b"){
                            let bovino_Arr = ["1", "2","3","7"];
                            let randomBovino = bovino_Arr[Math.floor(Math.random()*bovino_Arr.length)]; 
                            cy.get('#id_raza_animal_nuevo').select(randomBovino).should('have.value',randomBovino)
                            cy.wait(1500)
                        }

                        if(randomEspecie=="o"){
                            let ovino_Arr = ["13", "18","27","28"];
                            let randomOvino = ovino_Arr[Math.floor(Math.random()*ovino_Arr.length)]; 
                            cy.get('#id_raza_animal_nuevo').select(randomOvino).should('have.value',randomOvino)
                            cy.wait(1500)
                        }
                
                    let sexo_Arr = ["HEMBRA", "MACHO",];
                    let randomSexo = sexo_Arr[Math.floor(Math.random()*sexo_Arr.length)];  
                    cy.get('#id_sexo_animal_nuevo').select(randomSexo).should('have.value',randomSexo)
                    cy.wait(tiempo)
                    cy.get('#id_fierro_patente').should('be.visible').clear().type('Patente--'+lab)
                    cy.wait(tiempo)
                    cy.xpath("//button[@id='id_']").should('be.visible').click({force: true})
                    cy.wait(tiempo)

                }

                for(let z=0;z<=1;z++){
                    //Vacunar nuevas
                    cy.wait(tiempo)
                    cy.get('#id_vacuna_animalExtra_'+z+'').select('0').should('have.value','0')
                    cy.wait(tiempo)
                }

                    //finaliza firma
                    cy.get('#id_firmar_actualizar').should('be.visible').click({force: true})
                    cy.wait(tiempo)
                    cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                    cy.wait(tiempo)
                    cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                    cy.wait(tiempo)

                    //salir
                    cy.get('.pull-right').should('be.visible').click({force: true})
                    cy.wait(tiempo)

                })//then
        }
       

    }//final bloque Antirrabica


    Brucelosis(t,ani,np){
        let tiempo=t
        let folios
        let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            //Login

            cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
            cy.title().should('eq','Frontend')
            cy.wait(tiempo)
            
            cy.get('#username').should('be.visible').type('luis.jimenez')
            cy.wait(tiempo)
            cy.get('#password').should('be.visible').type('SENA2020')
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Registro solicitud menu
            cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)     
            cy.get('#id_clave_unidad').should('be.visible').clear().type('150860102002')
            cy.wait(tiempo)
            cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Login


            cy.get('#id_tipo_solicitud').select('2CONSTANCIA', { force: true }).should('have.value','2CONSTANCIA')
            cy.wait(tiempo)
            cy.get('#id_especie').select('4').should('have.value','4')
            cy.wait(tiempo)
            cy.get('#id_funcion_zootecnica').select('6').should('have.value','6')
            cy.wait(tiempo)
            let fecha=new Date()
            let dia  = (fecha.getDate() + 0).toString().padStart(2, "0");
            let mes  = (fecha.getMonth() + 1).toString().padStart(2, "0");
            //let anio = fecha.getFullYear()+20;
            let anio = fecha.getFullYear();
            //let anio = fecha.setFullYear(2025);
            let fechaOk=(anio+"-"+mes+"-"+dia )
        
            cy.get('#fechaInicio').should('be.visible').type(fechaOk)
            cy.wait(tiempo)
            cy.get('#id_numero_animales').should('be.visible').clear().type(animales)
            cy.wait(tiempo)
            cy.get('#id_datos_correctos').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_registrar_solicitud').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //confirmar
            cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
            cy.wait(2000)
            //Obtener valor
            cy.get(".alert").should('be.visible').then((val)=>{
                folios=val.text()
                folios=folios.substr(-14)
                cy.log("dentro: "+folios)
            
            }).then(()=>{
                cy.wait(tiempo)

                //Inicia segunda parte
                cy.xpath("//a[@aria-expanded='false'][contains(.,'Programación de actividades')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//a[contains(@id,'solicitud')][contains(.,'Mis solicitudes')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.log("fuera folio" +folios)
                cy.get("#id_folio_solicitud").should('be.visible').type(folios)
                cy.wait(tiempo)
                cy.get('#id_buscar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_detalle_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)

                //Autorizar
                cy.get('#id_autorizar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_ir_registro_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)

                //Vacuna
                cy.get('#id_vacuna').select('1').should('have.value','1')
                cy.wait(2000)
                cy.get('#id_dosificacion').select('1').should('have.value','1')
                cy.wait(2000)
                let lab=Math.floor(Math.random() * 90000); 
                cy.get('#id_laboratorio').should('be.visible').type('Laboratorio de prueba-' + lab)
                cy.wait(2000)              
                cy.get('#id_lote').should('be.visible').type('Lote-'+lab)
                cy.wait(2000)
                let anio = fecha.getFullYear()+10;
                //let anio = fecha.setFullYear(2025);
                let fechaOk2=(anio+"-"+mes+"-"+dia )
                cy.get('#fechaCaducidad').should('be.visible').type(fechaOk2)
                cy.wait(3000)
                cy.get('#id_agregar_vacuna').should('be.visible').click({force: true})
                cy.wait(3000)

              
                
                //tabla
                for(let x=0;x<=animales-1;x++){
                    cy.get('#id_check_tablaVBrucelosis__'+x+'').should('be.visible').click({force: true})
                    cy.wait(50)
                    cy.get('#id_raza_tablaVBrucelosis__'+x+'').select('2').should('have.value','2')
                    cy.wait(50)
                    cy.get('#id_vacuna_tablaVBrucelosis__'+x+'').select('0').should('have.value','0')
                    cy.wait(50)
                }

                cy.get('#id_firmar_actualizar').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)

                //salir
                cy.xpath("//a[@class='pull-right'][contains(.,'Salir')]").should('be.visible').click({force: true})
                cy.wait(tiempo)

               
                

            })//then
        }
       

    }//final bloque Brucelosis


    Garrapaticida(t,ani,np){
        let tiempo=t
        let folios
        let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            //Login

            cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
            cy.title().should('eq','Frontend')
            cy.wait(tiempo)
            
            cy.get('#username').should('be.visible').type('estela.flores')
            cy.wait(tiempo)
            cy.get('#password').should('be.visible').type('SENA2020')
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Registro solicitud menu
            cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)     
            cy.get('#id_clave_unidad').should('be.visible').clear().type('070192034001')
            cy.wait(tiempo)
            cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Login


            cy.get('#id_tipo_solicitud').select('3CONSTANCIA', { force: true }).should('have.value','3CONSTANCIA')
            cy.wait(tiempo)            
            cy.get('#id_motivo_prueba').select('2').should('have.value','2')
            cy.wait(tiempo)
            cy.get('#id_especie').select('4').should('have.value','4')
            cy.wait(tiempo)
            cy.get('#id_funcion_zootecnica').select('6').should('have.value','6')
            cy.wait(tiempo)
            
            let fecha=new Date()
            let dia  = (fecha.getDate() + 0).toString().padStart(2, "0");
            let mes  = (fecha.getMonth() + 1).toString().padStart(2, "0");
            //let anio = fecha.getFullYear()+20;
            let anio = fecha.getFullYear();
            //let anio = fecha.setFullYear(2025);
            let fechaOk=(anio+"-"+mes+"-"+dia )
        
            cy.get('#fechaInicio').should('be.visible').type(fechaOk)
            cy.wait(tiempo)
            cy.get('#id_numero_animales').should('be.visible').clear().type(animales)
            cy.wait(tiempo)
            cy.get('#id_datos_correctos').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_registrar_solicitud').should('be.visible').click({force: true})
            cy.wait(tiempo)
       
            //confirmar
            cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
            cy.wait(2000)
            //Obtener valor
            cy.get(".alert").should('be.visible').then((val)=>{
                folios=val.text()
                folios=folios.substr(-14)
                cy.log("dentro: "+folios)
            
            }).then(()=>{
                cy.wait(tiempo)


                //Inicia segunda parte
                cy.xpath("//a[@aria-expanded='false'][contains(.,'Programación de actividades')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//a[contains(@id,'solicitud')][contains(.,'Mis solicitudes')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.log("fuera folio" +folios)
                cy.get("#id_folio_solicitud").should('be.visible').type(folios)
                cy.wait(tiempo)
                cy.get('#id_buscar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_detalle_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
             

                //Autorizar
                cy.get('#id_autorizar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_ir_registro_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                

                //Tratamiento
                cy.get('#id_tratamiento').select('2').should('have.value','2')
                cy.wait(tiempo)

                //Medio_transporte
                cy.wait(6000)
                let transporte_Arr = ["CAMIÓN", "CAMINONETA","TRAILER"];
                let randomTransporte = transporte_Arr[Math.floor(Math.random()*transporte_Arr.length)]; 
                cy.get('#id_medio_transporte').should('be.visible').type( randomTransporte)
                cy.wait(2500)
                let marca_Arr = [ "NISSAN","FORD","KIA","HONDA","TOYOTA","FIAT",];
                let randomMarca = marca_Arr[Math.floor(Math.random()*marca_Arr.length)];  
                cy.get('#id_marca').should('be.visible').type(randomMarca)
                cy.wait(2500)
                let placa=Math.floor(Math.random() * 300); 
                cy.get('#id_placas').should('be.visible').type('rtf-rfe'+placa)
                cy.wait(3000)
                cy.get('#id_capacidad').should('be.visible').type(placa+100)
                cy.wait(tiempo)
                cy.get('#id_flejado').should('be.visible').type('FLEJADO'+placa+20)
                cy.wait(tiempo)

                //ruta
                let estado_Arr = [ "1","2","3","4",];
                let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];  
                cy.get('#id_estado_ruta').select(randomEstado).should('have.value',randomEstado)
                cy.wait(1500)
                if(randomEstado==1)
                {
                    cy.get('#id_municipio_ruta').select("1").should('have.value',"1")
                    cy.wait(tiempo)
                }
                else if(randomEstado==2)
                {
                    cy.get('#id_municipio_ruta').select("12").should('have.value',"12")
                    cy.wait(tiempo)
                }
                else if(randomEstado==3)
                {
                    cy.get('#id_municipio_ruta').select("17").should('have.value',"17")
                    cy.wait(tiempo)
                }
                else if(randomEstado==4)
                {
                    cy.get('#id_municipio_ruta').select("22").should('have.value',"22")
                    cy.wait(tiempo)
                }
                
                cy.get('#id_detalle_ruta').should('be.visible').type('Ruta numero #'+placa+1101)
                cy.wait(tiempo)
                cy.get('#id_agregar_ruta').should('be.visible').click({force: true})
                cy.wait(tiempo)

                //Producto Tratamiento
                let producto_Arr = [ "1","2","3",];
                let randomProducto = producto_Arr[Math.floor(Math.random()*producto_Arr.length)];  
                cy.get('#id_familia_producto').select(randomProducto).should('have.value',randomProducto)
                cy.wait(tiempo)
                cy.get('#id_nombre_producto').should('be.visible').type('Nombre producto #'+placa+2345)
                cy.wait(tiempo)
                let anio2 = fecha.getFullYear()+30;
                let fechaOk3=(anio2+"-"+mes+"-"+dia )
                cy.get('#id_fecha_caducidad').should('be.visible').type(fechaOk3)
                cy.wait(tiempo)
                cy.get('#id_agregar_producto').should('be.visible').click({force: true})
                cy.wait(tiempo)


         
                
                //tabla
                for(let x=0;x<=animales-1;x++){
                    cy.get('#id_check_tablaGarrapata__'+x+'').should('be.visible').click({force: true})
                    cy.wait(50)
                    cy.get('#id_raza_tablaGarrapata__'+x+'').select('2').should('have.value','2')
                    cy.wait(50)
                    cy.get('#id_producto_tablaGarrapata__'+x+'').select('0').should('have.value','0')
                    cy.wait(50)
                }

                cy.get('#id_firmar_actualizar').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)

                //salir
                cy.xpath("//a[@class='pull-right'][contains(.,'Salir')]").should('be.visible').click({force: true})
                cy.wait(tiempo)

               
                

            })//then
        }
       

    }//final bloque Garrapaticida


    Dictamen_Brucelosis(t,ani,np){
        let tiempo=t
        let folios
        let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            //Login

            cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
            cy.title().should('eq','Frontend')
            cy.wait(tiempo)
            
            cy.get('#username').should('be.visible').type('felix.carpio')
            cy.wait(tiempo)
            cy.get('#password').should('be.visible').type('SENA2020')
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Registro solicitud menu
            cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)     
            cy.get('#id_clave_unidad').should('be.visible').clear().type('320571043072')
            cy.wait(tiempo)
            cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Login


            //Datos de Programación
            cy.get('#id_tipo_solicitud').select('4DICTAMEN', { force: true }).should('have.value','4DICTAMEN')
            cy.wait(tiempo)
            cy.get('#id_motivo_prueba').select('7').should('have.value','7')
            cy.wait(tiempo)
            cy.get('#id_especie').select('4').should('have.value','4')
            cy.wait(tiempo)
            let funcion_Arr = ["6", "7","8",];
            let randomFuncion = funcion_Arr[Math.floor(Math.random()*funcion_Arr.length)]; 
            cy.get('#id_funcion_zootecnica').select(randomFuncion).should('have.value',randomFuncion)
            cy.wait(tiempo)
            let fecha=new Date()
            let dia  = (fecha.getDate() + 0).toString().padStart(2, "0");
            let mes  = (fecha.getMonth() + 1).toString().padStart(2, "0");
            //let anio = fecha.getFullYear()+20;
            let anio = fecha.getFullYear();
            //let anio = fecha.setFullYear(2025);
            let fechaOk=(anio+"-"+mes+"-"+dia )        
            cy.get('#fechaInicio').should('be.visible').type(fechaOk)
            cy.wait(tiempo)
            cy.get('#id_numero_animales').should('be.visible').clear().type(animales)
            cy.wait(tiempo)
            cy.get('#id_datos_correctos').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_registrar_solicitud').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //confirmar
            cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
            cy.wait(2000)
            //Obtener valor
            cy.get(".alert").should('be.visible').then((val)=>{
                folios=val.text()
                folios=folios.substr(-14)
                cy.log("dentros: "+folios)
            
            }).then(()=>{
                cy.wait(tiempo)
                cy.log("Entro al then")
               
                //Inicia segunda parte
                cy.xpath("//a[@aria-expanded='false'][contains(.,'Programación de actividades')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//a[contains(@id,'solicitud')][contains(.,'Mis solicitudes')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.log("fuera folio" +folios)
                cy.get("#id_folio_solicitud").should('be.visible').type(folios)
                cy.wait(tiempo)
                cy.get('#id_buscar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_detalle_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_ir_registro_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)

                //DICTAMEN DE PRUEBA
                cy.get('#id_tipo_solicitud_1').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_tipo_solicitud_2').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_tipo_solicitud_3').should('be.visible').click({force: true})
                cy.wait(3000)
                let anio4 = fecha.getFullYear()+30;
                let fechaOk4=(anio4+"-"+mes+"-"+dia )   
                cy.get('#id_fecha_prueba').should('be.visible').type(fechaOk4)
                cy.wait(5000)
                let lab3=Math.floor(Math.random() * 90000); 
                cy.get('#id_nombre_laboratorio').should('be.visible').type('Laboratorio numero #'+lab3)
                cy.wait(tiempo)


                //tabla
                
                for(let x=0;x<=animales-1;x++){
                    cy.get('#id_check_tablaDBrucelosis__'+x+'').should('be.visible').click({force: true})
                    cy.wait(50)
                    cy.get('#id_raza_tablaDBrucelosis__'+x+'').select('2').should('have.value','2')
                    cy.wait(50)
                    cy.get('#id_origen_tablaDBrucelosis__'+x+'').select('1').should('have.value','1')
                    cy.wait(50)
                    let selector_Arr = ["1", "2","4",];
                    let randomSelector = selector_Arr[Math.floor(Math.random()*selector_Arr.length)]; 
                    cy.get('#id_resultado_tablaDBrucelosis__'+x+'').select(randomSelector).should('have.value',randomSelector)
                    cy.wait(50)
                }

                         

                //finaliza firma
                cy.get('#id_firmar_actualizar').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)

                //salir
                cy.get('.pull-right').should('be.visible').click({force: true})
                cy.wait(tiempo)
                    

            })//then
        }
       

    }//final bloque Brucelosis

    Tuberculosis(t,ani,np){
        let tiempo=t
        let folios
        let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            //Login

            cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
            cy.title().should('eq','Frontend')
            cy.wait(tiempo)
            
            cy.get('#username').should('be.visible').type('felix.carpio')
            cy.wait(tiempo)
            cy.get('#password').should('be.visible').type('SENA2020')
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Registro solicitud menu
            cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)     
            cy.get('#id_clave_unidad').should('be.visible').clear().type('320571043072')
            cy.wait(tiempo)
            cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Login


            //Datos de Programación
            cy.get('#id_tipo_solicitud').select('5DICTAMEN', { force: true }).should('have.value','5DICTAMEN')
            cy.wait(tiempo)
            cy.get('#id_motivo_prueba').select('7').should('have.value','7')
            cy.wait(tiempo)
            let tipo_Arr = ["5", "6","7",];
            let randomTipo = tipo_Arr[Math.floor(Math.random()*tipo_Arr.length)]; 
            cy.get('#id_tipo_prueba').select(randomTipo).should('have.value',randomTipo)
            cy.wait(tiempo)            
            cy.get('#id_especie').select('4').should('have.value','4')
            cy.wait(tiempo)
            let funcion_Arr = ["6", "7","8",];
            let randomFuncion = funcion_Arr[Math.floor(Math.random()*funcion_Arr.length)]; 
            cy.get('#id_funcion_zootecnica').select(randomFuncion).should('have.value',randomFuncion)
            cy.wait(tiempo)
            let fecha=new Date()
            let dia  = (fecha.getDate() + 0).toString().padStart(2, "0");
            let mes  = (fecha.getMonth() + 1).toString().padStart(2, "0");
            //let anio = fecha.getFullYear()+20;
            let anio = fecha.getFullYear();
            //let anio = fecha.setFullYear(2025);
            let fechaOk=(anio+"-"+mes+"-"+dia )        
            cy.get('#fechaInicio').should('be.visible').type(fechaOk)
            cy.wait(tiempo)
            cy.get('#id_numero_animales').should('be.visible').clear().type(animales)
            cy.wait(tiempo)
            cy.get('#id_datos_correctos').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#id_registrar_solicitud').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //confirmar
            cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
            cy.wait(2000)
            //Obtener valor
            cy.get(".alert").should('be.visible').then((val)=>{
                folios=val.text()
                folios=folios.substr(-14)
                cy.log("dentros: "+folios)
            
            }).then(()=>{
                cy.wait(tiempo)
                cy.log("Entro al then")
              
                //Inicia segunda parte
                cy.xpath("//a[@aria-expanded='false'][contains(.,'Programación de actividades')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//a[contains(@id,'solicitud')][contains(.,'Mis solicitudes')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.log("fuera folio" +folios)
                cy.get("#id_folio_solicitud").should('be.visible').type(folios)
                cy.wait(tiempo)
                cy.get('#id_buscar_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_detalle_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get('#id_ir_registro_solicitud').should('be.visible').click({force: true})
                cy.wait(tiempo)

                

                //DICTAMEN DE PRUEBA
               cy.get('#id_hora_inyeccion').should('be.visible').type('07:00:00')
               cy.wait(tiempo)
               let anio6 = fecha.getFullYear()+1;
               let fechaOk6=(anio6+"-"+mes+"-"+dia ) 
               cy.get('#id_fecha_lectura').should('be.visible').type(fechaOk6)
               cy.wait(7000)
               cy.get('#id_hora_lectura').should('be.visible').type('11:30:00')
               cy.wait(3000)
               cy.get('#id_hora_lectura').should('be.visible').type('11:30:15')
               cy.wait(6000)

         


                //tabla
                
                for(let x=0;x<=animales-1;x++){
                    cy.get('#id_check_tablaDTuberculosis__'+x+'').should('be.visible').click({force: true})
                    cy.wait(50)
                    cy.get('#id_raza_tablaDTuberculosis__'+x+'').select('2').should('have.value','2')
                    cy.wait(50)
                    cy.get('#id_origen_tablaDTuberculosis__'+x+'').select('1').should('have.value','1')
                    cy.wait(50)
                    let selector_Arr = ["1", "2","3",];
                    let randomSelector = selector_Arr[Math.floor(Math.random()*selector_Arr.length)]; 
                    cy.get('#id_resultado_tablaDTuberculosis__'+x+'').select(randomSelector).should('have.value',randomSelector)
                    cy.wait(50)
                }

                         

                //finaliza firma
                cy.get('#id_firmar_actualizar').should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.xpath("//button[@type='button'][contains(.,'Aceptar')]").should('be.visible').click({force: true})
                cy.wait(tiempo)

                //salir
                cy.get('.pull-right').should('be.visible').click({force: true})
                cy.wait(tiempo)
                    

            })//then
        }
       

    }//final bloque Tuberculosis




}//final

export default test_PO;