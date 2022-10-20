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

    cy.contains('知识建模').click()
    cy.contains('属性分组').click()
    cy.get('.ic-add').click() //新建分组
    cy.get('.el-form-item__content > .el-input > .el-input__inner').type("测试分组")
    cy.get('.add-dialog > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary').click()
    cy.get('.group-list-item').should("include.text","测试分组")

    cy.get('.group-header-right > .el-button--primary').click()   //点选添加属性
    cy.get('.has-gutter > tr > .el-table_3_column_13 > .cell').click()  //点选添加全部
    cy.get('.edit-dialog > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--default').click()
    cy.wait(1000)
    cy.contains("暂无数据").should("include.text","暂无数据")


    cy.get('.group-header-right > .el-button--primary').click()   //点选添加属性
    cy.get('.has-gutter > tr > .el-table_3_column_13 > .cell').click()  //点选添加全部
    cy.get('.edit-dialog > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary').click()
    cy.wait(1000)
    cy.get('tbody > :nth-child(1) > .el-table_2_column_8 > .cell').should("include.text","性别")

    cy.get(':nth-child(1) > .el-table_2_column_12 > .cell > div > .remove-attr-btn').click()
    //cy.get('tbody > :nth-child(1) > .el-table_2_column_8 > .cell')
    cy.contains("性别").should('not.have.value',"性别")

    cy.get('.ic-edit').click()
    cy.get('.group-header-left-edit > .el-input > .el-input__inner').clear()
    cy.get('.group-header-left-edit > .el-button--default').click()
   // cy.get('.ic-edit').click()
    cy.get('.ic-edit').click()
    cy.get('.group-header-left-edit > .el-input > .el-input__inner').type("测试分组AA")
    cy.get('.group-header-left-edit > .el-button--default').click()
    cy.get('.group-list-item').should("include.text","测试分组")


    cy.get('.ic-edit').click()
    cy.get('.group-header-left-edit > .el-input > .el-input__inner').type("测试分组AA")
    cy.get('.group-header-left-edit > .el-button--primary').click()
    cy.get('.group-list-item').should("include.text","测试分组AA")

    cy.get('.group-header-right > :nth-child(3)').click()
    cy.get('.el-message-box__btns > :nth-child(1)').click()
    cy.get('.group-list-item').should("include.text","测试分组")

    cy.get('.group-header-right > :nth-child(3)').click()
    cy.get('.el-message-box__btns > .el-button--primary').click()
    cy.get('.group-list-item').should('not.have.value',"测试分组AA")

  })
})