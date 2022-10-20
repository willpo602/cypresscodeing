describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://product400-test.kg.plantdata.cn/sso/login')
    cy.get("#_login-inputPhone").type(15812345678)  //用户名15812345678
    cy.get("#_login-inputPwd").type("111111")   //密码AAAaaa111!
    cy.get(".login-btn").click()
    cy.url().should('include','kgms')   //设置登录断言，并判断如存在URL中有KGMS字样，即为成功

    cy.get('.create-graph').click()
    cy.get('.el-input__inner').type("测试0920新图谱")   //新建图谱，并取名为测试0920新图谱
    cy.get('.addGraph > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--default').click() //操作取消
    cy.get('.header-title').should('include.text','图谱探索')     //设置取消图谱断言，当取消成功后，页面展示图谱探索即为成功

    cy.get('.create-graph').click()
    cy.get('.el-input__inner').type("测试0920新图谱")   //新建图谱，并取名为测试0920新图谱
    cy.get('.addGraph > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary').click() //操作新建图谱
    cy.get('.graphTitle').should('include.text','测试0920新图谱')   //设置新建图谱断言，当新建成功后，页面展示测试0920新图谱即为成功
  })
})