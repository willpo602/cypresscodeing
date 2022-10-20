describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://product400-test.kg.plantdata.cn/sso/login',{timeout:30000})
    cy.viewport(1024, 760)
    cy.get("#_login-inputPhone").type(15812345678)  //用户名15812345678
    cy.get("#_login-inputPwd").type("111111")   //密码AAAaaa111!
    cy.get(".login-btn").click()
    cy.url().should('include','kgms')   //设置登录断言，并判断如存在URL中有KGMS字样，即为成功

    cy.get('.ic-association-analysis').click()
    cy.get('.el-input__inner').type('测试0920新图谱')  //输入图谱名称测试0920新图谱
    cy.get('.graph-wrap > .el-radio-group > :nth-child(1)').click()
    cy.get('.right > .el-button').click()
    cy.get('.graphTitle').should('include.text','测试0920新图谱')   //设置切换图谱断言

    cy.contains('知识建模').click()
    cy.contains('模式定义').click()
    cy.get('[style="padding-left: 0px;"] > [data-v-f99eacee=""] > [data-v-3d9249a3=""] > .custom-tree-node > :nth-child(2) > .el-button').click()
    //cy.get('.custom-tree-node > :nth-child(2) > .el-button').click()
    cy.get(':nth-child(1) > .line-part1 > :nth-child(1) > .el-input__inner').type("人物")    //定义人物的概念
    cy.get(':nth-child(1) > .line-part1 > :nth-child(2) > .el-input__inner').type("这是一个人物哈哈哈")

    cy.get(':nth-child(2) > .line-part1 > :nth-child(1) > .el-input__inner').type("学校")
    cy.get(':nth-child(2) > .line-part1 > :nth-child(2) > .el-input__inner').type("这是一个学校哈哈哈")

    cy.get('.el-dialog__body > :nth-child(1) > .el-button').click()//点选添加按钮
    cy.get('.el-dialog__body > :nth-child(2) > .el-button').click()

    cy.get('.add-concept-dialog > .el-dialog > .el-dialog__header > .el-dialog__headerbtn').click() //实体关闭按钮

    cy.get('[title="人物"]').should('include.text','人物')   //检查概念存在人物
    cy.get('[title="学校"]').should('include.text','学校')   //检查概念存在学校

    cy.get('[title="人物"]').click()
    cy.contains('添加数值属性').click()
    cy.get(':nth-child(1) > .el-table_2_column_7 > .cell > .el-form > .el-form-item > .el-form-item__content > .el-input > .el-input__inner').type("姓别")  //设置属性
    cy.get(':nth-child(1) > .el-table_2_column_8 > .cell > .tag-input > .el-input__inner').type("鉴别男女")
    cy.get('tbody > :nth-child(1) > .el-table_2_column_11').click()

    cy.get(':nth-child(2) > .el-table_2_column_7 > .cell > .el-form > .el-form-item > .el-form-item__content > .el-input > .el-input__inner').type("职业")
    cy.get(':nth-child(2) > .el-table_2_column_8 > .cell > .tag-input > .el-input__inner').type("测试属性多值")
    cy.get(':nth-child(2) > .el-table_2_column_12').click() //勾选属性多值状况

    cy.contains('全部添加').click()

    cy.get(':nth-child(1) > .el-table_1_column_2 > .cell > .primary').should("include.text",'姓别')  //检查属性中包含姓别
    cy.get(':nth-child(2) > .el-table_1_column_2 > .cell > .primary').should("include.text","职业")

    cy.get('.custom-tree-node > [title="人物"]').click()
    cy.contains('添加对象属性').click()    //进行对象属性添加
    cy.get(':nth-child(1) > .el-table_3_column_14 > .cell > .el-form > .el-form-item > .el-form-item__content > .form-item-input > .el-input__inner').type("就读于")
    cy.get(':nth-child(1) > .el-table_3_column_15 > .cell > .tag-input > .el-input__inner').type("人物就读学院")
    cy.get(':nth-child(1) > .el-table_3_column_16 > .cell > .el-form > .el-form-item > .el-form-item__content > .el-cascader > .el-input > .el-input__inner').click()

    cy
        .get(".el-cascader-menu__wrap.el-scrollbar__wrap")
        .get(".el-scrollbar__view.el-cascader-menu__list")
        .get('.el-cascader-node__label:contains("人物")').siblings().click({ multiple: true , force: true})

    cy.get('.actionsBar > .el-button--primary').click()
    //cy.get(':nth-child(3) > .el-table_1_column_2 > .cell > .primary').should("include.text",'就读于')
    cy.contains('就读于').should("include.text",'就读于')    //校验对象属性中存在就读于属性

  })
})