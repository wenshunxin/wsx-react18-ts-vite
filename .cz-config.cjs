'use strict'

module.exports = {
  types: [
    { value: 'feat✨ ', name: '特性: 一个新的特性' },
    { value: 'fix🐞 ', name: '修复: 修复一个Bug' },
    { value: 'docs📚 ', name: '文档: 变更的只有文档' },
    { value: 'style💅 ', name: '格式: 空格, 分号等格式修复' },
    { value: 'refactor🛠 ', name: '重构: 代码重构，注意和特性、修复区分开' },
    { value: 'perf🐎 ', name: '性能: 提升性能' },
    { value: 'test🏁', name: '测试: 添加一个测试' },
    { value: 'revert⏪', name: '回滚: 代码回退' },
    { value: 'chore🗯', name: '工具:开发工具变动(构建、脚手架工具等)' },
    { value: 'merge⌛', name: '合并:合并代码' },
    { value: 'build📦', name: '打包: 打包发布' },
    { value: 'ci🔧', name: '集成: 持续集成' },
    { value: 'release🚀 ', name: '发布: 发布新版本' },
    { value: 'other🌈', name: '其他: 其他改动， d比如构建流程, 依赖管理' }
  ],

  scopes: [],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '简要说明:\n',
    body: '详细说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],

  // limit subject length
  subjectLimit: 100
}
