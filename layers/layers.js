var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_reaCosechadaHaHuila2017_1 = new ol.format.GeoJSON();
var features_reaCosechadaHaHuila2017_1 = format_reaCosechadaHaHuila2017_1.readFeatures(json_reaCosechadaHaHuila2017_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaCosechadaHaHuila2017_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaCosechadaHaHuila2017_1.addFeatures(features_reaCosechadaHaHuila2017_1);var lyr_reaCosechadaHaHuila2017_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaCosechadaHaHuila2017_1, 
                style: style_reaCosechadaHaHuila2017_1,
    title: 'Área Cosechada (Ha) - Huila- 2017<br />\
    <img src="styles/legend/reaCosechadaHaHuila2017_1_0.png" />  4 - 87 <br />\
    <img src="styles/legend/reaCosechadaHaHuila2017_1_1.png" />  87 - 194 <br />\
    <img src="styles/legend/reaCosechadaHaHuila2017_1_2.png" />  194 - 350 <br />\
    <img src="styles/legend/reaCosechadaHaHuila2017_1_3.png" />  350 - 1070 <br />\
    <img src="styles/legend/reaCosechadaHaHuila2017_1_4.png" />  1070 - 2915 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_reaCosechadaHaHuila2017_1.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_reaCosechadaHaHuila2017_1];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_reaCosechadaHaHuila2017_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_reaCosechadaHaHuila2017_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_reaCosechadaHaHuila2017_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_reaCosechadaHaHuila2017_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});