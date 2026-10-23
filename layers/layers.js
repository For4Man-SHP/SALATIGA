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
var format_SUNGAI_2 = new ol.format.GeoJSON();
var features_SUNGAI_2 = format_SUNGAI_2.readFeatures(json_SUNGAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_2.addFeatures(features_SUNGAI_2);
var lyr_SUNGAI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_2, 
                style: style_SUNGAI_2,
                popuplayertitle: 'SUNGAI',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_2.png" /> SUNGAI'
            });
var format_INDUSTRI_AR_25K_3 = new ol.format.GeoJSON();
var features_INDUSTRI_AR_25K_3 = format_INDUSTRI_AR_25K_3.readFeatures(json_INDUSTRI_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDUSTRI_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDUSTRI_AR_25K_3.addFeatures(features_INDUSTRI_AR_25K_3);
var lyr_INDUSTRI_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDUSTRI_AR_25K_3, 
                style: style_INDUSTRI_AR_25K_3,
                popuplayertitle: 'INDUSTRI_AR_25K',
                interactive: true,
                title: '<img src="styles/legend/INDUSTRI_AR_25K_3.png" /> INDUSTRI_AR_25K'
            });
var format_PEMERINTAHAN_4 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_4 = format_PEMERINTAHAN_4.readFeatures(json_PEMERINTAHAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_4.addFeatures(features_PEMERINTAHAN_4);
var lyr_PEMERINTAHAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_4, 
                style: style_PEMERINTAHAN_4,
                popuplayertitle: 'PEMERINTAHAN',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_4.png" /> PEMERINTAHAN'
            });
var format_PERMUKIMAN_5 = new ol.format.GeoJSON();
var features_PERMUKIMAN_5 = format_PERMUKIMAN_5.readFeatures(json_PERMUKIMAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMAN_5.addFeatures(features_PERMUKIMAN_5);
var lyr_PERMUKIMAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMUKIMAN_5, 
                style: style_PERMUKIMAN_5,
                popuplayertitle: 'PERMUKIMAN',
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMAN_5.png" /> PERMUKIMAN'
            });
var format_PERUMAHAN_6 = new ol.format.GeoJSON();
var features_PERUMAHAN_6 = format_PERUMAHAN_6.readFeatures(json_PERUMAHAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERUMAHAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERUMAHAN_6.addFeatures(features_PERUMAHAN_6);
var lyr_PERUMAHAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERUMAHAN_6, 
                style: style_PERUMAHAN_6,
                popuplayertitle: 'PERUMAHAN',
                interactive: true,
                title: '<img src="styles/legend/PERUMAHAN_6.png" /> PERUMAHAN'
            });
