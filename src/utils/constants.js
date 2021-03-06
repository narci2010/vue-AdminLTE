/**
 * Created by liuwei on 2017/5/8.
 */
export default {
    api: 'http://localhost:8080/api',

    datatables: {
        dom: '<\'row\'<\'col-xs-8\'B><\'col-xs-4\'f>><\'row\'<\'col-xs-12\'tr>><\'row\'<\'col-xs-3\'l><\'col-xs-3\'i><\'col-xs-6\'p>>',
        editor: {
            i18n: {
                zh_CN: {
                    create: {
                        button: '创建',
                        title: '<h3>创建</h3>',
                        submit: '确定'
                    },

                    edit: {
                        button: '编辑',
                        title: '<h3>编辑</h3>',
                        submit: '确定'
                    },

                    remove: {
                        button: '删除',
                        title: '<h3>删除</h3>',
                        submit: '确定',
                        confirm: {
                            _: '是否确定删除所选中的%d条记录？',
                            1: '是否确定删除所选中的1条记录？'
                        }
                    },

                    error: {
                        system: '系统内部出错'
                    },

                    multi: {
                        title: '多个值',
                        info: '所选中的项目包含多个不同值，要将这些值修改为相同值，请点击此处，否则这些值将保持不变。',
                        restore: '撤销更改',
                        noMulti: '该输入框可以单独编辑，但不是组的一部分。'
                    },

                    datetime: {
                        previous: '上一页',
                        next: '下一页',
                        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
                        amPm: ['上午', '下午'],
                        unknown: '-'
                    }
                }
            }
        }
    }
}
