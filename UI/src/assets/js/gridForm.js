ej.base.enableRipple(true)

    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        editSettings: { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'normal' },
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        toolbar: ['add', 'edit', 'delete', 'update', 'cancel'],
		showToolbar: true, customToolbarItems: ["Bold", { templateID: "#Details" }, { templateID: "#refresh" }] ,
        columns: [
            {
                field: 'Column1', headerText: 'Column1', editType: 'numericedit', textAlign: 'left',
                width: 150, format: 'C2', validationRules: { required: true }
            },
            {
                field: 'Column2', headerText: 'Column2',
                validationRules: { required: true }, width: 150
            },
            {
                field: 'Column3', headerText: 'Column3', textAlign: 'left',
                width: 150, validationRules: { required: true }
            },
            { field: 'Column4', headerText: 'Column4', width: 150 },
            {
                field: 'Column5', headerText: 'Column5', width: 150, editType: 'dropdownedit',
                edit: { params: { popupHeight: '300px' } }
            },
			{ field: 'Column6', headerText: '', width: 50 },
			{ field: 'Column7', headerText: '', width: 50 }
        ]
    });
    grid.appendTo('#GridInlineEdit');