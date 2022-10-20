describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://product400-test.kg.plantdata.cn/sso/login',{timeout:30000})
    cy.viewport(1440, 1200)
    cy.get("#_login-inputPhone").type(15812345678)  //用户名15812345678
    cy.get("#_login-inputPwd").type("111111")   //密码AAAaaa111!
    cy.get(".login-btn").click()
    cy.url().should('include','kgms')   //设置登录断言，并判断如存在URL中有KGMS字样，即为成功

    cy.get('.ic-association-analysis').click()
    cy.get('.el-input__inner').type('测试0920新图谱')  //输入图谱名称测试0920新图谱
    cy.get('.graph-wrap > .el-radio-group > :nth-child(1)').click()
    cy.get('.right > .el-button').click()
    cy.get('.graphTitle').should('include.text','测试0920新图谱')   //设置切换图谱断言

    ///修改概念开始
    cy.contains('知识建模').click()
    cy.contains('模式定义').click()
    cy.get('[title="人物"]').click()
    cy.get('.el-button-group > :nth-child(1)').click()

    cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').clear()
    cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').blur()
    cy.contains("名称不能为空").should("include.text","名称不能为空");
    cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("人物")

    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').clear()
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').blur()
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("这个一个人物")
    ///唯一标识校验///
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("测试")
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').blur()  //鼠标失去焦点
    cy.contains("自动保存失败").should("include.text","自动保存失败");
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').clear()
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("people")

    cy.get('[style="margin-right: 8px;"] > .el-button').click()
    cy.contains("请输入同义词").should("include.text","请输入同义词");
    cy.get('[style="display: flex; align-items: center;"] > .el-input > .el-input__inner').type("aaa,bbb,ccc")
    cy.get('[style="margin-right: 8px;"] > .el-button').click()


    cy.get('.el-textarea__inner').type("测试这个是一个人物")
    cy.get('.el-textarea__inner').blur()

    cy
        .get(".el-upload-dragger").children().attachFile("1.png")
    cy.contains("返回").click()
    cy.get('[title="人物"]').should("include.text","人物")
  ////修改概念结束

  ///修改属性开始
    cy.get('[title="人物"]')
    cy.get(':nth-child(1) > .el-table_2_column_12 > .cell > .text-button--primary').click()
    cy.get(':nth-child(2) > :nth-child(2) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').clear()
    cy.contains("保存").click()
    cy.contains("名称不能为空").should("include.text","名称不能为空")
    cy.get(':nth-child(2) > :nth-child(2) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("性别")

    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .edit-item-input > .el-input__inner').type("sex")
    cy.contains("保存").click()
  ///修改属性结束
    cy.get('[style="padding-left: 0px;"] > [data-v-f99eacee=""] > [data-v-3d9249a3=""] > .custom-tree-node > :nth-child(2) > .el-button').click()
    //cy.get('.custom-tree-node > :nth-child(2) > .el-button').click()
    cy.get(':nth-child(1) > .line-part1 > :nth-child(1) > .el-input__inner').type("test")    //定义test概念
    cy.get('.el-dialog__body > :nth-child(1) > .el-button').click()//点选添加按钮

    cy.get('.add-concept-dialog > .el-dialog > .el-dialog__header > .el-dialog__headerbtn').click() //实体关闭按钮

    cy.get('[title="test"]').should('contain','test')   //检查概念存在test
    cy.get('[title="test"]').click()
    cy.contains("删除概念").click()
    cy.get('[title="test"]').should('not.exist')

  })
})