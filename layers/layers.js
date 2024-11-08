var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kuburan_1 = new ol.format.GeoJSON();
var features_Kuburan_1 = format_Kuburan_1.readFeatures(json_Kuburan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_1.addFeatures(features_Kuburan_1);
var lyr_Kuburan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_1, 
                style: style_Kuburan_1,
                popuplayertitle: "Kuburan",
                interactive: true,
                title: '<img src="styles/legend/Kuburan_1.png" /> Kuburan'
            });
var format_BatasRT_2 = new ol.format.GeoJSON();
var features_BatasRT_2 = format_BatasRT_2.readFeatures(json_BatasRT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_2.addFeatures(features_BatasRT_2);
var lyr_BatasRT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_2, 
                style: style_BatasRT_2,
                popuplayertitle: "Batas RT",
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_2_0.png" /> RT 001/ RW 002<br />\
    <img src="styles/legend/BatasRT_2_1.png" /> RT 002/002<br />\
    <img src="styles/legend/BatasRT_2_2.png" /> RT 003/ RW 002<br />\
    <img src="styles/legend/BatasRT_2_3.png" /> RT 004 / RW 004<br />\
    <img src="styles/legend/BatasRT_2_4.png" /> RT 001 / RW 003<br />\
    <img src="styles/legend/BatasRT_2_5.png" /> RT 002/ RW 003<br />\
    <img src="styles/legend/BatasRT_2_6.png" /> RT 003/ RW 003<br />\
    <img src="styles/legend/BatasRT_2_7.png" /> RT 001 / RW 004<br />\
    <img src="styles/legend/BatasRT_2_8.png" /> RT 002 / RW 004<br />\
    <img src="styles/legend/BatasRT_2_9.png" /> RT 003 / RW 004<br />\
    <img src="styles/legend/BatasRT_2_10.png" /> RT 001 / RW 009<br />\
    <img src="styles/legend/BatasRT_2_11.png" /> RT 001 / RW 010<br />\
    <img src="styles/legend/BatasRT_2_12.png" /> RT 003 / RW 009<br />\
    <img src="styles/legend/BatasRT_2_13.png" /> RT 002 / RW 009<br />\
    <img src="styles/legend/BatasRT_2_14.png" /> RT 002 / RW 010<br />\
    <img src="styles/legend/BatasRT_2_15.png" /> RT 003 / RW 010<br />\
    <img src="styles/legend/BatasRT_2_16.png" /> RT 002 / RW 006<br />\
    <img src="styles/legend/BatasRT_2_17.png" /> RT 003 / RW 006<br />\
    <img src="styles/legend/BatasRT_2_18.png" /> RT 001 / RW 008<br />\
    <img src="styles/legend/BatasRT_2_19.png" /> RT 002/ RW 008<br />\
    <img src="styles/legend/BatasRT_2_20.png" /> RT 003 / RW 007<br />\
    <img src="styles/legend/BatasRT_2_21.png" /> RT 001 / RW 002<br />\
    <img src="styles/legend/BatasRT_2_22.png" /> RT 002 / RW 007<br />\
    <img src="styles/legend/BatasRT_2_23.png" /> RT 003 / RW 008<br />\
    <img src="styles/legend/BatasRT_2_24.png" /> RT 001 / RW 005<br />\
    <img src="styles/legend/BatasRT_2_25.png" /> RT 002 / RW 001<br />\
    <img src="styles/legend/BatasRT_2_26.png" /> RT 003 / RW 001<br />\
    <img src="styles/legend/BatasRT_2_27.png" /> RT 002 / rw 011<br />\
    <img src="styles/legend/BatasRT_2_28.png" /> RT 003 / RW 011<br />\
    <img src="styles/legend/BatasRT_2_29.png" /> RT 005 / RW 005<br />\
    <img src="styles/legend/BatasRT_2_30.png" /> RT 001 / RW 006<br />\
    <img src="styles/legend/BatasRT_2_31.png" /> RT 002 / RW 005<br />\
    <img src="styles/legend/BatasRT_2_32.png" /> RT 004 / RW 005<br />\
    <img src="styles/legend/BatasRT_2_33.png" /> RT 004 / RW 011<br />\
    <img src="styles/legend/BatasRT_2_34.png" /> RT 005 / RW 011<br />\
    <img src="styles/legend/BatasRT_2_35.png" /> Rt 001 / RW 011<br />\
    <img src="styles/legend/BatasRT_2_36.png" /> RT 004 / RW 001<br />\
    <img src="styles/legend/BatasRT_2_37.png" /> RT 03 / RT 001<br />\
    <img src="styles/legend/BatasRT_2_38.png" /> RT 005 / RW 001<br />\
    <img src="styles/legend/BatasRT_2_39.png" /> <br />'
        });
