import { Router } from 'express';

const listsRoutes = Router();

listsRoutes.get('/', async (_req, res) => {
  return res.status(200).json({
    availableLists: ['trakt'],
  });
});

listsRoutes.get('/trakt', async (_req, res) => {
  return res.status(200).json({
    traktLists: ['list1', 'list2'],
  });
});

listsRoutes.get('/trakt/:id', async (_req, res) => {
  return res.status(200).json({});
});

export default listsRoutes;
