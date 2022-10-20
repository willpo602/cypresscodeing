Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

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

    cy.contains('知识管理').click()
    cy.contains('图谱查询').click()

    cy.get('.right-wrap > .el-button').click()
    cy.contains("张三").should("include.text","张三")
    //以上Cypher查询

    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner').click()
    cy.get('[style="min-width: 120px; position: absolute; top: 155px; left: 296px; transform-origin: center top; z-index: 2004;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click()
    cy.get('.right-wrap > .el-button').click({ multiple: true })
    cy.contains("赵六").should("include.text","赵六")
    //const downloadsFolder22 = Cypress.config("downloadsFolder");
  //  cy.readFile(path.join(downloadsFolder22, "\\sparql_default_user_graph_1835dd21bd7_1664261580455.xlsx")).should('contains','xls');
    ///以上为sparql查询

    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner').click()
    cy.get('[style="min-width: 120px; transform-origin: center top; z-index: 2006; position: absolute; top: 155px; left: 296px;"] > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(2)').click()
    cy.get('.kgql-input > .el-input > .el-input__inner').type('entity("张三")')
    cy.get('.right-wrap > .el-button').click({ multiple: true })
    cy.contains("人物张三").should("include.text","人物张三")
    ///以上为KGQL查询
    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner').click()
    cy.contains("GREMLIN").click()
    cy.get('.right-wrap > .el-button').click({ multiple: true })
    cy.contains("vertex").should("include.text","vertex")

    ///开始知识质量
    cy.contains('知识质量').click()
    cy.contains('图谱质量监测').click()
    cy.contains("12").should("include.text","12")


    cy.contains("离线质量计算").click()
    cy.get('.quality-compute-content > .el-button').click()
    cy.wait(5000)
    cy.get('.ic-refresh').click()
    cy.contains("43%").should("include.text","43%")

    ///整理对应PDF页面，并查看是否可用
    cy.contains('知识管理').click()
    cy.contains('导入导出').click()
    cy.contains('在线导入导出').click()
    cy.contains('RDF格式说明').click()
    //cy.url().should('include.text','RDF格式说明')
    ///以上在线导入导出下的RDF格式说明

    cy.visit("http://product400-test.kg.plantdata.cn/kgms/kg/main/apply/set")
    cy.contains("业务模型设置").click()
    cy.contains("接口文档").click()


    cy.visit("http://product400-test.kg.plantdata.cn/plugins/service/kgsas/#/home/default_user_graph_1835dd21bd7/list?pageNo=1")
    cy.get('.el-button--text > span').click()
    //以上为数据构图流程说明

    cy.visit("http://product400-test.kg.plantdata.cn/plugins/service/kgsas/#/home/default_user_graph_1835dd21bd7/errorData")
    cy.contains("错误数据说明").click()

    cy.visit("http://product400-test.kg.plantdata.cn/plugins/service/kgsas/#/home/default_user_graph_1835dd21bd7/conflictData")
    cy.contains("冲突数据说明").click()


  })
})