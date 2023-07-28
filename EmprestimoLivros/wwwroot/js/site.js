$(document).ready(function () {

    $('#Emprestimos').DataTable({
        language: {

            "decimal": "",
            "emptyTable": "Sem informação válida na tabela",
            "info": "Mostrando _START_ de _END_ para _TOTAL_ entradas",
            "infoEmpty": "Mostrando 0 de 0 para 0 entradas",
            "infoFiltered": "(filtrado from _MAX_ total entries)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ entradas",
            "loadingRecords": "Carregando...",
            "processing": "",
            "search": "Procurar:",
            "zeroRecords": "No matching records found",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        }
    });

    setTimeout(function () {
        $(".alert").fadeOut("slow", function () {
            $(this).alert('close');
        })
    }, 5000)

})