var format_Wilayah_Purwokerto_Wetan_poly_3 = new ol.format.GeoJSON();
var features_Wilayah_Purwokerto_Wetan_poly_3 = format_Wilayah_Purwokerto_Wetan_poly_3.readFeatures(json_Wilayah_Purwokerto_Wetan_poly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_Purwokerto_Wetan_poly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Purwokerto_Wetan_poly_3.addFeatures(features_Wilayah_Purwokerto_Wetan_poly_3);
var lyr_Wilayah_Purwokerto_Wetan_poly_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Purwokerto_Wetan_poly_3, 
                style: style_Wilayah_Purwokerto_Wetan_poly_3,
                popuplayertitle: "Wilayah_Purwokerto_Wetan_poly",
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Purwokerto_Wetan_poly_3.png" /> Wilayah_Purwokerto_Wetan_poly'
            });
var format_IRIGASI_LN_25K_4 = new ol.format.GeoJSON();
var features_IRIGASI_LN_25K_4 = format_IRIGASI_LN_25K_4.readFeatures(json_IRIGASI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRIGASI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRIGASI_LN_25K_4.addFeatures(features_IRIGASI_LN_25K_4);
var lyr_IRIGASI_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRIGASI_LN_25K_4, 
                style: style_IRIGASI_LN_25K_4,
                popuplayertitle: "IRIGASI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/IRIGASI_LN_25K_4.png" /> IRIGASI_LN_25K'
            });
var format_LahanKosongGrahaTimur_5 = new ol.format.GeoJSON();
var features_LahanKosongGrahaTimur_5 = format_LahanKosongGrahaTimur_5.readFeatures(json_LahanKosongGrahaTimur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanKosongGrahaTimur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanKosongGrahaTimur_5.addFeatures(features_LahanKosongGrahaTimur_5);
var lyr_LahanKosongGrahaTimur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanKosongGrahaTimur_5, 
                style: style_LahanKosongGrahaTimur_5,
                popuplayertitle: "Lahan Kosong Graha Timur",
                interactive: true,
                title: '<img src="styles/legend/LahanKosongGrahaTimur_5.png" /> Lahan Kosong Graha Timur'
            });
var format_LAPANGNMARSPURWOKERTOWETAN_6 = new ol.format.GeoJSON();
var features_LAPANGNMARSPURWOKERTOWETAN_6 = format_LAPANGNMARSPURWOKERTOWETAN_6.readFeatures(json_LAPANGNMARSPURWOKERTOWETAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAPANGNMARSPURWOKERTOWETAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAPANGNMARSPURWOKERTOWETAN_6.addFeatures(features_LAPANGNMARSPURWOKERTOWETAN_6);
var lyr_LAPANGNMARSPURWOKERTOWETAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAPANGNMARSPURWOKERTOWETAN_6, 
                style: style_LAPANGNMARSPURWOKERTOWETAN_6,
                popuplayertitle: "LAPANGN MARS PURWOKERTO WETAN",
                interactive: true,
                title: '<img src="styles/legend/LAPANGNMARSPURWOKERTOWETAN_6.png" /> LAPANGN MARS PURWOKERTO WETAN'
            });
var format_Jalan_7 = new ol.format.GeoJSON();
var features_Jalan_7 = format_Jalan_7.readFeatures(json_Jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_7.addFeatures(features_Jalan_7);
var lyr_Jalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_7, 
                style: style_Jalan_7,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_7.png" /> Jalan'
            });
var format_MasjiddiPwtWetan_8 = new ol.format.GeoJSON();
var features_MasjiddiPwtWetan_8 = format_MasjiddiPwtWetan_8.readFeatures(json_MasjiddiPwtWetan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjiddiPwtWetan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjiddiPwtWetan_8.addFeatures(features_MasjiddiPwtWetan_8);
var lyr_MasjiddiPwtWetan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjiddiPwtWetan_8, 
                style: style_MasjiddiPwtWetan_8,
                popuplayertitle: "Masjid di Pwt Wetan",
                interactive: true,
                title: '<img src="styles/legend/MasjiddiPwtWetan_8.png" /> Masjid di Pwt Wetan'
            });
var format_Mart_9 = new ol.format.GeoJSON();
var features_Mart_9 = format_Mart_9.readFeatures(json_Mart_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mart_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mart_9.addFeatures(features_Mart_9);
var lyr_Mart_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mart_9, 
                style: style_Mart_9,
                popuplayertitle: "Mart",
                interactive: true,
                title: '<img src="styles/legend/Mart_9.png" /> Mart'
            });
var format_Rumahsakit_10 = new ol.format.GeoJSON();
var features_Rumahsakit_10 = format_Rumahsakit_10.readFeatures(json_Rumahsakit_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahsakit_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahsakit_10.addFeatures(features_Rumahsakit_10);
var lyr_Rumahsakit_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahsakit_10, 
                style: style_Rumahsakit_10,
                popuplayertitle: "Rumah sakit",
                interactive: true,
                title: '<img src="styles/legend/Rumahsakit_10.png" /> Rumah sakit'
            });
