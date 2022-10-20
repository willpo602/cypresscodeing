describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://product400-test.kg.plantdata.cn/sso/login',{timeout:30000})
    cy.viewport(1440, 1260)
    cy.get("#_login-inputPhone").type(15812345678)  //用户名15812345678
    cy.get("#_login-inputPwd").type("111111")   //密码AAAaaa111!
    cy.get(".login-btn").click()
    cy.url().should('include','kgms')   //设置登录断言，并判断如存在URL中有KGMS字样，即为成功

    cy.get('.ic-association-analysis').click()
    cy.get('.el-input__inner').type('测试0920新图谱')  //输入图谱名称测试0920新图谱
    cy.get('.graph-wrap > .el-radio-group > :nth-child(1)').click()
    cy.get('.right > .el-button').click()
    cy.get('.graphTitle').should('include.text','测试0920新图谱')   //设置切换图谱断言

    cy.contains('知识管理').click()
    cy.contains('实体编辑').click()
     cy.get('[title="人物"]').click()
     cy.contains("添加实体").click({force: true})

     cy.get(':nth-child(1) > .line-part1 > :nth-child(1) > .el-input__inner').type("张三")
     cy.get(':nth-child(1) > .line-part1 > :nth-child(2) > .el-input__inner').type("人物张三")

     cy.get(':nth-child(2) > .line-part1 > :nth-child(1) > .el-input__inner').type("李四")
     cy.get(':nth-child(2) > .line-part1 > :nth-child(2) > .el-input__inner').type("人物李四")

     cy.get('.el-dialog__body > :nth-child(1) > .el-button').click()
     cy.get('.el-dialog__body > :nth-child(2) > .el-button').click()

     cy.contains("继续添加").click()
     cy.contains("继续添加").click()
     cy.contains("继续添加").click()
     cy.contains("继续添加").click()

     cy.get(':nth-child(3) > .line-part1 > :nth-child(1) > .el-input__inner').type("王五")
     cy.get(':nth-child(3) > .line-part1 > :nth-child(2) > .el-input__inner').type("人物王五")

     cy.get(':nth-child(4) > .line-part1 > :nth-child(1) > .el-input__inner').type("钱四")
     cy.get(':nth-child(4) > .line-part1 > :nth-child(2) > .el-input__inner').type("人物钱四")

     cy.get(':nth-child(5) > .line-part1 > :nth-child(1) > .el-input__inner').type("周五")
     cy.get(':nth-child(5) > .line-part1 > :nth-child(2) > .el-input__inner').type("人物周五")

     cy.get(':nth-child(6) > .line-part1 > :nth-child(1) > .el-input__inner').type("赵六")
     cy.get(':nth-child(6) > .line-part1 > :nth-child(2) > .el-input__inner').type("人物赵六")

     cy.get('.el-dialog__body > :nth-child(3) > .el-button').click()
     cy.get('.el-dialog__body > :nth-child(4) > .el-button').click()
     cy.get('.el-dialog__body > :nth-child(5) > .el-button').click()
     cy.get('.el-dialog__body > :nth-child(6) > .el-button').click()

     cy.get('[style="z-index: 2004;"] > .el-dialog > .el-dialog__header > .el-dialog__headerbtn').click()
     cy.contains("张三").should("include.text","张三")
     cy.contains("李四").should("include.text","李四")
     cy.contains("王五").should("include.text","王五")
     cy.contains("钱四").should("include.text","钱四")
     cy.contains("周五").should("include.text","周五")
     cy.contains("赵六").should("include.text","赵六")
    ///以上操作为添加张三、李四、王五、钱四、周五、赵六六个实体信息

    cy.get('[title="学校"]').click()
    cy.contains("添加实体").click({force: true})

    cy.get(':nth-child(1) > .line-part1 > :nth-child(1) > .el-input__inner').type("1中")
    cy.get(':nth-child(2) > .line-part1 > :nth-child(1) > .el-input__inner').type("2中")
    cy.contains("继续添加").click()
    cy.contains("继续添加").click()
    cy.contains("继续添加").click()
    cy.contains("继续添加").click()
    cy.get(':nth-child(3) > .line-part1 > :nth-child(1) > .el-input__inner').type("3中")
    cy.get(':nth-child(4) > .line-part1 > :nth-child(1) > .el-input__inner').type("4中")
    cy.get(':nth-child(5) > .line-part1 > :nth-child(1) > .el-input__inner').type("5中")
    cy.get(':nth-child(6) > .line-part1 > :nth-child(1) > .el-input__inner').type("6中")
    cy.get('.el-dialog__body > :nth-child(1) > .el-button').click()
    cy.get('.el-dialog__body > :nth-child(2) > .el-button').click()
    cy.get('.el-dialog__body > :nth-child(3) > .el-button').click()
    cy.get('.el-dialog__body > :nth-child(4) > .el-button').click()
    cy.get('.el-dialog__body > :nth-child(5) > .el-button').click()
    cy.get('.el-dialog__body > :nth-child(6) > .el-button').click()
    cy.get('[style="z-index: 2012;"] > .el-dialog > .el-dialog__header > .el-dialog__headerbtn').click()
    cy.contains("1中").should("include.text","1中")
    cy.contains("2中").should("include.text","2中")
    cy.contains("3中").should("include.text","3中")
    cy.contains("4中").should("include.text","4中")
    cy.contains("5中").should("include.text","5中")
    cy.contains("6中").should("include.text","6中")
    ///以上操作为1中至6中所有的实体进行添加


    cy.get('[title="学校"]').click()
    cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_8 > .cell > .text-button--primary').click()
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').clear()
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').blur()
    cy.contains("名称不能为空").should("include.text","名称不能为空")
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("1中")
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').blur()
    cy.contains("1中").should("include.text","1中")


    cy.get(':nth-child(5) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("学校1中")
    cy.get(':nth-child(5) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').blur()
    cy.contains("学校1中").should("include.text","学校1中")

    cy.get('.input-content > .el-input > .el-input__inner').type("学校1,学校2")
    cy.get('.input-content > :nth-child(2) > .el-button').click()

    cy.get('.el-textarea__inner').type("这里面包含了学校哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈")
    cy.get('.imageUploadOrUrl > :nth-child(2)').click()  //切换为线上地址
    cy.get(':nth-child(5) > .el-input > .el-input__inner').type('https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF')
    cy.get('.imageUploadOrUrl > :nth-child(1)').click()

    cy.get('#reTag > .content > .instance-line-type-b-content > .el-button').click()
    cy.get('.el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type("哈哈哈11")
    cy.get('.instance-line-type-b-add-form-long > .el-input__inner').type("嘎嘎嘎")
    cy.get('.instance-line-type-b-add-area-btn > .ic-check-circle').click()
    cy.contains("私有属性").click()
    cy.get('.instance-editor-workspace-add-self-item-name > .el-input__inner').type("A")
    cy.get('.instance-editor-workspace-add-self-item-value > .el-input__inner').type("私有属性A")
    cy.contains("返回").click()
    cy.contains("学校1中").should("include.text","学校1中")
    //基于学校实体的修改


    cy.get('[title="人物"]').click()
    cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_8 > .cell > .text-button--primary').click()
    cy.get(':nth-child(1) > .content > .more-value-content > .el-input > .el-input__inner').type("男")
    // cy.get(':nth-child(2) > .content > .more-value-content > .el-input > .el-input__inner').type("工程师")
    // cy.get('el-button.el-button--default.el-button--small:contains("确定")').click()
    cy.contains("返回").click()
    //基于人物的修改

    cy.contains('关系编辑').click()
    cy.contains('实体编辑').click()

    cy.get('.kw-input > .el-input__inner').type("张三")
    cy.get('.meaningTag-input > .el-input__inner').type("AAA")
    cy.get('.left-content > .el-button').click()
    cy.contains("暂无数据").should("include.text","暂无数据")

    cy.get('.kw-input > .el-input__inner').clear()
    cy.get('.kw-input > .el-input__inner').type("张三")
    cy.get('.meaningTag-input > .el-input__inner').clear()
    cy.get('.meaningTag-input > .el-input__inner').type("人物张三")
    cy.get('.left-content > .el-button').click()
    cy.contains("张三").should("include.text","张三")

    cy.get('[title="人物"]').click()
    cy.get('.kw-input > .el-input__inner').clear()
    cy.get('.meaningTag-input > .el-input__inner').clear()
    cy.get('.el-switch__core').click()
    cy.get('.add-attr-filter').click()
    cy.get('.attr-select > .el-input > .el-input__inner').click()
    cy.get('[style="min-width: 120px; position: fixed; top: 302px; left: 640px; transform-origin: center top; z-index: 2006;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click()

    cy.get('.attr-type-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret').click()
    cy.get('[style="min-width: 100px; position: fixed; top: 302px; left: 774px; transform-origin: center top; z-index: 2008;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .selected').click()
    cy.get('.common-input > .el-input > .el-input__inner').type("男")
    cy.get('.button-content > .el-button--primary').click()
    cy.get('.left-content > .el-button').click()
    cy.contains("张三").should("include.text","张三")

  })
})