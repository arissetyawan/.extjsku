/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Desktop.GridWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer'
    ],

    id:'grid-win',

    init : function(){
        this.launcher = {
            text: 'Daftar Nilai...',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('grid-win');
        if(!win){
            win = desktop.createWindow({
                id: 'grid-win',
                title:'Daftar Nilai Kelas Pemrograman Komputer 1 - Java SDK',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [
                    {
                        border: false,
                        xtype: 'grid',
                        store: new Ext.data.ArrayStore({
                            fields: [
                               { name: 'nim' },
                               { name: 'nama' },
                               { name: 'kelas' },
                               { name: 'tugas1', type: 'float' },
                               { name: 'tugas2', type: 'float' },
                               { name: 'tugas3', type: 'float' },
                               { name: 'uts', type: 'float' },
                               { name: 'presensi', type: 'float' },
                               { name: 'uas', type: 'float' },
                               { name: 'nilaiAkhir', type: 'float' }
                            ],
                            data: Desktop.GridWindow.getDummyData()
                        }),
                        columns: [
                            new Ext.grid.RowNumberer(),
                            {
                                text: "NIM",
                                width: 170,
                                sortable: true,
                                dataIndex: 'nim'
                            },
                            {
                                text: "Nama",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'nama'
                            },
                            {
                                text: "Kelas",
                                width: 70,
                                sortable: true,
                                dataIndex: 'kelas'
                            },
                            {
                                text: "Tugas 1",
                                width: 70,
                                sortable: true,
                                dataIndex: 'tugas1'
                            },
                            {
                                text: "Tugas 2",
                                width: 70,
                                sortable: true,
                                dataIndex: 'tugas2'
                            },
                            {
                                text: "Tugas 3",
                                width: 70,
                                sortable: true,
                                dataIndex: 'tugas3'
                            },
                            {
                                text: "UTS",
                                width: 70,
                                sortable: true,
                                dataIndex: 'uts'
                            },
                            {
                                text: "Presensi",
                                width: 70,
                                sortable: true,
                                dataIndex: 'uts'
                            },
                            {
                                text: "UAS",
                                width: 70,
                                sortable: true,
                                dataIndex: 'uts'
                            },
                            {
                                text: "Nilai Akhir",
                                width: 70,
                                sortable: true,
                                dataIndex: 'uts'
                            }
                        ]
                    }
                ]/*,
                tbar:[{
                    text:'Add Something',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Modify options',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]*/
            });
        }
        return win;
    },

    statics: {
        getDummyData: function () {
            return [
                ['111100011','Sukarno','3C',40,11,23,80,20,10,88]
            ];
        }
    }
});