var format_Gereja_11 = new ol.format.GeoJSON();
var features_Gereja_11 = format_Gereja_11.readFeatures(json_Gereja_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gereja_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gereja_11.addFeatures(features_Gereja_11);
var lyr_Gereja_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gereja_11, 
                style: style_Gereja_11,
                popuplayertitle: "Gereja ",
                interactive: true,
                title: '<img src="styles/legend/Gereja_11.png" /> Gereja '
            });
var format_BANK_12 = new ol.format.GeoJSON();
var features_BANK_12 = format_BANK_12.readFeatures(json_BANK_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANK_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_12.addFeatures(features_BANK_12);
var lyr_BANK_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANK_12, 
                style: style_BANK_12,
                popuplayertitle: "BANK",
                interactive: true,
                title: '<img src="styles/legend/BANK_12.png" /> BANK'
            });
var format_SEKOLAH_13 = new ol.format.GeoJSON();
var features_SEKOLAH_13 = format_SEKOLAH_13.readFeatures(json_SEKOLAH_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAH_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAH_13.addFeatures(features_SEKOLAH_13);
var lyr_SEKOLAH_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEKOLAH_13, 
                style: style_SEKOLAH_13,
                popuplayertitle: "SEKOLAH",
                interactive: true,
                title: '<img src="styles/legend/SEKOLAH_13.png" /> SEKOLAH'
            });
var format_PEMAKAMAN_14 = new ol.format.GeoJSON();
var features_PEMAKAMAN_14 = format_PEMAKAMAN_14.readFeatures(json_PEMAKAMAN_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMAKAMAN_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMAKAMAN_14.addFeatures(features_PEMAKAMAN_14);
var lyr_PEMAKAMAN_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMAKAMAN_14, 
                style: style_PEMAKAMAN_14,
                popuplayertitle: "PEMAKAMAN ",
                interactive: true,
                title: '<img src="styles/legend/PEMAKAMAN_14.png" /> PEMAKAMAN '
            });
var format_BrowniesAmandaPurwokwerto_15 = new ol.format.GeoJSON();
var features_BrowniesAmandaPurwokwerto_15 = format_BrowniesAmandaPurwokwerto_15.readFeatures(json_BrowniesAmandaPurwokwerto_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrowniesAmandaPurwokwerto_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrowniesAmandaPurwokwerto_15.addFeatures(features_BrowniesAmandaPurwokwerto_15);
var lyr_BrowniesAmandaPurwokwerto_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrowniesAmandaPurwokwerto_15, 
                style: style_BrowniesAmandaPurwokwerto_15,
                popuplayertitle: "Brownies Amanda Purwokwerto",
                interactive: true,
                title: '<img src="styles/legend/BrowniesAmandaPurwokwerto_15.png" /> Brownies Amanda Purwokwerto'
            });
var format_LapanganBola_16 = new ol.format.GeoJSON();
var features_LapanganBola_16 = format_LapanganBola_16.readFeatures(json_LapanganBola_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapanganBola_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganBola_16.addFeatures(features_LapanganBola_16);
var lyr_LapanganBola_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganBola_16, 
                style: style_LapanganBola_16,
                popuplayertitle: "Lapangan Bola",
                interactive: true,
                title: '<img src="styles/legend/LapanganBola_16.png" /> Lapangan Bola'
            });
var format_Perumahan_17 = new ol.format.GeoJSON();
var features_Perumahan_17 = format_Perumahan_17.readFeatures(json_Perumahan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perumahan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perumahan_17.addFeatures(features_Perumahan_17);
var lyr_Perumahan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perumahan_17, 
                style: style_Perumahan_17,
                popuplayertitle: "Perumahan",
                interactive: true,
                title: '<img src="styles/legend/Perumahan_17.png" /> Perumahan'
            });
var format_RumahRizqi_18 = new ol.format.GeoJSON();
var features_RumahRizqi_18 = format_RumahRizqi_18.readFeatures(json_RumahRizqi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRizqi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRizqi_18.addFeatures(features_RumahRizqi_18);
var lyr_RumahRizqi_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRizqi_18, 
                style: style_RumahRizqi_18,
                popuplayertitle: "Rumah Rizqi",
                interactive: true,
                title: '<img src="styles/legend/RumahRizqi_18.png" /> Rumah Rizqi'
            });
