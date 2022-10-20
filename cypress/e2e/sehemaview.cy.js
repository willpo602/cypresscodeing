const path = require("path");
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
    cy.contains('模式视图').click()

    cy.get('.left-container > .el-select > .el-input > .el-input__inner').click()
    cy
        .get(".el-select-dropdown__wrap.el-scrollbar__wrap").children('')
        .get('li:contains("竖版视图")').click()
    cy.contains("竖版视图").should("include.text","竖版视图")

    cy.contains("导出模式报告").click()
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, "\\测试0920新图谱图谱模式报告.doc")).should("exist");
    cy.get('.right-container > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret').click()
    cy.get('li:contains("关系可视化")').click()
    cy.contains("导出模式报告").click()
    const downloadsFolder1 = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder1, "\\测试0920新图谱图谱模式报告.doc")).should("exist");
    
  })
})