var format_JALANLN_7 = new ol.format.GeoJSON();
var features_JALANLN_7 = format_JALANLN_7.readFeatures(json_JALANLN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANLN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANLN_7.addFeatures(features_JALANLN_7);
var lyr_JALANLN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANLN_7, 
                style: style_JALANLN_7,
                popuplayertitle: 'JALAN LN',
                interactive: true,
                title: '<img src="styles/legend/JALANLN_7.png" /> JALAN LN'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_BatasAdministrasiKecamatanKotaSalatiga_1.setVisible(true);lyr_SUNGAI_2.setVisible(true);lyr_INDUSTRI_AR_25K_3.setVisible(true);lyr_PEMERINTAHAN_4.setVisible(true);lyr_PERMUKIMAN_5.setVisible(true);lyr_PERUMAHAN_6.setVisible(true);lyr_JALANLN_7.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_BatasAdministrasiKecamatanKotaSalatiga_1,lyr_SUNGAI_2,lyr_INDUSTRI_AR_25K_3,lyr_PEMERINTAHAN_4,lyr_PERMUKIMAN_5,lyr_PERUMAHAN_6,lyr_JALANLN_7];
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'pdrb': 'pdrb', 'prddd': 'prddd', 'height': 'height', 'pdrbb': 'pdrbb', 'Legenda': 'Legenda', });
lyr_SUNGAI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Length': 'SHAPE_Length', });
lyr_INDUSTRI_AR_25K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'LUAS': 'LUAS', 'KLSBBK': 'Kelas Menurut Bahan', 'KLSTKI': 'Kelas Menurut Pekerja', 'KLSPRD': 'Kelas Menurut Produk', 'KLSBMT': 'Kelas Menurut Bahan Mentah', 'KLSLOK': 'Kelas Menurut Lokasi Bisnis', 'KLSPRO': 'Kelas Menurut Proses', 'KLSKOM': 'Kelas Menurut Komoditas', 'KLSMOD': 'Kelas Menurut Modal', 'KLSJNS': 'Tipe Zona Industri', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'SRS_ID': 'Spatial Reference System Identifier', 'METADATA': 'METADATA', 'ALMIND': 'Alamat Industri', 'ANCIND': 'Anchor Industri', 'FOKIND': 'Fokus Industri', 'KLSKBLI': 'KLSKBLI', 'NIZLOK': 'Nomor Izin Lokasi', 'NOIUKI': 'Nomor Izin Usaha Kawasan Industri', 'PNGLOL': 'Pengelola', 'SKWIND': 'SKWIND', 'LAYERa': 'LAYERa', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'FGSFNP': 'FGSFNP', });
lyr_PERMUKIMAN_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PERUMAHAN_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JKK': 'JKK', 'JMLHUNI': 'JMLHUNI', 'JUNIT': 'JUNIT', 'STHUNI': 'STHUNI', 'STSKTN': 'STSKTN', 'JNSPRM': 'JNSPRM', 'BTKPRM': 'BTKPRM', 'THNOBJ': 'THNOBJ', 'LAYER': 'LAYER', 'LAYERa': 'LAYERa', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALANLN_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Length': 'SHAPE_Length', });
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'pdrb': 'TextEdit', 'prddd': 'TextEdit', 'height': 'TextEdit', 'pdrbb': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_SUNGAI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'Range', 'DMAX': 'TextEdit', 'FNGAIR': 'Range', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'LTKSGI': 'Range', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'Range', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_INDUSTRI_AR_25K_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUAS': '', 'KLSBBK': 'ValueMap', 'KLSTKI': 'ValueMap', 'KLSPRD': 'ValueMap', 'KLSBMT': 'ValueMap', 'KLSLOK': 'ValueMap', 'KLSPRO': 'ValueMap', 'KLSKOM': 'ValueMap', 'KLSMOD': 'ValueMap', 'KLSJNS': 'ValueMap', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'ALMIND': '', 'ANCIND': '', 'FOKIND': '', 'KLSKBLI': 'ValueMap', 'NIZLOK': '', 'NOIUKI': '', 'PNGLOL': '', 'SKWIND': 'ValueMap', 'LAYERa': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_PEMERINTAHAN_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSFNP': '', });
lyr_PERMUKIMAN_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'LAYER': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_PERUMAHAN_6.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JKK': '', 'JMLHUNI': '', 'JUNIT': '', 'STHUNI': '', 'STSKTN': '', 'JNSPRM': '', 'BTKPRM': '', 'THNOBJ': '', 'LAYER': '', 'LAYERa': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_JALANLN_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'DateTime', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Length': 'TextEdit', });
lyr_BatasAdministrasiKecamatanKotaSalatiga_1.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', 'pdrb': 'no label', 'prddd': 'no label', 'height': 'no label', 'pdrbb': 'no label', 'Legenda': 'no label', });
lyr_SUNGAI_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Length': 'no label', });
lyr_INDUSTRI_AR_25K_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUAS': 'no label', 'KLSBBK': 'no label', 'KLSTKI': 'no label', 'KLSPRD': 'no label', 'KLSBMT': 'no label', 'KLSLOK': 'no label', 'KLSPRO': 'no label', 'KLSKOM': 'no label', 'KLSMOD': 'no label', 'KLSJNS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'ALMIND': 'no label', 'ANCIND': 'no label', 'FOKIND': 'no label', 'KLSKBLI': 'no label', 'NIZLOK': 'no label', 'NOIUKI': 'no label', 'PNGLOL': 'no label', 'SKWIND': 'no label', 'LAYERa': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMERINTAHAN_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'FGSFNP': 'no label', });
lyr_PERMUKIMAN_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_PERUMAHAN_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'hidden field', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JKK': 'no label', 'JMLHUNI': 'no label', 'JUNIT': 'no label', 'STHUNI': 'no label', 'STSKTN': 'no label', 'JNSPRM': 'no label', 'BTKPRM': 'no label', 'THNOBJ': 'no label', 'LAYER': 'no label', 'LAYERa': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALANLN_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Length': 'no label', });
lyr_JALANLN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});