module.exports = (camunda, services) => {
  camunda.subscribe('process.variables', async function ({ task, taskService }) {
    const vars = task.variables.getAll();

    console.log(vars, 'Process vars...');
    console.log('Setting vars ...');

    await services.camunda.setVars(task.processInstanceId, {
      c: { value: 'empty' }
    });

    await taskService.complete(task);
  });

  camunda.subscribe('receive.variables', async function ({ task, taskService }) {
    const vars = task.variables.getAll();

    console.log(vars, 'Receive vars...');

    await taskService.complete(task);
  });
};
