ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.635991, 8.689253, 76.810818, 8.804292]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_varkala_1 = new ol.format.GeoJSON();
var features_varkala_1 = format_varkala_1.readFeatures(json_varkala_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_varkala_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varkala_1.addFeatures(features_varkala_1);
var lyr_varkala_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_varkala_1, 
                style: style_varkala_1,
                popuplayertitle: "varkala",
                interactive: false,
                title: '<img src="styles/legend/varkala_1.png" /> varkala'
            });
var format_Drainage_2 = new ol.format.GeoJSON();
var features_Drainage_2 = format_Drainage_2.readFeatures(json_Drainage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Drainage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainage_2.addFeatures(features_Drainage_2);
var lyr_Drainage_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainage_2, 
                style: style_Drainage_2,
                popuplayertitle: "Drainage",
                interactive: false,
    title: 'Drainage<br />\
    <img src="styles/legend/Drainage_2_0.png" /> 0<br />\
    <img src="styles/legend/Drainage_2_1.png" /> 1<br />\
    <img src="styles/legend/Drainage_2_2.png" /> 2<br />\
    <img src="styles/legend/Drainage_2_3.png" /> 3<br />\
    <img src="styles/legend/Drainage_2_4.png" /> 4<br />\
    <img src="styles/legend/Drainage_2_5.png" /> <br />'
        });
var format_Geomorphology_3 = new ol.format.GeoJSON();
var features_Geomorphology_3 = format_Geomorphology_3.readFeatures(json_Geomorphology_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Geomorphology_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_3.addFeatures(features_Geomorphology_3);
var lyr_Geomorphology_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_3, 
                style: style_Geomorphology_3,
                popuplayertitle: "Geomorphology",
                interactive: false,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_3_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/Geomorphology_3_1.png" /> Pediplain<br />\
    <img src="styles/legend/Geomorphology_3_2.png" /> Plateau<br />\
    <img src="styles/legend/Geomorphology_3_3.png" /> Water Body<br />'
        });
var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_4.addFeatures(features_Road_4);
var lyr_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                popuplayertitle: "Road",
                interactive: false,
                title: '<img src="styles/legend/Road_4.png" /> Road'
            });
var format_railway_5 = new ol.format.GeoJSON();
var features_railway_5 = format_railway_5.readFeatures(json_railway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_railway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_5.addFeatures(features_railway_5);
var lyr_railway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_5, 
                style: style_railway_5,
                popuplayertitle: "railway",
                interactive: false,
                title: '<img src="styles/legend/railway_5.png" /> railway'
            });
var format_Junctions_6 = new ol.format.GeoJSON();
var features_Junctions_6 = format_Junctions_6.readFeatures(json_Junctions_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Junctions_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junctions_6.addFeatures(features_Junctions_6);
var lyr_Junctions_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junctions_6, 
                style: style_Junctions_6,
                popuplayertitle: "Junctions",
                interactive: true,
                title: '<img src="styles/legend/Junctions_6.png" /> Junctions'
            });
var format_Location_7 = new ol.format.GeoJSON();
var features_Location_7 = format_Location_7.readFeatures(json_Location_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Location_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_7.addFeatures(features_Location_7);
var lyr_Location_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_7, 
                style: style_Location_7,
                popuplayertitle: "Location",
                interactive: true,
                title: '<img src="styles/legend/Location_7.png" /> Location'
            });

lyr_OSMStandard_0.setVisible(true);lyr_varkala_1.setVisible(true);lyr_Drainage_2.setVisible(true);lyr_Geomorphology_3.setVisible(true);lyr_Road_4.setVisible(true);lyr_railway_5.setVisible(true);lyr_Junctions_6.setVisible(true);lyr_Location_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_varkala_1,lyr_Drainage_2,lyr_Geomorphology_3,lyr_Road_4,lyr_railway_5,lyr_Junctions_6,lyr_Location_7];
lyr_varkala_1.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'type': 'type', });
lyr_Drainage_2.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_Geomorphology_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_railway_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Junctions_6.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_Location_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'image': 'image', 'varkala_data_x': 'varkala_data_x', 'varkala_data_y': 'varkala_data_y', });
lyr_varkala_1.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Drainage_2.set('fieldImages', {'ORDER1': 'Range', });
lyr_Geomorphology_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Road_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_railway_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Junctions_6.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_Location_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'image': 'ExternalResource', 'varkala_data_x': 'TextEdit', 'varkala_data_y': 'TextEdit', });
lyr_varkala_1.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Drainage_2.set('fieldLabels', {'ORDER1': 'no label', });
lyr_Geomorphology_3.set('fieldLabels', {'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Road_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_railway_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Junctions_6.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'inline label - always visible', 'District': 'no label', 'Name': 'no label', });
lyr_Location_7.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'image': 'no label', 'varkala_data_x': 'no label', 'varkala_data_y': 'no label', });
lyr_Location_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});