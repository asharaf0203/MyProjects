ej.base.enableRipple(true)

	//var jQueryScript = document.createElement('script');  
	//jQueryScript.setAttribute('src','https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js');
	//document.head.appendChild(jQueryScript);

	var accordion = new ej.navigations.Accordion({
		items: [
			{ header: 'Child Entity Section 1', content: '#Grid1' },
			{ header: 'Child Entity Section 2', content: '#Grid2' }
		]
	});
	//Render initialized Accordion component
	accordion.appendTo('#Accordion_default');


	var grid1 = new ej.grids.Grid({
        dataSource: window.orderData.slice(0, 60),
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'checkbox' },
        allowPaging: true,
        groupSettings: { showGroupedColumn: true },
        showColumnMenu: true,
        columns: [
            { field: 'Column1', headerText: 'Column1', width: 130, textAlign: 'left', showInColumnChooser: false },
            { field: 'Column2', headerText: 'Column2', width: 130, textAlign: 'left' },
            { field: 'Column3', headerText: 'Column3', width: 130, textAlign: 'center' },
            { field: 'Column4', headerText: 'Column4', width: 130, textAlign: 'center' },
            { field: 'Column5', headerText: 'Column5', width: 130, textAlign: 'center' },
            { field: 'Column6', headerText: 'Column6', width: 130, textAlign: 'center' },
            { field: 'Column7', headerText: 'Column7', width: 130, textAlign: 'center' }
        ]
    });
    grid1.appendTo('#Grid1');
	
	var grid2 = new ej.grids.Grid({
        dataSource: window.orderData.slice(0, 60),
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'checkbox' },
        allowPaging: true,
        groupSettings: { showGroupedColumn: true },
        showColumnMenu: true,
        columns: [
            { field: 'Column1', headerText: 'Column1', width: 130, textAlign: 'left', showInColumnChooser: false },
            { field: 'Column2', headerText: 'Column2', width: 130, textAlign: 'left' },
            { field: 'Column3', headerText: 'Column3', width: 130, textAlign: 'center' },
            { field: 'Column4', headerText: 'Column4', width: 130, textAlign: 'center' },
            { field: 'Column5', headerText: 'Column5', width: 130, textAlign: 'center' },
            { field: 'Column6', headerText: 'Column6', width: 130, textAlign: 'center' },
            { field: 'Column7', headerText: 'Column7', width: 130, textAlign: 'center' }
        ]
    });
    grid2.appendTo('#Grid2');

	
	var deleteBtn = new ej.buttons.Button({});
    deleteBtn.appendTo('#deleteBtn');
    document.getElementById('deleteBtn').onclick = function () {
        deleteDialogObj.show();
    };
    function deleteDlgBtnClick() {
        deleteDialogObj.hide();
    }
	
	var deleteDialogObj = new ej.popups.Dialog({
        header: '',
        visible: false,
        content: 'Delete record?',
        showCloseIcon: true,
        isModal: true,
        closeOnEscape: false,
        buttons: [{
                click: deleteDlgBtnClick,
                buttonModel: { content: 'DELETE', cssClass: 'e-flat', isPrimary: false }
            },
            { click: deleteDlgBtnClick, buttonModel: { cssClass: 'e-flat', content: 'CANCEL' } }],
        width: '400px',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' }
    });
    deleteDialogObj.appendTo('#deleteDialog');
	