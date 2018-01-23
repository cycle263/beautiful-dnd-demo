module.exports = {
    relationDatas: [
        {
            "dataKey": "labeled_file",
            "labelFlag": 0,
            "dataKeyDesc": "训练文件",
            "necessary": 1,
            "dataType": "txt",
            "step": "train"
        },
        {
            "dataKey": "static_eval_file",
            "labelFlag": 0,
            "dataKeyDesc": "静态评估文件",
            "necessary": 0,
            "dataType": "txt",
            "step": "evaluate"
        },
        {
            "dataKey": "upload_file",
            "labelFlag": 0,
            "dataKeyDesc": "上传数据专用",
            "necessary": 0,
            "dataType": "txt",
            "step": "train"
        },
        {
            "dataKey": "labeling_file",
            "labelFlag": 1,
            "dataKeyDesc": "训练打标文件",
            "necessary": 0,
            "dataType": "txt",
            "step": "train"
        },
        {
            "dataKey": "labeling_file",
            "labelFlag": 1,
            "dataKeyDesc": "评估打标文件",
            "necessary": 0,
            "dataType": "txt",
            "step": "evaluate"
        }
    ],
    whetherOpts: [{
        value: 1, label: '是'
    }, {
        value: 0, label: '否'
    }],
}