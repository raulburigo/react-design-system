module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'list',
        choices: ['atom', 'molecule'],
        name: 'category',
        message: 'What is your component category?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/lib/{{category}}s/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/lib/{{category}}s/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/Component.types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/lib/{{category}}s/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'plop-templates/Component.stories.tsx.hbs'
      },
      {
        type: 'append',
        path: 'src/lib/{{category}}s/index.ts',
        template: "export * from './{{pascalCase name}}'\n"
      }
    ]
  })
}
