---
layout: post
title: Getting started with ##Platform_Name## Grid control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Grid control

This section explains you the steps required to create a simple Essential JS 2 Grid and demonstrate the basic usage of the Grid control in a JavaScript application.

## Dependencies

Following is the list of dependencies to use the grid with all features.

```javascript
|-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-excel-export
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-notifications
```

## Setup for local environment

Refer the following steps for setup your local environment.

**Step 1:** Create a root folder **myapp** for your application.

**Step 2:** Create **myapp/resources** folder to store local scripts and styles files.

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing Essential JS 2 Grid control.

## Adding Syncfusion resources

The Essential JS 2 Grid control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the grid and its dependencies scripts and style file into the **resources/scripts** and **resources/styles** folder.

Refer the below code to find location grid's script and style file.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-grids/dist/global/ej2-grids.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-grids/styles/material.css`

After copying the files, then you can refer the grid's scripts and styles into the `index.html` file.
The below html code example shows the minimal dependency of grid.

```html

  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Grid</title>
            <!-- Essential JS 2 Grid's dependent material theme -->
            <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Grid's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Grid's global script -->
            <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN link for script and style

Using CDN link, you can directly refer the grid control's script and style into the `index.html`.

Refer the grid's CDN links as below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js`](http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css)

The below html code example shows the minimal dependency of grid.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Grid</title>
            <!-- Essential JS 2 Grid's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Grid's dependent script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Grid's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Grid control

Now, you can start adding Grid control in the application. For getting started, add a **div** element for Grid control in **index.html**. Then refer the **index.js** file into the **index.html** file.

In this document context we are going to use **ej2.min.js** which includes all the Essential JS 2 components and its dependent scripts.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Grid</title>
            <!-- Essential JS 2 Grid's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for grid  -->
             <div id="Grid"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following grid code in the **index.js**.

```javascript

var grid = new ej.grids.Grid();
grid.appendTo('#Grid');

```

## Defining Row Data

Data for the Grid control is bind by using [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#datasource) property. It accepts either array of JavaScript object or [`DataManager`](https://ej2.syncfusion.com/javascript/documentation/grid/data-binding/data-binding) instance.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Grid</title>
            <!-- Essential JS 2 Grid's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for grid  -->
             <div id="Grid"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following grid code in the **index.js**.

```javascript
var data = [{ OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5) },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, OrderDate: new Date(836505e6) },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, OrderDate: new Date(8367642e5) },
            { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, OrderDate: new Date(8368506e5) },
            { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3,  OrderDate: new Date(8367642e5) },
            { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, OrderDate: new Date(836937e6) },
            { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, OrderDate: new Date(8370234e5) },
            { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, OrderDate: new Date(8371098e5) },
            { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97, OrderDate: new Date(837369e6) }];
var grid = new ej.grids.Grid({dataSource: data});
grid.appendTo('#Grid');

```

## Defining Columns

The Grid has an option to define columns as array. In these columns, we have properties to customize columns. Let’s check the properties used here:

* We have added [`field`](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#field) to map with a property name an array of JavaScript objects.
* We have added [`headerText`](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#headertext) to change the title of columns.
* We have used [`textAlign`](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#textalign) to change the alignment of columns. By default, columns will be left aligned. To change columns to right align, we need to define [`textAlign`](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#textalign) as **Right**.
* Also, we have used another useful property, [`format`](https://ej2.syncfusion.com/javascript/documentation/api/grid/column/#format). Using this, we can format number and date values to standard or custom formats. Here, we have defined it for the conversion of numeric values to currency.

```javascript
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});
grid.appendTo('#Grid');

```

## Module injection

To create grids with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* [`Page`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/page/) - Inject this module to use paging feature.
* [`Sort`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/sort/) - Inject this module to use sorting feature.
* [`Filter`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/filter/) - Inject this module to use filtering feature.
* [`Group`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/group/) - Inject this module to use grouping feature.
* **ExcelExport** - Inject this module to use Excel export feature.
* **PdfExport** - Inject this module to use PDF export feature.

These modules should be injected into the grid using the **ej.grids.Grid.Inject** method.

> Additional feature modules are available [`here`](https://helpej2.syncfusion.com/javascript/documentation/api/grid/overview/).

## Enable paging

The paging feature enables users to view the grid record in a paged view. It can be enabled by setting the  [`allowPaging`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowpaging) property to true. Inject the [`Page`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#pagermodule)
 module as follows. If the [`Page`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#pagermodule) module is not injected, the pager will not be rendered in the grid. Pager can be customized using the [`pageSettings`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#pagesettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs128/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs128/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs128" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the  [`allowSorting`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowsorting) property as true. Inject the [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#sortmodule) module as follows. If [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#sortmodule) module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using the  [`sortSettings`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#sortsettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs129/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs129/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs129" %}

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowfiltering) property as true.  The [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#filtermodule) module has to be injected as follows. If [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#filtermodule) module is not injected,  filter bar will not be rendered in the grid. Filtering feature can be customized using the [`filterSettings`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#filtersettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs130/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs130/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs130" %}

## Enable grouping

The grouping feature enables users to view the grid record in a grouped view. It can be enabled by setting the [`allowGrouping`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#allowgrouping) property to true. The [`Group`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#groupmodule) module has to be injected as follows. If [`Group`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#groupmodule) module is not injected, the group drop area will not be rendered in the grid.Grouping feature can be customized using the [`groupSettings`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#groupsettings) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs131/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs131/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs131" %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential JS 2 Grid control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs132/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs132/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs132" %}

## Deploy the Application

The Essential JS 2 Grid control features are segregated into individual feature-wise modules. The [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and **CDN** scripts contains code for all features used in grid and hence we suggest to not to use them in production. We strongly recommend you to generate script files to use in production using our **Custom Resource Generator**[`(CRG)`](https://crg.syncfusion.com) for Essential JS 2. CRG will allow you to generate the bundled script for the currently enabled features in grid.

## See Also

* [How to display a table data after clicking Submit button in Javascript?](https://support.syncfusion.com/kb/article/10145/how-to-display-a-table-data-after-clicking-submit-button-in-javascript)
* [How to display table in popup window using Javascript?](https://support.syncfusion.com/kb/article/10339/how-to-display-table-in-popup-window-using-javascript)
* [How to open pdf document on button click inside a Grid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
* [How to disable the default keyboard actions in Grid](https://support.syncfusion.com/kb/article/9578/how-to-disable-the-default-keyboard-actions-in-js-grid)