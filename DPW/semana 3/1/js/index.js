$(document).ready(function(){
    cargarEstados();
    
        function cargarEstados(){
            console.log('Hola Mundo!');
            $.ajax({
                url: "crud/estados.php",
                type: "POST",
                data: {'lista' : 'todos' },
                dataType: "json",
                success: function(estados){
                    $("#estados").append("<option value=''>Seleccione una opcion</option>");  
            $.each(estados,function(i,estado){
                    $("#estados").append("<option value=" + estado.idestado + ">"+ estado.nombre + "</option>");  
                });//each
                }//succes 
            });//ajax
        }//funcion cargar estados
    
        $("#agregar").click(function(){
            var nombreEstado = $('#estado').val();
            console.log(nombreEstado);
            $.ajax({
                url:"crud/estados.php",
                type:"POST",
                data: {
                    'ADD' : 'estado',
                    'nombre' : nombreEstado
                },//data
                dataType: 'json',
                succes: function(data){
                    alert(data.estado);
                    $("#estados").empty();
                    cargarEstados();
                },
                error : function(data){
                    alert(data.estado);
                }
            });//ajax
        });

        $('#eliminar').click(function(){
            var nombreEliminar = $('#estadoe').val();
            console.log('nombre'+nombreEliminar);
            $('#diveliminar').toggle();
            if(nombreEliminar===""){
                alert('El nombre es requerido');
                return;
            }
            $.ajax({
                url: "crud/estados.php",
                type: "POST",
                dataType: "json",
                data: {
                    'DELETE' : 'estado',
                    'nombre' : nombreEliminar
                },
                    sucess: function(data){
                        $("#estados").empty();
                        alert(data.estado);
                        cargarEstados();

                    },
                    error: function(data){
                        alert(data.estado);
                    }

            });

        });

        $("#Actualizar").click(function(){
            var idEstado = $("#idEstado").val();
            var nombreEstado = $("#estadoActualizar").val();
            if(nombreEstado===""){
                alert("Ingrese un nombre valido");
                return;
            }
            $("#divActualizar").toggle();
            $.ajax({
                url: "crud/estados.php",
                type: "POST",
                dataType: "json",
                data: {
                    "UPDATE" : "estado",
                    "idEstado" : idEstado,
                    "nombre" : nombreEstado
                },
                sucess: function(data){
                    $("#estados").empty();
                    cargarEstados();
                    alert(data.estado);
                }
            });
        });

        $("#btAgregar").click(function(){
            $('#divAgregar').toggle();
           // $('#estados').empty();
        });//click de agregar

        $("#btEliminar").click(function(){
            $('#diveliminar').toggle();
        });//click de eliminar

        $('#btActualizar').click(function(){
            $('#divActualizar').toggle();
            $('#idEstado').val($('#estados').val());
            $('#estadoActualizar').val($('#estados option:selected').text());
        })
    });