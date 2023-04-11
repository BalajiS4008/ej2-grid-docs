ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 267
});
grid.appendTo('#Grid');

