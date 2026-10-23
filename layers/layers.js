var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasiKecamatanKotaSalatiga_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatanKotaSalatiga_1 = format_BatasAdministrasiKecamatanKotaSalatiga_1.readFeatures(json_BatasAdministrasiKecamatanKotaSalatiga_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatanKotaSalatiga_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatanKotaSalatiga_1.addFeatures(features_BatasAdministrasiKecamatanKotaSalatiga_1);
var lyr_BatasAdministrasiKecamatanKotaSalatiga_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatanKotaSalatiga_1, 
                style: style_BatasAdministrasiKecamatanKotaSalatiga_1,
                popuplayertitle: 'Batas Administrasi Kecamatan Kota Salatiga',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatanKotaSalatiga_1.png" /> Batas Administrasi Kecamatan Kota Salatiga'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_BatasAdministrasiKecamatanKotaSalatiga_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_BatasAdministrasiKecamatanKotaSalatiga_1];
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'pdrb': 'pdrb', 'prddd': 'prddd', 'height': 'height', 'pdrbb': 'pdrbb', 'Legenda': 'Legenda', });
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'pdrb': 'TextEdit', 'prddd': 'TextEdit', 'height': 'TextEdit', 'pdrbb': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', 'pdrb': 'no label', 'prddd': 'no label', 'height': 'no label', 'pdrbb': 'no label', 'Legenda': 'no label', });
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});