var format_Wilayah_Purwokerto_Wetan_point_19 = new ol.format.GeoJSON();
var features_Wilayah_Purwokerto_Wetan_point_19 = format_Wilayah_Purwokerto_Wetan_point_19.readFeatures(json_Wilayah_Purwokerto_Wetan_point_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_Purwokerto_Wetan_point_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Purwokerto_Wetan_point_19.addFeatures(features_Wilayah_Purwokerto_Wetan_point_19);
var lyr_Wilayah_Purwokerto_Wetan_point_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Purwokerto_Wetan_point_19, 
                style: style_Wilayah_Purwokerto_Wetan_point_19,
                popuplayertitle: "Wilayah_Purwokerto_Wetan_point",
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Purwokerto_Wetan_point_19.png" /> Wilayah_Purwokerto_Wetan_point'
            });
var format_ADMINISTRASIDESA_AR_25K_20 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_20 = format_ADMINISTRASIDESA_AR_25K_20.readFeatures(json_ADMINISTRASIDESA_AR_25K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_20.addFeatures(features_ADMINISTRASIDESA_AR_25K_20);
var lyr_ADMINISTRASIDESA_AR_25K_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_20, 
                style: style_ADMINISTRASIDESA_AR_25K_20,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_20.png" /> ADMINISTRASIDESA_AR_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kuburan_1.setVisible(true);lyr_BatasRT_2.setVisible(true);lyr_Wilayah_Purwokerto_Wetan_poly_3.setVisible(true);lyr_IRIGASI_LN_25K_4.setVisible(true);lyr_LahanKosongGrahaTimur_5.setVisible(true);lyr_LAPANGNMARSPURWOKERTOWETAN_6.setVisible(true);lyr_Jalan_7.setVisible(true);lyr_MasjiddiPwtWetan_8.setVisible(true);lyr_Mart_9.setVisible(true);lyr_Rumahsakit_10.setVisible(true);lyr_Gereja_11.setVisible(true);lyr_BANK_12.setVisible(true);lyr_SEKOLAH_13.setVisible(true);lyr_PEMAKAMAN_14.setVisible(true);lyr_BrowniesAmandaPurwokwerto_15.setVisible(true);lyr_LapanganBola_16.setVisible(true);lyr_Perumahan_17.setVisible(true);lyr_RumahRizqi_18.setVisible(true);lyr_Wilayah_Purwokerto_Wetan_point_19.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kuburan_1,lyr_BatasRT_2,lyr_Wilayah_Purwokerto_Wetan_poly_3,lyr_IRIGASI_LN_25K_4,lyr_LahanKosongGrahaTimur_5,lyr_LAPANGNMARSPURWOKERTOWETAN_6,lyr_Jalan_7,lyr_MasjiddiPwtWetan_8,lyr_Mart_9,lyr_Rumahsakit_10,lyr_Gereja_11,lyr_BANK_12,lyr_SEKOLAH_13,lyr_PEMAKAMAN_14,lyr_BrowniesAmandaPurwokwerto_15,lyr_LapanganBola_16,lyr_Perumahan_17,lyr_RumahRizqi_18,lyr_Wilayah_Purwokerto_Wetan_point_19,lyr_ADMINISTRASIDESA_AR_25K_20];
lyr_Kuburan_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BatasRT_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Wilayah_Purwokerto_Wetan_poly_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'name_fr': 'name_fr', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_IRIGASI_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LahanKosongGrahaTimur_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_LAPANGNMARSPURWOKERTOWETAN_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jalan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_MasjiddiPwtWetan_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Mart_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Rumahsakit_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Gereja_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BANK_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_SEKOLAH_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_PEMAKAMAN_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BrowniesAmandaPurwokwerto_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_LapanganBola_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Perumahan_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahRizqi_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Wilayah_Purwokerto_Wetan_point_19.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'name_fr': 'name_fr', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_ADMINISTRASIDESA_AR_25K_20.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kuburan_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BatasRT_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Wilayah_Purwokerto_Wetan_poly_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'name_fr': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_IRIGASI_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LahanKosongGrahaTimur_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_LAPANGNMARSPURWOKERTOWETAN_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jalan_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_MasjiddiPwtWetan_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Mart_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Rumahsakit_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Gereja_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BANK_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_SEKOLAH_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_PEMAKAMAN_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BrowniesAmandaPurwokwerto_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_LapanganBola_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Perumahan_17.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahRizqi_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Wilayah_Purwokerto_Wetan_point_19.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'name_fr': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_20.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Kuburan_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BatasRT_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Wilayah_Purwokerto_Wetan_poly_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'name_en': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'name_fr': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_IRIGASI_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LahanKosongGrahaTimur_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_LAPANGNMARSPURWOKERTOWETAN_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Jalan_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_MasjiddiPwtWetan_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Mart_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Rumahsakit_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Gereja_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BANK_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_SEKOLAH_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_PEMAKAMAN_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BrowniesAmandaPurwokwerto_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_LapanganBola_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Perumahan_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahRizqi_18.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Wilayah_Purwokerto_Wetan_point_19.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'name_en': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'name_fr': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_20.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});