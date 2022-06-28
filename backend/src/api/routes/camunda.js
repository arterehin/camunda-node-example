module.exports = (router, services) => {
  router.get('/camunda/start', async (req, res) => {
    await services.camunda.start(
      'process.variables',
      JSON.stringify({
        variables: {
          a: { value: 'empty' },
          b: { value: 'empty' },
        },
      })
    );

    return res.status(200).send('OK');
  });
};
