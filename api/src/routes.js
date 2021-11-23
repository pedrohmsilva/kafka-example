import { Router } from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = Router();

routes.post('/certification', async (req, res) => {
  const messageA = {
    user: { id: 1, name: 'Pedro' },
  };
  const messageB = {
    user: { id: 2, name: 'Teste' },
  };

  await req.producer.send({
    topic: 'issue-certificate',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(messageA) },
      { value: JSON.stringify(messageB) },
    ],
  });

  return res.json({
    success: true,
  });
});

export default routes;
