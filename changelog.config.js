module.exports = {
  disableEmoji: false,
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna'
  ],
  scopes: [],
  types: {
    chore: {
      description: '构建过程或辅助工具的更改',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: 'CI 相关的更改',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: '仅文档更改',
      emoji: '✏️',
      value: 'docs'
    },
    feat: {
      description: '新功能',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: '错误修复',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: '重构代码以提高性能',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: '代码变更，但没有修复错误或添加功能',
      emoji: '💡',
      value: 'refactor'
    },
    release: {
      description: '创建一个发布提交',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: '标记，空格，格式化，补全缺失的分号等等',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: '添加测试',
      emoji: '💍',
      value: 'test'
    }
  }
}
