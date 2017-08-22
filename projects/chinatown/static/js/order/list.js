$(document).ready(function(){
    // if ( !$.fn.dataTable.isDataTable( '#pedidos' ) ) {
    //     $('#pedidos').DataTable({
    //         "serverSide": true,
    //         "processing": true,
    //         "ajax": {
    //             url: "/order/list_ajax",
    //             data: function ( d ) {
    //                 //d.start = d.start
    //             }
    //         },
    //         "lengthChange": true,
    //         "pageLength": 20,
    //         "dom": 'T<"clear">lfrtip',
    //         "tableTools": {
    //             "sSwfPath": "../static/swf/copy_csv_xls_pdf.swf",
    //             "aButtons": [
    //                 {
    //                     "sExtends": "copy",
    //                     "sButtonText": "Copiar",
    //                     fnComplete: function(nButton, oConfig, flash, text) {
    //                         var lines = text.split('\n').length;
    //                         if (oConfig.bHeader) lines--;
    //                         if (this.s.dt.nTFoot !== null && oConfig.bFooter) lines--;
    //                         var plural = (lines==1) ? "" : "s";
    //                         this.fnInfo( '<h6>Tabla copiada</h6>'+
    //                             '<p>'+lines+' fila'+plural+' copiada' + plural +' al portapapeles.</p>',
    //                             1500
    //                         );
    //                     }
    //                 },
    //                 "xls",
    //                 {
    //                     "sExtends": "pdf",
    //                     "sButtonText": "PDF"
    //                 },
    //                 {
    //                     "sExtends": "print",
    //                     "sButtonText": "Imprimir",
    //                     fnClick: function() {
    //                         window.print();
    //                     }
    //                 }
    //             ]
    //         },
    //         "columnDefs": [
    //             { "targets": 0,"data": "id", "orderable": true },
    //             { "targets": 1,"data": "date", "orderable": true },
    //             { "targets": 2,"data": "total", "orderable": true }
    //         ],
    //         "language":{
    //             "zeroRecords": "No hay resultados para esta busqueda",
    //             "search": "Busqueda:",
    //             "paginate": {
    //                 "first":      "Primera",
    //                 "last":       "Ultima",
    //                 "next":       "Siguiente",
    //                 "previous":   "Anterior"
    //             },
    //             "info":           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    //             "infoEmpty":      "Mostrando 0 a 0 de 0 entradas",
    //             "processing":     "<img src='/static/img/loading.gif'/>"
    //         }
    //     });
    // }
    $("#pedidos").dataTable({
        "language":{
            "zeroRecords": "No hay resultados para esta busqueda",
            "search": "B&uacute;squeda:",
            "paginate": {
                "first":      "Primera",
                "last":       "Ultima",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "info":           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            "infoEmpty":      "Mostrando 0 a 0 de 0 entradas",
            "processing":     "<img src='/static/img/loading.gif'/>",
            "lengthMenu": "Mostrando _MENU_ registros por p&aacute;gina"
        }
    });
});